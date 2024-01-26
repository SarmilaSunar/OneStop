'use client'
import React from 'react';
import FormSection from '@/components/formSection/page';
import { useFormik } from 'formik';
import { Input, Button } from "@nextui-org/react";
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/redux/reducerSlices/userSlice';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
  });
const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: SignupSchema,
    onSubmit: values => { 
      handleLogin(values);
      formik.resetForm()
    }
  });
    const handleLogin = async(inputFields)=>{
      
        const res = await fetch('http://localhost:2000/login/',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(inputFields)
        })
        const data = await res.json()
       if(res.status == 201){
        dispatch(loginUser(data))
       }
      
    
        // Handle successful response
        alert('Form data submitted successfully');
       
    };

  return (
    <FormSection>
      <h1>Login</h1>
      <br/>
      <form onSubmit={formik.handleSubmit}>
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
         Login
        </Button>
      </form>
    </FormSection>
  )
}

export default Login