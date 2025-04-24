import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";


// USEFORM - (Register, handleSubmit,)
// YUP, ZOD

// DEFINE OUR VALIDATION Schema
const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup.string().email("invalid Eamil Address").required("Email is Required"),
  password: yup.string().required("password is required").min(7, "Minimum password length is 7")
});




const ReactHookForm = () => {

    const {register, handleSubmit, formState: {errors}}
      = useForm({ resolver: yupResolver(validationSchema) });

      const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = (data) => {
      setIsSubmitting(true);

        setTimeout(() => {
          console.log(data);
           // after doing what you meant to do
           setIsSubmitting(false);
        reset();

        }, 5000);
       
    }



  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="myform bg-white"
      >
        <h1>Submit Your Details</h1>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.firstName ? "border border-red-500" : ""
          }`}
          placeholder="First Name"
          {...register("firstName")}
        />
        <p className="text-red-500">
          {errors.firstName && errors.firstName.message}
        </p>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.lastName ? "border border-red-500" : ""
          }`}
          placeholder="Last Name"
          {...register("lastName")}
        />
        <p className="text-red-500">
          {errors.lastName && errors.lastName.message}
        </p>
        <input
          type="email"
          placeholder="Email Address"
          className={`input mt-2 w-full ${
            errors.email ? "border border-red-500" : ""
          }`}
          {...register("email")}
        />
        <p className="text-red-500">{errors.email && errors.email.message}</p>
        <input
          type="password"
          className={`input mt-2 w-full ${
            errors.password ? "border border-red-500" : ""
          }`}
          placeholder='PassWord'
          {...register("passWord")}
        />
        <p className="text-red-500">{errors.password && errors.password.message}</p>
        <button type="submit" className="btn btn-accent w-full mt-2.5">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ReactHookForm