import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  // Create a simple sphere with custom shaders
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float uTime;
    
    void main() {
      vUv = uv;
      
      // Add some movement to the vertices
      vec3 pos = position;
      pos.y += sin(pos.x * 2.0 + uTime) * 0.1;
      pos.x += cos(pos.y * 2.0 + uTime) * 0.1;
      
      vPosition = pos;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;
  
  const fragmentShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    
    void main() {
      // Create a gradient based on position
      vec3 color = mix(uColor1, uColor2, sin(vPosition.x * 3.0 + vPosition.y * 2.0 + uTime * 0.5) * 0.5 + 0.5);
      
      // Add a grid pattern
      float grid = step(0.98, sin(vUv.x * 40.0) * sin(vUv.y * 40.0));
      color = mix(color, vec3(1.0), grid * 0.2);
      
      // Add some glow based on position
      float glow = abs(sin(uTime * 0.5)) * 0.5 + 0.5;
      color += vec3(0.2, 0.4, 1.0) * glow;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;
  
  useFrame(({clock}) => {
    if (meshRef.current && materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      
      // Rotate the sphere
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
    }
    
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <shaderMaterial 
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTime: { value: 0 },
            uColor1: { value: new THREE.Color(0x4338ca) }, // primary-700
            uColor2: { value: new THREE.Color(0x14b8a6) }  // secondary-500
          }}
        />
      </mesh>
      
      {/* Add some floating particles around the sphere */}
      {Array.from({ length: 100 }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const radius = 2.5 + Math.random() * 1.5;
        const y = (Math.random() - 0.5) * 4;
        
        return (
          <mesh 
            key={i} 
            position={[
              Math.sin(angle) * radius,
              y,
              Math.cos(angle) * radius
            ]}
            scale={0.02 + Math.random() * 0.03}
          >
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial 
              color={
                Math.random() > 0.7 
                  ? new THREE.Color(0x22c55e) // success-500
                  : Math.random() > 0.5 
                    ? new THREE.Color(0x6366f1) // primary-500
                    : new THREE.Color(0xf97316) // accent-500
              }
            />
          </mesh>
        );
      })}
    </group>
  );
};

const TechSphere: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.5} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
};

export default TechSphere;