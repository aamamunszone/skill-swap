import React from 'react';
import Container from '../../../../components/common/Container/Container';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Create Your Profile',
      description:
        'Sign up and set up your profile with your skills and interests. Let others know what you can teach and what you want to learn.',
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      id: 2,
      title: 'Browse & Discover',
      description:
        'Explore hundreds of skills from guitar lessons to coding bootcamps. Filter by category, price, and rating to find your perfect match.',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      id: 3,
      title: 'Book Your Session',
      description:
        'Choose your preferred time slot and book a session with your chosen instructor. Get instant confirmation and reminders.',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50',
    },
    {
      id: 4,
      title: 'Learn & Grow',
      description:
        'Attend your session, ask questions, and practice. Rate your experience and help others find the best instructors.',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            How It{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Start your learning journey in just four simple steps. It's easy,
            fast, and designed for your success.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative group animate-slideUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connecting Line (Hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-linear-to-r from-gray-300 to-transparent -translate-y-1/2 z-0">
                  <div className="absolute right-0 -top-1 w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
                </div>
              )}

              {/* Step Card */}
              <div
                className={`relative ${step.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border-2 border-transparent hover:border-gray-200 group-hover:scale-105`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                  {step.id}
                </div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 bg-linear-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fadeIn animation-delay-600">
          <div className="bg-linear-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of learners and instructors building skills
              together. Your journey begins today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                Browse All Skills
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300">
                Become a Provider
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '10,000+', label: 'Active Learners' },
            { number: '500+', label: 'Expert Instructors' },
            { number: '100+', label: 'Skill Categories' },
            { number: '4.8/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 100 + 800}ms` }}
            >
              <div className="text-3xl md:text-4xl font-black bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HowItWorksSection;
