import Container from '../../components/common/Container/Container';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'support@skillswap.com',
      link: 'mailto:support@skillswap.com',
      linear: 'from-blue-500 to-cyan-400',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+880 1234-567890',
      link: 'tel:+8801234567890',
      linear: 'from-purple-500 to-pink-400',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: 'Dhaka, Bangladesh',
      link: '#',
      linear: 'from-orange-500 to-red-400',
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50 py-16">
      <title>Skill-Swap | Contact</title>

      <Container>
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Get In{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions, feedback, or suggestions? We would love to hear from
            you! Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-linear-to-r ${info.linear} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600">{info.details}</p>
            </a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Write your message here..."
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Additional Info */}
          <div className="space-y-8">
            {/* Why Contact Us Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Contact Us?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">
                      Quick Response
                    </p>
                    <p className="text-gray-600 text-sm">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">
                      Expert Support
                    </p>
                    <p className="text-gray-600 text-sm">
                      Our team is here to help you succeed
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">
                      Feedback Matters
                    </p>
                    <p className="text-gray-600 text-sm">
                      Your suggestions shape our platform
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* FAQ Card */}
            <div className="bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-blue-100 mb-6">
                Looking for quick answers? Check out our comprehensive FAQ
                section for instant solutions to common questions.
              </p>
              <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-xl hover:scale-[1.05] transition-all duration-300">
                Visit FAQ
              </button>
            </div>

            {/* Office Hours Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Office Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">
                    Monday - Friday
                  </span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
