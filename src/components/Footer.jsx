import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1e1e1e] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 - Logo and Social */}
        <div className="space-y-4">
          <Link to="/">
            <img
              className="h-16"
              src="https://tplabs.co/agrios/wp-content/uploads/2022/07/logo@2x-white-1.webp"
              alt="Agrios Logo"
            />
          </Link>
          <p className="text-gray-300 mt-4">
            There are many variations of passages of lorem ipsum available, but
            the majority suffered.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-green-500 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-green-500 transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-green-500 transition-colors"
            >
              <FaPinterest size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-green-500 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Column 2 - Explore */}
        <div className="space-y-4">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 relative inline-block">
              Explore
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500"></span>
            </h3>
          </div>
          <ul className="space-y-3">
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                to="/farmers"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                Meet the Farmers
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                Latest News
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - News */}
        <div className="space-y-4">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 relative inline-block">
              News
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500"></span>
            </h3>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <img
                className="w-20 h-20 object-cover rounded"
                src="/src/assets/news/grid1.jpg"
                alt="News thumbnail"
              />
              <div>
                <Link
                  to="/news/1"
                  className="text-gray-300 hover:text-green-500 transition-colors font-medium"
                >
                  Bringing Food Production Back To Cities
                </Link>
                <p className="text-yellow-500 mt-2">July 5, 2022</p>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                className="w-20 h-20 object-cover rounded"
                src="/src/assets/news/grid2.jpg"
                alt="News thumbnail"
              />
              <div>
                <Link
                  to="/news/2"
                  className="text-gray-300 hover:text-green-500 transition-colors font-medium"
                >
                  The Future of Farming, Smart Irrigation Solutions
                </Link>
                <p className="text-yellow-500 mt-2">July 5, 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="space-y-4">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500"></span>
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhone className="text-green-500" />
              <span className="text-gray-300">666 888 0000</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" />
              <span className="text-gray-300">needhelp@company.com</span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-green-500 mt-1" />
              <span className="text-gray-300">
                80 broklyn golden street line New York, USA
              </span>
            </div>
            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-[#2d2d2d] text-gray-300 px-4 py-3 w-full focus:outline-none rounded-l"
              />
              <button className="bg-green-500 hover:bg-green-600 transition-colors px-4 rounded-r">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© All Copyright 2024 by shawonetc Themes</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
