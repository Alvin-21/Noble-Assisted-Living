import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { Metadata } from 'next';
import Form from "@/componets/ui/contact-us/contact-form";

export const metadata: Metadata = {
    title: 'Contact-Us',
};

export default function Page() {
    return (
        <>
            <div className="h-[10vh] w-full mt-8 px-8 md:mx-auto">
                <h4 className="inline text-lg text-cerulean font-semibold">Home <ChevronDoubleRightIcon className="w-5 inline text-black" /></h4>
                <h4 className="inline text-lg text-dark-corn font-semibold"> Contact Us</h4>
                <div className="pt-3"></div>
                <hr className="border-b-2 border-b-java border-dashed" />
            </div>
            <div className="pb-7 h-fit">
                <div className="flex flex-col text-java text-center bg-dark-blue max-w-3xl mx-8 md:mx-auto px-7 pt-7 rounded-t-xl">
                    <small className="text-xl text-corn">Reach out to us.</small>
                    <h1 className="text-4xl">We are happy to hear from you! <FaceSmileIcon className="w-9 inline text-corn pb-1" /></h1>
                </div>
                <Form />
            </div>
        </>
    );
}