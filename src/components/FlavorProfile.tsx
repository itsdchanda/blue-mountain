import React, { useState } from 'react';
import { Coffee, Mountain, Droplets, Leaf, ChevronDown, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const FlavorProfile: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const coffeeTypes = [
    {
      icon: Coffee,
      title: 'Arabica Coffee',
      shortDesc: 'Smooth, aromatic, highland grown',
      fullDescription: 'Smooth, aromatic, grown in cooler highlands. Perfect balance of sweetness and acidity with complex flavor notes that dance on your palate.',
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg',
      characteristics: [
        { label: 'Smooth & Aromatic', icon: Star },
        { label: 'Highland Grown', icon: Mountain },
        { label: 'Complex Flavors', icon: Coffee },
        { label: 'Lower Caffeine', icon: Leaf }
      ],
      flavorNotes: ['Cocoa', 'Floral', 'Citrus'],
      color: 'from-amber-600/20 to-orange-600/20',
      borderColor: 'border-amber-500/30'
    },
    {
      icon: Coffee,
      title: 'Robusta Coffee',
      shortDesc: 'Strong body, higher caffeine, valley grown',
      fullDescription: 'Stronger body, higher caffeine, grown in valleys. Bold and robust with earthy undertones and rich crema that creates the perfect espresso base.',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      characteristics: [
        { label: 'Strong Body', icon: Star },
        { label: 'Higher Caffeine', icon: Mountain },
        { label: 'Valley Grown', icon: Coffee },
        { label: 'Rich Crema', icon: Droplets }
      ],
      flavorNotes: ['Earthy', 'Spicy', 'Nutty'],
      color: 'from-emerald-600/20 to-teal-600/20',
      borderColor: 'border-emerald-500/30'
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-luxury-gold/20 rounded-full"
            style={{
              left: `${10 + (i * 12) % 80}%`,
              top: `${20 + (i * 15) % 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-off-white leading-tight">
              Our Coffee Varieties
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-off-white/80 max-w-3xl mx-auto leading-relaxed">
              From the misty highlands to the fertile valleys of Northeast India, discover our premium coffee varieties.
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-6">
          {coffeeTypes.map((coffee, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <motion.div 
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${coffee.color} backdrop-blur-sm border-2 ${coffee.borderColor} cursor-pointer group`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => toggleCard(index)}
              >
                {/* Compact Card View */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center"
                      >
                        <coffee.icon className="w-6 h-6 text-luxury-gold" />
                      </motion.div>
                      
                      <div>
                        <h3 className="font-playfair text-2xl font-bold text-off-white mb-1">
                          {coffee.title}
                        </h3>
                        <p className="text-off-white/70 text-sm">
                          {coffee.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      {/* Flavor Notes Preview */}
                      <div className="hidden sm:flex space-x-2">
                        {coffee.flavorNotes.slice(0, 2).map((note, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-luxury-gold/20 rounded-full text-luxury-gold text-xs font-medium border border-luxury-gold/30"
                          >
                            {note}
                          </span>
                        ))}
                      </div>

                      <motion.div
                        animate={{ rotate: expandedCard === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-luxury-gold" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="border-t border-luxury-gold/20"
                    >
                      <div className="p-6 grid md:grid-cols-2 gap-6">
                        {/* Image */}
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          className="aspect-[4/3] rounded-lg overflow-hidden image-overlay"
                        >
                          <img
                            src={coffee.image}
                            alt={coffee.title}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
                        </motion.div>

                        {/* Details */}
                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                          className="space-y-4"
                        >
                          <p className="text-off-white/80 leading-relaxed">
                            {coffee.fullDescription}
                          </p>

                          {/* All Flavor Notes */}
                          <div>
                            <h4 className="text-luxury-gold font-medium mb-2">Flavor Notes</h4>
                            <div className="flex flex-wrap gap-2">
                              {coffee.flavorNotes.map((note, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.4 + idx * 0.1 }}
                                  className="px-3 py-1 bg-luxury-gold/20 rounded-full text-luxury-gold text-sm font-medium border border-luxury-gold/30"
                                >
                                  {note}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Characteristics */}
                          <div>
                            <h4 className="text-luxury-gold font-medium mb-3">Key Characteristics</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {coffee.characteristics.map((char, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ y: 10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: 0.5 + idx * 0.1 }}
                                  className="flex items-center space-x-2 p-2 bg-coffee-brown/30 rounded-lg"
                                >
                                  <char.icon className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                                  <span className="text-off-white/70 text-sm">{char.label}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Story Section */}
        <ScrollReveal delay={0.4}>
          <motion.div 
            className="text-center bg-coffee-brown/30 rounded-xl p-8 glass-card backdrop-blur-sm border border-luxury-gold/20 mt-16"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="font-playfair text-2xl font-bold text-luxury-gold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Coffee Journey
            </motion.h3>
            <motion.p 
              className="text-off-white/80 text-lg leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Handpicked in the hills, dried under the sun, crafted into green beans or roasted blends for the world. 
              Every step honors traditional methods passed down through generations of Northeast Indian farmers.
            </motion.p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FlavorProfile;