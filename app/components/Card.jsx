import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Card({ title, imageUrl }) {
    return (
        <div className='bg-white min-w-62.5 gap-3 rounded-lg shadow-md flex flex-col items-center justify-between text-xl text-gray-700 font-semibold hover:shadow-lg transition-shadow duration-300 p-2'>
            <Image src={imageUrl} width={250} height={350} className='w-full h-45' alt={title} />
            {title}
            <Link href="/courses" className='text-blue-500  p-2 rounded-md text-[17px] flex gap-2  mb-2'>
                ابدأ الرحلة
                <span className='inline-block'><FaLongArrowAltRight className='rotate-180' /></span>
            </Link>
        </div>
    )
}
