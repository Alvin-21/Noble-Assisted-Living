'use client';

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import Image from 'next/image';
import logo from '@/../public/images/Logo.png';

export default function Nav() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image src={logo} alt="Noble Assisted Living logo" width="50" height='50' />
        <p className="font-bold text-inherit pl-3">Noble Assisted Living</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="end">
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}