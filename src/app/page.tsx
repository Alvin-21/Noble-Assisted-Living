import Nav from "@/componets/ui/Navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { CardHoverEffect } from "@/componets/ui/CardHoverEffect";
import { InfiniteMovingCard } from "@/componets/ui/InfiniteMovingCard";
import Image from "next/image";
import pic from '@/../public/images/assisted-living-1.jpg';

export default function Home() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-2 gap-0 bg-gray-500 h-[95vh]">
        <section className="content-center pl-8 pt-4 bg-gradient-to-l from-gray-500 to-gray-50">
          <header>
            <small className="text-lg">Embrace the comfort</small>
            <h1 className="text-5xl pb-2">Life With Our</h1>
            <h1 className="text-5xl">Quality Care</h1>
          </header>
          <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sit amet risus at fringilla. Cras id ante mollis, faucibus neque id, varius risus. Suspendisse convallis commodo vehicula.</p>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="solid"
            className="rounded-md"
          >
            Find Out More <ArrowRightIcon className="w-5 md:w-6" />
          </Button>
        </section>
        <Image className="bg-cyan-500 rounded-l-xl h-[95vh]" src={pic} alt="hello" />
      </div>
      <CardHoverEffect />
      <section className="grid grid-cols-2 gap-0 h-[60vh]">
        <Image className="rounded-r-xl h-[60vh]" src={pic} alt="hello" />
        <article className="pl-8 pt-3">
          <small className="text-base">Welcome to</small>
          <h1 className="text-5xl py-3">Noble Assisted Living</h1>
          <p className="text-lg tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sit amet risus at fringilla. Cras id ante mollis, faucibus neque id, varius risus. Suspendisse convallis commodo vehicula. Quisque sapien massa, facilisis nec auctor et, pharetra non arcu. Phasellus efficitur facilisis eros ut lacinia. Cras a porttitor ipsum. Sed semper nibh vel gravida eleifend. Phasellus finibus posuere ipsum vel euismod. Cras iaculis nec nisi in condimentum. Mauris faucibus justo sapien, et vulputate massa varius non. Nulla id suscipit orci, et efficitur tortor.</p>
        </article>
      </section>
      <InfiniteMovingCard />
      <footer className="flex justify-between h-[40vh]">
        <address className="pl-8 pt-5">
          <h2 className="text-2xl">Get in Touch With Us Today!</h2>
          <div className="pt-3">
            <p className="text-lg">You can send us an <a href="mailto:nobleassistedliving@gmail.com">email</a></p>
            <div className="flex justify-center w-52 py-3">
              <small className="">OR</small>
            </div>
            <p>Call / Text us on 0712345678</p>
          </div>
        </address>
        <aside className="flex gap-28 pt-5">
          <div className="flex flex-col">
            <h2 className="text-2xl pb-3">Site Navigation</h2>
            <div className="flex flex-col gap-3">
              <Link className="text-lg">Home</Link>
              <Link className="text-lg">About Us</Link>
              <Link className="text-lg">Services</Link>
              <Link className="text-lg">Contact Us</Link>
            </div>
          </div>
        </aside>
        <aside className="flex gap-28 pt-5 pr-8">
          <div className="flex flex-col">
            <h2 className="text-2xl pb-3">Socials</h2>
            <div className="flex flex-col gap-3">
              <Link className="text-lg flex justify-between">Instagram <ArrowTopRightOnSquareIcon className="ml-4 w-5" /></Link>
              <Link className="text-lg flex justify-between">Facebook <ArrowTopRightOnSquareIcon className="ml-4 w-5" /></Link>
              <Link className="text-lg flex justify-between">X <ArrowTopRightOnSquareIcon className="ml-4 w-5" /></Link>
            </div>
          </div>
        </aside>
      </footer>
    </>
  );
}
