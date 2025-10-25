import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import PopularSkills from './components/PopularSkills/PopularSkills';
import TopRatedProvidersSection from './components/TopRatedProvidersSection/TopRatedProvidersSection';
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';

const Home = () => {
  return (
    <>
      <title>Skill-Swap | Home</title>

      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* Popular Skills Section */}
      <section>
        <PopularSkills />
      </section>

      {/* Top Rated Providers Section */}
      <section>
        <TopRatedProvidersSection />
      </section>

      {/* How It Works Section */}
      <section>
        <HowItWorksSection />
      </section>

      {/* Testimonials Section */}
      <section>
        <TestimonialsSection />
      </section>
    </>
  );
};

export default Home;
