import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, Mountain, Droplets, Leaf } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ClosingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-brown via-charcoal to-charcoal">
        {/* Coffee Bean Animations */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-luxury-gold/20 rounded-full"
            style={{
              left: `${10 + (i * 8) % 80}%`,
              top: `${20 + (i * 13) % 60}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Floating Coffee Icons */}
        <motion.div
          className="absolute top-1/4 left-1/6 opacity-10"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Coffee className="w-16 h-16 text-luxury-gold" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/4 opacity-10"
          animate={{
            rotate: [360, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Mountain className="w-20 h-20 text-luxury-gold" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 left-1/3 opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Droplets className="w-14 h-14 text-luxury-gold" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 right-1/6 opacity-10"
          animate={{
            rotate: [0, -360],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Leaf className="w-12 h-12 text-luxury-gold" />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/60"></div>
      </div>

      {/* Steam Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-8 bg-gradient-to-t from-luxury-gold/30 to-transparent rounded-full"
            style={{
              left: `${30 + i * 10}%`,
              bottom: '20%',
            }}
            animate={{
              y: [0, -60, -120],
              opacity: [0, 0.6, 0],
              scaleX: [1, 1.5, 2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-8">
          <ScrollReveal>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-off-white">
              Blue Mountain
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="font-playfair text-2xl md:text-3xl text-luxury-gold font-medium">
              Straight from Northeast India to your cup.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                to="/shop"
                className="px-8 py-4 bg-luxury-gold hover:bg-luxury-gold/90 text-charcoal transition-all duration-300 font-medium text-lg hover:shadow-gold-glow rounded-lg"
              >
                Shop Now
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 glass-button border-2 border-off-white/30 text-off-white hover:bg-off-white/10 hover:border-luxury-gold transition-all duration-300 font-medium text-lg backdrop-blur-md rounded-lg"
              >
                Get Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;