import React, { useContext, useState, useMemo } from 'react';
import Container from '../../components/common/Container/Container';
import SkillCard from '../../components/ui/SkillCard/SkillCard';
import { SkillsContext } from '../../contexts/SkillsContext';
import Loader from '../../components/common/Loader/Loader';
import { Search } from 'lucide-react';

const AllSkills = () => {
  const { skills, loading } = useContext(SkillsContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('default');

  // Filter and sort skills
  const filteredAndSortedSkills = useMemo(() => {
    let result = [...skills];

    // Filter by search term
    if (searchTerm.trim()) {
      result = result.filter((skill) =>
        skill.skillName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by selected option
    if (sortOrder === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'name-asc') {
      result.sort((a, b) =>
        a.skillName.toLowerCase().localeCompare(b.skillName.toLowerCase())
      );
    } else if (sortOrder === 'name-desc') {
      result.sort((a, b) =>
        b.skillName.toLowerCase().localeCompare(a.skillName.toLowerCase())
      );
    }
    // 'default' keeps original order

    return result;
  }, [skills, searchTerm, sortOrder]);

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

        {/* Search and Sort Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Left Side - Results Count */}
          <div className="w-full md:w-auto">
            <p className="text-gray-700 font-medium text-lg">
              Showing{' '}
              <span className="font-bold text-blue-600">
                {filteredAndSortedSkills.length}
              </span>{' '}
              {filteredAndSortedSkills.length === 1 ? 'skill' : 'skills'}
            </p>
          </div>

          {/* Right Side - Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input input-bordered w-full pl-12 pr-4 rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Sort Select - DaisyUI */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select select-bordered w-full sm:w-52 rounded-full font-medium focus:outline-none focus:border-blue-500"
            >
              <option value="default">Default Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* Skills Grid */}
        {filteredAndSortedSkills.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredAndSortedSkills.map((skill) => (
              <SkillCard key={skill.skillId} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              No skills found
            </h3>
            <p className="text-gray-500">Try adjusting your search term</p>
          </div>
        )}

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
