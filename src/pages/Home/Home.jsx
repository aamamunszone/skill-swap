import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import PopularSkills from './components/PopularSkills/PopularSkills';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* Popular Skills Section */}
      <section>
        <PopularSkills />
      </section>
    </div>
  );
};

export default Home;
