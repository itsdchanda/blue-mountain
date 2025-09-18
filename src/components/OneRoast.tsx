import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const OneRoast: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section ref={sectionRef} className="py-24 bg-charcoal relative overflow-hidden">
      {/* Floating Coffee Bean Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          style={{ rotateY, scale }}
          className="w-32 h-32 opacity-10"
        >
          <div className="w-full h-full bg-luxury-gold rounded-full"></div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-lg overflow-hidden group image-overlay">
              <img
                src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg"
                alt="Coffee beans drying process"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-coffee-brown/40 to-charcoal/60"></div>
              <div className="absolute inset-0 border border-luxury-gold/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </ScrollReveal>

          <div className="space-y-8 order-1 lg:order-2">
            <ScrollReveal delay={0.2}>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-off-white leading-tight">
                Straight from the Farm
              </h2>
            </ScrollReveal>
            
            <div className="space-y-6 text-lg text-off-white/80 leading-relaxed">
              <ScrollReveal delay={0.4}>
                <p>
                  No middlemen, no warehouses. Our coffee travels directly from Northeast India farms to your 
                  business. Fresh roasted, perfectly processed, and shipped within days of harvest.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.6}>
                <p className="text-luxury-gold font-medium">
                  "This is India's hidden gem — coffee so good, international buyers are starting 
                  to take notice. Get yours before the world discovers what we already know."
                </p>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={0.8}>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 glass-card bg-coffee-brown/30 rounded-lg backdrop-blur-sm border border-luxury-gold/20 group h-24 flex flex-col justify-center">
                  <h3 className="font-playfair text-2xl font-bold text-luxury-gold group-hover:scale-110 transition-transform">Cocoa</h3>
                  <p className="text-off-white/60 mt-2">Rich undertones</p>
                </div>
                <div className="text-center p-4 glass-card bg-coffee-brown/30 rounded-lg backdrop-blur-sm border border-luxury-gold/20 group h-24 flex flex-col justify-center">
                  <h3 className="font-playfair text-2xl font-bold text-luxury-gold group-hover:scale-110 transition-transform">Floral</h3>
                  <p className="text-off-white/60 mt-2">Mountain air</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneRoast;