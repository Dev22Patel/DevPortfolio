import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Footer, ProjectCard, SkillBadge } from './components';
import { projects, skills } from './data';
import image from "./assets/dp.jpg";
import { ContactForm } from './components/contact';
import { Header } from './components/header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const controls = useAnimation();

  const sections = ['home', 'about', 'projects', 'skills', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = windowHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top < offset && bottom > offset) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);


  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <Header activeSection={activeSection} />

      <main className="container mx-auto px-4 py-8">
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
          <ModernBackgroundSVG />
          <motion.div
            className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0 md:mr-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.img
                src={image}
                alt="Your Name"
                className="w-64 h-64 object-cover mx-auto"
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
                }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
              />
            </motion.div>
            <motion.div
              className="md:w-1/2 text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              >
                Dev Patel
              </motion.h1>
              <motion.p
                className="text-2xl md:text-3xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              >
              Tech Enthusiast
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-start gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.a
                href="DevPatelCV.pdf" // Update this path to the actual location of your resume.pdf
                download="DevPatelCV.pdf" // This attribute makes the link download the file instead of navigating
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <span className="mr-2">My Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                </motion.a>

                <motion.a
                  href="#projects"
                  className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">View Projects</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm1 1v10h12V4H4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6 6h8v2H6V6zm0 4h8v2H6v-2z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>


        {/* Rest of the sections remain unchanged */}
        {/* ... */}
        <section id="about" className="min-h-screen flex flex-col justify-center">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 mb-4">
            I'm Dev, a passionate web developer currently in my third year of Computer Engineering at DDIT. My enthusiasm for creating innovative and user-centered digital experiences drives my approach to web development. I have honed my skills in various technologies, including HTML, CSS, JavaScript, and React, allowing me to build responsive and engaging websites.
            </p>
            <p className="text-gray-300 mb-4">
            My journey in web development began three years ago, and I have successfully completed projects ranging from personal portfolios to collaborative applications, showcasing my ability to adapt and learn quickly. I am eager to leverage my technical skills and creativity to contribute to dynamic teams and impactful projects in the industry
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me swimming and playing PC games. I believe that a well-rounded developer brings creativity and fresh ideas to the table, and I strive to embody that in my work and life.
            </p>
          </motion.div>
        </section>

        <section id="projects" className="min-h-screen flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                custom={index}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="min-h-screen flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={controls}
          >
            {skills.map((skill, index) => (
              <SkillBadge key={skill} skill={skill} index={index} />
            ))}
          </motion.div>
        </section>

        <section id="contact" className="max-h-screen flex flex-col justify-center">
            <motion.div
                className="max-w-4xl w-full mx-auto px-4"  // Changed to max-w-4xl and added w-full for full width control
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
            >
                <h2 className="text-3xl font-bold mb-8 text-center">Have a Coffee With me :)</h2>
                <ContactForm />
            </motion.div>
        </section>
        <ToastContainer
        position="top-right" // Specify the position of the toast
        autoClose={5000} // Duration before the toast disappears
        hideProgressBar={false} // Show or hide the progress bar
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        />

      </main>
      <Footer />
    </div>
  );
};


const ModernBackgroundSVG = () => {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a00e0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8e2de2" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#grad1)" />

        <motion.circle
          cx="100" cy="100" r="50"
          fill="none" stroke="#8e2de2" strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />

        <motion.path
          d="M300,300 Q400,50 500,300 T700,300"
          fill="none" stroke="#4a00e0" strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />

        <motion.rect
          x="750" y="500" width="100" height="100"
          fill="none" stroke="#8e2de2" strokeWidth="2"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 0.3 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />

        <motion.polygon
          points="500,600 550,650 500,700 450,650"
          fill="none" stroke="#4a00e0" strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    );
  };
export default Portfolio;
