import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="border-4 rounded-3xl w-3/4 shadow-2xl mx-auto my-20 px-20 py-20 lg:w-1/2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mb-3">
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold">Welcome Back</h3>
          <p className=" text-md font-medium lg:text-lg text-gray-500">
            Welcome back! Please enter your details
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-medium">
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
              className="border-2 p-4 rounded-xl w-full border-gray-100 bg-transparent hover:border-gray-200"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-lg font-medium">
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
              className="border-2 p-4 rounded-xl w-full border-gray-100 bg-transparent hover:border-gray-200"
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-2">
            <label className="flex items-center text-base font-medium">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              Remember Me
            </label>
            <a
              href="#"
              className="font-medium text-base text-indigo-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="active:scale-[.98] bg-indigo-600 text-white p-2 rounded-xl mt-4 hover:bg-indigo-500"
          >
            Login
          </button>
        </div>
        <div className="flex justify-start gap-2 mt-4">
          <p className="font-medium text-base">Don&apos;t have an account?</p>
          <a
            href="#"
            className="font-medium text-base text-indigo-500 ml-2 hover:underline"
          >
            <Link to="/Signup">/ Sign Up</Link>
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
