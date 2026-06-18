import Image from 'next/image'
import React from 'react'

export default function Trust() {
    return (
        <div className='md:p-20 flex flex-col bg-gray-100 items-center gap-4'>
            <p className='text-gray-400 text-[18px]'>Trusted by 45M+ users</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 flex-wrap gap-10'>
                <div className="w-40 h-30 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Image src="/trust-1.png" width={130} height={10} alt="trust1" className='p-5 rounded-lg object-contain'/>
                </div>
                <div className="w-40 h-30 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Image src="/trust-2.png" width={130} height={10} alt="trust2" className='p-5 rounded-lg object-contain'/>
                </div>
                <div className="w-40 h-30 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Image src="/trust-3.png" width={130} height={10} alt="trust3" className='p-5 rounded-lg object-contain'/>
                </div>
                <div className="w-40 h-30 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Image src="/trust-4.png" width={130} height={10} alt="trust4" className='p-5 rounded-lg object-contain'/>
                </div>
                <div className="w-40 h-30 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Image src="/trust-5.png" width={130} height={10} alt="trust5" className='p-5 rounded-lg object-contain'/>
                </div>
            </div>
        </div>
    )
}
