import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'Google Data Analytics Specialization',
    issuer: 'Coursera and Google',
    date: 'August 2024'
  },
  {
    title: 'Google Workspace Specialization',
    issuer: 'Coursera and Google',
    date: 'May 2024'
  }
];

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="section-title">Certifications</h1>

      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              <h2 className="text-xl font-semibold">{cert.title}</h2>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-gray-700 dark:text-gray-300">{cert.issuer}</p>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar size={18} />
                <span>{cert.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certifications;