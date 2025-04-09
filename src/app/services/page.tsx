import Image from "next/image";
import pic from '@/../public/images/assisted-living-12.webp';
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import pic2 from '@/../public/images/assisted-living-13.webp';
import pic3 from '@/../public/images/assisted-living-8.webp';
import pic4 from '@/../public/images/assisted-living-2.webp';
import pic5 from '@/../public/images/assisted-living-7.webp';
import { Metadata } from 'next';
import ServicesArrowDown from "@/componets/ui/ServicesArrowDown";
 
export const metadata: Metadata = {
  title: 'Services',
};

export default function Page() {
    return (
        <>
            <Image className="h-[83vh]" src={pic} alt="A person helping an elderly with their groceries." />
            <div className="h-[8vh] bg-cerulean py-2 px-8 flex justify-center text-light-corn">
                <ServicesArrowDown />
            </div>
            <div className="h-[10vh] mt-8 container mx-auto">
                <h4 className="inline text-lg text-cerulean font-semibold">Home <ChevronDoubleRightIcon className="w-5 inline text-black" /></h4>
                <h4 className="inline text-lg text-dark-corn font-semibold"> Services</h4>
                <div className="pt-3"></div>
                <hr className="border-b-2 border-b-java border-dashed" />
            </div>
            <div className="container mx-auto">
                <h1 className="inline text-5xl font-semibold">Our </h1>
                <h1 className="inline text-cerulean text-5xl font-semibold">Services</h1>
                <p className="pt-4 tracking-wide leading-relaxed text-lg">At Noble Assisted Living, we offer a wide range of personalized services designed to support the comfort, health, and happiness of our residents. From daily living assistance to professional nursing care, our compassionate and well-trained staff is here to help every step of the way. We also prioritize social well-being through engaging programs, our team is always ready to provide the care, companionship, and security your loved ones deserve—because at Noble, we care like family.</p>
            </div>
            <div className="container mx-auto pt-7">
                <h2 id="activity" className="text-4xl font-semibold">What we offer:</h2>
            </div>
            <div className="grid grid-cols-2 gap-0 h-[80vh] pt-5">
                <Image className="h-[70vh] rounded-r-xl" src={pic2} alt="Two elderly people doing a yoga activity." />
                <div className="pl-8 pt-3 pr-3">
                    <h3 className="text-3xl inline text-cerulean font-semibold">Activities of </h3>
                    <h3 className="text-3xl inline text-corn font-semibold">Daily Living</h3>
                    <p className="pt-4 tracking-wide leading-relaxed text-lg">Our well trained stuff are here ready to help all our residents get all the help, encouragement and motivation they need to perform each individual’s daily tasks.</p>
                    <p className="pt-4 tracking-wide leading-relaxed text-lg">Here are some of daily routines we provide help with to our residents:</p>
                    <ul className="list-disc pl-8 pt-4 tracking-wide leading-relaxed text-lg">
                        <li>Bathing</li>
                        <li>Glooming</li>
                        <li>Toileting</li>
                        <li>Dressing</li>
                        <li>Meal prep</li>
                        <li>Feeding</li>
                        <li>Ambulating</li>
                        <li id="nursing">Transfers and mobility</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-0 h-[80vh] pt-5">
                <div className="pl-8 pt-7">
                    <h3 className="text-3xl font-semibold text-corn inline">Nursing</h3>
                    <h3 className="text-3xl font-semibold text-cerulean inline"> Services</h3>
                    <p className="pt-4 tracking-wide leading-relaxed text-lg">We not only provide medical care but also show compassion, love, empathy, willingness and trust to our esteemed residents and families.</p>
                    <p className="pt-4 tracking-wide leading-relaxed text-lg">Some of the services offered by our nurses to meet this goal but not limited to include:</p>
                    <ul className="list-disc pl-8 pt-4 tracking-wide leading-relaxed text-lg">
                        <li>Dispensing medication</li>
                        <li className="pt-2">Wound care</li>
                        <li className="pt-2">Medical management and maintenance</li>
                        <li className="pt-2">Diabetic cares and routines</li>
                        <li id="recreational" className="pt-2">Making appointments</li>
                    </ul>
                </div>
                <Image className="h-[70vh] rounded-l-xl" src={pic3} alt="A nurse wearing a stethoscope" />
            </div>
            <div className="grid grid-cols-2 gap-0 h-[80vh] pt-7">
                <Image className="h-[70vh] rounded-r-xl" src={pic4} alt="Two elderly people sitting on a couch reading a newspaper" />
                <div className="pl-8 pt-7 pr-3">
                    <h3 className="text-3xl inline font-semibold text-cerulean">Recreational</h3>
                    <h3 className="text-3xl inline font-semibold text-corn"> Programs</h3>
                    <p className="pt-4 tracking-wide leading-relaxed text-lg">We focus on helping our residents find purpose in life through programs that are well calculated to fit into their personal schedules and wants.</p>
                    <p className="pt-4 tracking-wide leading-relaxed text-lg">These programs can be indoor like:</p>
                    <ul className="list-disc pl-8 pt-2 tracking-wide leading-relaxed text-lg">
                        <li>Bingos</li>
                        <li className="pt-0">Coloring</li>
                        <li className="pt-0">Painting</li>
                        <li className="pt-0">Chatting</li>
                    </ul>
                    <p className="pt-4 tracking-wide leading-relaxed text-lg">Or outdoor such as:</p>
                    <ul className="list-disc pl-8 pt-2 tracking-wide leading-relaxed text-lg">
                        <li>Bingos</li>
                        <li className="pt-0">Taking walks</li>
                        <li className="pt-0">Outings</li>
                        <li id="availability" className="pt-0">E.t.c</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-0 h-[80vh] pt-7">
            <div className="pl-8 pt-7">
                    <h3 className="text-3xl inline font-semibold text-corn">24-Hour</h3>
                    <h3 className="text-3xl inline font-semibold text-cerulean"> Staff Availability</h3>
                    <p className="pt-4 tracking-wide leading-relaxed text-lg">With staff always on the clock, you’re rest assured that your family which we at Noble consider ours too, are receiving the assistance, companionship, support and security needed. Above all at Noble we are all family and will always try our best to make everyone feel to be part of it.</p>
                    <p className="pt-4 tracking-wide leading-relaxed text-lg">What truly sets Noble apart is the sense of belonging we create within our community. We believe that everyone deserves to feel seen, heard, and valued, especially in their later years. That’s why we go beyond just care—we build real relationships and strive to make every resident feel like they’re part of something special. At Noble, we’re not just a care facility—we’re a family, and we’re committed to making sure no one ever feels alone.</p>
                </div>
                <Image className="h-[70vh] rounded-l-xl" src={pic5} alt="An elderly person in a wheelchair gazing at the horizon while someone is holding the back handles of the wheelchair." />
            </div>
        </>
    );
}