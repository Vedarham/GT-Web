import React from 'react'
import axios from "axios"; 
import { useForm } from "react-hook-form"
import "./Login.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors, isSubmitting },
      } = useForm()
      // const delay = (d)=>{
      //   return new Promise((res,rej)=>{
      //     setTimeout(()=>{
      //       res()
      //     },d*1000)
      //   }) 
      // }

const onSubmit = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/auth/login",
      {
        email: data.email,
        password: data.password,
      },
      {
        withCredentials: true, 
      }
    );

    console.log(res.status);

    if (res.status === 200 || res.status === 201) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  } catch (err) {
    console.error("Login failed", err);
    navigate("/login");
  }
};

      return (
        <>
        <div className='sign-cont'>
        <form className='sign-form'  onSubmit={handleSubmit(onSubmit)}>
        <div className='sign-details'>
          <h2>Sign IN</h2>
          <h5>Welcome Back, Champ!</h5>
        </div>
          <input defaultValue="abc@mail.com" {...register("email",  {required:{value : true, message:"*email field is required"}})} type='email' placeholder='email'/>
          {errors.email && <span className='err-txt'>{errors.email.message}</span>}
          <input {...register("password", { required: {value : true, message:"*password field is required"}, minLength:{value: 8, message: "Min. 8 characters required"} })} type='password' placeholder='password' />
          {errors.password && <span className='err-txt'>{errors.password.message}</span>}
          <input disabled={isSubmitting} className='btn-submit' type="submit" />
          {isSubmitting && <div className='err-txt'>Loading...</div>}
        </form>
        </div>
        </>
        )
}

export default Login