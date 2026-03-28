'use client'
import React, { useState } from 'react'
import CourseCard from '../components/CourseCard'
import COURSES from '../Static/coureses.json'
import TRACKS from '../Static/Tracks.json'
import { FaArrowDown } from 'react-icons/fa'

function Coureses() {
    const [filter, setFilter] = useState('All');
    const [courseCount, setCourseCount] = useState(8);
    const filterCourses = (category) => {
        setCourseCount(8);
        setFilter(category);
    }

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
                        TRACKS.map((track, index) => (
                            <button key={index} onClick={() => filterCourses(track.badge)} className={`px-4 py-2 border cursor-pointer hover:text-white hover:bg-blue-600 border-blue-600 text-blue-600 rounded-md mr-2 ${filter === track.badge ? 'bg-blue-600 text-white' : ''}`}>
                                {track.title}
                            </button>
                        ))
                    }
                </div>
                <div dir='rtl' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {
                        filter === 'All' ? COURSES.slice(0, courseCount).map((course, index) => (
                            <CourseCard key={index} {...course} />
                        )) :
                            COURSES.filter(course => course.track == filter).slice(0, courseCount).map((course, index) => (
                                <CourseCard key={index} {...course} />
                            ))
                    }
                </div>
                {
                    (filter === 'All' ? courseCount < COURSES.length : courseCount < COURSES.filter(course => course.track == filter).length) &&
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