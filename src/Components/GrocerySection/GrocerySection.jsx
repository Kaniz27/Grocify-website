import React, { useEffect, useState } from "react";
import GroceryCard from "./GroceryCard";

const GrocerySection = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    fetch("/groceryitem.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  const tabs = ["All", "Fruits", "Vegetables", "Dairy", "Meat", "Bakery", "Grains", "Grocery"];

  // Filtered data based on active tab
  const filteredData =
    activeTab === "All"
      ? data
      : data.filter((item) => item.category === activeTab);

  const handleSeeAll = () => {
    setVisibleCount(filteredData.length);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setVisibleCount(12); 
  };

  return (
    <section className="container mx-auto py-12 px-4">
        <h2 className="text-5xl font-bold pb-18 text-center"><span className="text-orange-500">Our </span>Grocery Item</h2>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-5 py-2 rounded-full font-medium border transition ${
              activeTab === tab
                ? "bg-orange-500 text-white border-orange-500"
                : "border-gray-300 text-gray-600 hover:bg-orange-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 py-12 lg:grid-cols-4 gap-6">
        {filteredData.slice(0, visibleCount).map((item) => (
          <GroceryCard key={item.id} item={item} />
        ))}
      </div>

      {/* See All Button */}
      {visibleCount < filteredData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeAll}
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white py-3 px-8 font-semibold rounded-full shadow-md hover:from-green-500 hover:scale-105 transition-all duration-300 hover:bg-orange-600"
          >
            See All
          </button>
        </div>
      )}
    </section>
  );
};

export default GrocerySection;
