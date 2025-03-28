import { AuroraBackgroundDemo } from "@/componets/ui/AuroraBackground";
import { ExpandableCard } from "@/componets/ui/ExpandableCard";
import { ParallaxScrollDemo } from "@/componets/ui/ParallaxScroll";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'About-Us',
};

export default function Page() {
    return (
        <>
            <AuroraBackgroundDemo />
            <div className="h-[10vh] mt-8 container mx-auto">
                <h4 className="inline text-lg text-cerulean font-semibold">Home <ChevronDoubleRightIcon className="w-5 inline text-black" /></h4>
                <h4 className="inline text-lg text-dark-corn font-semibold"> About Us</h4>
                <div className="pt-3"></div>
                <hr className="border-b-2 border-b-java border-dashed" />
            </div>
            <div className="container mx-auto">
                <h1 className="inline text-5xl font-semibold">Who </h1>
                <h1 className="inline text-cerulean text-5xl font-semibold">We</h1>
                <h1 className="inline text-5xl font-semibold"> Are <HeartIcon className="w-10 inline pb-1 text-corn" /></h1>
                <p className="pt-3 tracking-wide leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sit amet risus at fringilla. Cras id ante mollis, faucibus neque id, varius risus. Suspendisse convallis commodo vehicula. Quisque sapien massa, facilisis nec auctor et, pharetra non arcu. Phasellus efficitur facilisis eros ut lacinia. Cras a porttitor ipsum. Sed semper nibh vel gravida eleifend. Phasellus finibus posuere ipsum vel euismod. Cras iaculis nec nisi in condimentum. Mauris faucibus justo sapien, et vulputate massa varius non. Nulla id suscipit orci, et efficitur tortor.</p>
            </div>
            <ExpandableCard />
            <div className="flex justify-center gap-4 pb-10">
                <h1 className="inline text-5xl font-semibold">Our </h1>
                <h1 className="inline text-cerulean text-5xl font-semibold">Community</h1>
            </div>
            <ParallaxScrollDemo />
        </>
    );
}