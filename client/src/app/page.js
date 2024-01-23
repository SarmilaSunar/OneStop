'use client'
import React from "react";
import Footer from '../components/footer/page'
import {  Button } from "@nextui-org/react";
import Navbar from '../components/navbar/page'
import { useSelector } from "react-redux";
  
export default function App() {


  const{username}= useSelector(state=>state.user)
   return (
 <>
 <Navbar/>
 
 <section className="text-gray-600 body-font" style={{ backgroundColor: '#7EC6FF' }}>
    {username}
   <div className="container px-10 py-60 mx-auto flex flex-wrap">
     
     <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
       <div className="flex flex-col mb-10 lg:items-start items-center">
        
        
         <div className="flex-grow">
           <h1 className="text-gray-900 text-lg title-font font-medium mb-3">Welcome</h1>
           <p className="leading-relaxed text-base" style={{ color: '#06355B' }}>Get 20% for your first Order</p>
          <br/>
           <Button type="submit" color="primary" variant="solid" size="lg">
           Shop Now
         </Button>
       <br/><br/>
 
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
               <path d="M5 12h14M12 5l7 7-7 7"></path>
             </svg>
           </a>
         </div>
       </div>
     </div>
   </div>
 </section>
 
 
 
 <Footer/> 
 </>   
 
 );
 }