import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import { Metadata } from 'next';
import Form from "@/componets/ui/referrals/referral-form";

export const metadata: Metadata = {
    title: 'Referrals',
};

export default function Page() {
    return (
        <>
            <div className="h-[10vh] w-full mt-8 px-8 md:mx-auto">
                <h4 className="inline text-lg text-cerulean font-semibold">Home <ChevronDoubleRightIcon className="w-5 inline text-black" /></h4>
                <h4 className="inline text-lg text-dark-corn font-semibold"> Referrals</h4>
                <div className="pt-3"></div>
                <hr className="border-b-2 border-b-java border-dashed" />
            </div>
            <div className="h-fit">
                <div className="flex flex-col text-java text-center bg-dark-blue  mx-8 md:mx-auto px-7 pt-7">
                    <h1 className="text-5xl text-corn">Referrals</h1>
                    <p className="text-white text-2xl pt-4">At <span className="text-java">Noble Homes</span> <span className="text-light-corn">Assisted Living</span>, we are dedicated to making the transition into assisted living as smooth and supportive as possible. Please complete the form below to submit a referral. Our team carefully reviews each submission to ensure we can provide the appropriate level of care and support. If you have any questions, feel free to contact us directly.</p>
                </div>
                <Form />
            </div>
        </>
    );
}