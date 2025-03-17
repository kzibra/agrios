import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaSearch, FaShoppingCart, FaPinterest } from 'react-icons/fa';

import emailIcon from '/src/assets/email-icon.svg';
import locationIcon from '/src/assets/location-icon.svg';
import phoneIcon from '/src/assets/phone-icon.svg';

export function Header({ showNavigation = true, transparentBackground = false }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const socialMedia = [
    { icon: FaTwitter, alt: "Twitter Logo", href: "#" },
    { icon: FaFacebook, alt: "Facebook Logo", href: "#" },
    { icon: FaPinterest, alt: "Pinterest Logo", href: "#" },
    { icon: FaInstagram, alt: "Instagram Logo", href: "#" },
  ];

  const contactInfo = [
    {
      src: phoneIcon,
      alt: "Phone Icon",
      label: "Call anytime",
      value: "+ 98 (000) - 9630"
    },
    {
      src: emailIcon,
      alt: "Email Icon",
      label: "Send email",
      value: "ambed@agrios.com"
    },
    {
      src: locationIcon,
      alt: "Location Icon",
      label: "380 St Kilda Road",
      value: "Melbourne, Australia"
    },
  ];

  const handleHomeNavigation = () => navigate("/");

  return (
    <div className="font-poppins">
      {/* Top Header */}
      <header
        className={`text-black py-6 h-[130px] flex items-center justify-center ${
          transparentBackground ? 'bg-transparent' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 max-w-[1200px] w-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="p-[25px] lg:pr-0 lg:w-[160px] lg:pl-[15px] cursor-pointer"
              src="/logo.svg"
              alt="Logo"
              onClick={handleHomeNavigation}
            />
          </div>

          {/* Social Media Icons (between Logo and Right Section) */}
          <div className="flex space-x-2.5">
            {socialMedia.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                className="bg-[var(--color-social-bg)] p-[7px] rounded-full hover:bg-[var(--color-social-hover)] transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center">
            {contactInfo.map((info, index) => (
              <div
                key={info.alt}
                className={`flex items-center px-5 py-2.5 lg:px-[10px] ${
                  index === 1 ? "border-x-2 border-solid border-[var(--color-custom-border)]" : ""
                }`}
              >
                <img
                  className="p-2.5 lg:pl-[2px] w-12 h-12 object-contain"
                  src={info.src}
                  alt={info.alt}
                />
                <div>
                  <p className="text-[var(--color-custom-text)] text-[14px] lg:text-[12px]">{info.label}</p>
                  <p className="whitespace-nowrap text-[16px] lg:text-[14px] font-bold">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      {showNavigation && (
        <nav className="bg-[var(--color-custom-bg)] h-[80px] flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-[1200px] w-full">
            <div className="flex items-center justify-between">
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden flex items-center"
                onClick={toggleMenu}
              >
                <FaBars className="h-6 w-6 text-[var(--color-custom-text)]" />
              </button>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center justify-center flex-1">
                <div className="flex space-x-8">
                  <Link to="/" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] px-3 py-2 text-base font-medium">
                    Home
                  </Link>
                  <Link to="/about" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] px-3 py-2 text-base font-medium">
                    About
                  </Link>
                  <div className="relative group">
                    <button className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] px-3 py-2 text-base font-medium flex items-center">
                      Services
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[var(--color-custom-bg)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        <Link to="/services" className="block px-4 py-2 text-sm text-[var(--color-custom-text)] hover:bg-[var(--color-social-hover)] hover:text-[var(--color-custom-hover)]">
                          Services
                        </Link>
                        <Link to="/agriculture-products" className="block px-4 py-2 text-sm text-[var(--color-custom-text)] hover:bg-[var(--color-social-hover)] hover:text-[var(--color-custom-hover)]">
                          Agriculture Products
                        </Link>
                        <Link to="/organic-products" className="block px-4 py-2 text-sm text-[var(--color-custom-text)] hover:bg-[var(--color-social-hover)] hover:text-[var(--color-custom-hover)]">
                          Organic Products
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link to="/projects" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] px-3 py-2 text-base font-medium">
                    Projects
                  </Link>
                  <Link to="/news" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] px-3 py-2 text-base font-medium">
                    News
                  </Link>
                  <Link to="/shop" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] px-3 py-2 text-base font-medium">
                    Shop
                  </Link>
                  <Link to="/contact" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] px-3 py-2 text-base font-medium">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Search & Cart Icons */}
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-[var(--color-social-hover)]">
                  <FaSearch className="h-5 w-5 text-[var(--color-custom-text)]" />
                </button>
                <div className="relative">
                  <Link to="/cart" className="p-2 rounded-full hover:bg-[var(--color-social-hover)]">
                    <FaShoppingCart className="h-5 w-5 text-[var(--color-custom-text)]" />
                    <span className="absolute -top-1 -right-1 bg-[var(--color-custom-text)] text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                      3
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-[var(--color-custom-border)]">
                  <Link to="/" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] block px-3 py-2 text-base font-medium">
                    Home
                  </Link>
                  <Link to="/about" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] block px-3 py-2 text-base font-medium">
                    About
                  </Link>
                  <div>
                    <button className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] block px-3 py-2 text-base font-medium w-full text-left">
                      Services
                    </button>
                    <div className="pl-6 border-l-2 border-[var(--color-custom-border)] ml-3">
                      <Link to="/services" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] block px-3 py-2 text-base">
                        Services
                      </Link>
                      <Link to="/agriculture-products" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] block px-3 py-2 text-base">
                        Agriculture Products
                      </Link>
                      <Link to="/organic-products" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] block px-3 py-2 text-base">
                        Organic Products
                      </Link>
                    </div>
                  </div>
                  <Link to="/projects" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] block px-3 py-2 text-base font-medium">
                    Projects
                  </Link>
                  <Link to="/news" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] block px-3 py-2 text-base font-medium">
                    News
                  </Link>
                  <Link to="/shop" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] block px-3 py-2 text-base font-medium">
                    Shop
                  </Link>
                  <Link to="/contact" className="text-[var(--color-custom-text)] hover:text-[var(--color-custom-hover)] block px-3 py-2 text-base font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header;