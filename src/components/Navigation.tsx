import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'Story' },
    { to: '/shop', label: 'Shop' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-charcoal/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/logo-removebg-preview.png" 
                alt="Blue Mountain Coffee" 
                className="w-12 h-12 group-hover:opacity-80 transition-opacity"
              />
            </motion.div>
            <span className="font-playfair text-2xl font-bold text-off-white">
              Blue Mountain
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  to={link.to}
                  className={`text-off-white/70 hover:text-off-white transition-colors duration-200 font-medium relative nav-link ${
                    location.pathname === link.to ? 'text-luxury-gold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="px-6 py-2 bg-luxury-gold hover:bg-luxury-gold/90 text-charcoal transition-all duration-300 font-medium rounded-lg hover:shadow-gold-glow"
              >
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-off-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden bg-charcoal/95 backdrop-blur-md overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : -20 
              }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                to={link.to}
                className={`block px-3 py-2 text-off-white/70 hover:text-off-white transition-colors ${
                  location.pathname === link.to ? 'text-luxury-gold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;