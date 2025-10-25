import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import Container from '../../components/common/Container/Container';
import Loader from '../../components/common/Loader/Loader';
import { SkillsContext } from '../../contexts/SkillsContext';
import { AuthContext } from '../../contexts/AuthContext';

const SkillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { skills, loading } = useContext(SkillsContext);

  const [skill, setSkill] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && skills?.length > 0) {
      const foundSkill = skills.find((s) => s.skillId === parseInt(id));
      if (foundSkill) {
        setSkill(foundSkill);
        if (user) {
          setFormData({
            name: user.displayName || '',
            email: user.email || '',
          });
        }
      } else {
        toast.error('Skill not found');
        navigate('/');
      }
    }
  }, [id, loading, skills, user, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookSession = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    toast.success(
      `🎉 Session booked successfully with ${skill.providerName}!`,
      {
        duration: 4000,
        style: {
          background: '#10B981',
          color: '#fff',
          fontWeight: 'bold',
        },
      }
    );

    setFormData({ name: '', email: '' });
  };

  if (loading) return <Loader />;

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Skill Not Found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-linear-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
      <title>Skill-Swap | Skill Details</title>

      <Container>
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">
            Home
          </button>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{skill.skillName}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skill Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-96">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-bold rounded-full shadow-lg">
                  {skill.category}
                </span>
              </div>
              {skill.slotsAvailable <= 3 && (
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
                    Only {skill.slotsAvailable} slots left!
                  </span>
                </div>
              )}
            </div>

            {/* Skill Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Title & Rating */}
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                  {skill.skillName}
                </h1>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
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
                    <span className="text-xl font-bold text-gray-900">
                      {skill.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600 font-semibold">
                    {skill.slotsAvailable} slots available
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  About This Skill
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {skill.description}
                </p>
              </div>

              {/* Provider Info */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Your Instructor
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                    {skill.providerName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      {skill.providerName}
                    </p>
                    <p className="text-gray-600">{skill.providerEmail}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">
                        Verified Instructor
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                <div className="text-center mb-6">
                  <p className="text-gray-600 text-sm mb-2">Session Price</p>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-5xl font-black bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      ${skill.price}
                    </span>
                    <span className="text-gray-500 text-lg mb-2">/session</span>
                  </div>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleBookSession} className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Book Your Session
                  </h3>

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Book Session Now
                  </button>
                </form>

                {/* Features List */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">Instant confirmation</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">Free cancellation</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">24/7 support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillDetails;
