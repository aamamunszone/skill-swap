import Container from '../../components/common/Container/Container';
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Shield,
  Headphones,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Skill Exchange',
      description:
        'Connect with learners and experts to exchange skills. Teach what you know and learn what you need in a collaborative environment.',
      linear: 'from-blue-500 to-cyan-400',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Community Learning',
      description:
        'Join a vibrant community of passionate learners. Participate in group sessions, workshops, and collaborative learning experiences.',
      linear: 'from-purple-500 to-pink-400',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Skill Certification',
      description:
        'Earn recognized certificates upon completing skills. Showcase your achievements and build your professional portfolio.',
      linear: 'from-orange-500 to-red-400',
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Progress Tracking',
      description:
        'Monitor your learning journey with detailed analytics. Track milestones, set goals, and visualize your skill development.',
      linear: 'from-green-500 to-teal-400',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Verified Profiles',
      description:
        'Learn from verified experts with proven credentials. Our verification system ensures quality and trustworthy learning experiences.',
      linear: 'from-indigo-500 to-blue-400',
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: '24/7 Support',
      description:
        'Get help whenever you need it. Our dedicated support team is always ready to assist you with any questions or concerns.',
      linear: 'from-pink-500 to-rose-400',
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50 py-16">
      <title>Skill-Swap | Services</title>

      <Container>
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the powerful features that make Skill-Swap the ultimate
            platform for learning and teaching
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
            >
              {/* Icon with linear Background */}
              <div
                className={`w-20 h-20 rounded-2xl bg-linear-to-r ${service.linear} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of learners and experts who are already transforming
            their skills on Skill-Swap
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-xl hover:scale-[1.05] transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-4xl font-black bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
              10K+
            </div>
            <div className="text-gray-600 font-semibold">Active Users</div>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-4xl font-black bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-gray-600 font-semibold">Skills Available</div>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-4xl font-black bg-linear-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-gray-600 font-semibold">
              Sessions Completed
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-4xl font-black bg-linear-to-r from-green-600 to-teal-500 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-600 font-semibold">Satisfaction Rate</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
