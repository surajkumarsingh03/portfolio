import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Laptop } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/suraj-kumar-singh-sks', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:surajkumare04@gmail.com', label: 'Email' },
  ];
  
  
  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top section with form */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Start a Project?</h3>
              <p className="text-primary-100 max-w-md">
                Let's work together to create innovative IT solutions for your business challenges.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border-2 border-white bg-transparent hover:bg-white hover:text-primary-600 text-white rounded-lg font-medium transition-colors duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-5">
              <Laptop className="mr-2 text-primary-500" />
              <span className="text-xl font-bold">Suraj kumar Singh</span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Professional IT specialist dedicated to creating robust digital solutions with a focus on security, performance, and user experience.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3, color: '#6366f1' }}
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Hyderabad, Telangana</li>
              <li>
                <a href="surajkumare04@gmail.com" className="hover:text-primary-500 transition-colors duration-300">
                surajkumare04@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+91 9392836312" className="hover:text-primary-500 transition-colors duration-300">
                +91 9392836312
                </a>
              </li>
              {/* <li>Available for freelance projects</li> */}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500">
            &copy; {currentYear} Suraj Kumar Singh. All rights reserved.
          </p>
          <p className="text-gray-500 mt-4 md:mt-0">
            Designed and built with React, Tailwind CSS, and Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;