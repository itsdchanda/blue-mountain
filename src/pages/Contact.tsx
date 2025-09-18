import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader, Instagram, Twitter, Youtube, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  const location = useLocation();
  const { selectedBeanType, selectedStage, selectedOrigin } = location.state || {};
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    location: '',
    monthlyRequirement: selectedBeanType && selectedStage && selectedOrigin
      ? `${selectedBeanType} - ${selectedStage} - ${selectedOrigin}` 
      : '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate WhatsApp message
    const whatsappMessage = `🌟 *New Coffee Enquiry - Blue Mountain Coffee* 🌟

👤 *Contact Person:* ${formData.contactPerson}
🏢 *Business Name:* ${formData.businessName}
📧 *Email:* ${formData.email}
📍 *Location:* ${formData.location}
${formData.monthlyRequirement ? `☕ *Coffee Selection:* ${formData.monthlyRequirement}` : ''}

💬 *Message:*
${formData.message}

---
*Sent via Blue Mountain Coffee Website*`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/917085485883?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    setSubmitStatus('success');
    setStatusMessage('Redirecting to WhatsApp... Please send the message to complete your enquiry.');
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        businessName: '',
        contactPerson: '',
        email: '',
        location: '',
        monthlyRequirement: selectedBeanType && selectedStage && selectedOrigin
          ? `${selectedBeanType} - ${selectedStage} - ${selectedOrigin}` 
          : '',
        message: ''
      });
      setSubmitStatus('idle');
      setStatusMessage('');
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Blue Mountain Coffee | Get Custom Quote for Coffee Beans</title>
        <meta name="description" content="Contact Blue Mountain Coffee for custom quotes on premium coffee beans from Northeast India. Wholesale supplier for cafes & roasters. Call +91 70854 85883." />
        <meta name="keywords" content="contact coffee supplier, coffee bean quote, wholesale coffee contact, Northeast India coffee supplier contact, bulk coffee order, coffee distributor contact, premium coffee beans quote" />
        <link rel="canonical" href="https://thebluemountaincoffee.com/contact" />
        <meta property="og:title" content="Contact Blue Mountain Coffee | Get Custom Quote" />
        <meta property="og:description" content="Contact us for custom quotes on premium Northeast India coffee beans. Wholesale supplier for cafes & roasters." />
        <meta property="og:url" content="https://thebluemountaincoffee.com/contact" />
      </Helmet>
      <div className="pt-20 bg-charcoal">
      {/* Header */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-luxury-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-coffee-brown rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-off-white mb-8">
              Get Your Custom Quote
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-off-white/80 leading-relaxed">
              Ready to serve India's finest coffee? Get a custom quotation for Berry or Parchment 
              process coffee, straight from Kolasib farms to your business. Limited quantities available!
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="bg-coffee-brown/30 rounded-lg p-8 glass-card backdrop-blur-sm border border-luxury-gold/20">
                <h2 className="font-playfair text-3xl font-bold text-off-white mb-8">
                  Custom Quotation Request
                </h2>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <p className="text-green-300">{statusMessage}</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-red-300">{statusMessage}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="contactPerson" className="block text-off-white/80 font-medium mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-charcoal/50 border border-luxury-gold/30 rounded-lg text-off-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-colors backdrop-blur-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="businessName" className="block text-off-white/80 font-medium mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-charcoal/50 border border-luxury-gold/30 rounded-lg text-off-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-colors backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-off-white/80 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-charcoal/50 border border-luxury-gold/30 rounded-lg text-off-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-colors backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-off-white/80 font-medium mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-charcoal/50 border border-luxury-gold/30 rounded-lg text-off-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-colors backdrop-blur-sm"
                    />
                  </div>


                  <div>
                    <label htmlFor="message" className="block text-off-white/80 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-charcoal/50 border border-luxury-gold/30 rounded-lg text-off-white focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-colors resize-none backdrop-blur-sm"
                      placeholder="Tell us about your coffee requirements, quantity needed, preferred processing method (Berry/Parchment), and any special needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 bg-luxury-gold hover:bg-luxury-gold/90 text-charcoal hover:shadow-gold-glow"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <div className="space-y-8">
              <ScrollReveal delay={0.2}>
                <div>
                  <h2 className="font-playfair text-3xl font-bold text-off-white mb-6">
                    Contact Information
                  </h2>
                  <p className="text-off-white/80 text-lg leading-relaxed mb-8">
                    Ready to experience India's finest coffee? Contact us for custom quotations, 
                    bulk orders, or any questions about our Berry and Parchment process coffees.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal delay={0.3}>
                  <a 
                    href="https://maps.google.com/?q=Northeast+India" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 glass-card bg-coffee-brown/20 rounded-lg backdrop-blur-sm border border-luxury-gold/10 hover:border-luxury-gold/40 transition-all duration-300 group"
                  >
                    <MapPin className="w-6 h-6 text-luxury-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-medium text-off-white mb-1 group-hover:text-luxury-gold transition-colors">Location</h3>
                      <p className="text-off-white/70 group-hover:text-off-white transition-colors">Northeast India</p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <a 
                    href="tel:+917085485883"
                    className="flex items-start space-x-4 p-4 glass-card bg-coffee-brown/20 rounded-lg backdrop-blur-sm border border-luxury-gold/10 hover:border-luxury-gold/40 transition-all duration-300 group"
                  >
                    <Phone className="w-6 h-6 text-luxury-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-medium text-off-white mb-1 group-hover:text-luxury-gold transition-colors">Phone</h3>
                      <p className="text-off-white/70 group-hover:text-off-white transition-colors">+91 70854 85883</p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <a 
                    href="mailto:the.bluemountainofficial@gmail.com"
                    className="flex items-start space-x-4 p-4 glass-card bg-coffee-brown/20 rounded-lg backdrop-blur-sm border border-luxury-gold/10 hover:border-luxury-gold/40 transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 text-luxury-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-medium text-off-white mb-1 group-hover:text-luxury-gold transition-colors">Email</h3>
                      <p className="text-off-white/70 group-hover:text-off-white transition-colors">the.bluemountainofficial@gmail.com</p>
                    </div>
                  </a>
                </ScrollReveal>

                {/* Social Media Links */}
                <ScrollReveal delay={0.55}>
                  <div className="flex items-start space-x-4 p-4 glass-card bg-coffee-brown/20 rounded-lg backdrop-blur-sm border border-luxury-gold/10">
                    <div className="flex space-x-3 mt-1">
                      <motion.a 
                        href="https://instagram.com/blue.mountain.official" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                      >
                        <Instagram className="w-4 h-4 text-luxury-gold" />
                      </motion.a>
                      <motion.a 
                        href="https://www.facebook.com/bluemountainofficial/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                      >
                        <Facebook className="w-4 h-4 text-luxury-gold" />
                      </motion.a>
                      <motion.a 
                        href="https://www.linkedin.com/company/blue-mountain-official" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-luxury-gold" />
                      </motion.a>
                      <motion.a 
                        href="https://twitter.com/bluemountainltd" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-luxury-gold" />
                      </motion.a>
                      <motion.a 
                        href="https://www.youtube.com/@the.BlueMountain" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center hover:bg-luxury-gold/30 transition-colors"
                      >
                        <Youtube className="w-4 h-4 text-luxury-gold" />
                      </motion.a>
                    </div>
                    <div>
                      <h3 className="font-medium text-off-white mb-1">Follow Us</h3>
                      <p className="text-off-white/70 text-sm">Stay updated with our latest offerings</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.6}>
                <div className="bg-coffee-brown/30 rounded-lg p-6 glass-card backdrop-blur-sm border border-luxury-gold/20">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-luxury-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-luxury-gold mb-4">
                        Quick Response
                      </h3>
                      <p className="text-off-white/80">
                        We respond to all custom quotation requests within 24 hours. For urgent 
                        orders or questions, call us directly at +91 70854 85883.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Message */}
      <section className="py-20 bg-coffee-brown/20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <p className="font-playfair text-2xl text-luxury-gold font-medium">
              "From Northeast hills to your business - premium coffee, sustainably sourced."
            </p>
          </ScrollReveal>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact;