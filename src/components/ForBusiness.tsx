import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Coffee } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const ForBusiness: React.FC = () => {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-coffee-brown rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 mb-16">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-off-white leading-tight">
              Want to Select the Best Package?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed">
              Choose between Berry and Parchment processing, select your quantity, 
              and get a custom quote tailored for your business needs.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Package Selection Card */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 to-coffee-brown/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative bg-coffee-brown/40 backdrop-blur-sm border-2 border-luxury-gold/30 rounded-2xl p-8 group-hover:border-luxury-gold/60 transition-all duration-300">
                {/* Floating Icons */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Coffee className="w-8 h-8 text-luxury-gold" />
                  </motion.div>
                </div>

                <div className="text-center space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/20 rounded-full mb-4"
                  >
                    <Sparkles className="w-8 h-8 text-luxury-gold" />
                  </motion.div>

                  <div>
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold text-off-white mb-4">
                      Customize Your Coffee Experience
                    </h3>
                    <p className="text-off-white/70 leading-relaxed mb-6">
                      Berry Process for fruity notes or Parchment Process for clean taste. 
                      From 1kg trials to bulk orders - we've got the perfect package for you.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full">
                      <span className="text-luxury-gold text-sm font-medium">Berry Process</span>
                    </div>
                    <div className="px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full">
                      <span className="text-luxury-gold text-sm font-medium">Parchment Process</span>
                    </div>
                    <div className="px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full">
                      <span className="text-luxury-gold text-sm font-medium">Custom Quantities</span>
                    </div>
                  </div>

                  <Link
                    to="/shop"
                    className="inline-flex items-center px-8 py-4 bg-luxury-gold hover:bg-luxury-gold/90 text-charcoal font-bold text-lg transition-all duration-300 hover:shadow-gold-glow rounded-xl group-hover:scale-105"
                  >
                    <motion.span
                      whileHover={{ x: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      Select Your Package
                    </motion.span>
                    <motion.div
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Additional Info */}
        <ScrollReveal delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-off-white/60 text-sm">
              ✨ Freshly picked from Northeast India • Limited quantities available • Get yours before it's gone
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ForBusiness;