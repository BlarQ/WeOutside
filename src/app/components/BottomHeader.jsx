import Link from 'next/link'
import React from 'react'
import { IoAirplaneOutline, IoBedOutline, IoCarSportOutline } from 'react-icons/io5'

const services = [
    {
        name: 'stays', href: '/stays', icon: <IoBedOutline />
    },
    {
        name: 'flights', href: '/flight', icon: <IoAirplaneOutline />
    },
    {
        name: 'car rentals', href: '/rentals', icon: <IoCarSportOutline />
    }
]

export default function BottomHeader() {
    return (
        <div className='hidden sm:flex bg-[#00aeff] px-36'>

            <div className='flex justify-start items-center gap-4 py-4'>
                {services.map((item, index) => (
                    <div className='text-white' key={index}>
                        <Link className='capitalize flex justify-center items-center gap-2 text-center py-2 px-3 focus:border-[1px] hover:bg-[#4fc0f5] focus:bg-[#4fc0f5] rounded-full text-sm' href={item.href}>
                        <div className='text-xl'>

                        {item.icon}
                        </div>
                        {item.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
