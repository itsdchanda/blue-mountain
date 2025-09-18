import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const [wordsVisible, setWordsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWordsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('legacy')?.scrollIntoView({ behavior: 'smooth' });
  };

  const titleWords = ['Blue', 'Mountain'];
  const subtitleWords = ['Where', 'Legacy', 'Brews.'];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-brown via-charcoal/80 to-charcoal">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg')] bg-cover bg-center opacity-40 parallax-bg"></div>
          <div className="absolute inset-0 video-overlay"></div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-luxury-gold/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-luxury-gold/20 rounded-full"
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <div className="space-y-8">
          {/* Main Title with Word-by-Word Animation */}
          <div className="font-playfair text-6xl md:text-8xl font-bold text-off-white leading-tight">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={wordsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-block mr-6"
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Subtitle with Underline Animation */}
          <div className="relative">
            <div className="font-playfair text-2xl md:text-3xl text-luxury-gold font-medium">
              {subtitleWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={wordsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={wordsVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-luxury-gold origin-center"
            />
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={wordsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            From the Hills of Northeast India – Specialty Coffee, Sustainably Sourced. 
            Handpicked in the hills, dried under the sun, crafted into green beans or roasted blends for the world.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={wordsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 glass-button border-2 border-off-white/30 text-off-white hover:bg-off-white/10 hover:border-luxury-gold transition-all duration-300 font-medium text-lg backdrop-blur-md rounded-lg"
            >
              Discover the Story
            </button>
            <Link
              to="/shop"
              className="px-8 py-4 bg-luxury-gold hover:bg-luxury-gold/90 text-charcoal transition-all duration-300 font-medium text-lg hover:shadow-gold-glow rounded-lg hover:scale-105"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-off-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;