import React from 'react'
import "./EditProfile.style.css"
import { useForm } from 'react-hook-form'
// import {  useNavigate } from 'react-router-dom'
import axios from "axios"

const EditProfile = (props) => {
    // const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors, isSubmitting },
    } = useForm()

    const updateUser = async (formData) => {
      try {
        const response = await axios.put('http://localhost:8080/api/auth/update', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('User updated:', response.data);
      } catch (error) {
        console.error('Error updating user:', error.response ? error.response.data : error.message);
      }
    };
    
    // const onSubmit = async(data) => {
    //     const res = await fetch('http://localhost:8080/api/auth/update', {method:"POST",headers:{
    //       "Content-Type":"application/json",
    //     }, body: JSON.stringify(data)})
    //     console.log(res.status)
    //     if(res.status === 201 || res.status===200){
    //       navigate('/profile')
    //     }else{
    //       navigate('/edit')
    //     }
        
    //   }

    return (
        <>
            <div className='edit-cont'>
                    <form className='edit-form' onSubmit={handleSubmit(updateUser)}>
                    {/* to default all values must be previous inputs else will change db and cause inconsistency in timeline of db */}
                        <input {...register("username", { })} type = " text" placeholder='eSports-Nation' />
                        <input {...register("fullname", { })} type='text' placeholder='Veerendra' />
                        <input {...register("email", { })} type='email' placeholder='eSportsNation3@gmail.com'/>
                        <input {...register("newpassword", { })} type='password' placeholder='New Password'/>
                        <input {...register("comfirmpassword", { })}  type='password' placeholder='Confirm password'/>
                        <input className='btn-submit' type="submit" />
                    </form>
            </div>
        </>
    )
}

export default EditProfile