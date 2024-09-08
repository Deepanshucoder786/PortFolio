import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import '../../src/App.css'
const Footer = () => {
  return (
   <>
   <hr />
   <footer className='py-12 bg-teal-950 '>
      <div className='max-w-screen-2xl container mx-auto px-4 md:ps-20 '>
         <div className=' flex items-center flex-col justify-center'>
            <div className='flex space-x-4'>
                <FaFacebook size={25}/>
                <IoLogoInstagram size={25}/>
                <IoLogoTwitter size={25}/>
                <IoLogoLinkedin size={25}/>
            </div>
            <div className='mt-8 border-t border-t-gray-700 pt-8 flex flex-col items-center'>
                <p className='text-sm'> &copy; 2024 Your Company. All rights reserved.</p>
                <p className='text-sm'>Supportive Partner ❤️ Deepanshu</p>
            </div>
         </div>
      </div>
   </footer>
   </>
  )
}

export default Footer
