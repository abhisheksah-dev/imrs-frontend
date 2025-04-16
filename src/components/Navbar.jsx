import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MetroPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a reference for the dropdown
  const navigate = useNavigate();

  const handleOnClickHome = () => {
    navigate("/");
  };
  const handleOnClickServices = () => {
    navigate("/services");
  };

  const handleOnClickFaq = () => {
    navigate("/faqsection");
  };

  const handleOnClickIMRS = () => {
    navigate("/IMRS");
  };

  const handleOnClickContactUs = () => {
    navigate("/contactUs");
  };

  const handleAboutUsClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col font-sans">
      {/* Navigation */}
      <nav className="flex justify-end bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-white px-6">
        <ul className="flex space-x-6 mt-2 text-xl">
          <li
            className="text-gray-900 no-underline hover:border-b-2 hover:border-blue-500 cursor-pointer "
            onClick={handleOnClickHome}
          >
            Home
          </li>
          <li
            className="text-gray-900 no-underline hover:border-b-2 hover:border-blue-500   cursor-pointer "
            onClick={handleOnClickServices}
          >
            Services
          </li>

          {/* About Us Dropdown */}
          <li className="relative">
            <div
              onClick={handleAboutUsClick}
              className="flex items-center cursor-pointer space-x-2 text-gray-900 hover:border-b-2 hover:border-blue-500"
            >
              <span>About Us</span>
              <span className="text-gray-900 mt-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M10 15.1787L18 2.67871H2L10 15.1787Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
              <ul
                ref={dropdownRef}
                className="absolute left-0 mt-1 bg-white text-gray-900 p-4 space-y-2 rounded-lg shadow-lg z-10"
              >
                <li
                  className="hover:text-blue-500 cursor-pointer text-gray-900 no-underline font-sans"
                  onClick={handleOnClickIMRS}
                >
                  IMRS
                </li>
                <li
                  className="text-gray-900 no-underline  hover:text-blue-500 cursor-pointer "
                  onClick={handleOnClickContactUs}
                >
                  Contact Us
                </li>
              </ul>
            )}
          </li>

          <li
            className="text-gray-900 no-underline hover:border-b-2 hover:border-blue-500 cursor-pointer"
            onClick={handleOnClickFaq}
          >
            FAQs
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MetroPage;
