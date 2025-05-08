import React, { useState, useContext } from 'react';
import { AppContext } from '../Context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../Hooks/useAppContext';


const loginFormValidator = yup.object().shape({
  email: yup
    .string()
    .email("Invalide email address")
    .required("Email is Required"),
  password: yup
    .string()
    .required("password is Required"),
});


const Login = () => {
  const { value2 } = useAppContext();


    const {register, handleSubmit, formState: {errors},
} = useForm({
    resolver: yupResolver(loginFormValidator)
});

const redirect = useNavigate();
const [error, setError] = useState(false)
const onLogin = (data) => {
    console.log(data);

    const {email, password} = data
    if(email === "johndoe@gmail.com" && password == "password") {
        // redirect
        redirect("/timeline");
    } else{
        // show error msg
        setError(true);
    }
};

  return (
    <div>
      <form onClick={handleSubmit(onLogin)} className="myform shadow-2xl">
        <h1 className="text2xl">{value2}</h1>
        <input
          type="email"
          className="input mt-2 w-full"
          placeholder="Email Address"
          {...register("email")}
        />
        <p className="text-sm text-red-500 mt-0.5">{errors.email?.message}</p>
        <input
          type="password"
          className="input mt-2 w-full"
          placeholder="Password"
          {...register("password")}
        />
        <p className="text-sm text-red-500 mt-0.5">{errors.password?.message}</p>

       {error && <div className='rounded-md w-full bg-red-300 p-3 my-2'>
            <p className='text-red-500'>invalid email or password</p>
        </div>  }

        <button className="btn btn-primary w-full mt-2">Login</button>
      </form>
    </div>
  );
}

export default Login