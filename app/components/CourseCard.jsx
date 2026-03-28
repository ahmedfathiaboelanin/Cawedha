import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
export default function CourseCard({ title, description, track, img, id }) {
    return (
        <div className="border-3 text-start border-blue-100 p-5 rounded-lg transition-all duration-200 hover:shadow-lg hover:bg-blue-900 hover:text-white group  bg-gray-100 dark:bg-gray-800">
            <Image src={img} alt={title} width={400} height={200} className="rounded bg-gray-200 h-[220px] object-cover" />
            <div className="flex justify-between mt-4">
                <h2 className="text-xl">{title}</h2>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-4 group-hover:bg-white group-hover:text-blue-600">
                    {track}
                </span>
            </div>
            <p className="text-gray-600 my-2 group-hover:text-white">
                {description}
            </p>
            <Link href={'/courses/'+id} className='group-hover:text-white text-blue-600 font-bold text-lg flex items-center gap-2 justify-start'>
                <FaArrowLeft />
                ابدأ الأن
            </Link>
        </div>
    )
}
