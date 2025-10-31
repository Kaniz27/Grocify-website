import React, { useEffect, useState } from "react";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("fruits.json")
      .then((res) => res.json())
      .then((data) => setFruits(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
        Fruits & Vegetables
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            className="w-80 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <img
              src={fruit.image}
              alt={fruit.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{fruit.title}</h3>
            <p className="text-gray-600 mb-2 whitespace-pre-line">
              {fruit.description}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Vitamins:</span> {fruit.vitamins}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Price:</span> {fruit.price}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Benefits:</span> {fruit.benefits}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fruits;
