import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, PerspectiveCamera } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import * as THREE from 'three';

interface Skill {
  name: string;
  level: number;
  category: string[];
  icon: string;
}

interface SkillsChartProps {
  skills: Skill[];
}

const SkillBar = ({ skill, index, total }: { skill: Skill; index: number; total: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Calculate position based on index and total number of skills
  const angle = (index / total) * Math.PI * 2;
  const radius = 5;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  
  // Ensure skill level is a valid number between 0 and 100
  const safeLevel = typeof skill.level === 'number' && !isNaN(skill.level) 
    ? Math.max(0, Math.min(100, skill.level)) 
    : 0;
  
  // Map skill level to height with validation
  const height = (safeLevel / 100) * 3;
  
  // Spring animation for bars
  const { y } = useSpring({
    from: { y: 0 },
    to: { y: height },
    delay: index * 100,
    config: { tension: 100, friction: 20 },
  });
  
  // Generate a color based on skill level
  const color = new THREE.Color().setHSL(safeLevel / 360, 0.8, 0.5);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group position={[x, 0, z]}>
      {/* Use a regular mesh for the base */}
      <a.mesh 
        ref={meshRef}
        position-y={y.to(val => Math.max(0.01, val / 2))} // Ensure minimum positive value
      >
        <a.boxGeometry args={[0.5, y.to(val => Math.max(0.01, val)), 0.5]} /> 
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </a.mesh>
      
      <Text
        position={[0, -0.5, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI - angle]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {skill.name}
      </Text>
      
      <Text
        position={[0, height + 0.3, 0]}
        rotation={[0, Math.PI - angle, 0]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {`${safeLevel}%`}
      </Text>
    </group>
  );
};

const SkillsVisualization = ({ skills }: { skills: Skill[] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Center platform */}
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[5.5, 5.5, 0.2, 36]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Grid helper for visual reference */}
      <gridHelper args={[20, 20, "#666666", "#444444"]} />
      
      {/* Skill bars */}
      {skills.map((skill, i) => (
        <SkillBar key={skill.name} skill={skill} index={i} total={skills.length} />
      ))}
    </group>
  );
};

const SkillsChart: React.FC<SkillsChartProps> = ({ skills }) => {
  return (
    <Canvas dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 6, 10]} />
      <color attach="background" args={['#111']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[0, 10, 0]} intensity={0.5} />
      
      <SkillsVisualization skills={skills} />
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default SkillsChart;