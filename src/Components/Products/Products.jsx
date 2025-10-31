import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

const Products = () => {
    const categories=["All","Fruits","VageTables","Dairy","SeaFood"];
    const [activeTab,setActiveTab]=useState('All')
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
             <Heading highlight={'Our'}heading={'Products'}></Heading>
             {/* Tabs */}
             <div className='flex gap-3 justify-center mt-10'>
                {
  categories.map((category, index) => (
    <button
      key={index}
      onClick={() => setActiveTab(category)} 
      className={`px-5 py-2 text-lg rounded-lg transition
        ${activeTab === category ? 'bg-orange-500 text-white' : 'bg-zinc-100 text-black'}`}
    >
      {category}
    </button>
  ))
}
             </div>
            </div>
        </section>
    );
};

export default Products;