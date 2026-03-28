import React from 'react'
import TestmonialsCard from '../components/TestmonialsCard'

const comments = [
    {
        user: 'Ahmed Fathi',
        comment: "لقد غيرت هذه المنصة مساري المهني بالكامل.المحتوى منظم جداً.تمكنت من الحصول على وظيفة أحلامي بعد إنهاء مسارتطوير الويب."
    },
    {
        user: 'Mohamed Khalil',
        comment: "المنصة توفر تجربة تعليمية فريدة.جودة الفيديو  تجعل التعلم ممتعاً وسهلاً.أنصح بهاكل شخص يريد تطوير مهاراته بجدية."
    },
    {
        user: 'Sara Ali',
        comment: "أفضل ما في المنصة هو المرونة. أستطيع التعلم في أيوقت ومن أي مكان.."
    }
]

export default function Testmonials() {
    return (
        <div className="p-10 flex flex-col bg-gray-100 " dir='rtl'>
            <div className="group flex mb-10 flex-col gap-1 items-center">
                <h5 className='text-blue-700'>قالوا عنا</h5>
                <h1 className='text-3xl font-bold'>
                    قصص نجاح ملهمة من طلابنا
                </h1>
                <div className="h-0.75 mt-2 w-50 duration-150 transition-all bg-blue-900 rounded-full"></div>
            </div>
            <div className="flex justify-center rounded-box gap-5">

                {comments.map((comment, index) => (
                    <TestmonialsCard key={index} comment={comment.comment} user={comment.user} />
                ))}
            </div>
        </div>

    )
}
