import React from 'react';
import { motion } from 'framer-motion';
import { Laptop } from 'lucide-react';

const Loader: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const dotVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: [0, -15, 0],
      opacity: 1,
      transition: {
        y: {
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
          repeatDelay: 0.25
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-800 z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <Laptop size={48} className="text-primary-600 dark:text-primary-400" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0 rounded-full bg-primary-500 dark:bg-primary-400 filter blur-lg opacity-30"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
        >
          Loading Portfolio
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex space-x-2 justify-center mt-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              variants={dotVariants}
              className="w-3 h-3 rounded-full bg-primary-600 dark:bg-primary-400"
              style={{ originY: "50%" }}
              transition={{
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;