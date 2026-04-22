/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import instance from '../_axios'

export default function Tracks() {
    const [categories, setCategories] = useState([]);
    // loading state can be added here if needed
    const [loading, setLoading] = useState(true);
    const getGategories = async () => { 
        let res = await instance.get('/api/categories')
        setCategories(res.data);
        setLoading(false);
    }
    useEffect(() => {
        getGategories();
    }, [])
    return (
        <div className='p-20 flex flex-col items-center gap-4' dir='rtl'>
            <Link href='#' className='text-3xl font-bold text-gray-700'>الدورات التدريبية</Link>
            <div className="h-0.75 w-50 duration-150 transition-all bg-blue-900 rounded-full"></div>
                <p className='text-gray-400 text-[20px]'>اختر الدورة التي تناسبك وابدأ رحلتك التعليمية</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 flex-wrap justify-center'>
                {
                    loading ? <p className='text-center flex h-125 justify-center items-center gap-5 col-span-4 text-gray-600 text-xl'>
                        جاري تحميل الدورات...
                    </p>
                        :
                    categories.map(
                        (category) => (
                            <Card key={category.id} title={category.name} imageUrl={category.img} />
                        )
                    )
                }
                </div>
        </div>
    )
}
