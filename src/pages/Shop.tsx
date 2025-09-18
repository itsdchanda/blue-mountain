import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Coffee, Package, ArrowRight, Check, Mountain, Leaf, Droplets, Sun, Star, Zap, Wind, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const Shop: React.FC = () => {
  const [selectedBeanType, setSelectedBeanType] = useState<string>('');
  const [selectedStage, setSelectedStage] = useState<string>('');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('');
  const navigate = useNavigate();

  const beanTypes = [
    {
      id: 'arabica',
      name: 'Arabica',
      description: 'Smooth, aromatic, grown in cooler highlands',
      characteristics: [
        { label: 'Highland Grown', icon: Mountain, color: 'text-blue-400' },
        { label: 'Complex Flavors', icon: Coffee, color: 'text-amber-400' },
        { label: 'Lower Caffeine', icon: Leaf, color: 'text-green-400' },
        { label: 'Premium Quality', icon: Star, color: 'text-purple-400' }
      ],
      gradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
      borderGradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 'robusta',
      name: 'Robusta',
      description: 'Stronger body, higher caffeine, grown in valleys',
      characteristics: [
        { label: 'Valley Grown', icon: Mountain, color: 'text-emerald-400' },
        { label: 'Strong Body', icon: Zap, color: 'text-red-400' },
        { label: 'Higher Caffeine', icon: Droplets, color: 'text-cyan-400' },
        { label: 'Rich Crema', icon: Wind, color: 'text-yellow-400' }
      ],
      gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
      borderGradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const stages = [
    { 
      id: 'berry', 
      label: 'Coffee Berry', 
      description: 'Raw coffee cherries, fresh from harvest', 
      price: 'Starting from ₹200/kg',
      icon: Coffee,
      gradient: 'from-red-500/20 to-pink-500/20',
      borderColor: 'border-red-500/40'
    },
    { 
      id: 'parchment', 
      label: 'Parchment Coffee', 
      description: 'Dried coffee beans in parchment layer', 
      price: 'Starting from ₹400/kg',
      icon: Package,
      gradient: 'from-yellow-500/20 to-amber-500/20',
      borderColor: 'border-yellow-500/40'
    },
    { 
      id: 'green', 
      label: 'Green Coffee Beans', 
      description: 'Bulk processing for factories & industries', 
      price: 'Starting from ₹600/kg',
      icon: Leaf,
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/40'
    },
    { 
      id: 'roasted', 
      label: 'Roasted Beans', 
      description: 'Ready-to-brew roasted coffee beans', 
      price: 'Starting from ₹800/kg',
      icon: Sun,
      gradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/40'
    },
    { 
      id: 'ground', 
      label: 'Ground Coffee', 
      description: 'Fine / Medium / Coarse grind options', 
      price: 'Starting from ₹900/kg',
      icon: Sparkles,
      gradient: 'from-purple-500/20 to-indigo-500/20',
      borderColor: 'border-purple-500/40'
    }
  ];

  const origins = [
    {
      id: 'mizoram',
      name: 'Mizoram Coffee',
      description: 'Grown in misty highlands, balanced aroma',
      characteristics: ['Misty Highlands', 'Balanced Aroma', 'Traditional Methods', 'Premium Quality'],
      gradient: 'from-blue-500/20 to-indigo-500/20',
      borderColor: 'border-blue-500/40'
    },
    {
      id: 'manipur',
      name: 'Manipur Coffee',
      description: 'Earthy tones, smooth finish',
      characteristics: ['Earthy Tones', 'Smooth Finish', 'Rich Body', 'Distinctive Flavor'],
      gradient: 'from-green-500/20 to-teal-500/20',
      borderColor: 'border-green-500/40'
    },
    {
      id: 'sikkim',
      name: 'Sikkim Coffee',
      description: 'Cool-climate beans, delicate acidity',
      characteristics: ['Cool Climate', 'Delicate Acidity', 'High Altitude', 'Refined Taste'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/40'
    },
    {
      id: 'meghalaya',
      name: 'Meghalaya Coffee',
      description: 'Bold body, rustic flavor',
      characteristics: ['Bold Body', 'Rustic Flavor', 'Tribal Heritage', 'Robust Character'],
      gradient: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/40'
    }
  ];

  const upcomingProducts = [
    {
      id: 'cocoa',
      name: 'Cocoa',
      description: 'Fermented, roasted, and crafted for chocolate lovers',
      icon: Coffee,
      status: 'Coming Soon'
    },
    {
      id: 'turmeric',
      name: 'Turmeric',
      description: 'Golden spice of the hills, rich in curcumin',
      icon: Sun,
      status: 'Coming Soon'
    },
    {
      id: 'spices',
      name: 'Other Spices',
      description: 'From Northeast farms to your kitchen',
      icon: Leaf,
      status: 'Coming Soon'
    }
  ];

  const canProceed = selectedBeanType && selectedStage && selectedOrigin;

  const handleEnquire = () => {
    const beanTypeName = beanTypes.find(b => b.id === selectedBeanType)?.name || '';
    const stageName = stages.find(s => s.id === selectedStage)?.label || '';
    const originName = origins.find(o => o.id === selectedOrigin)?.name || '';
    
    // Generate simple WhatsApp message
    const whatsappMessage = `Coffee Enquiry - Blue Mountain Coffee

Selected Requirements:
Bean Type: ${beanTypeName}
Processing Stage: ${stageName}
Origin: ${originName}

Please provide pricing and availability details.`;

    // Use proper WhatsApp URL format
    const whatsappURL = `https://api.whatsapp.com/send?phone=917085485883&text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Shop Coffee Beans | Northeast India Arabica Robusta - Blue Mountain</title>
        <meta name="description" content="Shop premium Arabica & Robusta coffee beans from Northeast India. Choose processing stage & origin. Wholesale coffee supply for cafes and roasters." />
        <meta name="keywords" content="buy coffee beans online, Northeast India coffee shop, Arabica Robusta coffee beans, wholesale coffee beans, coffee bean supplier, premium coffee beans India, specialty coffee beans, mountain grown coffee, tribal coffee beans" />
        <link rel="canonical" href="https://thebluemountaincoffee.com/shop" />
        <meta property="og:title" content="Shop Coffee Beans | Northeast India Arabica Robusta" />
        <meta property="og:description" content="Shop premium Arabica & Robusta coffee beans from Northeast India. Wholesale coffee supply for cafes and roasters." />
        <meta property="og:url" content="https://thebluemountaincoffee.com/shop" />
      </Helmet>
      <div className="pt-20 bg-charcoal">
      {/* Header */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-luxury-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-coffee-brown rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-off-white mb-8">
              Premium Northeast Coffee
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-off-white/80 leading-relaxed">
              Choose your bean type, processing stage, and origin. From raw berries to roasted blends, 
              we serve factories, roasters, distributors, and coffee enthusiasts nationwide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Step 1: Bean Type Selection */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-off-white mb-4">
                Step 1: Choose Bean Type
              </h2>
              <p className="text-off-white/70">
                Arabica or Robusta - each with unique characteristics
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {beanTypes.map((bean, index) => (
              <ScrollReveal key={bean.id} delay={0.1 * index}>
                <motion.div 
                  className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 border-2 h-full ${
                    selectedBeanType === bean.id 
                      ? `bg-gradient-to-br ${bean.gradient} border-luxury-gold shadow-2xl shadow-luxury-gold/20 transform scale-105` 
                      : `bg-gradient-to-br ${bean.gradient} border-luxury-gold/20 hover:border-luxury-gold/40 hover:shadow-xl hover:shadow-luxury-gold/10`
                  }`}
                  onClick={() => setSelectedBeanType(bean.id)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Floating Animation Background */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-luxury-gold/30 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${20 + (i % 2) * 60}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-r from-luxury-gold/30 to-luxury-gold/50 rounded-full flex items-center justify-center backdrop-blur-sm"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Coffee className="w-8 h-8 text-luxury-gold" />
                        </motion.div>
                        <div className="px-4 py-2 bg-luxury-gold/20 rounded-full backdrop-blur-sm border border-luxury-gold/30">
                          <span className="text-luxury-gold text-sm font-medium">Premium</span>
                        </div>
                      </div>
                      {selectedBeanType === bean.id && (
                        <motion.div 
                          className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          <Check className="w-6 h-6 text-charcoal" />
                        </motion.div>
                      )}
                    </div>
                    
                    <h3 className="font-playfair text-3xl font-bold text-off-white mb-4">
                      {bean.name}
                    </h3>
                    
                    <p className="text-off-white/80 mb-6 leading-relaxed">
                      {bean.description}
                    </p>

                    {/* Characteristics as nested cards */}
                    <div className="grid grid-cols-2 gap-3">
                      {bean.characteristics.map((char, idx) => (
                        <motion.div
                          key={idx}
                          className="p-3 bg-coffee-brown/40 rounded-lg backdrop-blur-sm border border-luxury-gold/20 group hover:border-luxury-gold/40 transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          <div className="flex items-center space-x-2">
                            <char.icon className={`w-4 h-4 ${char.color} group-hover:scale-110 transition-transform`} />
                            <span className="text-off-white/80 text-sm font-medium group-hover:text-off-white transition-colors">
                              {char.label}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Step 2: Stage Selection */}
      <section className="py-20 bg-coffee-brown/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-off-white mb-4">
                Step 2: Select Processing Stage
              </h2>
              <p className="text-off-white/70">
                From raw berries to ground coffee - choose your preferred stage
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {stages.map((stage, index) => (
              <ScrollReveal key={stage.id} delay={0.1 * index}>
                <motion.div 
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2 text-center h-full ${
                    selectedStage === stage.id 
                      ? `bg-gradient-to-br ${stage.gradient} border-luxury-gold shadow-2xl shadow-luxury-gold/20 transform scale-105` 
                      : `bg-gradient-to-br ${stage.gradient} ${stage.borderColor} hover:border-luxury-gold/40 hover:shadow-xl hover:shadow-luxury-gold/10`
                  }`}
                  onClick={() => setSelectedStage(stage.id)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-luxury-gold/40 rounded-full"
                        style={{
                          left: `${25 + i * 20}%`,
                          top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 2 + i,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4 relative">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-luxury-gold/30 to-luxury-gold/50 rounded-full flex items-center justify-center backdrop-blur-sm"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stage.icon className="w-8 h-8 text-luxury-gold" />
                      </motion.div>
                      {selectedStage === stage.id && (
                        <motion.div 
                          className="absolute -top-2 -right-2 w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          <Check className="w-5 h-5 text-charcoal" />
                        </motion.div>
                      )}
                    </div>
                    
                    <h3 className="font-playfair text-xl font-bold text-off-white mb-3">
                      {stage.label}
                    </h3>
                    
                    <div className="text-luxury-gold text-lg font-bold mb-3">
                      {stage.price}
                    </div>
                    
                    <p className="text-off-white/70 text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Step 3: Origin Selection */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-off-white mb-4">
                Step 3: Choose Origin
              </h2>
              <p className="text-off-white/70">
                Each region offers unique flavor profiles and characteristics
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {origins.map((origin, index) => (
              <ScrollReveal key={origin.id} delay={0.1 * index}>
                <motion.div 
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2 text-center h-full ${
                    selectedOrigin === origin.id 
                      ? `bg-gradient-to-br ${origin.gradient} border-luxury-gold shadow-2xl shadow-luxury-gold/20 transform scale-105` 
                      : `bg-gradient-to-br ${origin.gradient} ${origin.borderColor} hover:border-luxury-gold/40 hover:shadow-xl hover:shadow-luxury-gold/10`
                  }`}
                  onClick={() => setSelectedOrigin(origin.id)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Mountain animation */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-luxury-gold/50 rounded-full"
                        style={{
                          left: `${30 + i * 20}%`,
                          top: `${40 + (i % 2) * 20}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2.5 + i,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4 relative">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-luxury-gold/30 to-luxury-gold/50 rounded-full flex items-center justify-center backdrop-blur-sm"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Mountain className="w-8 h-8 text-luxury-gold" />
                      </motion.div>
                      {selectedOrigin === origin.id && (
                        <motion.div 
                          className="absolute -top-2 -right-2 w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          <Check className="w-5 h-5 text-charcoal" />
                        </motion.div>
                      )}
                    </div>
                    
                    <h3 className="font-playfair text-xl font-bold text-off-white mb-3">
                      {origin.name}
                    </h3>
                    
                    <p className="text-off-white/80 text-sm leading-relaxed mb-4">
                      {origin.description}
                    </p>

                    {/* Characteristics as small tags */}
                    <div className="flex flex-wrap gap-1 justify-center">
                      {origin.characteristics.slice(0, 2).map((char, idx) => (
                        <motion.span
                          key={idx}
                          className="px-2 py-1 bg-luxury-gold/20 rounded-full text-luxury-gold text-xs font-medium border border-luxury-gold/30"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Enquire Button */}
          <ScrollReveal delay={0.5}>
            <div className="text-center">
              {canProceed ? (
                <motion.button
                  onClick={handleEnquire}
                  className="inline-flex items-center px-12 py-4 bg-luxury-gold hover:bg-luxury-gold/90 text-charcoal font-bold text-lg transition-all duration-300 hover:shadow-gold-glow rounded-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enquire Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              ) : (
                <div className="inline-flex items-center px-12 py-4 bg-luxury-gold/20 text-off-white/40 font-medium text-lg rounded-xl cursor-not-allowed border-2 border-luxury-gold/10">
                  Complete All Steps First
                </div>
              )}
            </div>
          </ScrollReveal>

          {canProceed && (
            <ScrollReveal delay={0.7}>
              <div className="text-center mt-6">
                <p className="text-off-white/70">
                  Selected: <span className="text-luxury-gold font-medium">
                    {beanTypes.find(b => b.id === selectedBeanType)?.name} - {stages.find(s => s.id === selectedStage)?.label} - {origins.find(o => o.id === selectedOrigin)?.name}
                  </span>
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Upcoming Products */}
      <section className="py-20 bg-coffee-brown/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-off-white mb-4">
                Coming Soon
              </h2>
              <p className="text-off-white/70">
                Expanding our Northeast product range
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={0.1 * index}>
                <motion.div 
                  className="p-6 rounded-xl bg-coffee-brown/30 border border-luxury-gold/20 text-center opacity-75 hover:opacity-90 transition-opacity"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-12 h-12 text-luxury-gold mx-auto mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <product.icon className="w-full h-full" />
                  </motion.div>
                  <div className="px-3 py-1 bg-luxury-gold/20 rounded-full inline-block mb-4">
                    <span className="text-luxury-gold text-sm font-medium">{product.status}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-off-white mb-3">
                    {product.name}
                  </h3>
                  <p className="text-off-white/70 text-sm">
                    {product.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Shop;