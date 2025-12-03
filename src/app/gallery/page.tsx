import { GalleryLayout } from '@/componets/ui/GalleryLayout';
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gallery',
};

export default function Page() {
    return (
        <>
            <div className="min-h-[10vh] w-full mt-8 px-8 pb-2">
                <h4 className="inline text-lg text-cerulean font-semibold">Home <ChevronDoubleRightIcon className="w-5 inline text-black" /></h4>
                <h4 className="inline text-lg text-dark-corn font-semibold"> Gallery</h4>
                <div className="pt-3"></div>
                <hr className="border-b-2 border-b-java border-dashed" />
            </div>
            <div className="container px-8">
                <h1 className="inline text-5xl font-semibold">Welcome to the </h1>
                <h1 className="inline text-cerulean text-5xl font-semibold">Noble</h1>
                <h1 className="inline text-dark-corn text-5xl font-semibold"> Homes</h1>
                <h1 className="inline text-5xl font-semibold"> Gallery</h1>
                <p className="pt-4 tracking-wide leading-relaxed text-lg">Step inside and explore the welcoming environment and accessible features of <strong>Noble Homes Assisted Living</strong>.</p>
                <p className="pt-4 tracking-wide leading-relaxed text-lg">These photographs offer a glimpse into the comfortable, home-like setting we provide, from our spacious, well-appointed bedrooms to our accessible entryways and inviting common areas.</p>
                <p className="pt-4 tracking-wide leading-relaxed text-lg">For a closer look and more details about each space, simply click or tap on any picture.</p>
            </div>
            <GalleryLayout />
        </>
    )
}