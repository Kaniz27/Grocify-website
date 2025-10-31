import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import Values from '../Values/Values';
import Section from '../../Section/SEction';
import Products from '../Products/Products';
import GroceryContainer from '../GrocerySection/GroceryContainer';
import Discount from '../Discount/Discount';
import Process from '../Process/Process';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Hero></Hero>
           <Category></Category>
           <Values></Values>
           <Section></Section>
           {/* <Products></Products> */}
           <GroceryContainer></GroceryContainer>
           <Discount></Discount>
           <Process></Process>
           <Testimonials></Testimonials>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;