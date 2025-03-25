'use client';

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@heroui/react";
import Image from 'next/image';
import logo from '@/../public/images/Logo.png';

export default function Nav() {
  return (
    <Navbar className="bg-gradient-to-r from-charcoal-gray to-corn">
      <NavbarBrand>
        <Image src={logo} alt="Noble Assisted Living logo" width="50" height='50' />
        <span className="font-bold text-2xl pl-3 text-java">Noble Assisted</span>
        <span className="font-bold text-2xl pl-1 text-corn">Living</span>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="end">
        <NavbarItem isActive>
          <Link className="text-[#02658f]" aria-current="page" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}