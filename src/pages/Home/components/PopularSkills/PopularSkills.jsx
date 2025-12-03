import React, { useContext } from 'react';
import { Link } from 'react-router';
import Container from '../../../../components/common/Container/Container';
import SkillCard from '../../../../components/ui/SkillCard/SkillCard';
import { SkillsContext } from '../../../../contexts/SkillsContext';
import Loader from '../../../../components/common/Loader/Loader';

const PopularSkills = () => {
  const { skills, loading } = useContext(SkillsContext);

  if (loading) return <Loader />;

  const topSkills = [...skills].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <div className="py-16 md:py-24 bg-linear-to-br from-blue-50 via-white to-cyan-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Popular{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the most in-demand skills and start your learning journey
            today
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {topSkills.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/all-skills"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Explore All Skills
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PopularSkills;
