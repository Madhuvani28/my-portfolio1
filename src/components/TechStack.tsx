import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      title: 'Frontend',
      color: 'from-pink-500 to-pink-700',
      technologies: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'HTML5/CSS3', level: 98, icon: '🌐' }
      ]
    },
    {
      title: 'Backend',
      color: 'from-gray-800 to-black',
      technologies: [
        { name: 'Node.js', level: 90, icon: '🟢' },
        { name: 'Express.js', level: 85, icon: '🚀' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'Django', level: 75, icon: '🎸' },
        { name: 'Supabase', level: 85, icon: '⚡' },
        { name: 'Java', level: 75, icon: '☕' }
      ]
    },
    {
      title: 'Database & Tools',
      color: 'from-pink-600 to-gray-900',
      technologies: [
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'Git', level: 95, icon: '📝' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Firebase', level: 85, icon: '🔥' }
      ]
    }
  ];

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
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent dark:via-pink-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-black bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Tech Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-morphism p-6 sm:p-8 rounded-2xl"
              >
                <div className="text-center mb-6 sm:mb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${category.color} rounded-xl mb-3 sm:mb-4`}>
                    <span className="text-lg sm:text-2xl text-white font-bold">
                      {category.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <span className="text-lg sm:text-2xl group-hover:scale-110 transition-transform duration-200">
                            {tech.icon}
                          </span>
                          <span className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400">
                          {tech.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-lg relative`}
                        >
                          <motion.div
                            animate={{ x: [-10, 10, -10] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-white/30 rounded-lg blur-sm"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16">
            <div className="glass-morphism p-6 sm:p-8 rounded-2xl text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Additional Skills & Interests
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {[
                  'Responsive Design', 'UI/UX Design', 'Performance Optimization', 
                  'SEO', 'Accessibility', 'Testing', 'DevOps', 'Agile/Scrum',
                  'Code Review', 'Mentoring', 'Open Source', 'Technical Writing'
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-pink-100 to-gray-100 dark:from-pink-900/30 dark:to-gray-900/30 text-gray-700 dark:text-gray-300 rounded-xl text-xs sm:text-sm font-medium border border-white/20 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;