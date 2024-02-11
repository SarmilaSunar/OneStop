'use client'
import React from 'react'
import { Navbar,NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from "../../redux/reducerSlices/userSlice";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";

const page = () => {

  const dispatch = useDispatch();
  const { isLoggedIn, userDetails } = useSelector((state) => state.user);

  const AuthButtons = () => {
    return(
      <div className="flex items-center gap-4">

      <NavbarItem className="hidden lg:flex">
      <Link href="/login">Login</Link>
    </NavbarItem>
    <NavbarItem>
      <Button as={Link} color="primary" href="/register" variant="flat">
        Sign Up
      </Button>
    </NavbarItem>
    </div>
    )
  }

  
  return (
    <div>
        <Navbar>
      <NavbarBrand>
        <Image src="/logo.png" width={65} height={20}/>
      </NavbarBrand>
      <Link href="#" underline="hover">Home</Link><br/>
      <Link href="#" underline="hover">About</Link><br/>
      <Dropdown backdrop="blur">  
      <DropdownTrigger>
      <Link href="#" underline="hover">Shop</Link>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem key="new">Womens</DropdownItem>
        <DropdownItem key="copy">Mens</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
     
    


      <Link href="#" underline="hover">Contact</Link><br/>

      <NavbarContent justify="end">

      
      {isLoggedIn ? (
        <div>
          <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered 
            as="button"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
           
            <p className="font-semibold">{userDetails ?. email}</p>
          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Orders</DropdownItem>
          <DropdownItem key="analytics">
            Analytics
          </DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger"  onClick={() => dispatch(logoutUser())}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

</div>

):(
  <AuthButtons />

)}

      </NavbarContent>
    </Navbar>

    </div>
  )
}

export default page