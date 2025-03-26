import Image from "next/image";
import pic from '@/../public/images/assisted-living-12.jpg';
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import pic2 from '@/../public/images/assisted-living-13.jpg';
import pic3 from '@/../public/images/assisted-living-8.jpg';
import pic4 from '@/../public/images/assisted-living-2.jpg';
import pic5 from '@/../public/images/assisted-living-7.jpg';

export default function Page() {
    return (
        <>
            <Image className="h-[83vh]" src={pic} alt="A person helping an elderly with their groceries." />
            <h1 className="h-[8vh] bg-cerulean text-light-corn text-3xl flex justify-center pt-2 font-bold">Services</h1>
            <div className="h-[10vh] mt-8 container mx-auto">
                <h4 className="inline text-lg text-cerulean font-semibold">Home <ChevronDoubleRightIcon className="w-5 inline text-black" /></h4>
                <h4 className="inline text-lg text-dark-corn font-semibold"> Services</h4>
                <div className="pt-3"></div>
                <hr className="border-b-2 border-b-java border-dashed" />
            </div>
            <div className="container mx-auto">
                <h1 className="inline text-5xl font-semibold">Our </h1>
                <h1 className="inline text-cerulean text-5xl font-semibold">Services</h1>
                <p className="pt-4 tracking-wide leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sit amet risus at fringilla. Cras id ante mollis, faucibus neque id, varius risus. Suspendisse convallis commodo vehicula. Quisque sapien massa, facilisis nec auctor et, pharetra non arcu. Phasellus efficitur facilisis eros ut lacinia. Cras a porttitor ipsum. Sed semper nibh vel gravida eleifend. Phasellus finibus posuere ipsum vel euismod. Cras iaculis nec nisi in condimentum. Mauris faucibus justo sapien, et vulputate massa varius non. Nulla id suscipit orci, et efficitur tortor.</p>
            </div>
            <div className="container mx-auto pt-7">
                <h2 className="text-4xl">What we offer:</h2>
            </div>
            <div className="grid grid-cols-2 gap-0 h-[80vh] pt-5">
                <Image className="h-[70vh] rounded-r-xl" src={pic2} alt="Two elderly people doing a yoga activity." />
                <div className="pl-8 pt-3 pr-3">
                    <h3 className="text-3xl">Activities of Daily Living</h3>
                    <p className="pt-4 tracking-wide leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur. Aenean lobortis erat ac lectus viverra, vitae accumsan erat pharetra. Morbi dictum sollicitudin enim, eu porttitor neque efficitur in. Nullam molestie, sem vel pharetra ullamcorper, tortor est bibendum lacus, sit amet convallis diam sapien at risus. Nam a dictum ex, sit amet placerat risus. Duis ac metus vel libero consequat posuere eget at est. Vestibulum iaculis facilisis pretium. In hac habitasse platea dictumst. Nulla et dignissim felis.</p>
                    <p className="pt-4 tracking-wide leading-relaxed">Vestibulum nibh diam, bibendum pharetra cursus at, tempus ut lacus. Praesent viverra ullamcorper quam, vel ultrices arcu laoreet ac. Maecenas quis odio varius, mattis tellus eu, vestibulum sapien. Aliquam id felis neque. Cras at nunc velit. In hac habitasse platea dictumst. Vivamus in pellentesque nibh. Quisque auctor blandit libero sit amet consequat. Duis dignissim ultricies libero, ut iaculis mi iaculis in. Etiam dictum mi vitae faucibus sagittis. In vitae placerat turpis, in rhoncus justo.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-0 h-[80vh] pt-5">
                <div className="pl-8 pt-7">
                    <h3 className="text-3xl">Nursing Services</h3>
                    <p className="pt-4 tracking-wide leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur. Aenean lobortis erat ac lectus viverra, vitae accumsan erat pharetra. Morbi dictum sollicitudin enim, eu porttitor neque efficitur in. Nullam molestie, sem vel pharetra ullamcorper, tortor est bibendum lacus, sit amet convallis diam sapien at risus. Nam a dictum ex, sit amet placerat risus. Duis ac metus vel libero consequat posuere eget at est. Vestibulum iaculis facilisis pretium. In hac habitasse platea dictumst. Nulla et dignissim felis.</p>
                    <p className="pt-4 tracking-wide leading-relaxed">Vestibulum nibh diam, bibendum pharetra cursus at, tempus ut lacus. Praesent viverra ullamcorper quam, vel ultrices arcu laoreet ac. Maecenas quis odio varius, mattis tellus eu, vestibulum sapien. Aliquam id felis neque. Cras at nunc velit. In hac habitasse platea dictumst. Vivamus in pellentesque nibh. Quisque auctor blandit libero sit amet consequat. Duis dignissim ultricies libero, ut iaculis mi iaculis in. Etiam dictum mi vitae faucibus sagittis. In vitae placerat turpis, in rhoncus justo.</p>
                </div>
                <Image className="h-[70vh] rounded-l-xl" src={pic3} alt="A nurse wearing a stethoscope" />
            </div>
            <div className="grid grid-cols-2 gap-0 h-[80vh] pt-7">
                <Image className="h-[70vh] rounded-r-xl" src={pic4} alt="Two elderly people sitting on a couch reading a newspaper" />
                <div className="pl-8 pt-7 pr-3">
                    <h3 className="text-3xl">Recreational Programs</h3>
                    <p className="pt-4 tracking-wide leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur. Aenean lobortis erat ac lectus viverra, vitae accumsan erat pharetra. Morbi dictum sollicitudin enim, eu porttitor neque efficitur in. Nullam molestie, sem vel pharetra ullamcorper, tortor est bibendum lacus, sit amet convallis diam sapien at risus. Nam a dictum ex, sit amet placerat risus. Duis ac metus vel libero consequat posuere eget at est. Vestibulum iaculis facilisis pretium. In hac habitasse platea dictumst. Nulla et dignissim felis.</p>
                    <p className="pt-4 tracking-wide leading-relaxed">Vestibulum nibh diam, bibendum pharetra cursus at, tempus ut lacus. Praesent viverra ullamcorper quam, vel ultrices arcu laoreet ac. Maecenas quis odio varius, mattis tellus eu, vestibulum sapien. Aliquam id felis neque. Cras at nunc velit. In hac habitasse platea dictumst. Vivamus in pellentesque nibh. Quisque auctor blandit libero sit amet consequat. Duis dignissim ultricies libero, ut iaculis mi iaculis in. Etiam dictum mi vitae faucibus sagittis. In vitae placerat turpis, in rhoncus justo.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-0 h-[80vh] pt-7">
            <div className="pl-8 pt-7">
                    <h3 className="text-3xl">24-Hour Staff Availability</h3>
                    <p className="pt-4 tracking-wide leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur. Aenean lobortis erat ac lectus viverra, vitae accumsan erat pharetra. Morbi dictum sollicitudin enim, eu porttitor neque efficitur in. Nullam molestie, sem vel pharetra ullamcorper, tortor est bibendum lacus, sit amet convallis diam sapien at risus. Nam a dictum ex, sit amet placerat risus. Duis ac metus vel libero consequat posuere eget at est. Vestibulum iaculis facilisis pretium. In hac habitasse platea dictumst. Nulla et dignissim felis.</p>
                    <p className="pt-4 tracking-wide leading-relaxed">Vestibulum nibh diam, bibendum pharetra cursus at, tempus ut lacus. Praesent viverra ullamcorper quam, vel ultrices arcu laoreet ac. Maecenas quis odio varius, mattis tellus eu, vestibulum sapien. Aliquam id felis neque. Cras at nunc velit. In hac habitasse platea dictumst. Vivamus in pellentesque nibh. Quisque auctor blandit libero sit amet consequat. Duis dignissim ultricies libero, ut iaculis mi iaculis in. Etiam dictum mi vitae faucibus sagittis. In vitae placerat turpis, in rhoncus justo.</p>
                </div>
                <Image className="h-[70vh] rounded-l-xl" src={pic5} alt="An elderly person in a wheelchair gazing at the horizon while someone is holding the back handles of the wheelchair." />
            </div>
        </>
    );
}