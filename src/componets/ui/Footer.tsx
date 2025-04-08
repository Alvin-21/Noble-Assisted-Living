import { ArrowTopRightOnSquareIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex justify-between h-[60vh] px-14 bg-gradient-to-l from-java to-corn">
            <address className="pl-8 pt-9">
                <h2 className="text-2xl text-dark-blue">Get in Touch With Us Today!</h2>
                <div className="pt-3 text-lg text-black">
                    <p className=""><EnvelopeIcon className="w-8 inline mr-2" />You can send us an
                        <a href="mailto:nobleassistedliving@gmail.com" className="text-dark-blue hover:underline"> email</a>
                    </p>
                    <div className="flex justify-center w-52 py-3">
                        <small className="">OR</small>
                    </div>
                    <span><PhoneIcon className="w-8 inline mr-2" />Call / Text us on</span>
                    <a href="tel:+254-712-345-678" className="text-dark-blue hover:underline"> 0712345678</a>
                </div>
                <div className="pt-7 text-black">
                    <span className="text-lg"><MapPinIcon className="w-8 inline mr-2" />Find us at:</span>
                    <ul className="list-none ml-12 pt-1 tracking-wide leading-relaxed text-lg">
                        <li>14168 Palm St NW</li>
                        <li className="pt-2">Andover, MN  55304</li>
                        <li className="pt-2">United States</li>
                    </ul>
                </div>
            </address>
            <aside className="flex gap-28 pt-9">
                <div className="flex flex-col text-black">
                    <h2 className="text-2xl pb-3">Site Navigation</h2>
                    <div className="flex flex-col gap-3 text-lg">
                        <Link href="/" className="hover:text-primary hover:cursor-pointer">
                            Home
                        </Link>
                        <Link href="/about-us" className="hover:text-primary hover:cursor-pointer">
                            About Us
                        </Link>
                        <Link href="/services" className="hover:text-primary hover:cursor-pointer">
                            Services
                        </Link>
                        <Link href="/contact-us" className="hover:text-primary hover:cursor-pointer">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </aside>
            <aside className="flex gap-28 pt-9 pr-8">
                <div className="flex flex-col">
                    <h2 className="text-2xl pb-3 text-black">Socials</h2>
                    <div className="flex flex-col gap-6 text-lg text-black">
                        <Link href="https://www.instagram.com" passHref={true} target="_blank" className="text-lg flex justify-between hover:text-primary hover:cursor-pointer pb-1 border-b-1 border-b-black hover:border-b-primary">
                            Instagram <ArrowTopRightOnSquareIcon className="ml-4 w-5" />
                        </Link>
                        <Link href="https://www.facebook.com" passHref={true} target="_blank" className="text-lg flex justify-between hover:text-primary hover:cursor-pointer pb-1 border-b-1 border-b-black hover:border-b-primary">
                            Facebook <ArrowTopRightOnSquareIcon className="ml-4 w-5" />
                        </Link>
                        <Link href="https://www.x.com" passHref={true} target="_blank" className="text-lg flex justify-between hover:text-primary hover:cursor-pointer pb-1 border-b-1 border-b-black hover:border-b-primary">
                            X <ArrowTopRightOnSquareIcon className="ml-4 w-5" />
                        </Link>
                    </div>
                </div>
            </aside>
        </footer>
    );
}