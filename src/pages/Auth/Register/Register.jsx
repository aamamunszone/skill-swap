import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthContext';
import Container from '../../../components/common/Container/Container';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.config';

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear password error when user types
    if (name === 'password' && passwordError) {
      setPasswordError('');
    }
  };

  // Password Validation
  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password))
      return 'Must contain at least one uppercase letter';
    if (!/[a-z]/.test(password))
      return 'Must contain at least one lowercase letter';
    if (password.length < 6)
      return 'Password must be at least 6 characters long';
    return '';
  };

  // Handle Register with Email & Password
  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = formData;

    // Validate password
    const validationError = validatePassword(password);
    if (validationError) {
      setPasswordError(validationError);
      toast.error(validationError);
      return;
    }
    setPasswordError('');
    setLoading(true);

    try {
      // Create User
      const userCredential = await createUser(email, password);

      // Update User Profile
      await updateUser({
        displayName: name,
        photoURL: photoURL || 'https://i.pravatar.cc/150?img=68',
      });

      // Set user to context with updated info
      setUser({
        ...userCredential.user,
        displayName: name,
        photoURL: photoURL || 'https://i.pravatar.cc/150?img=68',
      });

      // Success toast
      toast.success('🎉 Registration successful! Welcome to SkillSwap!', {
        duration: 3000,
      });

      // Redirect to intended page or home
      navigate(location.state?.from?.pathname || '/', { replace: true });
    } catch (err) {
      console.error('Registration error:', err);

      // Handle specific Firebase errors
      let errorMessage = 'Registration failed. Please try again.';
      if (err.code === 'auth/email-already-in-use') {
        errorMessage =
          'This email is already registered. Please login instead.';
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address.';
      } else if (err.code === 'auth/weak-password') {
        errorMessage = 'Password is too weak.';
      }

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Registration
  const handleGoogleRegister = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);

      toast.success('🎉 Registered with Google successfully!', {
        duration: 3000,
      });

      // Redirect to intended page or home
      navigate(location.state?.from?.pathname || '/', { replace: true });
    } catch (err) {
      console.error('Google registration error:', err);

      let errorMessage = 'Google registration failed.';
      if (err.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Registration cancelled.';
      } else if (err.code === 'auth/account-exists-with-different-credential') {
        errorMessage = 'An account already exists with this email.';
      }

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-linear-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
      <title>Skill-Swap | Register</title>

      <Container className="flex justify-between items-center py-12">
        {/* Left Info Banner */}
        <div className="hidden lg:flex w-1/2 items-center justify-center px-12">
          <div className="max-w-lg space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Start Your Journey with{' '}
              <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                SkillSwap
              </span>{' '}
              ✨
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Join a global community of learners and mentors. Build your
              skills, share your knowledge, and take the next step towards
              success.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-500 shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Unlock skill-based learning experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-500 shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Showcase your expertise to global learners</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-500 shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Grow with modern, interactive learning modules</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Register Form */}
        <div className="flex w-full lg:w-1/2 items-center justify-center md:py-4 md:px-3 lg:py-8 lg:px-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-5 md:p-8 lg:p-10 max-w-md w-full space-y-6 border border-gray-200">
            <div className="text-center">
              <h2 className="text-3xl font-black text-gray-900">
                Create Your Account
              </h2>
              <p className="text-gray-600 mt-2">
                Sign up to explore courses and start learning
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  required
                  disabled={loading}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  required
                  disabled={loading}
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Photo URL{' '}
                  <span className="text-gray-400 text-sm">(Optional)</span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleChange}
                  placeholder="https://example.com/photo.jpg"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  disabled={loading}
                />
              </div>

              {/* Password with Toggle */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all pr-12"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    disabled={loading}
                  >
                    {showPassword ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2 flex items-start gap-1">
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {passwordError}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-2">
                  Must contain uppercase, lowercase, and be at least 6
                  characters
                </p>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Registering...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <hr className="flex-1 border-gray-300" />
              <span className="text-gray-500 font-medium text-sm">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Google Register Button */}
            <button
              onClick={handleGoogleRegister}
              disabled={loading}
              className="w-full py-3 border-2 border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
                className="w-6 h-6"
              />
              <span className="font-semibold text-gray-700">
                Continue with Google
              </span>
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-600 pt-2">
              Already have an account?{' '}
              <Link
                to="/auth/login"
                state={{ from: location.state?.from || location }}
                className="text-blue-600 font-bold hover:underline"
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Register;
