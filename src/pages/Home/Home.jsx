import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import PopularSkills from './components/PopularSkills/PopularSkills';
import TopRatedProvidersSection from './components/TopRatedProvidersSection/TopRatedProvidersSection';

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

      {/* Top Rated Providers Section */}
      <section>
        <TopRatedProvidersSection />
      </section>
    </div>
  );
};

export default Home;
