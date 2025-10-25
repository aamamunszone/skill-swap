import React, { useContext } from 'react';
import Container from '../../components/common/Container/Container';
import SkillCard from '../../components/ui/SkillCard/SkillCard';
import { SkillsContext } from '../../contexts/SkillsContext';
import Loader from '../../components/common/Loader/Loader';

const AllSkills = () => {
  const { skills, loading } = useContext(SkillsContext);

  if (loading) return <Loader />;

  return (
    <div className="py-16 md:py-24 bg-linear-to-br from-blue-50 via-white to-cyan-50">
      <title>Skill-Swap | All Skills</title>

      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            All{' '}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}
        </div>

        {/* Go To Top Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
          >
            Go to Top
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
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AllSkills;
