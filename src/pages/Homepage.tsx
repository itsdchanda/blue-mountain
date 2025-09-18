import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Legacy from '../components/Legacy';
import FlavorProfile from '../components/FlavorProfile';
import OneRoast from '../components/OneRoast';
import ForBusiness from '../components/ForBusiness';
import Testimonials from '../components/Testimonials';
import ClosingSection from '../components/ClosingSection';

const Homepage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blue Mountain Coffee | Premium Arabica from Northeast India</title>
        <meta name="description" content="Premium Arabica & Robusta coffee beans from Northeast India. Direct from tribal farms in Mizoram, Sikkim, Meghalaya & Manipur. Wholesale coffee supplier." />
        <meta name="keywords" content="Northeast India coffee beans, premium Arabica coffee, Robusta coffee beans, wholesale coffee supplier India, specialty coffee beans, mountain grown coffee, tribal coffee farmers, direct trade coffee" />
        <link rel="canonical" href="https://thebluemountaincoffee.com/" />
        <meta property="og:title" content="Blue Mountain Coffee | Premium Arabica from Northeast India" />
        <meta property="og:description" content="Premium Arabica & Robusta coffee beans from Northeast India. Wholesale coffee supplier for cafes & roasters." />
        <meta property="og:url" content="https://thebluemountaincoffee.com/" />
      </Helmet>
      <div className="overflow-hidden">
      <Hero />
      <Legacy />
      <FlavorProfile />
      <OneRoast />
      <ForBusiness />
      <Testimonials />
      <ClosingSection />
      </div>
    </>
  );
};

export default Homepage;