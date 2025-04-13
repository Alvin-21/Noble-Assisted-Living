'use client';

import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { sendEmail, State } from "@/lib/actions";
import { useActionState, startTransition } from 'react';

export default function Form() {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(sendEmail, initialState);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log('hello');
        const formData = new FormData(e.currentTarget);
        // for (const [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }
        startTransition(() => {
            formAction(formData);
        });
    };

    return (
        <>
            <form onSubmit={onSubmit} className="flex flex-col gap-8 max-w-3xl mx-8 md:mx-auto bg-dark-blue p-7 rounded-b-xl">
                <div>
                    <Input
                        id="fullName"
                        name="fullName"
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
                    <div id="fullName-error" aria-live="polite" aria-atomic="true">
                        {state?.errors?.fullName &&
                            state.errors.fullName.map((error: string) => (
                                <p className="mt-2 text-sm text-rose-300" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>
                <div>
                    <Input
                        id="email"
                        name="email"
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
                    <div id="email-error" aria-live="polite" aria-atomic="true">
                        {state?.errors?.email &&
                            state.errors.email.map((error: string) => (
                                <p className="mt-2 text-sm text-rose-300" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>
                <div>
                    <Textarea
                        id="message"
                        name="message"
                        type="text"
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
                    <div id="message-error" aria-live="polite" aria-atomic="true">
                        {state?.errors?.message &&
                            state.errors.message.map((error: string) => (
                                <p className="mt-2 text-sm text-rose-300" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>
                <Button type="submit" variant="solid" className="bg-cerulean rounded-lg text-white text-lg">Send</Button>
            </form>
        </>
    );
}