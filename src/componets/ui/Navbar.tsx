'use client';

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import Link from "next/link";
import Image from 'next/image';
import logo from '@/../public/images/Logo.png';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact-us' },
];

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gradient-to-r from-charcoal-gray to-corn">
      <NavbarBrand>
        <Image src={logo} alt="Noble Homes Assisted Living logo" width="50" height='50' />
        <div className='flex flex-col sm:flex-row sm:gap-0 justify-start'>
          <span className="font-bold phone:text-lg sm:text-2xl pl-3 text-java">Noble Homes</span>
          <span className="font-bold phone:text-lg sm:text-2xl pl-2 text-corn">Assisted Living</span>
        </div>
       
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarItem className="hidden md:flex gap-10">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-black hover:text-dark-blue",
                  {
                    'text-dark-blue border-b-dark-blue pb-0.5 border-b-2': pathname === link.href,
                  },
                )}
              >
                <p className="">{link.name}</p>
              </Link>
            );
          })}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {links.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className='text-end pt-3'>
            <Link
              className={clsx(
                "text-black hover:text-dark-blue",
                {
                  'text-dark-blue border-b-dark-blue pb-0.5 border-b-2': pathname === item.href,
                },
              )}
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}