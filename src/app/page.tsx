import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { CardHoverEffect } from "@/componets/ui/CardHoverEffect";
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
      <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-0 bg-cerulean h-[50rem] sm:h-[39.5rem]">
        <section className="order-last md:order-first content-center pl-8 pt-4 bg-gradient-to-l from-cerulean to-gray-400">
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
            className="rounded-md bg-cerulean text-white mb-3"
          >
            Find Out More <ArrowRightIcon className="w-5 md:w-6" />
          </Button>
        </section>
        <ImagesSlider images={images} className="md:rounded-l-xl h-full w-full" direction="left" />
      </div>
      <section className="bg-corn sm:h-[1900px] lg:!h-[44rem] phone:h-[2300px] phone1:h-[2250px] phone2:h-[2220px] phone3:h-[2170px] phone4:h-[2150px] phone5:h-[2070px] phone6:h-[2000px] phone7:h-[1930px] md:!h-[71rem] lg:!h-[45rem]">
        <CardHoverEffect />
      </section>
      <section className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-0 sm:!h-full lg:!h-[38rem] phone-xs:h-[100vh] phone:h-[90vh] bg-cerulean">
        <ImagesSlider images={imagesWelcome} className="md:rounded-r-xl sm:!h-full w-full phone-xs:h-[45vh] phone:h-[40vh] phone7:h-[50vh]" direction="right" />
        <article className="px-8 py-3 bg-cerulean phone5:h-[39rem] phone7:h-[33rem] sm:!h-[30rem] md:!h-fit lg:!h-[35rem] phone-xs:h-[55rem] phone2:h-[47rem]">
          <small className="text-base text-white">Welcome to</small>
          <br />
          <div className="mt-3"></div>
          <div className="flex flex-col">
            <h1 className="text-5xl pt-3 inline text-java">Noble Homes </h1>
            <h1 className="text-5xl pb-3 inline text-corn">Assisted Living</h1>
          </div>
          <p className="text-lg text-white tracking-wide mt-8 pr-5 md:pr-0">Noble is a compassionate and dedicated community where the joy of life continues to flourish for our elderly loved ones. At Noble, we believe that aging should not take away the laughter, love, or sense of purpose in life. We create a warm, welcoming environment that feels like home, even when miles away from family. Our team thrives on compassion, integrity, and dignity—ensuring that every resident receives the emotional and physical support they need, all while being treated with the utmost respect. With 24/7 care, residents and their families can rest easy knowing help, companionship, and safety are always within reach.</p>
        </article>
      </section>
    </>
  );
}
