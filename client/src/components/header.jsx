import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';

export const Header = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'home', icon: Home },
    { name: 'about', icon: User },
    { name: 'projects', icon: Briefcase },
    { name: 'skills', icon: Code },
    { name: 'contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <motion.a
            href="#home"
            className="text-2xl font-bold text-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
           DEV

          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.li key={item.name}>
                <a
                  href={`#${item.name}`}
                  className={`text-lg font-medium ${
                    activeSection === item.name ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gray-800 absolute top-full left-0 right-0 shadow-lg"
          >
            <ul className="py-4">
              {navItems.map((item) => (
                <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={`#${item.name}`}
                    className={`flex items-center px-4 py-3 ${
                      activeSection === item.name ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                    } transition-colors duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={20} className="mr-3" />
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
