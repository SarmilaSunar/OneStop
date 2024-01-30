
'use client'
import React from 'react'
import { useState } from 'react';
import { Navbar,NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Image from 'next/image'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";
import { useSelector , useDispatch } from 'react-redux';
import {logoutUser} from '@/redux/reducerSlices/userSlice'
import Link from "next/link";


const page = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userDetails } = useSelector((state) => state.user);
   
 

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
           Home
          </Link>
        </NavbarItem>
    
        <NavbarItem>
          <Link color="foreground" href="#">
          About 
          </Link>
        </NavbarItem>
          
        <NavbarItem>
          <Link color="foreground" href="#">
           Products
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
          Contact
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
 


        <div className="flex items-center gap-4">
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
            <p className="font-semibold">{ userDetails.email }</p>

          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger"  onClick={() => dispatch(logoutUser())}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
     
    </div>
  

      </NavbarContent>
    </Navbar>
    </div>
  )
}

export default page