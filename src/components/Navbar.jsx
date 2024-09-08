import React, { useState } from 'react'
import pic from "../../public/deepak.jpeg"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';
import '../../src/App.css'


const Navbar = () => {
    const [menu, setmenu]=useState(false);
    const navItem=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"PortFolio"
        },
        {
            id:4,
            text:"Experiance"
        },
        {
            id:5,
            text:"Contact"
        },
       
       
    ]
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 right-0 left-0 z-50 bg-teal-800 drop-shadow-2xl ..." >
                <div className=" flex justify-between items-center h-16">
                    <div className="  flex space-x-2">
                        <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                        <h1 className=" font-semibold text-xl cursor-pointer">Deepa<span className="text-green-600 text-2xl">k</span>
                            <p className="text-sm">Web Developer</p>
                        </h1>
                    </div>
                    <div>
                        <ul className="hidden  md:flex space-x-10">
                           {navItem.map(({id, text})=>(<li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                            <Link to={text}
                            smooth={true}
                            duration={200}
                            offset={-70}
                            activeClass='active'
                            >{text}</Link></li>))}
                        </ul>
                        <div onClick={()=> setmenu(!menu)} className='md:hidden'>{menu?<IoCloseSharp size={24}/>:< AiOutlineMenu size={24}/>}</div>
                    </div>
                </div>
                {/*mpbile manu bar*/ }
                {
                    menu &&(
                        <div className=' bg-emerald-200 '>
                        <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-4 text-xl">
                        {navItem.map(({id, text})=>(<li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}> <Link to={text}
                            smooth={true}
                            onClick={()=> setmenu(!menu)}
                            duration={200}
                            offset={-70}
                            activeClass='active'
                            >{text}</Link></li>))}
                        </ul>
                    </div>
                    )
                }
               
            </div>
        </>
    );
}

export default Navbar
