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
            
            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <span className="text-off-white/60 text-sm block mb-3">Follow us:</span>
              <div className="flex items-center space-x-4">
                <motion.a 
                  href="https://wa.me/917085485883" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-luxury-gold/20 rounded-lg flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                >
                  <svg className="w-5 h-5 text-luxury-gold" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://instagram.com/blue.mountain.official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-luxury-gold/20 rounded-lg flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-luxury-gold" />
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/bluemountainofficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-luxury-gold/20 rounded-lg flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-luxury-gold" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/company/blue-mountain-official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-luxury-gold/20 rounded-lg flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-luxury-gold" />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/bluemountainltd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-luxury-gold/20 rounded-lg flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-luxury-gold" />
                </motion.a>
                <motion.a 
                  href="https://www.youtube.com/@the.BlueMountain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Subscribe to our YouTube channel"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-luxury-gold/20 rounded-lg flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-luxury-gold" />
                </motion.a>
              </div>
            </motion.div>
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
                href="mailto:contact@bluemountain.work"
                className="flex items-center space-x-2 text-off-white/60 hover:text-luxury-gold transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">contact@bluemountain.work</span>
              </a>
              <a 
                href="tel:+917085485883"
                className="flex items-center space-x-2 text-off-white/60 hover:text-luxury-gold transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+91 70854 85883</span>
              </a>