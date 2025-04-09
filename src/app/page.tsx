import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { CardHoverEffect } from "@/componets/ui/CardHoverEffect";
import { InfiniteMovingCard } from "@/componets/ui/InfiniteMovingCard";
import { ImagesSlider } from "@/componets/ui/ImageSlider";

export default function Home() {
  const images = [
    "/images/assisted-living-1.webp",
    "/images/assisted-living-11.webp",
    "/images/assisted-living-9.webp",
  ];

  const imagesWelcome = [
    "/images/assisted-living-4.webp",
    "/images/assisted-living-15.webp",
    "/images/gallery-1.webp",
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
          <p className="pt-4 mb-7 text-white">At Noble we believe life should still be fun, filled with laughters, live for our elderly community. Noble community is dedicated to make all your beloved families feel at home far from home</p>
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
          <p className="text-lg text-white tracking-wide mt-8">Noble is a compassionate and dedicated community where the joy of life continues to flourish for our elderly loved ones. At Noble, we believe that aging should not take away the laughter, love, or sense of purpose in life. We create a warm, welcoming environment that feels like home, even when miles away from family. Our team thrives on compassion, integrity, and dignity—ensuring that every resident receives the emotional and physical support they need, all while being treated with the utmost respect. With 24/7 care, residents and their families can rest easy knowing help, companionship, and safety are always within reach.</p>
        </article>
      </section>
      <InfiniteMovingCard />
    </>
  );
}
