import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { MdInfo } from 'react-icons/md'
import InfoSection from './InfoSection'

const courses = [
    {
        title: 'Front-end',
        category: 'front-end',
        progress: 70,
        image: '/front.png',
        link: '#'
    },
    {
        title: 'Back-end',
        category: 'back-end',
        progress: 50,
        image: '/backend.jpg',
        link: '#'
    },
    {
        title: 'Full-stack',
        category: 'full-stack',
        progress: 30,
        image: '/fullstack.png',
        link: '#'
    }
]

export default function CoursesSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start w-full gap-5 mt-5">
            <InfoSection/>
            <div className="col-span-2 bg-white p-5 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-5">
                    الدورات التدريبية
                    <MdInfo className="inline-block ml-2 text-blue-700" />
                </h2>
                <div className="grid grid-cols-3 gap-5 mt-5" dir='rtl'>
                    {
                        courses.map((course, index) => 
                            <div key={index} className="border-3 text-start border-blue-100 p-5 rounded-lg transition-all duration-200 hover:shadow-lg   bg-gray-100 ">
                                <Image src={course.image} alt={course.title} width={400} height={200} className="rounded bg-gray-200 h-55 object-cover" />
                                <div className="flex justify-between mt-4">
                                    <h2 className="text-xl">{course.title}</h2>
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-4 group-hover:bg-white group-hover:text-blue-600">
                                        {course.category}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-4" title={`${course.progress}%`}>
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                                </div>
                                <Link href={course.link} className='group-hover:text-white text-blue-600 font-bold text-lg flex items-center gap-2 justify-start'>
                                    الذهاب إلى الدورة
                                    <FaArrowLeft />
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
