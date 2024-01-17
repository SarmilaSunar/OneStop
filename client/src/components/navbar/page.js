'use client'
import React from 'react'
import { Navbar,NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from 'next/image'
const page = () => {
  return (
    <div>
        <Navbar>
      <NavbarBrand>
        <Image src="/logo.png" width={65} height={20}/>
        <p classNameName="font-bold text-inherit"></p>
      </NavbarBrand>
      <NavbarContent classNameName="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
       
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem classNameName="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  )
}

export default page