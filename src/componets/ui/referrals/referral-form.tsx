'use client';

import React from "react";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { sendReferralEmail, State2 } from "@/lib/actions";
import { useActionState, startTransition } from 'react';
import { Alert } from "@heroui/alert";

export default function Form() {
    const initialState: State2 = { message: null, errors: {} };
    const [state, formAction, loading] = useActionState(sendReferralEmail, initialState);
    const [showAlert, setShowAlert] = React.useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        startTransition(() => {
            formAction(formData);
            setShowAlert(true);
        });

        e.currentTarget.reset();
    };

    return (
        <>
            <form onSubmit={onSubmit} className="flex flex-col gap-8 mx-8 md:mx-auto bg-dark-blue p-7">
                <Alert
                    variant="solid"
                    isClosable
                    className="max-w-xl mx-auto"
                    isVisible={showAlert}
                    onClose={() => setShowAlert(false)}
                    color={
                        state?.message === "success" ? "success" : "danger"
                    }
                    description={
                        state?.message === "success"
                            ? "The form has been submitted successfully."
                            : "There was an error submitting the form. Please try again."
                    }
                    title={
                        state?.message === "success" ? "Success" : "Error"
                    }
                    hideIconWrapper
                />
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
                <div className="flex flex-row gap-4">
                    <div className="w-1/2">
                        <Input
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone Number"
                            type="text"
                            inputMode="tel"
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
                        <div id="phoneNumber-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.phoneNumber &&
                                state.errors.phoneNumber.map((error: string) => (
                                    <p className="mt-2 text-sm text-rose-300" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Input
                            id="birthDate"
                            name="birthDate"
                            label="Date of Birth"
                            type="date"
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
                        <div id="birthDate-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.birthDate &&
                                state.errors.birthDate.map((error: string) => (
                                    <p className="mt-2 text-sm text-rose-300" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="w-1/2">
                        <Input
                            id="insuranceProvider"
                            name="insuranceProvider"
                            label="Insurance Provider"
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
                        <div id="insuranceProvider-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.insuranceProvider &&
                                state.errors.insuranceProvider.map((error: string) => (
                                    <p className="mt-2 text-sm text-rose-300" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Input
                            id="primaryDiagnosis"
                            name="primaryDiagnosis"
                            label="Primary Diagnosis"
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
                        <div id="primaryDiagnosis-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.primaryDiagnosis &&
                                state.errors.primaryDiagnosis.map((error: string) => (
                                    <p className="mt-2 text-sm text-rose-300" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                <div>
                    <Input
                        id="caseManager"
                        name="caseManager"
                        label="Case Manager"
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
                    <div id="caseManager-error" aria-live="polite" aria-atomic="true">
                        {state?.errors?.caseManager &&
                            state.errors.caseManager.map((error: string) => (
                                <p className="mt-2 text-sm text-rose-300" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>
                <div>
                    <Textarea
                        id="aald"
                        name="aald"
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
                        label="Anticipated Assisted Living Needs"
                        placeholder="Enter the details..."
                        variant="bordered"
                        size="lg"
                    />
                    <div id="message-error" aria-live="polite" aria-atomic="true">
                        {state?.errors?.aald &&
                            state.errors.aald.map((error: string) => (
                                <p className="mt-2 text-sm text-rose-300" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="w-1/2">
                        <Input
                            id="caseManagerCompany"
                            name="caseManagerCompany"
                            label="Case Manager Company"
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
                        <div id="caseManagerCompany-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.caseManagerCompany &&
                                state.errors.caseManagerCompany.map((error: string) => (
                                    <p className="mt-2 text-sm text-rose-300" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Input
                            id="CMphoneNumber"
                            name="CMphoneNumber"
                            label="Case Manager Phone Number"
                            type="text"
                            inputMode="tel"
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
                        <div id="CMphoneNumber-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.CMphoneNumber &&
                                state.errors.CMphoneNumber.map((error: string) => (
                                    <p className="mt-2 text-sm text-rose-300" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="w-1/2">
                        <Input
                            id="caseManagerFax"
                            name="caseManagerFax"
                            label="Case Manager Fax"
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
                        <div id="caseManagerFax-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.caseManagerFax &&
                                state.errors.caseManagerFax.map((error: string) => (
                                    <p className="mt-2 text-sm text-rose-300" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Input
                            id="caseManagerEmail"
                            name="caseManagerEmail"
                            label="Case Manager Email"
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
                        <div id="caseManagerEmail-error" aria-live="polite" aria-atomic="true">
                            {state?.errors?.caseManagerEmail &&
                                state.errors.caseManagerEmail.map((error: string) => (
                                    <p className="mt-2 text-sm text-rose-300" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                <Button
                    type="submit"
                    variant="solid"
                    className="bg-cerulean rounded-lg text-white text-lg"
                    isLoading={loading}
                >
                    Send
                </Button>
            </form>
        </>
    );
}