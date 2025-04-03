import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { CardHoverEffect } from "@/componets/ui/CardHoverEffect";
import { InfiniteMovingCard } from "@/componets/ui/InfiniteMovingCard";
import { ImagesSlider } from "@/componets/ui/ImageSlider";

export default function Home() {
  const images = [
    "/images/assisted-living-1.jpg",
    "/images/assisted-living-11.jpg",
    "/images/assisted-living-9.jpg",
  ];

  const imagesWelcome = [
    "/images/assisted-living-4.jpg",
    "/images/assisted-living-15.jpg",
    "/images/assisted-living-14.jpg",
  ];

  return (
    <>
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
            href="/about-us"
            variant="solid"
            className="rounded-md bg-cerulean text-white"
          >
            Find Out More <ArrowRightIcon className="w-5 md:w-6" />
          </Button>
        </section>
        <ImagesSlider images={images} className="rounded-l-xl h-full" direction="left" />
      </div>
      <section className="bg-corn">
        <CardHoverEffect />
      </section>
      <section className="grid grid-cols-2 gap-0 h-[80vh] bg-cerulean">
        <ImagesSlider images={imagesWelcome} className="rounded-r-xl h-full" direction="right" />
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
    </>
  );
}
