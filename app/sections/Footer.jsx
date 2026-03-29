import React from 'react'

export default function Footer() {
    return (
        <footer dir='rtl' className='grid grid-cols-1 md:grid-cols-3 items-center justify-between px-20 py-5 gap-5 md:px-30 bg-blue-700'>
            <div className="flex flex-col gap-5 py-10">
                <h1 className='text-white text-2xl'>الدورات التدريبية</h1>
                <a href="#" className='text-white text-lg hover:text-gray-900 transition-colors duration-200'>
                    تطوير الواجهة الأمامية
                </a>
                <a href="#" className='text-white text-lg hover:text-gray-900 transition-colors duration-200'>تطوير الواجهة الخلفية</a>
                <a href="#" className='text-white text-lg hover:text-gray-900 transition-colors duration-200'>تطوير التطبيقات</a>
            </div>
            <div className="flex flex-col gap-5 py-10">
                <h1 className='text-white text-2xl'>سياستنا</h1>
                <a href="#" className='text-white text-lg hover:text-gray-900 transition-colors duration-200'>سياسة الخصوصية</a>
                <a href="#" className='text-white text-lg hover:text-gray-900 transition-colors duration-200'>شروط الاستخدام</a>
                <a href="#" className='text-white text-lg hover:text-gray-900 transition-colors duration-200'>اتصل بنا</a>
            </div>
            <div className="flex flex-col gap-5 py-10">
                <h1 className='text-white text-2xl'>تواصل معنا</h1>
                <a href="#" className='text-white text-lg'>البريد الإلكتروني:
                    <span className='text-blue-300'>
                        ahmedfathiaboelanin@gmail.com
                    </span>
                </a>
                <a href="#" className='text-white text-lg'>رقم الهاتف:
                    <span className='text-blue-300'>
                        01040284664
                    </span>
                </a>
                <a href="#" className='text-white text-lg'>Github:
                    <span className='text-blue-300'>
                        https://github.com/ahmedfathiaboelanin
                    </span>
                </a>

            </div>
        </footer>
    )
}
