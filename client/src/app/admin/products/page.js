'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar/page';
import { Button } from "@nextui-org/react";

const Page = () => {
  const router = useRouter(); // Get the router object from next/router

  const handleWomensClick = () => {
    router.push('/admin/categories'); // Navigate to the '/womens' page
  };

  const handleMensClick = () => {
    router.push('/admin/categories'); // Navigate to the '/mens' page
  };

  return (
    <div>
      <Navbar />

      <section className="text-gray-600 body-font">
        <div className="container px-20 py-60 mx-auto">
          <div className="flex flex-wrap -m-4">

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-60 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <Button color="primary" variant="shadow" size="lg" onClick={handleWomensClick}>Womens</Button>
                <p className="mt-1">$21.15</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-60 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <Button color="primary" variant="shadow" size="lg" onClick={handleMensClick}>Mens</Button>
                <p className="mt-1">$12.00</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
