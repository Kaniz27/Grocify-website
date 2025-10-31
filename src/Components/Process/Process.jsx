import React, { useEffect, useState } from "react";
import {
  FaLeaf,
  FaIndustry,
  FaTruck,
  FaCheckCircle,
  FaSearch,
} from "react-icons/fa";

const iconMap = {
  FaLeaf,
  FaIndustry,
  FaTruck,
  FaCheckCircle,
  FaSearch,
};

const SourcingSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("process.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (data.length === 0) {
    return <p className="text-center py-10 text-gray-500">Loading...</p>;
  }

  return (
    <section className="container mx-auto py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our <span className="text-orange-500">Sourcing Process</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We ensure every product you get is sourced, processed, and delivered
          with the highest standards of freshness and quality.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-between gap-8">
        {data.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div
              key={item.id}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 border-t-4 border-orange-400"
            >
              <div className="bg-gradient-to-b from-orange-400 to-orange-500 p-5 rounded-full text-green-500 text-4xl mb-6">
                <IconComponent />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <span className="text-orange-500 font-semibold text-sm">
                {item.sourcing}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SourcingSection;
