import React from "react";
import discountImg from "../../assets/fresh-fruits.png"; // তোমার image path ঠিক করে নিও

const Discount = () => {
  return (
    <section
      className="relative container mx-auto py-20 px-6 flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl shadow-lg overflow-hidden bg-orange-100"
      style={{
        backgroundImage: `url(${discountImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center gap-6 text-white">
        {/* Rotated Discount Tag */}
        <span className=" text-orange-500 text-5xl font-bold px-4 py-2 rounded-md transform -rotate-90">
          20% Discount
        </span>

        {/* Text Section */}
        <div>
          <h1 className="text-5xl  text-black font-bold mb-3">
           First Order <br /> Discount 
          </h1>
          <p className="text-lg max-w-md text-black opacity-50">
            Enjoy 20% off on all organic fruits and vegetables this week only.
            Grab your healthy essentials now!
          </p>
          <button className="mt-6 bg-gradient-to-b from-orange-400 to-orange-500 text-white py-3 px-8 font-semibold rounded-full shadow-md hover:from-green-500 hover:scale-105 transition-all duration-300">
           Get Discount
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discount;
