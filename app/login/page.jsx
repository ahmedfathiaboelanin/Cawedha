import React from 'react'
import { FaBook } from 'react-icons/fa'
import {MdOutlineEmail, MdPassword} from 'react-icons/md'
function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-end">
            <main className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full p-5">
                    <div className="form  bg-white shadow p-5 rounded-xl flex flex-col items-end justify-center gap-3">
                        <h1 className='text-2xl font-bold'>مرحباً بك مجدداً</h1>
                        <h4 className='text-lg'>أدخل بياناتك للوصول إلى حسابك التعليمي</h4>
                        <form className='flex flex-col gap-3 w-full' dir='rtl'>
                            <label htmlFor="email" className='text-end flex'>البريد الإلكتروني</label>
                            <div className="relative w-full">
                                <MdOutlineEmail className='absolute left-2 top-[calc(9px)] text-3xl text-gray-500'/>
                                <input type="email" id="email" placeholder='email@example.com' className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            </div>
                            <label htmlFor="password" className='text-end flex'>كلمة المرور</label>
                            <div className="relative w-full">
                                <MdPassword className='absolute left-2 top-[calc(9px)] text-3xl text-gray-500'/>
                                <input type="password" id="password" placeholder='*********' className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            </div>
                            <button type="submit" className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors'>تسجيل الدخول</button>
                        </form>
                        <p className='text-sm text-gray-600'>ليس لديك حساب؟ <a href="/signup" className='text-blue-500 hover:underline'>سجل الآن</a></p>
                    </div>
                    <div className="col-span-2 bg-blue-500 p-5 hidden rounded-xl md:flex flex-col items-end justify-center text-white gap-3">
                        <h5 className='text-gray-200'>بوابة المعرفة</h5>
                        <h1 className='text-4xl font-semibold'>استأنف رحلتك في صرح الفكر</h1>
                        <h3 className='flex items-center gap-2 text-gray-100'>
                            اكتشف عوالم جديدة من المعرفة، حيث يلتقي الفكر بالابتكار في بوابة المعرفة.
                            <FaBook className="inline-block mr-2" />
                        </h3>
                        <h3 className='flex items-center gap-2 text-gray-100'>
                            انضم إلينا في رحلة استكشاف لا نهاية لها، حيث نفتح أبواب المعرفة ونمهد الطريق نحو مستقبل مشرق.
                            <FaBook className="inline-block mr-2" />
                        </h3>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login