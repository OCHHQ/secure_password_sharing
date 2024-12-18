import  { useState } from "react";
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
    <div className="border-4 w-4/5 rounded-3xl  shadow-2xl mx-auto my-20 p-8 md:p-10  lg:w-1/2 ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mb-3">
          <h3 className="text-2xl md:text-3xl text-center lg:text-5xl font-semibold">Welcome Back</h3>
          <p className=" font-medium  text-center text-sm lg:text-lg text-gray-500 mb-4">
            Welcome back! Please enter your details
          </p>
        </div>
        <div className="flex flex-col gap-4">
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
              className="border-2 md:p-4 p-2 rounded-lg border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600  active:scale-[0.98] bg-transparent"
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
              className="border-2  md:p-4 p-2 rounded-lg border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600  active:scale-[0.98] bg-transparent"
            />
          </div>
          <div className="flex flex-row justify-between lg:items-center mt-2">
            <label className="flex items-center text-base font-medium active:scale-[0.98]">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              Remember Me
            </label>
            <a
              href="/#Contact"
              className="font-medium text-base text-indigo-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="active:scale-[.98] bg-indigo-600 text-white p-2 rounded-xl mt-4 hover:bg-indigo-500 lg:text-xl md:text-lg text-base font-medium"
          >
            Login
          </button>
        </div>
        <div className="flex flex-row justify-between gap-2 mt-4">
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
