// components.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs, faNodeJs, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
export const Header = ({ activeSection }) => {
  const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 py-4 z-50">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          {navItems.map((item) => (
            <motion.li key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={`#${item}`}
                className={`capitalize ${
                  activeSection === item ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                } transition duration-300 ease-in-out`}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-gray-800 py-4 mt-8">
    <div className="container mx-auto px-4 text-center text-gray-300">
      <p>&copy; {new Date().getFullYear()} Dev Patel. All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="https://github.com/Dev22Patel" className="hover:text-white transition duration-300">GitHub</a>
        <a href="https://www.linkedin.com/in/dev-patel-230475252/" className="hover:text-white transition duration-300">LinkedIn</a>
        <a href="https://x.com/Patel1684192Dev" className="hover:text-white transition duration-300">Twitter</a>
      </div>
    </div>
  </footer>
);

export const ProjectCard = ({ project }) => (
  <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-gray-600 text-sm rounded-full px-3 py-1">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      >
        View Project
      </a>
    </div>
  </div>
);


const skillIcons = {
    "HTML5": faHtml5,
    "CSS3": faCss3Alt,
    "JavaScript": faJs,
    "React": faReact,
    "Vue.js": faVuejs,
    "Node.js": faNodeJs,
    "MongoDB": faDatabase,
    "PostgreSQL": faDatabase,
    "Git": faGitAlt,
    // Add more icons as necessary
  };

  export const SkillBadge = ({ skill, index }) => (
    <motion.div
      className="bg-gray-700 rounded-full px-4 py-2 text-sm font-semibold flex items-center space-x-2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FontAwesomeIcon icon={skillIcons[skill]} size="lg" className="text-white" />
      <span>{skill}</span>
    </motion.div>
  );
