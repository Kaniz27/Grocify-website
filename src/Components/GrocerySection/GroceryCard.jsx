import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";

const GroceryCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Top Icons Row */}
      <div className="flex justify-between items-center px-4 pt-4">
        <button className="bg-orange-100 p-2 rounded-full hover:bg-orange-200 transition">
          <FaHeart className="text-orange-500 text-lg" />
        </button>
        <button className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition shadow-md">
          <FaPlus className="text-white text-lg" />
        </button>
      </div>

      {/* Image Center */}
      <div className="flex justify-center items-center mt-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-40 h-40 object-contain"
        />
      </div>

      {/* Info Section */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{item.short_description}</p>
        <p className="text-orange-600 font-bold mb-2">{item.unit}</p>
        <p className="text-lg font-bold text-green-600">৳ {item.price}</p>
      </div>
    </div>
  );
};

export default GroceryCard;
