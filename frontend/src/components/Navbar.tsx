import { useState, useEffect } from 'react';
import logosrc from '../assets/logo.png';
import { Link } from 'react-router-dom';

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
          ${scrolled ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-md' : 'bg-transparent'}
        `}
      >
        {/* Logo fixed on left */}
        <div className="flex-shrink-0">
          <img src={logosrc} alt="Eclypse Logo" className="h-10" />
        </div>

        {/* Hamburger / Close Button fixed on right */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-gray-200 bg-opacity-70 rounded p-1 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-black"
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
          <a
            href="#"
            className={`hover:underline ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            About Us
          </a>
          <a
            href="#"
            className={`hover:underline ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Waitlist
          </a>
          <Link to="/CartPage">
            <a
              href="#"
              className={`hover:underline ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Cart
            </a>
          </Link>
          <Link to="/checkout">
            <button
              className={`rounded px-5 py-1.5 min-w-[100px] text-center transition-colors duration-300 ${
                scrolled
                  ? 'bg-black text-white hover:bg-[#E34234]'
                  : 'bg-white text-black hover:bg-[#E34234]'
              }`}
            >
              Buy
            </button>
          </Link>
        </nav>
      </header>

      {/* Mobile menu - pushes content down, full width */}
      {isOpen && (
        <nav className="md:hidden bg-gray-300 px-3 pt-3 pb-4 space-y-2 fixed top-[48px] left-0 w-full z-40 shadow-md">
          {/* top-[48px] = header height approx (h-10 + py-2) */}
          <a href="#" className="block px-3 py-1.5 hover:underline text-black">
            About Us
          </a>
          <a href="#" className="block px-3 py-1.5 hover:underline text-black">
            Waitlist
          </a>
          <Link to="/CartPage" className="flex-1">
            <a href="#" className="block px-3 py-1.5 hover:underline text-black">
              Cart
            </a>
          </Link>
          <Link to="/checkout" className="block px-3 py-1.5">
            <button className="rounded px-5 py-1.5 min-w-[100px] w-full text-center bg-black text-white hover:bg-[#E34234] transition-colors duration-300">
              Buy
            </button>
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
