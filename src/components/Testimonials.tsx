import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Exceptional quality coffee from Northeast India. Our customers love the unique flavor profile and keep coming back for more.",
      author: "Arjun Sharma",
      position: "Café Owner",
      location: "Mumbai",
      rating: 5
    },
    {
      id: 2,
      text: "The Arabica variety has amazing floral notes. Perfect for our premium blends and our clients are extremely satisfied.",
      author: "Kavya Patel",
      position: "Coffee Roaster",
      location: "Bangalore",
      rating: 5
    },
    {
      id: 3,
      text: "Consistent quality and fresh delivery. Blue Mountain has become our trusted coffee supplier for all our outlets.",
      author: "Vikram Singh",
      position: "Restaurant Chain Director",
      location: "Delhi",
      rating: 5
    },
    {
      id: 4,
      text: "The Robusta beans create perfect crema for our espresso. Great body and flavor that our customers appreciate.",
      author: "Meera Gupta",
      position: "Coffee Distributor",
      location: "Pune",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-off-white mb-8">
              What Our Partners Say
            </h2>
            <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
              From cafés to roasters, distributors to restaurants - hear from businesses 
              who've experienced the Northeast India coffee difference.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex justify-center mb-8"
              >
                <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-luxury-gold" />
                </div>
              </motion.div>

              {/* Testimonial Text */}
              <motion.blockquote 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-playfair text-2xl md:text-3xl lg:text-4xl text-off-white font-medium italic leading-relaxed mb-8"
              >
                "{testimonials[currentIndex].text}"
              </motion.blockquote>

              {/* Rating Stars */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex justify-center mb-6"
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                  >
                    <Star className="w-6 h-6 text-luxury-gold fill-current mx-1" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="space-y-2"
              >
                <h4 className="text-luxury-gold font-bold text-xl">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-off-white/70">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-off-white/50 text-sm">
                  {testimonials[currentIndex].location}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors border border-luxury-gold/30"
            >
              <ChevronLeft className="w-6 h-6 text-luxury-gold" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-luxury-gold' 
                      : 'bg-luxury-gold/30 hover:bg-luxury-gold/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors border border-luxury-gold/30"
            >
              <ChevronRight className="w-6 h-6 text-luxury-gold" />
            </motion.button>
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.8}>
          <div className="text-center mt-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-0.5 bg-luxury-gold mx-auto mb-6"
            />
            <p className="text-off-white/60 text-lg">
              Join hundreds of satisfied partners across India
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;