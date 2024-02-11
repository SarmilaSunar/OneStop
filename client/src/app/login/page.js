'use client'
import React from 'react';
import FormSection from '@/components/formSection/page';
import { useFormik } from 'formik';
import { Input, Button } from "@nextui-org/react";
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/redux/reducerSlices/userSlice';
import toast from 'react-hot-toast';
import { Link } from '@nextui-org/react';


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
    try{
      const res = await fetch('http://localhost:2000/login/',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inputFields)
      })
      const data = await res.json()
      if(res.status == 201){
        dispatch(loginUser(data))
         router.push('/admin/products')
      }
      toast( data.msg,
          {
            icon: res.status == 201 ? '✅' : '❌',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
    }catch(err){
      console.log(err)
    }
  
  }
  return (
  <FormSection>
    <div className="card shadow mx-auto " style={{maxWidth:"100vh"}}>
    
      <h1 className = "card-title mb-4 text-center" style={{color:"#1877F2", fontSize: "1.5rem"}}>Login</h1>
      <br/>
      <form onSubmit={formik.handleSubmit} >
        <Input
          type="email"
          label="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
         {formik?.errors.email}
        <br/>
        <Input
          type="password"
          label="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
          {formik?.errors.password}
        <br/>
        <Button type="submit" color="primary" variant="solid">
         Login
        </Button>
        <p>or</p>
        <Link href="/register">Create a new account</Link>

       
      </form>
    
    </div>
    </FormSection>
  )
}

export default Login