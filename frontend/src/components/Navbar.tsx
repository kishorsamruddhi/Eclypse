import { useState, useEffect } from 'react';
import logosrc from '../assets/logo.png';
import { Link } from 'react-router-dom';
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full flex justify-between items-center px-3 py-2 z-50 transition-colors duration-300
          ${scrolled
            ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-md dark:bg-gray-900 dark:bg-opacity-90'
            : 'bg-transparent'
          }
        `}
      >
        {/* Logo fixed on left */}
        <div className="flex-shrink-0">
          <img src={logosrc} alt="Eclypse Logo" className="h-10" />
        </div>

        {/* Hamburger / Close Button fixed on right */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-gray-200 bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-70 rounded p-1 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-colors duration-300 ${scrolled ? 'text-black dark:text-white' : 'text-white'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop nav - visible on md+ */}
        <nav className="hidden md:flex md:items-center md:space-x-12 md:text-base md:justify-end">
          <DarkModeToggle />
          <a
            href="#"
            className={`hover:underline transition-colors duration-300 ${
              scrolled ? 'text-black dark:text-white' : 'text-white'
            }`}
          >
            About Us
          </a>
          <a
            href="#"
            className={`hover:underline transition-colors duration-300 ${
              scrolled ? 'text-black dark:text-white' : 'text-white'
            }`}
          >
            Waitlist
          </a>
          <Link
            to="/CartPage"
            className={`hover:underline transition-colors duration-300 ${
              scrolled ? 'text-black dark:text-white' : 'text-white'
            }`}
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            className={`
              inline-block rounded px-5 py-1.5 min-w-[100px] text-center transition-colors duration-300
              ${scrolled
                ? 'bg-black text-white hover:bg-[#E34234] dark:bg-white dark:text-black dark:hover:bg-[#c6362e]'
                : 'bg-white text-black hover:bg-[#E34234] dark:bg-black dark:text-white dark:hover:bg-[#c6362e]'
              }
            `}
          >
            Buy
          </Link>
        </nav>
      </header>

      {/* Mobile menu - pushes content down, full width */}
      {isOpen && (
        <nav className="md:hidden bg-gray-300 dark:bg-gray-800 px-3 pt-3 pb-4 space-y-2 fixed top-[48px] left-0 w-full z-40 shadow-md transition-colors duration-300">
          {/* top-[48px] = header height approx (h-10 + py-2) */}
          <a href="#" className="block px-3 py-1.5 hover:underline text-black dark:text-white">
            About Us
          </a>
          <a href="#" className="block px-3 py-1.5 hover:underline text-black dark:text-white">
            Waitlist
          </a>
          <Link
            to="/CartPage"
            className="block px-3 py-1.5 hover:underline text-black dark:text-white"
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            className="block px-3 py-1.5 rounded px-5 py-1.5 min-w-[100px] w-full text-center bg-black text-white hover:bg-[#E34234] dark:bg-white dark:text-black dark:hover:bg-[#c6362e] transition-colors duration-300"
          >
            Buy
          </Link>
        </nav>
      )}

      {/* spacer div to push page content down when mobile menu is open */}
      <div
        className={`md:hidden transition-[height] duration-300 ${
          isOpen ? 'h-[180px]' : 'h-0'
        }`}
      />
    </>
  );
};

export default Navbar;
