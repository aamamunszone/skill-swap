import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import PopularSkills from './components/PopularSkills/PopularSkills';
import TopRatedProvidersSection from './components/TopRatedProvidersSection/TopRatedProvidersSection';
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
