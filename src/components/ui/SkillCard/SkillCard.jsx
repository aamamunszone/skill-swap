import React from 'react';
import { Link } from 'react-router';

const SkillCard = ({ skill }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
      {/* Skill Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-full shadow-md">
            {skill.category}
          </span>
        </div>
        {/* Slots Badge */}
        {skill.slotsAvailable <= 3 && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-md animate-pulse">
              Only {skill.slotsAvailable} slots left
            </span>
          </div>
        )}
      </div>

      {/* Skill Content */}
      <div className="p-6">
        {/* Skill Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {skill.skillName}
        </h3>

        {/* Provider Name */}
        <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          {skill.providerName}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(skill.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>
          <span className="text-gray-700 font-semibold text-sm">
            {skill.rating.toFixed(1)}
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-3xl font-black text-blue-600">
              ${skill.price}
            </span>
            <span className="text-gray-500 text-sm ml-1">/session</span>
          </div>

          <Link
            to={`/skill/${skill.skillId}`}
            className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full hover:shadow-lg hover:scale-103 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
          >
            View Details
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
