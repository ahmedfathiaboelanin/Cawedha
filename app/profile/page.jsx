'use client'
import Image from 'next/image'
import React from 'react'
import { MdEdit, MdShare } from 'react-icons/md'
import CoursesSection from './CoursesSection'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import { useAuthStore } from '../store/useAuthStore'
function Profile() {
    const {user} = useAuthStore();
    return (
        <ProtectedRoute>
            <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black text-end">
                <main className="flex flex-col p-5 bg-gray-100 w-full">
                    <div className="header w-full flex gap-5 items-center justify-end">
                        <div className="flex flex-col ">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{ user?.fname + " " + user?.lname }</h1>
                            <p className="text-gray-600 dark:text-gray-400 h-4"></p>
                            <div className="flex gap-2">
                                <button className="bg-green-500 hover:bg-green-700 flex gap-2 items-center text-white font-bold py-2 px-4 rounded-md">
                                    <MdShare className="inline-block ml-1" />
                                    مشاركة
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 flex gap-2 items-center text-white font-bold py-2 px-4 rounded-md">
                                    <MdEdit className="inline-block ml-1" />
                                    تعديل
                                </button>
                            </div>
                        </div>
                        <Image src={'/avatar.png'} alt='avatar' width={110} height={110} className='rounded-lg border-8 border-white' />
                    </div>
                    <CoursesSection />
                </main>
            </div>
        </ProtectedRoute>
    )
}

export default Profile