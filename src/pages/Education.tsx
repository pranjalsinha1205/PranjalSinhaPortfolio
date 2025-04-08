import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="section-title">Education</h1>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="card"
      >
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-6 h-6 text-primary-light dark:text-primary-dark" />
          <h2 className="text-xl font-semibold">Computer Science and Engineering</h2>
        </div>

        <div className="space-y-2">
          <p className="text-lg">Lovely Professional University</p>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <MapPin size={18} />
            <span>Phagwara, Punjab</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">2022 - Present</p>
          <p className="font-medium">CGPA: 8.28</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;