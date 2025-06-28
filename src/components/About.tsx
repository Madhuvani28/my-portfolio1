import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { icon: Code, title: 'Development', description: 'Full-stack development with modern technologies' },
    { icon: Palette, title: 'Design', description: 'UI/UX design with attention to detail' },
    { icon: Zap, title: 'Performance', description: 'Optimized solutions for better user experience' },
    { icon: Heart, title: 'Passion', description: 'Passionate about creating meaningful digital experiences' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/50 to-transparent dark:via-pink-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-black bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              Passionate developer with a keen eye for design and a love for creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6 order-2 lg:order-1">
              <div className="glass-morphism p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Hello! I'm Arikilla Madhuvani
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    I'm a passionate full-stack developer and UI/UX designer with a strong foundation in modern web technologies. 
                    My journey in tech began with a curiosity for how things work, which has evolved into a deep passion for 
                    creating digital solutions that make a real impact.
                  </p>
                  <p>
                    I specialize in building responsive web applications using React, TypeScript, and Node.js, while ensuring 
                    every project delivers an exceptional user experience. My design background helps me bridge the gap between 
                    functionality and aesthetics.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                    or sharing knowledge with the developer community. I believe in continuous learning and staying updated 
                    with the latest industry trends.
                  </p>
                </div>

                {/* Experience Timeline */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-4">Experience Highlights</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-sm mt-2 flex-shrink-0"></div>
                      <div className="min-w-0">
                        <h5 className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">Senior Frontend Developer</h5>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">2022 - Present</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-800 rounded-sm mt-2 flex-shrink-0"></div>
                      <div className="min-w-0">
                        <h5 className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">Full Stack Developer</h5>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">2020 - 2022</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-600 rounded-sm mt-2 flex-shrink-0"></div>
                      <div className="min-w-0">
                        <h5 className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">Junior Developer</h5>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">2019 - 2020</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-morphism p-4 sm:p-6 rounded-xl text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-black rounded-xl mb-3 sm:mb-4 group-hover:shadow-lg transition-shadow duration-300"
                  >
                    <skill.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16">
            <div className="glass-morphism p-6 sm:p-8 rounded-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                {[
                  { number: '50+', label: 'Projects Completed' },
                  { number: '3+', label: 'Years Experience' },
                  { number: '25+', label: 'Happy Clients' },
                  { number: '100%', label: 'Commitment' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-black bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;