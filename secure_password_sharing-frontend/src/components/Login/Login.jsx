import React from "react";
function Login() {
  return (
    <>
      <div className="border-4 rounded-3xl shadow-2xl mx-auto my-20 px-20 py-20 w-1/2 "> 
        <div className="flex flex-col gap-4 mb-3">
          <h3 className="text-5xl  font-semibold">Welcome Back</h3>
          <p className="font-medium text-lg text-gray-500">
            Welcome back ! please enter your details
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-start flex-col gap-2">
            <label htmlFor="Email" className="text-lg font-medium">
              Email :
            </label>
            <input
            id="Email"
              type="email"
              placeholder="Enter your Email"
              className="border-2 p-4 rounded-xl w-full border-gray-100 bg-transparent  hover:border-gray-200 "
            />
          </div>
          <div className="flex justify-start flex-col gap-2">
            <label htmlFor="Password" className="text-lg font-medium">
              Password :
            </label>
            <input
              id="Password"
              type="password"
              placeholder="Enter your password"
              className="border-2 p-4 rounded-xl w-full border-gray-100 bg-transparent hover:border-gray-200 "
            />
            <div className=" flex flex-col">
              <div className=" flex flex-row justify-between">
                <div className="self-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className=" font-medium text-base"
                  />
                  <label
                    htmlFor="rememberMe"
                    className=" self-center ml-2 font-medium text-base"
                  >
                    Remember Me
                  </label>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-medium text-base text-indigo-500 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
            <button
              className="active:scale-[.98] bg-indigo-600 text-white p-2 rounded-xl mt-4 hover:bg-indigo-500"
              onClick={() => console.log("clicked")}
            >
              Login
            </button>
          </div>
        </div>
        <div className="flex justify-start gap-2 mt-4">
          <p className="font-medium text-base">Don&apos;t have an account?</p>
          <a
            href="#"
            className="font-medium text-base text-indigo-500 ml-2 hover:underline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
