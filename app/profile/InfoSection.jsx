import React from 'react'
import { MdInfo } from 'react-icons/md'
import { RiGraduationCapFill, RiMailFill } from 'react-icons/ri'

export default function InfoSection() {
    return (
        <div className="col-span-1 bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-5">
                المعلومات الشخصية
                <MdInfo className="inline-block ml-2 text-blue-700" />
            </h2>
            <p className='text-md items-center font-semibold text-gray-700 dark:text-gray-300 mt-2'>
                ahmedfathiaboelanin@gmail.com
                <RiMailFill className="inline-block text-blue-700 ml-2 text-xl" />
            </p>
            <p className='text-md items-center font-semibold text-gray-700 dark:text-gray-300 mt-2'>
                مهندس برمجيات
                <RiGraduationCapFill className="inline-block text-blue-700 ml-2 text-xl" />
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
                أنا مطور برمجيات متخصص في بناء تطبيقات الويب الحديثة باستخدام تقنيات مثل React و Next.js. لدي خبرة واسعة في تطوير واجهات المستخدم وتجربة المستخدم، وأحب العمل على مشاريع تتيح لي الابتكار والتعلم المستمر.
            </p>
        </div>
    )
}
