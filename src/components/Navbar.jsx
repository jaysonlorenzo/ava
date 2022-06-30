import React, {useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import comLog from "../images/AVA-logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return(
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <img className="w-36" src={comLog} alt="" />
                    <ul className="hidden md:flex transition duration-150 ease-out md:ease-in">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Organic Packages</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="px-8 py-3">Call Us</button>
                </div>
                <div className="md:hidden mr-4" onClick={handleClick}>
                    {
                        !nav ? <MenuIcon className="w-5"/> : <XIcon className="w-5"/>
                    }
                </div>
            </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 transition duration-150 ease-out md:ease-in' }>
            <li className="border-b-2 border-zinc-300 w-full">Home</li>
            <li className="border-b-2 border-zinc-300 w-full">About</li>
            <li className="border-b-2 border-zinc-300 w-full">Services</li>
            <li className="border-b-2 border-zinc-300 w-full">Organic Packages</li>
            <li className="border-b-2 border-zinc-300 w-full">Privacy Policy</li>
            <li className="border-b-2 border-zinc-300 w-full">Contact Us</li>
            <div className="flex flex-col my-4" >
                <button className="px-8 py-3">Call Us</button>
            </div>
        </ul>

        </div>
    )
}

export default Navbar