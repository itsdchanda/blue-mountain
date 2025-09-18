import React, { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Mountain, Star, CloudRain, Heart, Coffee, Sun, Award, Sunrise, TreePine, Compass, Wind, Droplets } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const mistY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Story flow animation
  const storyLines = [
    "In Mizoram, morning mist kisses the coffee cherries.",
    "In Sikkim, prayer flags bless the harvest.",
    "In Meghalaya, clouds and rain gift earthy strength.",
    "In Manipur, nine hills guard the jewel of the East."
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentStoryIndex((prev) => (prev + 1) % storyLines.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, storyLines.length]);

  const heritageCards = [
    {
      id: 'mizoram',
      name: 'Mizoram',
      title: 'The Misty Highlands',
      frontText: 'Floral Notes • Mist-Kissed • Highland Grown',
      backText: 'At 1,200m, Mizoram\'s cool highlands give clarity and delicate floral notes. Traditional Mizo farming wisdom shapes coffee as light and pure as the morning clouds.',
      icon: Mountain,
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      accentColor: 'text-blue-300',
      features: ['Highland Grown', 'Floral Notes', 'Mist-Kissed', 'Traditional Methods']
    },
    {
      id: 'sikkim',
      name: 'Sikkim',
      title: 'Himalayan Heights',
      frontText: 'Complex Flavors • Highest Altitude • Buddhist Blessed',
      backText: 'At 2,000m, coffee matures slowly in thin mountain air. Blessed by prayer flags, every bean carries serenity and depth from the Himalayan sky.',
      icon: Star,
      gradient: 'from-cyan-500 via-teal-500 to-blue-600',
      accentColor: 'text-cyan-300',
      features: ['Highest Altitude', 'Complex Flavors', 'Buddhist Blessed', 'Slow Matured']
    },
    {
      id: 'meghalaya',
      name: 'Meghalaya',
      title: 'Abode of Clouds',
      frontText: 'Rain Blessed • Shade-Grown • Tribal Heritage',
      backText: 'Under living root bridges and ancient trees, Khasi farmers grow shade coffee in harmony with nature—bold, earthy, and rain-nurtured.',
      icon: CloudRain,
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      accentColor: 'text-green-300',
      features: ['Shade Grown', 'Living Bridges', 'Rain Blessed', 'Tribal Heritage']
    },
    {
      id: 'manipur',
      name: 'Manipur',
      title: 'Jewel of the East',
      frontText: 'Smooth Finish • Cultural Heritage • Nine Hills',
      backText: 'From valleys surrounded by nine hills, Manipuri coffee offers a smooth, balanced finish—a cultural blend of tradition and modern craft.',
      icon: Heart,
      gradient: 'from-amber-500 via-orange-500 to-red-600',
      accentColor: 'text-amber-300',
      features: ['Valley Grown', 'Cultural Heritage', 'Smooth Finish', 'Nine Hills']
    }
  ];

  const journeySteps = [
    {
      id: 'harvest',
      title: 'Dawn Harvest',
      description: 'Handpicked cherries at sunrise when morning dew still clings to each berry',
      icon: Sunrise,
      gradient: 'from-orange-400 to-red-500',
      animation: 'dewDrops'
    },
    {
      id: 'process',
      title: 'Traditional Processing',
      description: 'Berry & Parchment methods passed down through generations of tribal wisdom',
      icon: Coffee,
      gradient: 'from-amber-400 to-yellow-500',
      animation: 'swirling'
    },
    {
      id: 'dry',
      title: 'Mountain Sun Drying',
      description: 'Natural drying under tribal care on handwoven bamboo mats',
      icon: Sun,
      gradient: 'from-yellow-400 to-orange-500',
      animation: 'sunRays'
    },
    {
      id: 'craft',
      title: 'Artisan Crafting',
      description: 'From green beans to perfect roast with modern precision and ancient wisdom',
      icon: Award,
      gradient: 'from-green-400 to-emerald-500',
      animation: 'transformation'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Story | Blue Mountain Coffee Heritage from Northeast India</title>
        <meta name="description" content="Discover Blue Mountain Coffee heritage from Northeast India. Learn about tribal farmers in Mizoram, Sikkim, Meghalaya & Manipur crafting premium coffee beans." />
        <meta name="keywords" content="Blue Mountain Coffee story, Northeast India coffee heritage, Mizoram coffee farmers, Sikkim Himalayan coffee, Meghalaya shade grown coffee, Manipur valley coffee, tribal coffee farming, traditional coffee processing, mountain grown coffee beans" />
        <link rel="canonical" href="https://thebluemountaincoffee.com/about" />
        <meta property="og:title" content="Our Story | Blue Mountain Coffee Heritage from Northeast India" />
        <meta property="og:description" content="Discover Blue Mountain Coffee heritage from Northeast India tribal farmers crafting premium coffee beans." />
        <meta property="og:url" content="https://thebluemountaincoffee.com/about" />
      </Helmet>
      <div ref={containerRef} className="pt-20 bg-charcoal overflow-hidden">
      {/* SEO Content */}
      <div className="sr-only">
        <h1>Blue Mountain Coffee - Premium Northeast India Coffee Heritage Story</h1>
        <p>Discover the authentic heritage of Blue Mountain Coffee from Mizoram, Sikkim, Meghalaya, and Manipur. Premium Arabica and Robusta coffee beans crafted by tribal farmers in Northeast India's sacred mountains.</p>
      </div>

      {/* Opening Scene - Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-coffee-brown via-charcoal/90 to-charcoal">
            {/* Mist Animation */}
            <motion.div
              style={{ y: mistY }}
              className="absolute inset-0 opacity-30"
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-gradient-to-r from-luxury-gold/20 to-transparent rounded-full blur-3xl"
                  style={{
                    width: `${100 + i * 50}px`,
                    height: `${60 + i * 30}px`,
                    left: `${10 + (i * 15) % 80}%`,
                    top: `${20 + (i * 10) % 60}%`,
                  }}
                  animate={{
                    x: [0, 50, 0],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    delay: i * 1.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Coffee Cherries Animation */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-luxury-gold/40 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <ScrollReveal>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <div className="inline-block p-6 bg-luxury-gold/10 rounded-full backdrop-blur-sm border border-luxury-gold/20 mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Coffee className="w-16 h-16 text-luxury-gold" />
                </motion.div>
              </div>
              
              <motion.p 
                className="font-playfair text-2xl md:text-3xl text-luxury-gold italic mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                "Where mountains meet the clouds, and tribal hands nurture the earth,<br />
                coffee is not just a drink—it is a way of life."
              </motion.p>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <motion.h1 
              className="font-playfair text-6xl md:text-8xl font-bold text-off-white leading-tight mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Blue Mountain
              <span className="block text-luxury-gold text-4xl md:text-5xl mt-4">
                Crafted in the Heart of Northeast India
              </span>
            </motion.h1>
          </ScrollReveal>
        </div>
      </section>

      {/* The Journey Begins - Story Flow */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-coffee-brown/20 to-charcoal">
          {/* Floating Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            >
              <TreePine className="w-8 h-8 text-luxury-gold" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-off-white mb-16">
              The Journey Begins
            </h2>
          </ScrollReveal>

          {/* Animated Story Lines */}
          <div className="space-y-12">
            {storyLines.map((line, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center space-x-4">
                  <motion.div
                    className="w-3 h-3 bg-luxury-gold rounded-full"
                    animate={{
                      scale: currentStoryIndex === index ? [1, 1.5, 1] : 1,
                      opacity: currentStoryIndex === index ? [0.5, 1, 0.5] : 0.5,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <p className={`font-playfair text-xl md:text-2xl leading-relaxed transition-all duration-500 ${
                    currentStoryIndex === index ? 'text-luxury-gold scale-105' : 'text-off-white/70'
                  }`}>
                    {line}
                  </p>
                </div>
                
                {/* Subtle illustration */}
                <motion.div
                  className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-20"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: currentStoryIndex === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {index === 0 && <Mountain className="w-6 h-6 text-luxury-gold" />}
                  {index === 1 && <Star className="w-6 h-6 text-luxury-gold" />}
                  {index === 2 && <CloudRain className="w-6 h-6 text-luxury-gold" />}
                  {index === 3 && <Heart className="w-6 h-6 text-luxury-gold" />}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Cards - Interactive Flip Cards */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-brown/10 via-charcoal to-coffee-brown/10">
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-luxury-gold/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-off-white mb-8">
                Heritage Cards
              </h2>
              <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
                Four sacred lands, each with its unique story and coffee character
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Flip Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heritageCards.map((card, index) => (
              <ScrollReveal key={card.id} delay={0.1 * index}>
                <motion.div
                  className="group perspective-1000 h-80"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front of Card */}
                    <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-6 flex flex-col justify-between`}>
                      {/* Floating Particles */}
                      <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/40 rounded-full"
                            style={{
                              left: `${20 + i * 15}%`,
                              top: `${30 + (i % 2) * 40}%`,
                            }}
                            animate={{
                              y: [0, -20, 0],
                              opacity: [0.3, 0.8, 0.3],
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

                      <div className="relative z-10 text-center">
                        <motion.div
                          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <card.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                          {card.name}
                        </h3>
                        <p className="text-white/80 text-sm font-medium mb-4">
                          {card.title}
                        </p>
                      </div>

                      <div className="relative z-10">
                        <p className="text-white/90 text-sm text-center leading-relaxed">
                          {card.frontText}
                        </p>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-charcoal/95 to-coffee-brown/95 p-6 flex flex-col justify-center backdrop-blur-sm border border-luxury-gold/20`}>
                      <div className="text-center">
                        <card.icon className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                        <h4 className="font-playfair text-xl font-bold text-luxury-gold mb-4">
                          {card.name} Heritage
                        </h4>
                        <p className="text-off-white/80 text-sm leading-relaxed mb-6">
                          {card.backText}
                        </p>
                        
                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2">
                          {card.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="px-2 py-1 bg-luxury-gold/20 rounded-full text-luxury-gold text-xs font-medium text-center border border-luxury-gold/30"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Coffee Journey - Animated Timeline */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-coffee-brown/10 to-charcoal">
          {/* Timeline Background */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M0,50 Q25,30 50,50 T100,50"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                className="text-luxury-gold"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </svg>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-off-white mb-8">
                Sacred Coffee Journey
              </h2>
              <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
                From dawn to cup - the ancient path of coffee craftsmanship
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => (
              <ScrollReveal key={step.id} delay={0.2 * index}>
                <motion.div
                  className="relative group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Card */}
                  <div className="relative p-8 rounded-2xl bg-coffee-brown/30 backdrop-blur-sm border border-luxury-gold/20 text-center h-full">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center">
                      <span className="text-charcoal font-bold text-sm">{index + 1}</span>
                    </div>

                    {/* Animated Icon */}
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-8 h-8 text-white relative z-10" />
                      
                      {/* Animation Effects */}
                      {step.animation === 'dewDrops' && (
                        <div className="absolute inset-0">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white/60 rounded-full"
                              style={{
                                left: `${30 + i * 20}%`,
                                top: `${20 + i * 15}%`,
                              }}
                              animate={{
                                y: [0, 10, 0],
                                opacity: [0.6, 1, 0.6],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </div>
                      )}
                      
                      {step.animation === 'swirling' && (
                        <motion.div
                          className="absolute inset-2 border border-white/30 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                      
                      {step.animation === 'sunRays' && (
                        <div className="absolute inset-0">
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-0.5 h-4 bg-white/40"
                              style={{
                                left: '50%',
                                top: '10%',
                                transformOrigin: 'bottom',
                                transform: `rotate(${i * 90}deg)`,
                              }}
                              animate={{
                                opacity: [0.4, 0.8, 0.4],
                                scaleY: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </motion.div>

                    <h3 className="font-playfair text-xl font-bold text-off-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-off-white/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connection Line */}
                  {index < journeySteps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-luxury-gold to-luxury-gold/20"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Scene - Immersive Quote */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-coffee-brown/30 to-charcoal">
          {/* Tribal Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="tribalPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="currentColor" className="text-luxury-gold"/>
                  <path d="M5,5 L15,15 M15,5 L5,15" stroke="currentColor" strokeWidth="0.5" className="text-luxury-gold"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#tribalPattern)" />
            </svg>
          </div>

          {/* Coffee Steam Animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-12 bg-gradient-to-t from-luxury-gold/30 to-transparent rounded-full"
                style={{
                  left: `${45 + i * 2}%`,
                  bottom: '30%',
                }}
                animate={{
                  y: [0, -80, -160],
                  opacity: [0, 0.6, 0],
                  scaleX: [1, 1.5, 2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <motion.div
              className="inline-block mb-12"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-luxury-gold to-amber-600 rounded-full flex items-center justify-center shadow-2xl">
                <Coffee className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <motion.blockquote 
              className="font-playfair text-3xl md:text-4xl lg:text-5xl text-off-white font-medium italic leading-relaxed mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              "Every cup of Blue Mountain Coffee carries the soul of the mountains, 
              the rhythm of tribal heritage, and the promise of a perfect morning."
            </motion.blockquote>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-3 px-8 py-4 bg-luxury-gold/10 rounded-full backdrop-blur-sm border border-luxury-gold/20">
                <Coffee className="w-6 h-6 text-luxury-gold" />
                <span className="font-playfair text-xl font-bold text-luxury-gold">
                  Blue Mountain Coffee
                </span>
              </div>
              <p className="text-luxury-gold/80 text-lg mt-4 font-medium">
                Liquid Heritage of Northeast India
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;