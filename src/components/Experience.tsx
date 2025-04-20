import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const experienceData: ExperienceItem[] = [
    {
      title: 'Solution Architecture Job Simulation',
      company: 'AWS Amazon',
      period: 'February 2025 - March 2025',
      location: 'Virtual',
      description: [
        'Designed a scalable hosting architecture using AWS Elastic Beanstalk',
        'Explained cost estimation and deployment plan to non-technical clients',
        'Created a CI/CD pipeline using AWS CodePipeline and CodeDeploy'
      ],
      skills: ['Cloud Architecture', 'Security Implementation', 'Process Automation']
    },
    {
      title: 'Advanced Software Engineering Job Simulation',
      company: 'Walmart Global Tech',
      period: 'March 2025 - April 2025',
      location: 'Virtual',
      description: [
        'Built custom heap data structures in Java for shipping optimization',
        'Designed UML and ER diagrams for complex system components',
      ],
      skills: ['UML diagrams', 'Entity-Relationship diagrams', 'custom heap data structures in Java']
    },
    {
      title: 'Internship',
      company: 'TEACHNOOk',
      period: 'Jan 2024 - Mar 2024',
      location: 'India',
      description: [
        'Developed a weather forecasting app using React and OpenWeather API',
        'Implemented responsive UI with HTML, CSS, and JavaScript',
        'Collaborated with team members to enhance app functionality'
      ],
      skills: ['Web Development', 'Integration', 'Version Control']
    },
    {
      title: 'Trainee',
      company: 'NSIC',
      period: 'July 2023 - Dec 2023',
      location: 'Hyderabad, Telangana',
      description: [
        'Executed operations using Python and SQL.',
        'Worked on projects involving data analysis and visualization.',
        'Collaborated with cross-functional teams to enhance system performance.',
        'Analyzed datasets using MS Excel and worked with relational databases.'
      ],
      skills: ['Python', 'SQL']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">Experience</span>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Professional Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            My career trajectory in information technology and software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 dark:from-primary-600 dark:via-primary-500 dark:to-primary-400 rounded-full"></div>

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-12 flex items-center justify-between ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-dark-800 z-10 animate-pulse-slow"></div>

              {/* Content for each side */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-2 justify-end space-x-2">
                    <Calendar size={16} className="text-primary-500 dark:text-primary-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  
                  <div className="mt-1 flex items-center text-gray-700 dark:text-gray-300">
                    <Briefcase size={14} className="mr-1.5" />
                    <span>{item.company}</span>
                    <span className="mx-1.5">•</span>
                    <span>{item.location}</span>
                  </div>
                  
                  <ul className="mt-4 space-y-2">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex text-gray-600 dark:text-gray-300 text-sm">
                        <ChevronRight size={14} className="mt-1 mr-1.5 flex-shrink-0 text-primary-500 dark:text-primary-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for the other side */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="https://drive.google.com/file/d/1OCHIRIsV0aF1j0q1XzVgO9R0mFEWcDm2/view?usp=sharing" 
            target="_blank"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-dark-700 hover:bg-gray-50 dark:hover:bg-dark-600 transition-all duration-300"
          >
            View Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;