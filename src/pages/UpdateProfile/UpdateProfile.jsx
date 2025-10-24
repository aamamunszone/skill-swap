import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthContext';
import Container from '../../components/common/Container/Container';
import { auth } from '../../firebase/firebase.config';

const UpdateProfile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    photoURL: user?.photoURL || '',
  });
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(user?.photoURL || '');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Update preview when photoURL changes
    if (name === 'photoURL') {
      setPreviewImage(value || 'https://i.pravatar.cc/150?img=68');
    }
  };

  // Handle profile update
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const { name, photoURL } = formData;

    // Validation
    if (!name.trim()) {
      toast.error('Name cannot be empty');
      return;
    }

    setLoading(true);

    try {
      // Update Firebase profile
      await updateUser({
        displayName: name,
        photoURL: photoURL || 'https://i.pravatar.cc/150?img=68',
      });

      // Reload user to get updated data
      await auth.currentUser.reload();

      // Update context with new data
      const updatedUser = {
        ...auth.currentUser,
        displayName: name,
        photoURL: photoURL || 'https://i.pravatar.cc/150?img=68',
      };
      setUser(updatedUser);

      // Success message
      toast.success('✨ Profile updated successfully!', {
        duration: 3000,
        icon: '🎉',
      });

      // Redirect to profile page after short delay
      setTimeout(() => {
        navigate('/my-profile');
      }, 1500);
    } catch (err) {
      console.error('Profile update error:', err);

      let errorMessage = 'Failed to update profile. Please try again.';
      if (err.code === 'auth/requires-recent-login') {
        errorMessage = 'Please login again to update your profile.';
      }

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    navigate('/my-profile');
  };

  return (
    <section className="bg-linear-to-br from-blue-50 via-white to-cyan-50 min-h-screen py-12">
      <Container>
        {/* Back Button */}
        <button
          onClick={handleCancel}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Back to Profile</span>
        </button>

        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-gray-900 mb-2">
              Update Your{' '}
              <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Profile
              </span>
            </h1>
            <p className="text-gray-600">Keep your information up to date</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-200">
            {/* Current Profile Preview */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 p-1">
                  <img
                    src={previewImage || 'https://i.pravatar.cc/150?img=68'}
                    alt="Profile Preview"
                    className="w-full h-full rounded-full object-cover bg-white border-4 border-white"
                    onError={(e) => {
                      e.target.src = 'https://i.pravatar.cc/150?img=68';
                    }}
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Preview of your profile picture
              </p>
            </div>

            {/* Update Form */}
            <form onSubmit={handleUpdateProfile} className="space-y-6">
              {/* Current Email (Read-only) */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={user?.email || ''}
                    disabled
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Email cannot be changed
                </p>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                    disabled={loading}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Photo URL Input */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Profile Photo URL{' '}
                  <span className="text-gray-400 text-sm">(Optional)</span>
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="photoURL"
                    value={formData.photoURL}
                    onChange={handleChange}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    disabled={loading}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Enter a valid image URL or leave blank for default avatar
                </p>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-sm text-blue-700">
                  <p className="font-semibold mb-1">Profile Update Tips:</p>
                  <ul className="list-disc list-inside space-y-1 text-blue-600">
                    <li>Use a clear, professional photo</li>
                    <li>Keep your name accurate for verification</li>
                    <li>
                      Changes will reflect immediately across the platform
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                      Updating...
                    </>
                  ) : (
                    <>
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
                      Save Changes
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={loading}
                  className="flex-1 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Cancel
                </button>
              </div>
            </form>

            {/* Warning Message */}
            <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-600 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-orange-700">
                  <span className="font-semibold">Note:</span> If you've
                  recently logged in with a different method, you may need to
                  sign in again to update your profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UpdateProfile;
