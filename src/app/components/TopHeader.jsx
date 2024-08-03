'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { TfiHelpAlt } from "react-icons/tfi";
import { IoClose, IoMenu } from "react-icons/io5";



// const navLinks = [
//     {name: "currency", href: "/"},
//     {name: "country", href: "/"},
//     {name: "help", href: "/"},
//     {name: "home", href: "/"}
// ]

export default function TopHeader() {

    const [homeMenu, setHomeMenu] = useState(false)

    const toggleMenu = () => {
        setHomeMenu(!homeMenu)
    }

    return (
        <div className='flex items-center justify-between py-6 px-5 sm:py-2 sm:px-36 bg-[#00aeff] text-white'>
            <div className='text-xl font-semibold'>
                <Link href='/'>WeOutside.ng</Link>
            </div>

            <div className='hidden lg:flex items-center justify-center gap-4 text-sm'>
                <Link className='py-4 px-3 rounded-md hover:bg-[#4fc0f5] font-bold' href='/'>
                    NGN
                </Link>
                <Link className='p-3 rounded-md hover:bg-[#4fc0f5] text-2xl' href='/'>
                    <TfiHelpAlt />
                </Link>
                <Link className='py-2 px-4 rounded-md bg-white text-[#00aeff] hover:bg-[#eff7fc] duration-300' href='/'>
                    Register
                </Link>
                <Link className='py-2 px-4 rounded-md bg-white text-[#00aeff] hover:bg-[#eff7fc] duration-300' href='/'>
                    Sign in
                </Link>
            </div>

            <div className='flex lg:hidden text-3xl' onClick={toggleMenu}>
                <IoMenu className={`${homeMenu ? "hidden" : "block"}`}/>
                <IoClose className={`${!homeMenu ? "hidden" : "block"}`}/>
            </div>
        </div>
    )
}
