import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-lg py-4 bg-white fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* 1️⃣ Logo Section */}
        <div className="text-3xl font-bold text-gray-800">
          Groc
          <span className="text-orange-500">i</span>
          fy
        </div>

        {/* 2️⃣ Nav Links Section (Desktop) */}
        <div className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
          <a href="#" className="hover:text-green-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-green-600 transition">
            About Us
          </a>
          <a href="#" className="hover:text-green-600 transition">
            Process
          </a>
          <a href="#" className="hover:text-green-600 transition">
            Contact Us
          </a>
        </div>

        {/* 3️⃣ Search + Icons Section */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center border rounded-full px-3 py-1 bg-gray-50">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-28 sm:w-40"
            />
            <IoSearchCircle className="text-white flex justify-center items-center rounded-full text-2xl bg-orange-500 hover:bg-green-600 cursor-pointer" />
          </div>

          <FaHeart className="text-gray-700 text-xl hover:text-red-500 cursor-pointer" />
          <FaShoppingCart className="text-gray-700 text-xl hover:text-green-600 cursor-pointer" />

          {/* Hamburger menu for mobile */}
          <div
            className="md:hidden text-2xl cursor-pointer text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* 4️⃣ Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4 text-gray-700 text-lg font-medium">
          <a href="#" className="block hover:text-green-600 transition">
            Home
          </a>
          <a href="#" className="block hover:text-green-600 transition">
            About Us
          </a>
          <a href="#" className="block hover:text-green-600 transition">
            Process
          </a>
          <a href="#" className="block hover:text-green-600 transition">
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
