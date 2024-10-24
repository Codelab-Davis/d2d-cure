import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useUser } from '@/components/UserProvider';

const NavBar = () => {
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(prevDropdown => prevDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav ref={navRef} className="bg-white py-4 border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side: Logo and Navigation links */}
          <div className="flex items-center space-x-8 w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/resources/images/D2D_Logo.svg" className="h-12" alt="D2D Logo" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 ml-8">
              {/* Database Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('database')}
                  className="flex items-center space-x-1 text-gray-900 hover:text-[#06B7DB] dark:text-white"
                >
                  <span>Database</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === 'database' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`absolute top-full left-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 transition-all duration-200 transform origin-top ${
                    activeDropdown === 'database'
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <Link href="/data" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    BglB Characterization
                  </Link>
                  {user?.status && (
                    <Link href="/submit" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      Analyze/Submit Data
                    </Link>
                  )}
                  {(user?.status === "professor" || user?.status === "ADMIN") && (
                    <Link href="/curate" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      Curate Data
                    </Link>
                  )}
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('resources')}
                  className="flex items-center space-x-1 text-gray-900 hover:text-[#06B7DB] dark:text-white"
                >
                  <span>Resources</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === 'resources' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`absolute top-full left-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 transition-all duration-200 transform origin-top ${
                    activeDropdown === 'resources'
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <Link href="/resources/StructuredFiles" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    Structured Files
                  </Link>
                  <Link href="/resources/OligoSearch" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    Oligo Search
                  </Link>
                  <Link href="/resources/Publications" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    Publications
                  </Link>
                </div>
              </div>

              <Link href="/#" className="text-gray-900 hover:text-[#06B7DB] dark:text-white">
                About
              </Link>
            </div>
          </div>

          {/* Right Side - Login & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 font-semibold bg-[#06B7DB] text-white rounded-lg hover:bg-[#05a5c6] transition-colors duration-200"
            >
              Login
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="pt-2 pb-4 space-y-1">
            {/* Mobile Database Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('mobile-database')}
                className="w-full flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span>Database</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'mobile-database' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`transition-all duration-200 ${
                  activeDropdown === 'mobile-database'
                    ? 'max-h-48 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <Link href="/data" className="block px-8 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  BglB Characterization
                </Link>
                {user?.status && (
                  <Link href="/submit" className="block px-8 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    Analyze/Submit Data
                  </Link>
                )}
                {(user?.status === "professor" || user?.status === "ADMIN") && (
                  <Link href="/curate" className="block px-8 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    Curate Data
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile Resources Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('mobile-resources')}
                className="w-full flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span>Resources</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'mobile-resources' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`transition-all duration-200 ${
                  activeDropdown === 'mobile-resources'
                    ? 'max-h-48 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <Link href="/resources/StructuredFiles" className="block px-8 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  Structured Files
                </Link>
                <Link href="/resources/OligoSearch" className="block px-8 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  Oligo Search
                </Link>
                <Link href="/resources/Publications" className="block px-8 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  Publications
                </Link>
              </div>
            </div>

            <Link href="/#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;