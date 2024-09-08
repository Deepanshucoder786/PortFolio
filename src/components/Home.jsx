import React from 'react'
import pic from "./../../public/deepak.jpeg"
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

import '../../src/App.css'

const Home = () => {
    return (
        <>
            <div name="Home" className='bg-teal-600 max-w-screen-2xl container mx-auto px-4 my-20'>
                <div className='  flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm  a  </h1>
                            {/* <span className='text-red-700 font-bold'> Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>Looking ahead, I am excited about the opportunity to leverage my academic background and enthusiasm for web development and to make a positive impact in a professional setting.</p>
                        <br />
                        {/* social media icon */}
                        <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='font-bold '>Available on</h1>
                                <ul className='flex space-x-5  '>

                                    <li>
                                        <a href="https://www.facebook.com/" target='_blank'>
                                            <FaFacebook className='shadow-2xl shadow-cyan-500/50 ...  bg-teal-300 text-xl md:text-3xl items-center cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target='_blank'>
                                            <IoLogoLinkedin className='shadow-2xl shadow-cyan-500/50 ...  bg-teal-300 text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                    <li>
                                        <a href="https://www.youtube.com/" target='_blank'>
                                            <FaYoutube className='shadow-2xl shadow-cyan-500/50 ...  bg-teal-300 text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                    <li>
                                        <a href="https://www.telegram.com/" target='_blank'>
                                            <FaTelegram className='shadow-2xl shadow-cyan-500/50 ...  bg-teal-300 text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <ul className='flex space-x-5 '>
                                    <li>
                                        <a href="https://www.mongodb.com/" target='_blank'>
                                        <SiMongodb className='shadow-2xl shadow-cyan-500/50 ... bg-teal-300 text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                <li>
                                    <a href="https://www.expressjs.com/" target='_blank'>
                                    <SiExpress className='shadow-2xl shadow-cyan-500/50 ... bg-teal-300 text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                <li>
                                    <a href="https://www.react.dev/" target='_blank'>
                                    <FaReact className='shadow-2xl shadow-cyan-500/50 ... bg-teal-300 text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                                <li>
                                    <a href="https://www.nodejs.org/en" target='_blank'>
                                    <FaNodeJs className='shadow-2xl shadow-cyan-500/50 ... bg-teal-300 text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8'>
                    <img src={pic} className=' shadow-2xl ...  rounded-full md:w-[450px] md:h-[450px]' alt="" />
                </div>
            </div>
        </div >
          <hr  className='bg-teal-600'/>
        </>
    )
}
export default Home
