import Link from 'next/link'
import React from 'react'
import Card from '../components/Card'
import TRACKS from '../Static/Tracks.json'

export default function Tracks() {
    
    return (
        <div className='p-20 flex flex-col items-center gap-4' dir='rtl'>
            <Link href='#' className='text-3xl font-bold text-gray-700'>الدورات التدريبية</Link>
            <div className="h-0.75 w-50 duration-150 transition-all bg-blue-900 rounded-full"></div>
                <p className='text-gray-400 text-[20px]'>اختر الدورة التي تناسبك وابدأ رحلتك التعليمية</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 flex-wrap justify-center'>
                {
                    TRACKS.map(
                        (track, index) => (
                            <Card key={index} title={track.title} imageUrl={track.img} />
                        )
                    )
                }
                </div>
        </div>
    )
}
