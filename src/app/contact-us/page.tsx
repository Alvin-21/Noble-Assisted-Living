import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <>
            <div className="h-[10vh] mt-8 container mx-auto">
                <h4 className="inline text-lg text-cerulean font-semibold">Home <ChevronDoubleRightIcon className="w-5 inline text-black" /></h4>
                <h4 className="inline text-lg text-dark-corn font-semibold"> About Us</h4>
                <div className="pt-3"></div>
                <hr className="border-b-2 border-b-java border-dashed" />
            </div>
            <div className="pb-7 h-[82vh]">
                <div className="flex flex-col text-java text-center bg-dark-blue max-w-3xl mx-auto px-7 pt-7 rounded-t-xl">
                    <small className="text-xl text-corn">Reach out to us.</small>
                    <h1 className="text-4xl">We are happy to hear from you! <FaceSmileIcon className="w-9 inline text-corn pb-1" /></h1>
                </div>
                <form className="flex flex-col gap-8 max-w-3xl mx-auto bg-dark-blue p-7 rounded-b-xl">
                    <Input
                        label="Full Name"
                        type="text"
                        variant="bordered"
                        size="lg"
                        classNames={{
                            inputWrapper: [
                                "border-2 border-solid",
                                "border-white",
                                "data-[hover=true]:border-cerulean",
                                "focus-within:!border-light-corn",
                            ],
                            label: [
                                "text-corn group-data-[filled-within=true]:text-java"
                            ],
                            input: [
                                "text-lg text-corn"
                            ]
                        }} 
                    />
                    <Input
                        label="Email"
                        type="email"
                        variant="bordered"
                        size="lg"
                        classNames={{
                            inputWrapper: [
                                "border-2 border-solid",
                                "border-white",
                                "data-[hover=true]:border-cerulean",
                                "focus-within:!border-light-corn",
                            ],
                            label: [
                                "text-corn group-data-[filled-within=true]:text-java"
                            ],
                            input: [
                                "text-lg text-corn"
                            ],
                            errorMessage: [
                                "text-rose-200"
                            ]
                        }} 
                    />
                    <Textarea
                        isClearable
                        classNames={{
                            inputWrapper: [
                                "border-2 border-solid",
                                "border-white",
                                "data-[hover=true]:border-cerulean",
                                "focus-within:!border-light-corn",
                            ],
                            label: [
                                "text-corn group-data-[filled-within=true]:text-java text-xl"
                            ],
                            input: [
                                "text-lg text-corn placeholder:text-foreground-200 placeholder:text-base"
                            ],
                            clearButton: [
                                "text-white"
                            ],
                        }}
                        label="Message"
                        placeholder="Enter your message..."
                        variant="bordered"
                        size="lg"
                    />
                    <Button variant="solid" className="bg-cerulean rounded-lg text-white text-lg">Send</Button>
                </form>
            </div>
        </>
    );
}