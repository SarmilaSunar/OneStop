'use client'
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormSection from '@/components/formSection/page'
import {Input} from "@nextui-org/react";


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
   email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().email('Invalid email').required('Required'),
});



 const Register = () => (
  <FormSection>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Input type="name" label="Enter your name" />
          <br/>
          <Input type="email" label="Email" placeholder="Enter your email" />
       
         
       
       
        </Form>
      )}
    </Formik>
    </FormSection>
);
export default Register