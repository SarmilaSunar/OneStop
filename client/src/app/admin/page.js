"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@nextui-org/react";

const page = () => {
  const router = useRouter();
  return (
    <div>
        
        <br/>
        <div className="flex justify-center">
        <Button color="primary" variant="ghost"  onClick={() => router.push("/admin/products")}>
        Add Products
      </Button>   
      <Button color="primary" variant="ghost"  onClick={() => router.push("/admin/categories")}>
        Add Categories
      </Button> 

        </div>
    </div>
  );
};

export default page;