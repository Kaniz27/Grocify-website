import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import Values from '../Values/Values';
import Section from '../../Section/SEction';

import GroceryContainer from '../GrocerySection/GroceryContainer';
import Discount from '../Discount/Discount';
import Process from '../Process/Process';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
           
           <Hero></Hero>
           <Category></Category>
           <Values></Values>
           <Section></Section>
           
           <GroceryContainer></GroceryContainer>
           <Discount></Discount>
           <Process></Process>
           <Testimonials></Testimonials>
          
           
        </div>
    );
};

export default Home;