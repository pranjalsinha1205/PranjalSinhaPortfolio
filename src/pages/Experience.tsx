import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Business Analysis Intern',
    company: 'Practo (UpGrad Campus and MentorMinds)',
    duration: 'Jun 2024 - Aug 2024',
    achievements: [
      'Conducted comprehensive data analysis on health and demographic dataset, identifying key indicators of heart disease.',
      'Implemented machine learning models to predict the likeability of a heart disease or attack on the basis of the given data.',
      'Predicted 89% of cases where the risk of a heart attack or disease was very high.'
    ]
  },
  {
    title: 'Intern- Development',
    company: 'AreteMinds Technologies Private Ltd.',
    duration: 'Jun 2024 - July 2024',
    achievements: [
      'Developed and implemented RESTful APIs using Spring Boot.',
      'Integrated JWT authentication to enhance application security, ensuring compliance with industry standards.',
      'Collaborated with cross-functional teams to deliver high-quality software within deadlines.'
    ]
  }
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="section-title">Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="card"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
                  <Building2 size={18} />
                  <span>{exp.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                <Calendar size={18} />
                <span>{exp.duration}</span>
              </div>
            </div>
            
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;