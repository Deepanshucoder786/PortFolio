import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

import '../../src/App.css'



const Contact = () => {
    const {
        register,
        handleSubmit,
       
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            Query:data.Query,
        }
        try {
         await   axios.post("https://getform.io/f/bdrypqdb",userInfo)
         toast.success("Your message has been sent")
        } catch (error) {
            console.log(error)
            toast.error("Somthing went wrong")
        }

    }



    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 mt-10 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5'>Contact me</h1>
                <span>Please fill out the form below to contact me</span>
            </div>
            <div className='flex flex-col items-center justify-center mt-5 mb-16'>
                <form onSubmit={handleSubmit(onSubmit)}
                    // action="https://getform.io/f/bdrypqdb" 
                    // method="POST" 
                    className='bg-cyan-500 shadow-lg shadow-cyan-500/50 ... w-96 px-8 py-6 rounded-xl'>
                    <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>FullName</label>
                        <input
                            {...register("name", { required: true })}
                            className='  hover:bg-white-600  border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id='name' name='name' placeholder='Enter your name full name' />
                        {errors.name && <span className='text-red-400 text-sm'>required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Email Address</label>
                        <input
                            {...register("email", { required: true })}
                            className='shadow appearance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id='email' name='email' placeholder='Enter your email address' />
                        {errors.email && <span className='text-red-400 text-sm'>required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>Message</label>
                        <textarea
                            {...register("Query", { required: true })}
                            className='shadow appearance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id='Query' name='Query' placeholder='Enter your Query' />
                        {errors.Query && <span className='text-red-400 text-sm'>required</span>}
                    </div>
                    <div>
                        <button type='submit' className=' shadow-2xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ... text-white rounded-full w-16 p-2 cursor-pointer hover:scale-105 duration-200 '>Send</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Contact
