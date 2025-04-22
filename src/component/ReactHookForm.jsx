import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


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

    const {register, handleSubmit, formState: {errors}} = useForm({ resolver: yupResolver(validationSchema) });
    const handleFormSubmit = (data) => {
        console.log(data);
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
          type="pasword"
          className={`input mt-2 w-full ${
            errors.passWord ? "border border-red-500" : ""
          }`}
          placeholder='PassWrod'
          {...register("passWord")}
        />
        <p className="text-red-500">{errors.passWord && errors.passWord.message}</p>
        <button type="submit" className="btn btn-accent w-full mt-2.5">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReactHookForm