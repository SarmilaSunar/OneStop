'use client'
import React from 'react';
import FormSection from '@/components/formSection/page';
import { useFormik } from 'formik';
import { Input, Button } from "@nextui-org/react";
import * as Yup from 'yup';
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast';



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
  
  const notify = (msg) => toast.success(msg);

const Register = () => {
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: SignupSchema,
    onSubmit: async (values, { resetForm }) => {
       handleRegister(values)
        setTimeout(() => {
          resetForm();
        }, 1000);
      }
    });
    const handleRegister = async (inputFields) => {
     try{
        const res = await fetch('http://localhost:2000/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputFields),
        });
        const data = await res.json()
        toast(data.msg,
  {
    icon:res.status==200? '✅':'❌',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
   if(res.status==200) router.push('/login')
       
      }catch(err){
        console.log(err)
      }
    }
  
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