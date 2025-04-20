import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import TechSphere from './3d/TechSphere';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      heroRef.current.style.setProperty('--mouse-x', `${x * 20}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y * 20}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-dark-800 dark:to-dark-900"
      style={{
        backgroundPosition: 'var(--mouse-x, 0) var(--mouse-y, 0)',
        transition: 'background-position 0.1s ease-out',
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.03] dark:opacity-[0.05]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            <span className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Full Stack Developer
            </span>
          
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Bringing <span className="text-primary-600 dark:text-primary-400">Ideas to Life</span> Ideas to Life
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Hi, I'm Suraj Kumar Singh. Motivated Full-Stack Developer with hands-on experience in web development and deep learning, blending tech and design through innovative projects.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
              >
                Get in Touch
              </motion.a>
              
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-dark-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 font-medium rounded-lg transition-all duration-300 inline-flex items-center"
              >
                View Projects
              </motion.a>
            </div>

            <div className="flex items-center space-x-4 mt-10 justify-center lg:justify-start">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
               href="https://www.linkedin.com/in/suraj-kumar-singh-sks"
               target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
              {/* <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </motion.a> */}
            </div>
          </motion.div>
          
          <motion.div 
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="lg:w-1/2 w-full aspect-square relative max-w-[500px] mx-auto"
>
  <TechSphere />
</motion.div>

        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1 
            }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;