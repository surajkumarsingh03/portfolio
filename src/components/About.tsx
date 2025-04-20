import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Server, Globe, Code, Shield, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Code size={32} />,
      title: 'Software Development',
      description: 'Proficient in Python, JavaScript for developing scalable applications and algorithms,adapt at problem-solving and debugging.',
      color: 'success',
    },
    {
      icon: <Database size={32} />,
      title: 'Database Management',
      description: 'Working knowledge of relational databases such as SQLite and MySQL,able to perform CRUD operations and manage data flow.',
      color: 'primary',
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description: 'Proficient in Node.js and Express for building RESTful APIs, handling server-side logic, and integrating with databases.',
      color: 'secondary',
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Development',
      description: 'Experienced with React.js, JavaScript, HTML, and CSS to create responsive, interactive, and user-friendly interfaces.',
      color: 'accent',
    },
    {
      icon: <Shield size={32} />,
      title: 'Machine Learning & Deep Learning',
      description: 'Hands-on experience building and training models using Python, TensorFlow, and CNNs for tasks like image classification and prediction.',
      color: 'warning',
    },
    {
      icon: <Cpu size={32} />,
      title: 'Version Control & Collaboration',
      description: 'Proficient with Git and GitHub for source code management, team collaboration, and project tracking.',
      color: 'error',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">About Me</span>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My Technical Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            I am a motivated Full-Stack Developer with hands-on experience in web development and deep learning, blending tech and design through innovative projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { duration: 0.2 } 
              }}
              className={`relative overflow-hidden rounded-2xl p-8 bg-white dark:bg-dark-800 shadow-lg transition-all duration-300 border-t-4 border-${service.color}-500`}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-12 h-32 w-32 rounded-full bg-gradient-to-br from-transparent to-gray-100 dark:to-dark-700 opacity-50"></div>
              
              <div className={`relative z-10 inline-flex items-center justify-center h-14 w-14 rounded-xl mb-6 bg-${service.color}-100 dark:bg-${service.color}-900/30 text-${service.color}-600 dark:text-${service.color}-400`}>
                {service.icon}
              </div>
              
              <h3 className="relative text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="relative text-base text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex"
          >
            <a 
              href="#skills" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 shadow-sm transition-all duration-300"
            >
              Explore My Skills
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Database, Server, Globe, Code, Shield, Cpu } from 'lucide-react';

// const About: React.FC = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const services = [
//     {
//       icon: <Database size={32} />,
//       title: 'Database Administration',
//       description: 'Expert management of SQL, NoSQL, and cloud database systems for optimal performance and reliability.',
//       color: 'primary',
//     },
//     {
//       icon: <Server size={32} />,
//       title: 'Systems Administration',
//       description: 'End-to-end management of server infrastructure, virtualization, and cloud platforms.',
//       color: 'secondary',
//     },
//     {
//       icon: <Globe size={32} />,
//       title: 'Network Design',
//       description: 'Strategic network architecture, implementation, and troubleshooting for secure connectivity.',
//       color: 'accent',
//     },
//     {
//       icon: <Code size={32} />,
//       title: 'Software Development',
//       description: 'Creation of custom applications and automation solutions using modern frameworks and languages.',
//       color: 'success',
//     },
//     {
//       icon: <Shield size={32} />,
//       title: 'Cybersecurity',
//       description: 'Implementation of robust security measures to protect systems and data from threats.',
//       color: 'warning',
//     },
//     {
//       icon: <Cpu size={32} />,
//       title: 'IT Infrastructure',
//       description: 'Design and maintenance of scalable technology ecosystems for business growth.',
//       color: 'error',
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       }
//     }
//   };

//   return (
//     <section id="about" className="py-20 bg-white dark:bg-dark-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//           ref={ref}
//         >
//           <span className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">About Me</span>
//           <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
//             My Technical Expertise
//           </h2>
//           <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
//             With over 8 years of experience in IT, I specialize in creating robust technical solutions for complex business challenges.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -10, 
//                 boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//                 transition: { duration: 0.2 } 
//               }}
//               className={`relative overflow-hidden rounded-2xl p-8 bg-white dark:bg-dark-800 shadow-lg transition-all duration-300 border-t-4 border-${service.color}-500`}
//             >
//               <div className="absolute top-0 right-0 -mt-4 -mr-12 h-32 w-32 rounded-full bg-gradient-to-br from-transparent to-gray-100 dark:to-dark-700 opacity-50"></div>
              
//               <div className={`relative z-10 inline-flex items-center justify-center h-14 w-14 rounded-xl mb-6 bg-${service.color}-100 dark:bg-${service.color}-900/30 text-${service.color}-600 dark:text-${service.color}-400`}>
//                 {service.icon}
//               </div>
              
//               <h3 className="relative text-xl font-bold text-gray-900 dark:text-white mb-4">
//                 {service.title}
//               </h3>
              
//               <p className="relative text-base text-gray-600 dark:text-gray-300">
//                 {service.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-16 text-center"
//         >
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex"
//           >
//             <a 
//               href="#skills" 
//               className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 shadow-sm transition-all duration-300"
//             >
//               Explore My Skills
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;