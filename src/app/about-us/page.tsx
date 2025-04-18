import { AuroraBackgroundDemo } from "@/componets/ui/AuroraBackground";
import { ExpandableCard } from "@/componets/ui/ExpandableCard";
import { ParallaxScrollDemo } from "@/componets/ui/ParallaxScroll";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { div } from "framer-motion/client";
import { Metadata } from 'next';
import Image from "next/image";
 
export const metadata: Metadata = {
  title: 'About-Us',
};

export default function Page() {
    return (
        <>
            <AuroraBackgroundDemo />
            <div className="min-h-[10vh] w-full mt-8 px-8 pb-2">
                <h4 className="inline text-lg text-cerulean font-semibold">Home <ChevronDoubleRightIcon className="w-5 inline text-black" /></h4>
                <h4 className="inline text-lg text-dark-corn font-semibold"> Services</h4>
                <div className="pt-3"></div>
                <hr className="border-b-2 border-b-java border-dashed" />
            </div>
            <div className="container px-8">
                <h1 className="inline text-5xl font-semibold">Who </h1>
                <h1 className="inline text-cerulean text-5xl font-semibold">We</h1>
                <h1 className="inline text-5xl font-semibold"> Are <HeartIcon className="w-10 inline pb-1 text-corn" /></h1>
                <p className="pt-3 tracking-wide leading-relaxed">At Noble Homes Assisted Living, our foundation is built on the core values of Compassion, Integrity, and Dignity (CID). These values guide our mission to provide a nurturing environment where our residents not only feel safe and supported but also valued and empowered to live with purpose and joy.</p>
            </div>
            <ExpandableCard />
            <div className="flex justify-center gap-4 pb-10">
                <h1 className="inline sm:text-5xl phone:text-4xl font-semibold">Our </h1>
                <h1 className="inline text-cerulean sm:text-5xl phone:text-4xl font-semibold">Community</h1>
            </div>
            {/* <ParallaxScrollDemo /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 gap-5 justify-items-center pb-5 h-[30rem] md:h-[40rem] overflow-y-scroll">
                {images.map((image) => (
                    <Image
                        key={image}
                        src={image}
                        width={400}
                        height={400}
                        className="rounded-lg h-full"
                        alt="thumbnail"
                    />
                ))}
            </div>
        </>
    );
}

const images = [
    "/images/gallery-1.webp",
    "/images/gallery-2.webp",
    "/images/gallery-3.webp",
    "/images/gallery-4.webp",
    "/images/gallery-5.webp",
    "/images/gallery-6.webp",
    "/images/gallery-7.webp",
    "/images/gallery-8.webp",
    "/images/gallery-9.webp",
    "/images/gallery-10.webp",
    "/images/gallery-11.webp",
    "/images/gallery-12.webp",
  ];