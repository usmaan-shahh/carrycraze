import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Animation variants
  const navVariants = {
    open: { opacity: 1, height: "auto", transition: { staggerChildren: 0.1 } },
    closed: { opacity: 0, height: 0 },
  };

  const linkVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 flex items-center"
            >
              <NavLink to="/" className="text-2xl font-bold text-blue-600">
                CarryCraze
              </NavLink>
            </motion.div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-blue-600 hover:bg-gray-200 px-3 py-2 rounded-md text-md font-medium transition-colors ${
                      isActive ? "bg-gray-200 text-blue-600" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
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
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white overflow-hidden">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              variants={linkVariants}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? "bg-gray-200 text-blue-600" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
