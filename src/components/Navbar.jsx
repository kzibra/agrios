import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-around p-4 bg-white shadow-sm">
      {/* Burger Menu */}
      <button
        onClick={toggleMenu}
        className="relative flex items-center justify-center w-12 h-12 rounded-full border-[1px] border-[#CCCCCC] bg-[#E9F1EE] lg:hidden"
      >
        <div className="flex flex-col items-start justify-center space-y-1.5">
          <span className="block w-[22px] h-[2px] bg-black"></span>
          <span className="block w-[28px] h-[2px] bg-black"></span>
          <span className="block w-[16px] h-[2px] bg-black"></span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        <Link to="/" className="font-medium hover:text-blue-600">
          Home
        </Link>
        <div className="relative group">
          <Link
            to="/about"
            className="font-medium hover:text-blue-600 flex items-center"
          >
            About
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
        <div className="relative group">
          <Link
            to="/news"
            className="font-medium hover:text-blue-600 flex items-center"
          >
            News
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
        <div className="relative group">
          <Link
            to="/shop"
            className="font-medium hover:text-blue-600 flex items-center"
          >
            Shop
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
        <div className="relative group">
          <Link
            to="/contact"
            className="font-medium hover:text-blue-600 flex items-center"
          >
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Right side - Cart and Register */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Link
            to="/shop"
            className="p-2 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Link>
        </div>
        <Link
          to="/register"
          className="hidden md:inline-block px-6 py-2 border-2 border-orange-500 text-orange-500 font-medium rounded-full hover:bg-orange-500 hover:text-white transition-colors"
        >
          Register
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 lg:hidden z-50">
          <div className="flex flex-col space-y-4 px-4">
            <Link to="/" className="font-medium">
              Home
            </Link>
            <Link to="/about" className="font-medium">
              About
            </Link>
            <Link to="/news" className="font-medium">
              News
            </Link>
            <Link to="/shop" className="font-medium">
              Shop
            </Link>
            <Link to="/contact" className="font-medium">
              Contact
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 border-2 border-orange-500 text-orange-500 font-medium rounded-full hover:bg-orange-500 hover:text-white transition-colors text-center"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
