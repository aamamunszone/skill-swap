import Container from '../../components/common/Container/Container';
import SkillSwapLogo from '../../assets/logos/skill-swap-logo.png';
import { Target, Users, Lightbulb, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Mission',
      description:
        'Empowering individuals to grow their skills and share knowledge in a collaborative environment.',
      linear: 'from-blue-500 to-cyan-400',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description:
        'Leveraging technology to create engaging and interactive learning experiences for everyone.',
      linear: 'from-purple-500 to-pink-400',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description:
        'Building a global network of learners and mentors who support and inspire each other.',
      linear: 'from-orange-500 to-red-400',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description:
        'Committed to providing high-quality learning opportunities and recognized certifications.',
      linear: 'from-green-500 to-teal-400',
    },
  ];

  const stats = [
    {
      number: '10,000+',
      label: 'Active Learners',
      linear: 'from-blue-600 to-cyan-500',
    },
    {
      number: '500+',
      label: 'Expert Mentors',
      linear: 'from-purple-600 to-pink-500',
    },
    {
      number: '50+',
      label: 'Countries',
      linear: 'from-orange-600 to-red-500',
    },
    {
      number: '98%',
      label: 'Satisfaction',
      linear: 'from-green-600 to-teal-500',
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50 py-16">
      <title>Skill-Swap | About</title>

      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <img
            src={SkillSwapLogo}
            alt="SkillSwap Logo"
            className="w-32 mx-auto mb-6 hover:scale-110 transition-transform duration-300"
          />
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            About{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              SkillSwap
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Connecting learners and mentors from around the world to create a
            collaborative ecosystem of growth and knowledge sharing
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">
              <Globe className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          </div>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              SkillSwap is a platform dedicated to connecting learners and
              mentors from all around the world. Our mission is to empower
              individuals to grow their skills, share knowledge, and explore new
              learning opportunities in a collaborative environment.
            </p>
            <p>
              Whether you are looking to learn a new skill, improve existing
              ones, or showcase your expertise, SkillSwap provides a
              community-driven experience designed to make learning engaging,
              interactive, and rewarding.
            </p>
            <p className="font-semibold text-blue-600">
              Join us today and start your journey of growth and knowledge
              sharing!
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
            Our Core{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-linear-to-r ${value.linear} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <div
                className={`text-4xl md:text-5xl font-black bg-linear-to-r ${stat.linear} bg-clip-text text-transparent mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision Card */}
        <div className="bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">Our Vision</h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-8">
            To create a world where knowledge flows freely, skills are
            accessible to all, and every individual has the opportunity to
            learn, grow, and contribute to a global community of lifelong
            learners.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-xl hover:scale-[1.05] transition-all duration-300">
            Join Our Community
          </button>
        </div>
      </Container>
    </section>
  );
};

export default About;
