// components/Navbar.js
import React, { useState, useEffect } from 'react';
import Home from "../Pages/Home"
import { NavLink, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaInfoCircle, 
  FaConciergeBell,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaRocket,
  FaMoon,
  FaSun
} from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
    { path: '/services', label: 'Services', icon: <FaConciergeBell /> },
  ];

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-white/10' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Glow Effect */}
          <NavLink 
            to="/" 
            className="group relative flex items-center space-x-3"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <FaRocket className="text-xl text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NEXUS
              </span>
              <span className="text-xs text-gray-400">FUTURE TECH</span>
            </div>
          </NavLink>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `group relative flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
                
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-300 ${
                  location.pathname === item.path 
                    ? 'bg-linear-to-r from-purple-500 to-pink-500 w-3/4' 
                    : 'bg-linear-to-r from-purple-500 to-pink-500'
                }`}></span>
                
                {/* Glow effect on hover */}
                <span className="absolute inset-0 rounded-xl bg-linear-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </NavLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
            >
              {darkMode ? (
                <FaSun className="text-xl text-yellow-400 group-hover:rotate-90 transition-transform" />
              ) : (
                <FaMoon className="text-xl text-gray-300 group-hover:rotate-12 transition-transform" />
              )}
            </button>

            {/* Get Started Button */}
            <NavLink
              to="/register"
              className="hidden md:flex items-center space-x-2 px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 group"
            >
              <span>Get Started</span>
              <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              {isMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 p-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? 'bg-linear-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <FaChevronRight className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                </NavLink>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <NavLink
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full px-6 py-4 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  <span>Get Started Free</span>
                  <FaChevronRight />
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animated cursor trail effect (optional) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30"></div>
    </nav>
    <Home/>
    </>
  );
};

export default Navbar;