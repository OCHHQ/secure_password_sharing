import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <nav
        aria-label="Global"
        className="flex justify-between items-center w-full p-2 border-b-4 rounded-lg border-[#7A4FE7] fixed shadow-lg backdrop-blur-3xl bg-[#F9F6F3] z-10"
      >
        <div className="font-bold lg:font-semibold text-[#28243D]">
          <a
            href="#Product"
            className="hover:text-white hover:bg-[#7A4FE7] p-2 hover:rounded-lg active:scale-[0.98]"
          >
            Project-name
          </a>
        </div>
        <div className="hidden lg:flex space-x-8 font-semibold text-[#28243D]">
          <a
            href="#Solutions"
            className="hover:text-white hover:bg-[#7A4FE7] p-2 hover:rounded-lg active:scale-[0.98]"
          >
            Solutions
          </a>
          <a
            href="#Features"
            className="hover:text-white hover:bg-[#7A4FE7] p-2 hover:rounded-lg active:scale-[0.98]"
          >
            Features
          </a>
          <a
            href="#Contact"
            className="hover:text-white hover:bg-[#7A4FE7] p-2 hover:rounded-lg active:scale-[0.98]"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-row space-x-4">
          <div className={` md:${isOpen && 'hidden'} hidden md:block lg:block border-2 font-medium border-[#7A4FE7] rounded-3xl px-4 py-1 self-center bg-[#7A4FE7] text-white hover:bg-white hover:text-[#7A4FE7] active:scale-[0.98]`}>
            <button className="">
              <Link to="/login">Login </Link>
              <Link to="/Signup">/ Sign Up</Link>
            </button>
          </div>
          <div className="lg:hidden self-center">
            <button
              onClick={handleToggle}
              className="border-2 font-medium border-[#7A4FE7] rounded-lg p-1 self-center bg-[#7A4FE7] text-white hover:bg-white hover:text-[#7A4FE7] active:scale-[0.98]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden fixed top-0 right-0 mx-auto my-auto backdrop-blur-3xl flex flex-col   border-b-4 rounded-lg border-[#7A4FE7] shadow-lg p-8">
          {/* <div className="flex flex-row-reverse justify-between p-2">
          <button
            onClick={handleToggle}
            className=" border-2 font-medium border-[#7A4FE7] rounded-lg p-1 w-9 h-9 bg-[#7A4FE7] text-white hover:bg-white hover:text-[#7A4FE7] active:scale-[0.98]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          </div> */}
          <div onClick={handleToggle} className="flex flex-col items-center gap-8 font-semibold text-[#28243D] text-center mt-8">
          <a
            href="#Solutions"
            className=" hover:text-white hover:bg-[#7A4FE7] p-2 hover:rounded-lg active:scale-[0.98]"
          >
            Solutions 
          </a>
          <a
            href="#Manager"
            className=" hover:text-white hover:bg-[#7A4FE7] p-2 hover:rounded-lg active:scale-[0.98]"
          >
            Features
          </a>
          <a
            href="#Contact"
            className=" hover:text-white hover:bg-[#7A4FE7] p-2 hover:rounded-lg active:scale-[0.98]"
          >
            Contact
          </a>
          <div className="border-2 font-medium border-[#7A4FE7] rounded-3xl px-4 py-1 self-center bg-[#7A4FE7] text-white hover:bg-white hover:text-[#7A4FE7] active:scale-[0.98] ">
            <button className="">
              <Link to="/login">Login </Link>
              <Link to="/Signup" className="S">/ Sign Up</Link>
            </button>
          </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
