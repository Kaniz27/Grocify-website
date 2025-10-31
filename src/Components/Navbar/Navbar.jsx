import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-base-100 shadow-md px-4 md:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Brand */}
        <NavLink to="/" className="text-2xl font-bold flex items-center">
          Groc<span className="text-orange-500">i</span>fy
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-64 pl-10"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 ml-4">
            <FaHeart className="cursor-pointer text-gray-600 hover:text-red-500 transition-colors" />
            <FaShoppingCart className="cursor-pointer text-gray-600 hover:text-green-500 transition-colors" />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2 pb-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded transition-colors ${
                  isActive
                    ? "bg-orange-100 text-orange-600 font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile search */}
          <div className="relative mt-2 px-4">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full pl-10"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex items-center gap-4 px-4 mt-2">
            <FaHeart className="cursor-pointer text-gray-600 hover:text-red-500 transition-colors" />
            <FaShoppingCart className="cursor-pointer text-gray-600 hover:text-green-500 transition-colors" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
