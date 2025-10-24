import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-cyan-50">
      <div className="text-center px-6 py-12 max-w-lg bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200">
        <h1 className="text-7xl font-extrabold text-cyan-600 mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-700 mb-8">
          The page you are looking for does not exist or has been moved. Let's
          get you back on track.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-full shadow-md hover:bg-cyan-600 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
