import React from 'react';
import { Download, Calendar, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  const handleDownloadResume = () => {
    // Replace with actual resume URL
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Arikilla_Madhuvani_Resume.pdf';
    link.click();
  };

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      location: 'Remote',
      achievements: [
        'Led frontend development for 3 major client projects, increasing user engagement by 40%',
        'Implemented modern React patterns and TypeScript, reducing bugs by 60%',
        'Mentored junior developers and established code review processes'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      location: 'San Francisco, CA',
      achievements: [
        'Developed and maintained 5+ web applications using React, Node.js, and MongoDB',
        'Optimized application performance, reducing load times by 50%',
        'Collaborated with design team to implement pixel-perfect UI components'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      location: 'New York, NY',
      achievements: [
        'Built responsive web interfaces using HTML, CSS, and JavaScript',
        'Integrated third-party APIs and payment systems',
        'Participated in agile development processes and daily standups'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      gpa: '3.8/4.0'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      school: 'Code Academy',
      period: '2019',
      certification: 'Certificate of Completion'
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
    <section id="resume" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
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
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-black bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
              Download my complete resume or view my experience and education below
            </p>
            
            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-black text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              <span>Download Resume</span>
            </motion.button>
            
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-4">
              <Calendar size={14} className="inline mr-1" />
              Last updated: December 2024
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Personal Info & Summary */}
            <motion.div variants={itemVariants} className="lg:col-span-1 order-2 lg:order-1">
              <div className="glass-morphism p-6 sm:p-8 rounded-2xl lg:sticky lg:top-8">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-xl bg-gradient-to-r from-pink-500 to-black flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-4">
                    AM
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Arikilla Madhuvani
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
                    Full Stack Developer & UI/UX Designer
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <Mail size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm break-all">arikilla@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <Phone size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <ExternalLink size={16} className="sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">arikilla.dev</span>
                  </div>
                </div>

                {/* Skills Summary */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Core Skills
                  </h4>
                  <div className="space-y-3">
                    {[
                      { skill: 'React/TypeScript', level: 95 },
                      { skill: 'Node.js/Express', level: 90 },
                      { skill: 'UI/UX Design', level: 85 },
                      { skill: 'Database Design', level: 80 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                            {item.skill}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {item.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-pink-500 to-black rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience & Education */}
            <div className="lg:col-span-2 space-y-8 sm:space-y-12 order-1 lg:order-2">
              {/* Experience */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
                  Professional Experience
                </h3>
                <div className="space-y-6 sm:space-y-8">
                  {experience.map((job, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="glass-morphism p-4 sm:p-6 rounded-xl"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="mb-2 sm:mb-0">
                          <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                            {job.title}
                          </h4>
                          <p className="text-pink-600 dark:text-pink-400 font-medium text-sm sm:text-base">
                            {job.company}
                          </p>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-2 mb-1">
                            <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
                          >
                            <span className="w-2 h-2 bg-pink-500 rounded-sm mt-2 flex-shrink-0"></span>
                            <span className="text-xs sm:text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
                  Education
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="glass-morphism p-4 sm:p-6 rounded-xl"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <div className="mb-2 sm:mb-0">
                          <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-pink-600 dark:text-pink-400 font-medium text-sm sm:text-base">
                            {edu.school}
                          </p>
                          {edu.gpa && (
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                              GPA: {edu.gpa}
                            </p>
                          )}
                          {edu.certification && (
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                              {edu.certification}
                            </p>
                          )}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;