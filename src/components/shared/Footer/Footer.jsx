import React from 'react';
import { Link } from 'react-router';
import Container from '../../common/Container/Container';
import SkillSwapLogo from '../../../assets/logos/skill-swap-logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      <Container className="relative z-10">
        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={SkillSwapLogo}
                alt="SkillSwap Logo"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-black bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  SkillSwap
                </h3>
                <p className="text-xs text-gray-400">Learn & Grow</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering learners worldwide to share skills, grow together, and
              achieve their dreams through quality education.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://x.com/aamamunszone"
                className="w-10 h-10 bg-white/10 hover:bg-black rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/aamamunszone"
                className="w-10 h-10 bg-white/10 hover:bg-blue-700 rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav>
            <h6 className="text-lg font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quick Links
            </h6>
            <div className="flex flex-col gap-3">
              <Link
                to="/home"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Home
              </Link>
              <Link
                to="/all-skills"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                All Skills
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Contact
              </Link>
            </div>
          </nav>

          {/* Support */}
          <nav>
            <h6 className="text-lg font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Support
            </h6>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                Help Center
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                FAQs
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                Community
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                Become Instructor
              </a>
            </div>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="text-lg font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Legal
            </h6>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Terms of Use
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Refund Policy
              </a>
            </div>
          </nav>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h6 className="text-lg font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stay Updated
            </h6>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get latest updates and exclusive offers!
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 outline-none transition-all backdrop-blur-sm text-white placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
              >
                Subscribe
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SkillSwap. All rights reserved. Made
              with ❤️ for learners worldwide.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
