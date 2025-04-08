import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="section-title">About Me</h1>
      
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-6">
              I am a Computer Science Engineering student at Lovely Professional University, passionate about leveraging technology 
              to solve real-world problems. My interests span across Machine Learning, Data Analysis, and Backend Development, 
              where I continuously strive to expand my knowledge and skills.
            </p>
            <p className="text-lg mb-6">
              Through my academic journey and internships, I've developed a strong foundation in various programming languages 
              and technologies, allowing me to tackle complex challenges and deliver innovative solutions.
            </p>
          </div>
          
          <div className="w-full md:w-1/3 space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-primary-light dark:text-primary-dark" />
              <span>Patna, India, 800001</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-primary-light dark:text-primary-dark" />
              <a href="mailto:pranjal01sinha@gmail.com" className="hover:text-primary-light dark:hover:text-primary-dark">
                pranjal01sinha@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="text-primary-light dark:text-primary-dark" />
              <a 
                href="https://github.com/pranjalsinha1205" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-light dark:hover:text-primary-dark"
              >
                github.com/pranjalsinha1205
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="text-primary-light dark:text-primary-dark" />
              <a 
                href="https://www.linkedin.com/in/pranjalsinha12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-light dark:hover:text-primary-dark"
              >
                linkedin.com/in/pranjalsinha12
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;