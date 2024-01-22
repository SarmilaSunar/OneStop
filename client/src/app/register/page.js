'use client'
import React from 'react';
import FormSection from '@/components/formSection/page';
import { useFormik } from 'formik';
import { Input, Button } from "@nextui-org/react";
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  
  });
  

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: async (values, { resetForm }) => {
       handleRegister(values)
        setTimeout(() => {
          resetForm();
        }, 1000);
      }
    });
    const handleRegister = async (inputFields) => {
      try {
        const response = await fetch('http://localhost:2000/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputFields),
        });
    
        if (!response.ok) {
          throw new Error(`Failed to submit form data: ${response.status}`);
        }
    
        // Handle successful response
        alert('Form data submitted successfully');
      } catch (error) {
        console.error('Error during registration:', error); // Log the error
        alert('Failed to fetch. Please try again later.');
      }
    };

  return (
    <FormSection>
      <h1>Signup</h1>
      <br/>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="name"
          label="Full Name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br/>
        <Input
          type="email"
          label="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br/>
        <Input
          type="password"
          label="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br/>
        <Button type="submit" color="primary" variant="solid">
          Submit
        </Button>
      </form>
    </FormSection>
  );
}

export default Register