import React from "react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black text-white px-6 py-8 border-t border-gray-700">
      {/* Always 3 columns, even on mobile */}
      <div className="grid grid-cols-3 gap-4 text-sm">
        
        {/* Column 1: Navigation */}
        <div className="flex flex-col space-y-2">
          <p className="text-xl font-bold mb-2">Eclypse</p>
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#products" className="hover:underline">Products</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Column 2: Contact Info */}
        <div className="flex flex-col items-center space-y-1 text-center">
          <p className="font-semibold text-base">Contact Us</p>
          <p>+91 123-456-7890</p>
          <p className="font-semibold pt-2">Email</p>
          <p>email@eclypse.com</p>
        </div>

        {/* Column 3: Scroll to Top */}
        <div className="flex justify-end items-start">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white text-black font-bold text-lg flex items-center justify-center hover:scale-110 transition"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 pt-4 border-t border-gray-700 text-center text-xs">
        © 2025 Eclypse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
