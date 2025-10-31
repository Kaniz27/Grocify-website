import { createBrowserRouter } from "react-router";

import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Shop from "../Components/Shop/Shop";
import Fruits from "../Components/Fruit/Fruits";
import Dairy from "../Components/Dairy/Dairy";
import Snacks from "../Components/Snacks/Snacks";
import DiscountCard from "../Components/DiscountCard/DiscountCard";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index:true,
      
        element: <Home></Home>,
      },
       {
      path:'/shop',
      element:<Shop></Shop>
      
        
      },
      {
      path:'/contact',
      element:<Contact></Contact>
      
        
      },
      {
      path:'/about',
      element:<About></About>
      
        
      },
      {
      path:'/fruit',
      element:<Fruits></Fruits>,
      
        
      },
      {
      path:'/discount',
      element:<DiscountCard></DiscountCard>,
      
        
      },
      {
      path:'/snacks',
      element:<Snacks></Snacks>,
      
        
      },
     
    ],
  },
  
  
  {
    path: "/*",
    element: <h1>Error 404 layout</h1>,
  },
]);
export default router;