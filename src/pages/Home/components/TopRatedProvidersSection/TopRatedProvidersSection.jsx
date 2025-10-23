import React, { useContext, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Container from '../../../../components/common/Container/Container';
import { SkillsContext } from '../../../../contexts/SkillsContext';
import Loader from '../../../../components/common/Loader/Loader';

const TopRatedProvidersSection = () => {
  const { skills, loading } = useContext(SkillsContext);

  //  Generate profile image URL based on name
  const generateProfileImage = (name) => {
    const seed = encodeURIComponent(name);
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
  };

  const providers = useMemo(() => {
    if (!skills.length) return [];

    const providerMap = {};

    skills.forEach((skill) => {
      if (!providerMap[skill.providerEmail]) {
        providerMap[skill.providerEmail] = {
          name: skill.providerName,
          email: skill.providerEmail,
          skills: [],
          totalRating: 0,
          category: skill.category,
        };
      }
      providerMap[skill.providerEmail].skills.push(skill);
      providerMap[skill.providerEmail].totalRating += skill.rating;
    });

    return Object.values(providerMap)
      .map((provider) => ({
        ...provider,
        averageRating: (provider.totalRating / provider.skills.length).toFixed(
          1
        ),
        skillCount: provider.skills.length,
        totalStudents: Math.floor(Math.random() * 500) + 100,
        profileImage: generateProfileImage(provider.name),
      }))
      .sort((a, b) => b.averageRating - a.averageRating)
      .slice(0, 10);
  }, [skills]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="py-16 md:py-24 bg-linear-to-br from-blue-50 via-white to-cyan-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Top Rated{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Providers
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from the best instructors with proven track records and
            excellent student feedback
          </p>
        </div>

        {/* Providers Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 32,
              },
            }}
            className="pb-12"
          >
            {providers.map((provider) => (
              <SwiperSlide key={provider.email}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 p-6">
                  {/* Profile Image */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-linear-to-br from-blue-400 to-cyan-400 p-1 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={provider.profileImage}
                        alt={provider.name}
                        className="w-full h-full rounded-full bg-white object-cover"
                      />
                    </div>
                    {/* Verified Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified
                      </div>
                    </div>
                  </div>

                  {/* Provider Info */}
                  <div className="text-center mt-6">
                    {/* Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {provider.name}
                    </h3>

                    {/* Category */}
                    <p className="text-sm text-gray-500 mb-3">
                      {provider.category} Expert
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-bold text-gray-900">
                          {provider.averageRating}
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

                      {/* Skills Count */}
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">
                          {provider.skillCount}
                        </span>{' '}
                        Skills
                      </div>
                    </div>

                    {/* Students Count */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
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
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>
                        <span className="font-semibold text-gray-900">
                          {provider.totalStudents}+
                        </span>{' '}
                        Students
                      </span>
                    </div>

                    {/* View Profile Button */}
                    <button className="w-full py-2.5 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:scale-103 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                      View Profile
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
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default TopRatedProvidersSection;
