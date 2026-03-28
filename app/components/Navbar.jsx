import React from 'react'
import SignupBtn from './SignupBtn';
import Link from 'next/link';

export default function Navbar() {
    return (
        // make the navbar sticky to the top of the page and add a shadow to it
        <header className='sticky top-0 z-50 bg-zinc-50 border-b-gray-100 shadow-md'>
            <nav className='flex items-center justify-between px-10 py-5'>
                <div className="drawer xl:hidden">
                    <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-1" className="btn drawer-button">
                            <div className="hamburger-menue">
                                <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
                                <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
                                <div className="w-6 h-0.5 bg-gray-600"></div>
                            </div>
                        </label>
                    </div>
                    <div className="drawer-side text-end">
                        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <Link href="/courses" className='text-gray-600 text-xl hover:border-b-3 px-2 transition-all duration-75 hover:border-blue-500'>الدورات</Link>
                            <br /><br />
                            <SignupBtn />
                            <br />
                            <Link href={'/login'} className='text-blue-600 text-lg'>
                                تسجيل الدخول
                            </Link>
                        </ul>
                    </div>
                </div>
                {/* btns */}
                <div className='hidden xl:flex gap-5 items-center'>
                    <SignupBtn />
                    <Link href={'/login'} className='text-blue-600 text-lg'>
                        تسجيل الدخول
                    </Link>
                </div>
                {/* search bar */}
                <div className="w-150 hidden xl:flex justify-center items-center gap-2 relative">
                    <button className='flex gap-2 absolute left-2 justify-center items-center bg-blue-500 text-white p-2 text-sm rounded-full'>ابحث</button>
                    <input type="text" placeholder='ماذا تريد أن تتعلم ؟' dir='rtl' className='border-2 w-150 border-gray-300 rounded-full p-3 focus:outline-none focus:border-blue-500' />
                </div>
                {/* links & logo*/}
                <div className="flex gap-20 items-end">
                    <div className='hidden xl:flex items-center gap-5'>
                        <Link href="/courses" className='text-gray-600 text-xl hover:border-b-3 px-2 transition-all duration-75 hover:border-blue-500'>الدورات</Link>
                    </div>
                    <Link href='/' className="text-4xl font-bold text-blue-700">
                        كَوِِدها
                    </Link>
                </div>
            </nav>
        </header>
    )
}
