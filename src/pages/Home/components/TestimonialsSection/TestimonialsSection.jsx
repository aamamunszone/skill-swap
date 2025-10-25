import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Container from '../../../../components/common/Container/Container';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      image: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
      text: 'SkillSwap transformed my career! I learned web development from an amazing instructor and landed my dream job within 3 months. The platform is intuitive and the community is incredibly supportive.',
      skill: 'Web Development',
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Freelance Designer',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: 'As a provider, SkillSwap has connected me with passionate learners worldwide. I have taught over 200 students and the feedback system helps me improve constantly. Best decision I ever made!',
      skill: 'Graphic Design',
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Software Engineer',
      image: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      text: 'The quality of instructors here is exceptional. I took Python courses and the practical approach made learning so much easier. Already recommended to my entire team!',
      skill: 'Python Programming',
      date: '3 weeks ago',
    },
    {
      id: 4,
      name: 'David Kumar',
      role: 'Entrepreneur',
      image: 'https://i.pravatar.cc/150?img=14',
      rating: 4,
      text: 'Learning digital marketing on SkillSwap helped me grow my business exponentially. The instructors are industry experts and the sessions are always engaging and valuable.',
      skill: 'Digital Marketing',
      date: '2 months ago',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Content Creator',
      image: 'https://i.pravatar.cc/150?img=48',
      rating: 5,
      text: 'I was skeptical at first, but the video editing course exceeded all my expectations. The instructor was patient, knowledgeable, and the practical projects were incredibly useful.',
      skill: 'Video Editing',
      date: '1 month ago',
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Data Analyst',
      image: 'https://i.pravatar.cc/150?img=68',
      rating: 5,
      text: 'The data science bootcamp was worth every penny. Real-world projects, expert guidance, and a supportive community made complex topics easy to understand. Highly recommend!',
      skill: 'Data Science',
      date: '3 weeks ago',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-linear-to-tr from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold">
              ⭐ Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What Our{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Learners Say
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied learners who've transformed their
            careers through SkillSwap
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative mb-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg
                      className="w-10 h-10 text-blue-600 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 grow">
                    "{testimonial.text}"
                  </p>

                  {/* Skill Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full">
                      {testimonial.skill}
                    </span>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 p-0.5 shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 animate-fadeIn animation-delay-800">
          <p className="text-gray-600 mb-4 text-lg">
            Ready to start your learning journey?
          </p>
          <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            Get Started Today
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
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
