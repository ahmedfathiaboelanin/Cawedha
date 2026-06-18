'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import TRACKS from '../Static/Tracks.json'
export default function Tracks() {
    const [categories, setCategories] = useState(TRACKS);
    return (
        <div className='p-5 md:p-20 mt-10 flex flex-col items-center gap-4' dir='rtl'>
            <Link href='#' className='text-3xl font-bold text-gray-700'>الدورات التدريبية</Link>
            <div className="h-0.75 w-50 duration-150 transition-all bg-blue-900 rounded-full"></div>
            <p className='text-gray-400 text-[20px]'>اختر الدورة التي تناسبك وابدأ رحلتك التعليمية</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 flex-wrap justify-center'>
                {
                    categories.map(
                        (category) => (
                            <Card key={category.id} title={category.title} imageUrl={category.img} />
                        )
                    )
                }
            </div>
        </div>
    )
}
