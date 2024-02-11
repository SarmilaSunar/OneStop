"use client";
import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import {Input,Button,} from "@nextui-org/react";
import { toast } from "react-hot-toast";
import Navbar from '../../../components/navbar/page'
import axios from "axios";

const ProductSchema = Yup.object().shape({
  product: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  description: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  subCategory: Yup.string().required("Required"),
});

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const [categories, setCategories] = useState([]);
  const fetchProduct = async () => {
    try {
      const {data} = await axios.get("http://localhost:2000/admin/categories");
         setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const handleAdd = async (values) => {
    try {
      const {data} = await axios.post("http://localhost:2000/admin/products",
       values
       );
    } catch (err) {
      console.log(err);
    }
  };

  const { handleSubmit, resetForm, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {  
        product: "",
        price: "",
        description:"",
        category: "",
        subCategory: "",
      
        
      },
      validationSchema: ProductSchema,
      onSubmit: (values) => {
        values.category = selectedCategory;
        values.subCategory = selectedSubCategory;
        handleAdd(values);
        resetForm();
      },
    });

  return (
    <>
 <Navbar/> 
    <div className="w-full h-screen flex flex-col gap-8 justify-center items-center bg-gray">
    
      <div className="w-1/2 flex flex-col items-center gap-5 bg-white py-8 px-10">
        <h1 className="text-2xl font-semibold">Add Product</h1>
        
        <Formik>
          <form
             onSubmit={handleSubmit}
              className="flex flex-col items-center gap-6 w-full"
          >
            <div className="flex flex-col items-start w-full gap-3">
              <Input
                type="text"
                name="product"
                label="Product"
                value={values.product}
                onChange={handleChange}
              />
              {errors.product && touched.product ? (
                <div>{errors.product}</div>
              ) : null}
              <Input 
                type="number"
                name="price"
                label="Price"
                value={values.price}
                onChange={handleChange}
              />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
              <Input
                type="text"
                name="description"
                label="Description"
                value={values.description}
                onChange={handleChange}
              />
              {errors.description && touched.description ? <div>{errors.description}</div> : null}
              <Input
                type="text"
                name="category"
                label="Category"
                value={values.category}
                onChange={handleChange}
              />
              {errors.category && touched.category ? <div>{errors.category}</div> : null}
            
              <Input
                type="text"
                name="subCategory"
                label="Sub-Category"
                value={values.subCategory}
                onChange={handleChange}
              />
              {errors.subCategory && touched.subCategory ? <div>{errors.subCategory}</div> : null}
            
            </div>

          
            <Button type="submit" color="primary">
       Add Product
      </Button>  
              
            
          </form>
        </Formik>
      </div>
    </div>
    </>
  );
};
export default Product;