import React, { useEffect, useState } from "react";

const DiscountCards = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("/discount.json")
      .then((res) => res.json())
      .then((data) => {
        setFruits(data); // সব item set করা
      })
      .catch((err) => console.error(err));
  }, []);

  if (!fruits.length) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="flex flex-wrap justify-center gap-6 py-10">
      {fruits.map((fruit) => {
        const originalPrice = parseFloat(fruit.price.replace(/[^\d.]/g, ""));
        const discountedPrice = (originalPrice * 0.8).toFixed(2);

        return (
          <div
            key={fruit.id}
            className="w-4/5 md:w-80 bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform relative"
          >
            {/* Discount badge */}
            <span className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 text-sm font-bold rounded">
              20% OFF
            </span>

            <img
              src={fruit.image}
              alt={fruit.title}
              className="w-full h-48 object-cover rounded mb-4"
            />

            <h3 className="text-2xl font-bold mb-2">{fruit.title}</h3>

            <p className="text-gray-600 mb-2">{fruit.description}</p>

            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Vitamins:</span> {fruit.vitamins}
            </p>

            <p className="text-gray-700 mb-2">
              <span className="line-through text-red-500">${originalPrice.toFixed(2)}/kg</span>{" "}
              <span className="font-bold text-green-600">${discountedPrice}/kg</span>
            </p>

            {/* Benefits */}
            <div className="text-left mt-2">
              <span className="font-semibold text-lg">Benefits:</span>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                {fruit.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>

            <button className="mt-4 bg-orange-400 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
              Add to Cart
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default DiscountCards;
