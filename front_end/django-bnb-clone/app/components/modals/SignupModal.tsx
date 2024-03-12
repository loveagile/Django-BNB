'use client';
import Modal from "./Modal";

import useSignupModal from "@/app/hooks/useSignupModal";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
    const SignupModal = useSignupModal()
    const content = (
        <>
            <form className="space-y-4">
                <input type ="email" placeholder="Your Email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <input type ="password" placeholder="Your Password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <input type ="password" placeholder="Confirm Password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message.
                </div>
                <CustomButton 
                    label="Submit"
                    onClick={() => console.log('test')}
                />
            </form>
        </>
           
    )  
    return (
        <Modal 
            isOpen={SignupModal.isOpen}
            close={SignupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal;