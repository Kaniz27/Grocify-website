import React, { useEffect, useState } from "react";
import Card from "./Card";
import vege from '../assets/basket-full-vegetables.png';

const Section = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("trust.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (data.length === 0) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10">
        
        {/* Left side - first 2 cards */}
        <div className="flex flex-col gap-6 md:w-1/3">
          {data.slice(0, 2).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* Middle image */}
        <div className="md:w-1/3 flex justify-center">
          <img src={vege} alt="Vegetables Basket" className="rounded-xl " />
        </div>

        {/* Right side - last 2 cards */}
        <div className="flex flex-col gap-6 md:w-1/3">
          {data.slice(2, 4).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section;
