/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import React, { useEffect, useState } from 'react'
import CourseCard from '../components/CourseCard'
import { FaArrowDown } from 'react-icons/fa'
import instance from '../_axios'


function Coureses() {
    const [filter, setFilter] = useState('All');
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const [courseCount, setCourseCount] = useState(8);
    const [loading, setLoading] = useState(true);
    const filterCourses = (name) => {
        setLoading(true);
        setCourseCount(8);
        setFilter(name);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }


    const getTracks = async () => {
        let response = await instance.get('/api/categories');
        setCategories(response.data);
    }

    const getCourses = async () => {
        let response = await instance.get('/api/courses');
        setCourses(response.data);
        setLoading(false);
    }

    useEffect(() => {
        getTracks();
        getCourses();
    }, [])



    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-end">
            <main className="min-h-screen p-10 w-full">
                <h1 className='text-4xl'>الدورا التدريبية</h1>
                <p className='text-2xl mt-4'>
                    يمكنك بدء مسيرتك المهنية أو تغييرها أو تطويرها باستخدام كوِِدها كدليل لك
                </p>
                <div className="filter flex flex-row-reverse gap-3 mt-6">
                    <button onClick={() => filterCourses('All')} className={`px-4 py-2 border cursor-pointer hover:text-white hover:bg-blue-600 border-blue-600 text-blue-600 rounded-md mr-2 ${filter === 'All' ? 'bg-blue-600 text-white' : ''}`}>
                        كل الدورات
                    </button>
                    {
                        categories.map((category) => (
                            <button key={category.id} onClick={() => filterCourses(category.name)} className={`px-4 py-2 border cursor-pointer hover:text-white hover:bg-blue-600 border-blue-600 text-blue-600 rounded-md mr-2 ${filter === category.name ? 'bg-blue-600 text-white' : ''}`}>
                                {category.arname}
                            </button>
                        ))
                    }
                </div>
                <div dir='rtl' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {
                        loading ? <p className='text-center flex h-125 justify-center items-center gap-5 col-span-4 text-gray-600 text-xl'>
                            جاري تحميل الدورات...
                        </p>
                            :
                        filter === 'All' ? courses.slice(0, courseCount).map((course, index) => (
                            <CourseCard key={index} {...course} />
                        )) :
                            courses.filter(course => course.category.name == filter).slice(0, courseCount).map((course, index) => (
                                <CourseCard key={index} {...course} />
                            ))
                    }
                </div>
                {
                    (filter === 'All' ? courseCount < courses.length : courseCount < courses.filter(course => course.category.name == filter).length) &&
                    <div className="w-full flex justify-center mt-10">
                        <button className='flex flex-col gap-2 text-blue-500 cursor-pointer items-center' onClick={() => setCourseCount(courseCount + 4)}>
                            عرض المزيد
                            <FaArrowDown className='text-2xl animate-bounce' />
                        </button>

                    </div>

                }
            </main>
        </div>
    )
}

export default Coureses