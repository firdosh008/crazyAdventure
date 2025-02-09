import React, { useState } from "react";
import { FaMapMarkerAlt, FaClock, FaUser, FaBars } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      {/* Header Top */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Address and time */}
          <div className="hidden md:flex space-x-6">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-600" />
              <span>45 New Eskaton Road, Austria</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-gray-600" />
              <span>Sun to Friday: 8.00 am - 7.00 pm</span>
            </div>
          </div>

          {/* Language and Links */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <select className="form-select bg-transparent p-2 border border-gray-300 rounded-lg text-gray-600">
                <option>Language</option>
                <option>CNY</option>
                <option>EUR</option>
                <option>AUD</option>
              </select>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="/faq" className="text-gray-600">
                FAQ
              </a>
              <a href="/contact" className="text-gray-600">
                Support
              </a>
            </div>
            <a href="#login-form" className="text-gray-600 flex items-center">
              Sign In / Register
              <FaUser className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-lg font-bold">
                <img src="/logo.svg" alt="Logo" className="h-10" />
              </a>
            </div>

            {/* Main Menu */}
            <nav className="hidden xl:flex space-x-6">
              <a
                href="/"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                Home
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 font-medium hover:text-blue-600">
                  Destination
                  <MdOutlineKeyboardArrowDown className="ml-1" />
                </button>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2">
                  <li>
                    <a
                      href="/destination"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Destination
                    </a>
                  </li>
                  <li>
                    <a
                      href="/destination-details"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Destination Details
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="/service"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                Service
              </a>
              <a
                href="/activities"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                Activities
              </a>
              <a
                href="/about"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                Contact Us
              </a>
            </nav>

            {/* Book Now Button */}
            <div className="hidden xl:block">
              <a
                href="/contact"
                className="th-btn style3 th-icon bg-blue-600 text-white py-2 px-6 rounded-lg"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden text-2xl"
            >
              <FaBars />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="xl:hidden">
              <ul className="flex flex-col space-y-4 py-4">
                <li>
                  <a href="/" className="text-gray-700">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/destination" className="text-gray-700">
                    Destination
                  </a>
                </li>
                <li>
                  <a href="/service" className="text-gray-700">
                    Service
                  </a>
                </li>
                <li>
                  <a href="/activities" className="text-gray-700">
                    Activities
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-700">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-700">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
