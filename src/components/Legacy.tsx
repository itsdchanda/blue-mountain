import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Legacy: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <section id="legacy" ref={sectionRef} className="py-24 bg-coffee-brown/20 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-luxury-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-coffee-brown/30 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <ScrollReveal>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-off-white leading-tight">
                From Northeast India's Hills and Valleys
              </h2>
            </ScrollReveal>
            
            <div className="space-y-6 text-lg text-off-white/80 leading-relaxed">
              <ScrollReveal delay={0.4}>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  Deep in the hills of Northeast India, where morning mist dances through coffee 
                  plantations and tribal wisdom guides every harvest. India's best-kept 
                  coffee secret grows wild and free.
                </motion.p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.6}>
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  Handpicked at perfect ripeness, sun-dried on bamboo mats, processed with 
                  generations-old methods. This isn't just coffee — it's liquid heritage.
                </motion.p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.8}>
                <motion.p 
                  className="text-luxury-gold font-medium relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    initial={{ backgroundSize: "0% 2px" }}
                    whileInView={{ backgroundSize: "100% 2px" }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-luxury-gold to-luxury-gold bg-no-repeat bg-bottom"
                    style={{ backgroundImage: "linear-gradient(to right, #D4AF37, #D4AF37)" }}
                  >
                    "World's finest coffee, straight from our farms to yours."
                  </motion.span>
                </motion.p>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.3} className="relative">
            <motion.div 
              style={{ scale }}
              className="aspect-square rounded-lg overflow-hidden image-overlay group"
            >
              <img
                src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg"
                alt="Coffee beans drying in Mizoram mountains"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
              <div className="absolute inset-0 border border-luxury-gold/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Legacy;