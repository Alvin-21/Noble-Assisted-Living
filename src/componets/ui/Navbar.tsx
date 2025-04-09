'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
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

  return (
    <Navbar className="bg-gradient-to-r from-charcoal-gray to-corn">
      <NavbarBrand>
        <Image src={logo} alt="Noble Assisted Living logo" width="50" height='50' />
        <span className="font-bold text-2xl pl-3 text-java">Noble Assisted</span>
        <span className="font-bold text-2xl pl-1 text-corn">Living</span>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex gap-10">
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
    </Navbar>
  );
}