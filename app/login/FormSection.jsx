'use client'
import React, { useState } from 'react'
import { MdPassword } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa';

function FormSection() {
    return (
        <div className="form  bg-white shadow p-5 rounded-xl flex flex-col items-end justify-center gap-3">
            <h1 className='text-2xl font-bold'>مرحباً بك مجدداً</h1>
            <h4 className='text-lg'>أدخل بياناتك للوصول إلى حسابك التعليمي</h4>
            <form className='flex flex-col gap-3 w-full' dir='rtl'>
                <label htmlFor="username" className='text-end flex'>اسم المستخدم</label>
                <div className="relative w-full">
                    <FaRegUser className='absolute left-2 top-[calc(9px)] text-2xl text-gray-500' />
                    <input type="text" id="username" placeholder='اسم المستخدم' className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <label htmlFor="password" className='text-end flex'>كلمة المرور</label>
                <div className="relative w-full">
                    <MdPassword className='absolute left-2 top-[calc(9px)] text-2xl text-gray-500' />
                    <input type="password" id="password" placeholder='*********' className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <button type="submit" className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors'>
                    تسجيل الدخول
                </button>
            </form>
            <p className='text-sm text-gray-600'>ليس لديك حساب؟ <a href="/signup" className='text-blue-500 hover:underline'>سجل الآن</a></p>
        </div>
    )
}

export default FormSection