import Container from '../../components/common/Container/Container';

const Contact = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50 py-16">
      <Container className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-700 mb-8 text-center">
          Have questions, feedback, or suggestions? We would love to hear from
          you!
        </p>

        <form className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-gray-200">
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
            Send Message
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
