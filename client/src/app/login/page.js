'use client'
import React from 'react';
import FormSection from '@/components/formSection/page';
import { Input, Button } from "@nextui-org/react";
const page = () => {
  return (
    <FormSection>
      <h1>Login</h1>
      <br/>
      <form >
       
        <br/>
        <Input
          type="email"
          label="Email"
          name="email"
         
        />
        <br/>
        <Input
          type="password"
          label="Password"
          name="password"
       
        />
        <br/>
        <Button type="submit" color="primary" variant="solid">
         Login
        </Button>
      </form>
    </FormSection>
  );
}


export default page