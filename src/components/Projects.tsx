import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent dark:via-gray-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-black bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Coming soon - exciting projects in development
            </p>
          </motion.div>

          {/* Empty State */}
          <motion.div
            variants={itemVariants}
            className="text-center py-20"
          >
            <div className="glass-morphism p-12 rounded-2xl max-w-2xl mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-black rounded-full flex items-center justify-center">
                <span className="text-3xl text-white">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Projects Coming Soon
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I'm currently working on some exciting projects that will be showcased here soon. 
                Each project will demonstrate different aspects of modern web development and innovative solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-black text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Get in Touch</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;