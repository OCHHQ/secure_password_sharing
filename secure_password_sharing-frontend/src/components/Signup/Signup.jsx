import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from "../../config/api"; // Adjust according to your API file

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",  // For password confirmation
    name: "",              // Optional, add if needed
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await authAPI.signup(formData); // Assuming you have a signup API

      if (response.data.success) {
        // You can redirect to login or dashboard after successful signup
        navigate('/login');
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        'Signup failed. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  return (
    <div className="border-4 w-4/5 rounded-3xl shadow-2xl mx-auto my-20 p-8 md:p-10 lg:w-1/2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mb-3">
          <h3 className="text-2xl md:text-3xl text-center lg:text-5xl font-semibold">Create Your Account</h3>
          <p className="font-medium text-center text-sm lg:text-lg text-gray-500 mb-4">
            Sign up to get started
          </p>
        </div>
        {error && (
          <div className="text-red-500 text-sm text-center mb-4 p-2 bg-red-50 rounded-lg">
            {error}
          </div>
        )}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="lg:text-lg text-base font-medium">
              Full Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              disabled={isLoading}
              className="border-2 md:p-4 p-2 rounded-lg border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600 active:scale-[0.98] bg-transparent disabled:opacity-50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="lg:text-lg text-base font-medium">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your Email"
              disabled={isLoading}
              className="border-2 md:p-4 p-2 rounded-lg border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600 active:scale-[0.98] bg-transparent disabled:opacity-50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="lg:text-lg text-base font-medium">
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              disabled={isLoading}
              className="border-2 md:p-4 p-2 rounded-lg border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600 active:scale-[0.98] bg-transparent disabled:opacity-50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="lg:text-lg text-base font-medium">
              Confirm Password:
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
              disabled={isLoading}
              className="border-2 md:p-4 p-2 rounded-lg border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600 active:scale-[0.98] bg-transparent disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="active:scale-[.98] bg-indigo-600 text-white p-2 rounded-xl mt-4 hover:bg-indigo-500 lg:text-xl md:text-lg text-base font-medium disabled:opacity-50 disabled:hover:bg-indigo-600 transition-all duration-200"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Signing up...
              </span>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
        <div className="flex flex-row justify-between gap-2 mt-4">
          <p className="font-medium text-base">Already have an account?</p>
          <Link
            to="/login"
            className="font-medium text-base text-indigo-500 ml-2 hover:underline"
          >
            / Log In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;