import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookMessenger, FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="font-poppins">
            {/* Top Header with Logo and Contact Info */}
            <header className="bg-black text-white py-4">
                <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                        <Link to="/">
                            <img 
                                className="h-14" 
                                src="https://tplabs.co/agrios/wp-content/uploads/2022/07/logo@2x-white-1.webp" 
                                alt="Agrios Logo" 
                            />
                        </Link>
                    </div>

                    {/* Social Icons & Contact Info */}
                    <div className="flex flex-wrap justify-center md:justify-end w-full md:w-auto">
                        {/* Social Icons */}
                        <div className="flex space-x-4 mb-4 md:mb-0 md:mr-8 justify-center w-full md:w-auto">
                            <Link to="#" className="hover:text-green-500 transition-colors">
                                <FaFacebookMessenger size={20} />
                            </Link>
                            <Link to="#" className="hover:text-green-500 transition-colors">
                                <FaFacebook size={20} />
                            </Link>
                            <Link to="#" className="hover:text-green-500 transition-colors">
                                <FaInstagram size={20} />
                            </Link>
                            <Link to="#" className="hover:text-green-500 transition-colors">
                                <FaTwitter size={20} />
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {/* Phone */}
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                    <FaPhoneAlt className="text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Call anytime</p>
                                    <p className="text-white">+ 98 (000) - 9630</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                    <FaEnvelope className="text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Send email</p>
                                    <p className="text-white">ambed@agrios.com</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                    <FaMapMarkerAlt className="text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">380 St Kilda Road</p>
                                    <p className="text-white">Melbourne, Australia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Navigation */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Mobile Menu Button */}
                        <button 
                            className="lg:hidden flex items-center"
                            onClick={toggleMenu}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <div className="flex space-x-8">
                                <Link to="/" className="text-gray-900 hover:text-green-500 px-3 py-2 text-base font-medium">
                                    Home
                                </Link>
                                <Link to="/about" className="text-gray-900 hover:text-green-500 px-3 py-2 text-base font-medium">
                                    About
                                </Link>
                                <div className="relative group">
                                    <button className="text-gray-900 hover:text-green-500 px-3 py-2 text-base font-medium flex items-center">
                                        Services
                                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <div className="py-1">
                                            <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-white">
                                                Services
                                            </Link>
                                            <Link to="/agriculture-products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-white">
                                                Agriculture Products
                                            </Link>
                                            <Link to="/organic-products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-white">
                                                Organic Products
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/projects" className="text-gray-900 hover:text-green-500 px-3 py-2 text-base font-medium">
                                    Projects
                                </Link>
                                <Link to="/news" className="text-gray-900 hover:text-green-500 px-3 py-2 text-base font-medium">
                                    News
                                </Link>
                                <Link to="/shop" className="text-gray-900 hover:text-green-500 px-3 py-2 text-base font-medium">
                                    Shop
                                </Link>
                                <Link to="/contact" className="text-gray-900 hover:text-green-500 px-3 py-2 text-base font-medium">
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Search & Cart Icons */}
                        <div className="flex items-center">
                            <button className="p-2 rounded-full hover:bg-gray-100">
                                <FaSearch className="h-5 w-5 text-gray-700" />
                            </button>
                            <div className="relative ml-4">
                                <Link to="/cart" className="p-2 rounded-full hover:bg-gray-100">
                                    <FaShoppingCart className="h-5 w-5 text-gray-700" />
                                    <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                                        3
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                            <Link to="/" className="text-gray-900 hover:text-green-500 block px-3 py-2 text-base font-medium">
                                Home
                            </Link>
                            <Link to="/about" className="text-gray-900 hover:text-green-500 block px-3 py-2 text-base font-medium">
                                About
                            </Link>
                            <div>
                                <button className="text-gray-900 hover:text-green-500 block px-3 py-2 text-base font-medium w-full text-left">
                                    Services
                                </button>
                                <div className="pl-6 border-l-2 border-gray-200 ml-3">
                                    <Link to="/services" className="text-gray-700 hover:text-green-500 block px-3 py-2 text-base">
                                        Services
                                    </Link>
                                    <Link to="/agriculture-products" className="text-gray-700 hover:text-green-500 block px-3 py-2 text-base">
                                        Agriculture Products
                                    </Link>
                                    <Link to="/organic-products" className="text-gray-700 hover:text-green-500 block px-3 py-2 text-base">
                                        Organic Products
                                    </Link>
                                </div>
                            </div>
                            <Link to="/projects" className="text-gray-900 hover:text-green-500 block px-3 py-2 text-base font-medium">
                                Projects
                            </Link>
                            <Link to="/news" className="text-gray-900 hover:text-green-500 block px-3 py-2 text-base font-medium">
                                News
                            </Link>
                            <Link to="/shop" className="text-gray-900 hover:text-green-500 block px-3 py-2 text-base font-medium">
                                Shop
                            </Link>
                            <Link to="/contact" className="text-gray-900 hover:text-green-500 block px-3 py-2 text-base font-medium">
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;
