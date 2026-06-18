/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { MdInfo } from 'react-icons/md'
import InfoSection from './InfoSection'
import { useAuthStore } from '../store/useAuthStore'
import instance from '../_axios'

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
    const { user } = useAuthStore()
    const [favoriteCourses, setFavoriteCourses] = useState([]);
    const getFavoriteCourses = async () => {
        try {
            let response = await instance.get(`api/favorites/user/${user.id}`)
            setFavoriteCourses(response.data)
        }catch(error){
            console.error('Error fetching favorite courses:', error);
        }
    }

    useEffect(() => {
        if (user) {
            getFavoriteCourses();
        }
    }, [user])

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
                        favoriteCourses.length === 0 &&
                        <>
                            <p className='text-gray-600 text-center col-span-3'>لا توجد دورات مفضلة بعد. قم بإضافة بعض الدورات إلى المفضلة لعرضها هنا!</p>
                            
                            <div className="flex justify-center col-span-3">
                                <Link href="/courses" className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'>
                                    تصفح الدورات
                                </Link>
                            </div>
                        </>
                    }
                    {
                        favoriteCourses.map((course, index) => 
                            <div key={index} className="border-3 text-start border-blue-100 p-5 rounded-lg transition-all duration-200 hover:shadow-lg   bg-gray-100 ">
                                <Image src={course.course.img} alt={course.course.name} width={400} height={200} className="rounded bg-gray-200 h-55 object-cover" />
                                <div className="flex justify-between mt-4">
                                    <h2 className="text-xl">{course.course.name}</h2>
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-4 group-hover:bg-white group-hover:text-blue-600">
                                        {/* {course.category} */}
                                    </span>
                                </div>
                                <p className='my-3 text-gray-800'>{course.course.description}</p>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-4" title={`${course.progress}%`}>
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                                </div>
                                {
                                    course.progress === 100 ?
                                        <>
                                            <span className="text-green-600 font-bold">مكتملة</span>
                                        </>
                                        :
                                        <span className="text-gray-600 font-bold">
                                            {course.progress.toFixed(1)}% -
                                            قيد التقدم
                                        </span>
                                }
                                <Link href={`/courses/${course.course_id}`} className='group-hover:text-white text-blue-600 font-bold text-lg flex items-center gap-2 justify-start'>
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
