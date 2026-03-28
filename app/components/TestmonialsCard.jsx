import Image from 'next/image'
import React from 'react'
import { FaQuoteRight, FaStar } from 'react-icons/fa'

export default function TestmonialsCard({ comment, user }) {
    return (
        <div className="w-80 border-blue-200 shadow flex flex-col gap-5 p-5 rounded-lg  bg-white">
            <div className="flex gap-3 justify-between transition-shadow duration-300">
                <FaQuoteRight className='text-2xl text-gray-300' />
                <div className="flex gap- 5">
                    < FaStar className='text-yellow-400' />
                    < FaStar className='text-yellow-400' />
                    < FaStar className='text-yellow-400' />
                    < FaStar className='text-yellow-400' />
                    < FaStar className='text-yellow-400' />
                </div>
            </div>
            <div className="flex flex-col h-full justify-between">
                <p className='text-[#31323B]'>&quot;{comment}&quot;</p>
                <div className="flex gap-2 items-center">
                    <Image src={'/avatar.png'} alt='user avatar' width={40} height={40} className='rounded-full' />
                    <h2 className="card-title text-xl text">{user}</h2>
                </div>
            </div>
        </div>
    )
}
