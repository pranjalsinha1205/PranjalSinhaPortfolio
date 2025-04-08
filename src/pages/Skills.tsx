import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['Python', 'R', 'Java', 'SQL', 'Kotlin', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Technologies & Frameworks',
    icon: <Terminal className="w-6 h-6" />,
    skills: ['Tensorflow', 'Scikit-learn', 'PyTorch', 'Flask', 'MySQL', 'MongoDB', 'GCP', 'Azure', 'Git', 'GitHub', 'Postman']
  },
  {
    title: 'Core Skills',
    icon: <Brain className="w-6 h-6" />,
    skills: ['Exploratory Data Analysis', 'Machine Learning', 'Backend Development', 'Data Structures and Algorithms', 'Problem Solving']
  }
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="section-title">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;