import React from 'react';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    // Create a sample resume URL - replace with actual resume link
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Arikilla_Madhuvani_Resume.pdf';
    link.click();
  };

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-gray-900/10 to-black/20 dark:from-pink-900/40 dark:via-gray-900/30 dark:to-black/40"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-pink-500/10 to-black/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-black/10 to-pink-500/10 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Name and Title */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-black bg-clip-text text-transparent">
              Arikilla Madhuvani
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="font-light">Full Stack Developer</span>
              <span className="hidden sm:inline text-pink-500">•</span>
              <span className="font-light">UI/UX Designer</span>
            </div>
          </motion.div>

          {/* Slogan */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Crafting digital experiences with passion, precision, and purpose. 
            Transforming ideas into elegant solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-black text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 glass-morphism-button text-sm sm:text-base"
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              <span>Download Resume</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-800 dark:text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              <span>Contact Me</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-4 sm:space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: ExternalLink, href: 'https://portfolio.com', label: 'Portfolio' }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-white/20 transition-all duration-300"
                title={social.label}
              >
                <social.icon size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-xl flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-1 sm:mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;