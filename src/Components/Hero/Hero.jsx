import React from "react";
import grocery from '../../assets/grocery.png'
import Button from "../Button/Button";
const Hero = () => {
  return (
    <div className="container mx-auto flex justify-between items-center px-8 py-16 mt-20">
      {/* Main Div */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Div */}
        <div className="md:w-1/2 space-y-4">
          <span className="text-orange-500 p-2 rounded-full bg-orange-100 font-normal tracking-wide">
            Export Best Quality...
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 py-2 leading-tight">
          Tasty Organic <span className="text-orange-500">Fruits</span> & <span className="text-orange-500">Veggies</span> In your city
          </h1>
          <p className="text-gray-600 text-lg">
            Save time and money by shopping online. Fast delivery, fresh produce, and unbeatable deals!
          </p>
         <Button ></Button>
        </div>

        {/* Right Div */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={grocery}
            alt="Grocery Basket"
            className="w-80 md:w-120 drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
