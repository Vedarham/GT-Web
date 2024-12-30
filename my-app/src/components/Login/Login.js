import React from 'react'
import { useForm } from "react-hook-form"
import "./Login.css"

const Login = () => {

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
      const onSubmit = async(data) => {
        const res = await fetch('http://localhost:8000/api/auth/login', {method:"POST",headers:{
          "Content-Type":"application/json",
        }, body: JSON.stringify(data)})
      }
    
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