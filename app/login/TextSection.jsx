import React from 'react'
import { FaBook } from 'react-icons/fa'

function TextSection() {
    return (
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
    )
}

export default TextSection