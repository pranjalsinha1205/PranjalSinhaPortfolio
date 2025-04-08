import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">
          Pranjal Sinha
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-6">
          Computer Science Engineer & Data Enthusiast
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Passionate about Machine Learning, Data Analysis, and Backend Development.
          Currently pursuing Computer Science Engineering at Lovely Professional University.
        </p>
        
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/pranjalsinha1205"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            <GitHub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pranjalsinha12/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:pranjal01sinha@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;