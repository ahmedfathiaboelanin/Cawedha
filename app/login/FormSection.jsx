'use client'
import React, { useState } from 'react'
import { MdPassword } from 'react-icons/md'
import instance from '../_axios';
import { useRouter } from 'next/navigation';
import { FaRegUser } from 'react-icons/fa';
import {useAuthStore} from '../store/useAuthStore';
import { toast } from 'react-toastify';
function FormSection() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();


    const { login } = useAuthStore();
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let response = await instance.post('api/users/login', { username, pass: password });
            login(response.data.pass, response.data);
            router.push('/profile');

        } catch (error) {
            toast.error('فشل تسجيل الدخول. يرجى التحقق من بياناتك والمحاولة مرة أخرى.');
        }finally {
            setLoading(false);
        }
    }
        
    return (
        <div className="form  bg-white shadow p-5 rounded-xl flex flex-col items-end justify-center gap-3">
            <h1 className='text-2xl font-bold'>مرحباً بك مجدداً</h1>
            <h4 className='text-lg'>أدخل بياناتك للوصول إلى حسابك التعليمي</h4>
            <form className='flex flex-col gap-3 w-full' dir='rtl' onSubmit={handleLogin}>
                <label htmlFor="username" className='text-end flex'>اسم المستخدم</label>
                <div className="relative w-full">
                    <FaRegUser className='absolute left-2 top-[calc(9px)] text-2xl text-gray-500' />
                    <input onChange={
                        (e) => setUsername(e.target.value)
                    } type="text" id="username" placeholder='اسم المستخدم' className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <label htmlFor="password" className='text-end flex'>كلمة المرور</label>
                <div className="relative w-full">
                    <MdPassword className='absolute left-2 top-[calc(9px)] text-2xl text-gray-500' />
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" placeholder='*********' className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <button type="submit" className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors' disabled={loading}>
                    {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                </button>
            </form>
            <p className='text-sm text-gray-600'>ليس لديك حساب؟ <a href="/signup" className='text-blue-500 hover:underline'>سجل الآن</a></p>
        </div>
    )
}

export default FormSection