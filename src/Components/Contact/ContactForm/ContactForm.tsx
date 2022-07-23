import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";


import "./ContactForm.css";

type Inputs = {
    firstName: string,
    lastName: string,
    pN: number,
    email: string,
    message: string
}

interface props {
    setFormSent: any
}

export default function ContactForm({ setFormSent }:props) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setFormSent(true);

        setTimeout(() => {
            setFormSent(false);
        }, 3500);
    };
  
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="fNameWrapper">
                    <input id="fName" placeholder="Your first name" {...register("firstName", { required: true })} className={errors.message ? "requiredAlert" : ""} />
                    <span>{errors.firstName?.message}</span>
                </div>
                <input id="lName" placeholder="Your last name" {...register("lastName")} />
                <input id="pN" placeholder="Enter phone number" type="number" {...register("pN", { minLength: 7, maxLength: 15 })} />
                <div className="emailWrapper">
                    <input id="email" placeholder="Enter your email" type="email" {...register("email", { required: true })} className={errors.message ? "requiredAlert" : ""} />
                    <span>{errors.email?.message}</span>
                </div>
                <textarea id="message" {...register("message", { required: true })} placeholder="Enter your message..." className={errors.message ? "requiredAlert" : ""}></textarea>
                <button id="submitBtn" type="submit">send email</button>
            </form>
        </>
    );
  }
