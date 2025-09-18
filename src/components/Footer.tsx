import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Mail, Phone, MapPin, Instagram, Twitter, Youtube, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-luxury-gold/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <img 
                src="/logo-removebg-preview.png" 
                alt="Blue Mountain Coffee" 
                className="w-12 h-12"
              />
              <span className="font-playfair text-2xl font-bold text-off-white">
                Blue Mountain
              </span>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-off-white/70 leading-relaxed max-w-md"
            >
              Premium Arabica coffee from Northeast India. Berry and Parchment processing. 
              Fresh from Northeast India's farms to businesses nationwide.
            </motion.p>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium text-off-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-off-white/60 hover:text-luxury-gold transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-off-white/60 hover:text-luxury-gold transition-colors">
                Our Story
              </Link>
              <Link to="/shop" className="block text-off-white/60 hover:text-luxury-gold transition-colors">
                Shop
              </Link>
              <Link to="/contact" className="block text-off-white/60 hover:text-luxury-gold transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium text-off-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/?q=Northeast+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-off-white/60 hover:text-luxury-gold transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Northeast India</span>
              </a>
              <a 
                href="mailto:the.bluemountainofficial@gmail.com"
                className="flex items-center space-x-2 text-off-white/60 hover:text-luxury-gold transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">the.bluemountainofficial@gmail.com</span>
              </a>
              <a 
                href="tel:+917085485883"
                className="flex items-center space-x-2 text-off-white/60 hover:text-luxury-gold transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+91 70854 85883</span>
              </a>
              
              {/* Social Media Icons */}
              <div className="pt-4">
                <span className="text-off-white/60 text-sm block mb-3">Follow us:</span>
                <div className="flex items-center space-x-4">
                <motion.a 
                  href="https://instagram.com/blue.mountain.official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-luxury-gold" />
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/bluemountainofficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-luxury-gold" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/company/blue-mountain-official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-luxury-gold" />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/bluemountainltd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-luxury-gold" />
                </motion.a>
                <motion.a 
                  href="https://www.youtube.com/@the.BlueMountain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Subscribe to our YouTube channel"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-luxury-gold" />
                </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-luxury-gold/20 pt-8 text-center"
        >
          <p className="text-off-white/60">
            © {currentYear} Blue Mountain Coffee. All rights reserved. | Straight from Northeast India.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;