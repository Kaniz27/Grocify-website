import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading"; 
import { useNavigate } from "react-router"; 

const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <div className="pb-20 text-center">
        <Heading highlight="Shop" heading="by Category" />
      </div>

      <div className="flex justify-center mx-auto gap-8 flex-wrap">
        {categories.map((category) => (
          <div
            key={category.id}
            className="w-96 border border-gray-300 rounded-xl shadow-lg p-8 flex flex-col items-center text-center 
                       bg-gradient-to-b from-gray-100 to-white hover:scale-105 transition-transform"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-52 object-cover rounded mb-6"
            />
            <h3 className="text-2xl font-bold">{category.title}</h3>
            <p className="text-gray-600 mt-3">{category.description}</p>

            {/* ✅ navigate button */}
            <button
              onClick={() => navigate("/fruit")}
              className="mt-6 bg-gradient-to-b from-orange-400 to-orange-500 text-white py-3 px-10 font-semibold rounded-full shadow-md hover:from-green-500 hover:scale-105 transition-all duration-300"
            >
              See All
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
