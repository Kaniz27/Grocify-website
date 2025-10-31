import React from 'react';
import { FaHandshake, FaLeaf, FaCheckCircle, FaSeedling } from 'react-icons/fa';



const iconMap = {
  FaHandshake: <FaHandshake size={40} className="text-green-500" />,
  FaLeaf: <FaLeaf size={40} className="text-green-500" />,
  FaCheckCircle: <FaCheckCircle size={40} className="text-green-500" />,
  FaSeedling: <FaSeedling size={40} className="text-green-700" />
};

const Card = ({ item }) => {
  return (
    <div className="bg-white  rounded-2xl p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform">
      <div className="w-14 h-14 flex items-center justify-center bg-orange-500 rounded-full">
        {iconMap[item.icon]}
      </div>
     
      <h3 className="text-3xl font-bold">{item.title}</h3>
      <p className="text-gray-600 text-center">{item.description}</p>
    </div>
  );
};

export default Card;
