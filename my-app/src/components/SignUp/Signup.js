import React from 'react'
import { useForm } from "react-hook-form"
import "./Signup.css"
const SignUp = () => {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors, isSubmitting },
      } = useForm()
    
      const onSubmit = async (data) => {
        await fetch('http://localhost:8000/api/auth/signup',{ method:"POST",headers:{
          "Content-Type":"application/json",
        }, body:JSON.stringify(data)})
  
      }

      return (
        <div className='sign-cont'>
        <form className='sign-form'  onSubmit={handleSubmit(onSubmit)}>
        <div className='sign-details'>
          <h2>Sign-Up</h2>
          <h5>Welcome! Glory road to Champ!</h5>
        </div>
          <input defaultValue="abc@mail.com" {...register("email",  {required:{value : true, message:"*email field is required"}})} type='email' placeholder='email'/>
          {errors.email && <span className='err-txt'>{errors.email.message}</span>}
          <input {...register("fullname", { required: {value : true, message:"*field is required"}, minLength:{value: 4, message: "Min. 4 letters required"} })} type='text' placeholder='eg: John Doe' />
          {errors.fullname && <span className='err-txt'>{errors.fullname.message}</span>}
          <input defaultValue="gamer123" {...register("username",  {required:{value : true, message:"*field is required"}})} type='text' placeholder='username'/>
          {errors.username && <span className='err-txt'>{errors.username.message}</span>}
          <input {...register("password", { required: {value : true, message:"*password field is required"}, minLength:{value: 8, message: "Min. 8 characters required"} })} type='password' placeholder='password' />
          {errors.password && <span className='err-txt'>{errors.password.message}</span>}
          
          <input disabled={isSubmitting} className='btn-submit' type="submit" />
          {isSubmitting && <div className='err-txt'>Loading...</div>}
        </form>
        </div>
        )
}

export default SignUp