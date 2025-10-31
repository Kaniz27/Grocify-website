import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-black w-full py-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10">

        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <div className="text-3xl font-bold text-black mb-2">
            Groc<span className="text-orange-500">i</span>fy
          </div>
          <h2 className="text-2xl font-bold text-black mb-4">
            Fresh<span className="text-orange-500">Basket</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted online grocery store — delivering fresh products right to your door, anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">About</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Shop</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400 transition">FAQ</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Shipping</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Returns</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
          <p className="text-sm mb-3">📍 123 Fresh Street, Dhaka, Bangladesh</p>
          <p className="text-sm mb-3">📞 +880 1234 567890</p>
          <p className="text-sm mb-5">✉️ support@freshbasket.com</p>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FreshBasket — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
