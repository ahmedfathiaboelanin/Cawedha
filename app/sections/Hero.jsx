import Image from 'next/image'
import React from 'react'
import SignupBtn from '../components/SignupBtn'

export default function Hero() {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 px-0 gap-10 lg:gap-5 md:px-50 py-20 justify-center'>
            <Image src={"/hero1.png"} alt="Hero Image" width={600} height={400} className='w-full hidden md:flex' />
            <div className="flex flex-col items-start px-3 lg:mt-10 mt-0 w-full justify-center" dir='rtl'>
                <div className="flex flex-col items-start w-full gap-3">
                    <h1 className='text-[50px] text-blue-700 leading-15 tracking-tight font-semibold text-wrap md:w-112.5 wrap-break-word'>
                        طوِّر مهاراتك.
                        شكّل حياتك المهنية
                    </h1>
                    <p className='text-lg text-gray-700 px-5 wrap-break-word'>
                        بدأ رحلتك التعليمية اليوم مع منصتنا التي تجمع أفضل الدورات في مكان واحد لتصل إلى طموحك بأسرع طريق.
                    </p>
                </div>
                <div className="flex flex-col w-full mt-3 gap-2">
                    <SignupBtn />
                </div>
            </div>
        </div>
    )
}
