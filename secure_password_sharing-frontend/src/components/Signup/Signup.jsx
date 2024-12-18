import  { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.cpassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted:", formData);
    // Add signup logic here
  };
  return (
    <form onSubmit={handleSubmit} className="self-center w-4/5 md:w-3/4 border-4 rounded-3xl shadow-2xl mx-auto lg:my-20 my-32 p-8 md:p-10 lg:p-20  lg:w-1/2 bg- backdrop-blur-xl bg-[#F9F6F3]">
      <div className="flex flex-col gap-4 mb-3">
        <h3 className="text-2xl md:text-3xl text-center lg:text-5xl font-semibold">
          Create an Account
        </h3>
        <p className="font-medium  text-center text-sm lg:text-lg text-gray-500 mb-4">
          Please fill in this form to create an account.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mb-3">
        <div className="flex flex-col lg:w-1/2">
          <label htmlFor="firstname" className="hidden"></label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            placeholder="First name"
            className="p-2 border-2 rounded-lg border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600  active:scale-[0.98] bg-transparent"
          />
        </div>
        <div className="flex flex-col lg:w-1/2">
          <label htmlFor="lastname" className="hidden"></label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
            placeholder="Last name"
            className="p-2 border-2 rounded-lg border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600  active:scale-[0.98] bg-transparent"
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="hidden"></label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          placeholder="Username"
          className="w-full p-2 border-2 rounded-lg border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600  active:scale-[0.98] bg-transparent"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="hidden"></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="w-full p-2 border-2 rounded-lg border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600  active:scale-[0.98] bg-transparent"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mb-3">
        <div className="flex flex-col lg:w-1/2">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password:"
            className="p-2 border-2 rounded-lg border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600  active:scale-[0.98] bg-transparent"
          />
        </div>
        <div className="flex flex-col lg:w-1/2">
          <label htmlFor="cpassword"></label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
            required
            placeholder="Confirmed password:"
            className="p-2 border-2 rounded-lg border-gray-400 placeholder:font-medium  hover:border-indigo-600 focus:outline-indigo-600  active:scale-[0.98] bg-transparent"
          />
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <button
          type="submit"
          className="border-gray-600 rounded-lg p-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium hover:bg-indigo-500, active:scale-[0.98] "
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Signup;
