import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Server, Globe, Database, Cpu } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  category: 'web Development' | 'informational Web Application' | 'security' | 'automation' | 'Machine Learning';
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects: Project[] = [
    {
      title: 'Gesture Recognition System',
      description: 'Developed a camera-based hand gesture interpreter.',
      technologies: ['Python', 'HTML/CSS'],
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      githubUrl: 'https://github.com/surajkumarsingh03/Gesture-Sentence-Recognition-System',
      category: 'Machine Learning',
      icon: <Server size={20} />,
    },
    {
      title: 'Face Recognition System',
      description: 'Developed a camera-based face detection model.',
      technologies: ['Python', 'Machine Learning'],
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      githubUrl: 'https://github.com/surajkumarsingh03/Face-Detection-system',
      category: 'Machine Learning',
      icon: <Server size={20} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">
            Projects
          </span>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Explore my recent projects showcasing various IT skills and technical capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-dark-800 relative"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-70 transition-opacity duration-300 pointer-events-none"></div>
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                    ${project.category === 'web Development' ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300' :
                      project.category === 'Machine Learning' ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300' :
                        project.category === 'security' ? 'bg-error-100 text-error-800 dark:bg-error-900/30 dark:text-error-300' :
                          'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300'}`}>
                    {project.icon}
                    <span className="ml-1.5">{project.category}</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-1.5" />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-1.5" />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-all duration-300"
          >
            Interested in working together?
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


// import * as React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ExternalLink, Github, Server, Globe, Database, Cpu } from 'lucide-react';

// interface Project {
//   title: string;
//   description: string;
//   technologies: string[];
//   image: string;
//   demoUrl: string;
//   githubUrl: string;
//   category: 'web Development' | 'informational Web Application' | 'security' | 'automation' | 'Machine Learning';
//   icon: React.ReactNode;
// }

// const Projects: React.FC = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,  // Trigger only once to avoid disappearing
//     threshold: 0.2,  // Increase threshold for better visibility
//   });

//   const projects: Project[] = [
//     // {
//     //         title: 'Enterprise Resource Hub',
//     //         description: 'A comprehensive resource management portal for enterprise IT assets with real-time monitoring.',
//     //         technologies: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
//     //         image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     //         demoUrl: '#',
//     //         githubUrl: '#',
//     //         category: 'web',
//     //         icon: <Globe size={20} />,
//     //       },
//           {
//             title: 'Gesture Recognition System',
//             description: 'Developed a camera-based hand gesture interpreter.',
//             technologies: ['Python','HTML/CSS'],
//             image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//             demoUrl: '#',
//             githubUrl: 'https://github.com/surajkumarsingh03/Gesture-Sentence-Recognition-System',
//             category: 'Machine Learning',
//             icon: <Server size={20} />,
//           },
//           {
//             title: 'Face Recognition System',
//             description: 'Developed a camera-based face detection model.',
//             technologies: ['Python', 'Machine Learning'],
//             image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//             demoUrl: '#',
//             githubUrl: 'https://github.com/surajkumarsingh03/Face-Detection-system',
//             category: 'Machine Learning', 
//             icon: <Server size={20} />,
//           },
          
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
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       }
//     }
//   };

//   return (
//     <section id="projects" className="py-20 bg-white dark:bg-dark-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//           ref={ref}
//         >
//           <span className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">
//             Projects
//           </span>
//           <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
//             Featured Work
//           </h2>
//           <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
//             Explore my recent projects showcasing various IT skills and technical capabilities.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 gap-8"
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -10, transition: { duration: 0.2 } }}
//               className="group overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-dark-800 relative"
//             >
//               <div className="aspect-w-16 aspect-h-9 overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title} 
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black opacity-70 transition-opacity duration-300"></div>
//                 <div className="absolute top-4 left-4">
//                   <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
//                     ${project.category === 'web Development' ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300' : 
//                     project.category === 'Machine Learning' ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300' : 
//                     project.category === 'security' ? 'bg-error-100 text-error-800 dark:bg-error-900/30 dark:text-error-300' : 
//                     'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300'}`}>

//                     {project.icon}
//                     <span className="ml-1.5">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   {project.description}
//                 </p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech, i) => (
//                     <span 
//                       key={i}
//                       className="px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-200"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex justify-between items-center">
//                   <motion.a
//                     href={project.demoUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
//                   >
//                     <ExternalLink size={16} className="mr-1.5" />
//                     Live Demo
//                   </motion.a>
                  

//                   <motion.a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
//                   >
//                     <Github size={16} className="mr-1.5" />
//                     Source Code
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="flex justify-center mt-12"
//         >
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-all duration-300"
//           >
//             Interested in working together?
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;





