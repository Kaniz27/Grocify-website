import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="container mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left side: Contact info */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p>FreshMart</p>
          <p>123 Green Street, Dhaka, Bangladesh</p>
          <p>Phone: +880123456789</p>
          <p>Email: info@freshmart.com</p>
          <p>Hours: Mon-Sat 9am - 8pm</p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebook /></a>
            <a href="#" className="text-pink-500 text-2xl hover:text-pink-700"><FaInstagram /></a>
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="text-blue-700 text-2xl hover:text-blue-900"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right side: Contact form */}
        <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 p-3 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-orange-400 text-white py-3 px-6 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Optional: Map */}
     
    </section>
  );
};

export default Contact;
