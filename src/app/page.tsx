import Nav from "@/componets/ui/Navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRightIcon, ArrowTopRightOnSquareIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { CardHoverEffect } from "@/componets/ui/CardHoverEffect";
import { InfiniteMovingCard } from "@/componets/ui/InfiniteMovingCard";
import Image from "next/image";
import pic from '@/../public/images/assisted-living-1.jpg';
import pic2 from '@/../public/images/assisted-living-4.jpg';

export default function Home() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-2 gap-0 bg-cerulean h-[91vh]">
        <section className="content-center pl-8 pt-4 bg-gradient-to-l from-cerulean to-gray-400">
          <header>
            <small className="text-lg text-white">Embrace the comfort</small>
            <h1 className="text-5xl pb-2 text-java">Life With Our</h1>
            <h1 className="text-5xl text-corn">Quality Care</h1>
          </header>
          <p className="pt-4 mb-7 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sit amet risus at fringilla. Cras id ante mollis, faucibus neque id, varius risus. Suspendisse convallis commodo vehicula.</p>
          <Button
            as={Link}
            href="#"
            variant="solid"
            className="rounded-md bg-cerulean text-white"
          >
            Find Out More <ArrowRightIcon className="w-5 md:w-6" />
          </Button>
        </section>
        <Image className="rounded-l-xl h-[91vh]" src={pic} alt="hello" />
      </div>
      <section className="bg-corn">
        <CardHoverEffect />
      </section>
      <section className="grid grid-cols-2 gap-0 h-[80vh] bg-cerulean">
        <Image className="rounded-r-xl h-[80vh]" src={pic2} alt="hello" />
        <article className="pl-8 pt-3 bg-cerulean">
          <small className="text-base text-white">Welcome to</small>
          <br />
          <div className="mt-3"></div>
          <h1 className="text-5xl py-3 inline text-java">Noble Assisted </h1>
          <h1 className="text-5xl py-3 inline text-corn">Living</h1>
          <p className="text-lg text-white tracking-wide mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sit amet risus at fringilla. Cras id ante mollis, faucibus neque id, varius risus. Suspendisse convallis commodo vehicula. Quisque sapien massa, facilisis nec auctor et, pharetra non arcu. Phasellus efficitur facilisis eros ut lacinia. Cras a porttitor ipsum. Sed semper nibh vel gravida eleifend. Phasellus finibus posuere ipsum vel euismod. Cras iaculis nec nisi in condimentum. Mauris faucibus justo sapien, et vulputate massa varius non. Nulla id suscipit orci, et efficitur tortor.</p>
        </article>
      </section>
      <InfiniteMovingCard />
      <footer className="flex justify-between h-[40vh] px-14 bg-gradient-to-l from-java to-corn">
        <address className="pl-8 pt-9">
          <h2 className="text-2xl text-dark-blue">Get in Touch With Us Today!</h2>
          <div className="pt-3">
            <p className="text-lg"><EnvelopeIcon className="w-8 inline mr-2" />You can send us an
              <a href="mailto:nobleassistedliving@gmail.com" className="text-dark-blue hover:underline"> email</a>
            </p>
            <div className="flex justify-center w-52 py-3">
              <small className="">OR</small>
            </div>
            <span><PhoneIcon className="w-8 inline mr-2" />Call / Text us on</span>
            <span className="text-dark-blue hover:underline"> 0712345678</span>
          </div>
        </address>
        <aside className="flex gap-28 pt-9">
          <div className="flex flex-col">
            <h2 className="text-2xl pb-3">Site Navigation</h2>
            <div className="flex flex-col gap-3">
              <Link className="text-lg text-white hover:text-primary hover:cursor-pointer">Home</Link>
              <Link className="text-lg text-white hover:text-primary hover:cursor-pointer">About Us</Link>
              <Link className="text-lg text-white hover:text-primary hover:cursor-pointer">Services</Link>
              <Link className="text-lg text-white hover:text-primary hover:cursor-pointer">Contact Us</Link>
            </div>
          </div>
        </aside>
        <aside className="flex gap-28 pt-9 pr-8">
          <div className="flex flex-col">
            <h2 className="text-2xl pb-3">Socials</h2>
            <div className="flex flex-col gap-6">
              <Link className="text-lg flex justify-between text-white hover:text-primary hover:cursor-pointer pb-1 border-b-1 hover:border-b-primary">Instagram <ArrowTopRightOnSquareIcon className="ml-4 w-5" /></Link>
              <Link className="text-lg flex justify-between text-white hover:text-primary hover:cursor-pointer pb-1 border-b-1 hover:border-b-primary">Facebook <ArrowTopRightOnSquareIcon className="ml-4 w-5" /></Link>
              <Link className="text-lg flex justify-between text-white hover:text-primary hover:cursor-pointer pb-1 border-b-1 hover:border-b-primary">X <ArrowTopRightOnSquareIcon className="ml-4 w-5" /></Link>
            </div>
          </div>
        </aside>
      </footer>
    </>
  );
}
