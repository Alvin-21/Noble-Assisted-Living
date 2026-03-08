'use client';

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import logo from '@/../public/images/Logo.png';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Referrals', href: '/referrals' },
  { name: 'Contact Us', href: '/contact-us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const prevPathname = React.useRef(pathname);

  React.useEffect(() => {
    if (prevPathname.current !== pathname) {
      setIsMenuOpen(false);
      prevPathname.current = pathname;
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center bg-gradient-to-r from-charcoal-gray to-corn py-2 px-8">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Noble Homes Assisted Living logo" width="50" height="50" />
          <div className='flex flex-col sm:flex-row sm:gap-0 justify-start'>
            <span className="font-bold phone:text-lg sm:text-2xl pl-3 text-java">Noble Homes</span>
            <span className="font-bold phone:text-lg sm:text-2xl pl-3 sm:pl-2 text-corn">Assisted Living</span>
          </div>
        </Link>
        <div className="hidden md:flex gap-10">
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
        </div>
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XMarkIcon className='w-8 h-8' />
          ) : (
            <Bars2Icon className='w-8 h-8' />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden bg-white pr-4 h-screen'>
          {links.map((item, index) => (
            <div key={`${item}-${index}`} className='text-end pt-5'>
              <Link
                className={clsx(
                  "text-lg text-black hover:text-dark-blue",
                  {
                    'text-dark-blue border-b-dark-blue pb-0.5 border-b-2': pathname === item.href,
                  },
                )}
                href={item.href}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}