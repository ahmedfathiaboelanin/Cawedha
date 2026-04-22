'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { MdPassword } from 'react-icons/md'
import { toast } from 'react-toastify'
import instance from '../_axios'
import { useRouter } from 'next/navigation'

export default function Signup() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // make a post request to the backend to create a new user
            let response = await instance.post('api/users', { username, pass: password, fname, lname });
            console.log(response);
            
            toast.success('تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.');
            router.push('/login');
        } catch (error) {
            console.log(error);
            
            toast.error('فشل إنشاء الحساب. يرجى التحقق من بياناتك والمحاولة مرة أخرى.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-end">
            <main className="flex justify-center items-center w-full md:px-50">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 items-center w-full">
                    <div dir='rtl' className="col-span-3 lg:col-span-2 flex flex-col items-start justify-center gap-4 bg-white  p-10 rounded-2xl">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                            انضم إلى كَوِدها اليوم
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            انضم إلينا اليوم وابدأ رحلتك معنا
                        </p>
                        <form className='flex flex-col gap-3 w-full' dir='rtl' onSubmit={handleSignup}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-3">
                                    
                                    <div className="relative w-full">
                                        <FaRegUser className='absolute left-2 top-[calc(9px)] text-2xl text-gray-500' />
                                        <input onChange={
                                            (e) => setFname(e.target.value)
                                        } type="text" id="fname" placeholder='الاسم الأول' className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    
                                    <div className="relative w-full">
                                        <FaRegUser className='absolute left-2 top-[calc(9px)] text-2xl text-gray-500' />
                                        <input onChange={
                                            (e) => setLname(e.target.value)
                                        } type="text" id="lname" placeholder='الاسم الأخير' className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                                    </div>
                                </div>
                            </div>

                            
                            <div className="relative w-full">
                                <FaRegUser className='absolute left-2 top-[calc(9px)] text-2xl text-gray-500' />
                                <input onChange={
                                    (e) => setUsername(e.target.value)
                                } type="text" id="username" placeholder='اسم المستخدم' className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            </div>
                            
                            <div className="relative w-full">
                                <MdPassword className='absolute left-2 top-[calc(9px)] text-2xl text-gray-500' />
                                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder='كلمة المرور' className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            </div>
                            <button type="submit" className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors' disabled={loading}>
                                {loading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
                            </button>
                        </form>
                        <p className='text-sm text-gray-600'>هل لديك حساب بالفعل؟ <Link href="/login" className='text-blue-500 hover:underline'>سجل الآن</Link></p>
                    </div>
                    <div className="col-span-3 hidden lg:flex items-center justify-center">
                        <Image src="/hero1.png" width={600} height={300} alt="Signup" className=" h-auto rounded-md" />
                    </div>
                </div>
            </main>
        </div>
    )
}
