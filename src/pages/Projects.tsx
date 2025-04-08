import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Exoplanet Habitability Prediction Application',
    description: 'Developed a Machine Learning Project to determine the habitability on exoplanets using Python, HTML, CSS, and JavaScript.',
    techStack: ['Python', 'HTML', 'CSS', 'JavaScript', 'Flask', 'Machine Learning'],
    achievements: [
      'Made use of Machine Learning Algorithms to find patterns and predict whether life is sustainable or not',
      'Used Flask to connect the project with HTML frontend for better user experience',
      'Helped researchers and astronomy enthusiasts assess the possibility of life beyond Earth'
    ],
    date: 'February 2025'
  },
  {
    title: 'Exploratory Data Analysis on Global Economic Indicators',
    description: 'Conducted EDA on Global Economic Indicators to find patterns between different development indicators.',
    techStack: ['Python', 'Data Analysis', 'Visualization'],
    achievements: [
      'Used it to find patterns between different development indicators',
      'Tried to unveil the effect of COVID-19 on various development indicators',
      'Learned of its correlations to understand to focus on the key economic parameters'
    ],
    date: 'December 2024'
  },
  {
    title: 'Mental Health Chatbot',
    description: 'Developed a chatbot using NLTK and neural networks for mental health support.',
    techStack: ['Python', 'NLTK', 'Neural Networks', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    achievements: [
      'Developed this chatbot using NLTK and neural networks for response generation',
      'Used Flask for frontend making it a very user-friendly application',
      'Used Matplotlib for analyzing user\'s state of mind throughout the conversation',
      'Offered accessible mental health support, helping users track emotional trends'
    ],
    date: 'November 2023'
  }
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="section-title">Projects</h1>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="card"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">{project.date}</span>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              {project.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;