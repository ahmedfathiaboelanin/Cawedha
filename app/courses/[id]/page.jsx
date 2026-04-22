/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation';
import { useState } from 'react';
import instance from '@/app/_axios';
import ProtectedRoute from '@/app/ProtectedRoute/ProtectedRoute';
import { toast } from 'react-toastify';
import { useAuthStore } from '@/app/store/useAuthStore';


function Course() {
    const id = useParams().id;
    const [courseVideos, setCourseVideos] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [videoUrl, setVideoUrl] = useState('');
    const [videoTitle, setVideoTitle] = useState('');
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(true);

    const { user } = useAuthStore();


    const getCourseVideos = async () => {
        let response = await instance.get('/api/courses/' + id);
        setCourse(response.data);
        setCourseVideos(response.data.videos);
        setVideoUrl(response.data.videos[0]?.url);
        setVideoTitle(response.data.videos[0]?.title);
        setLoading(false);
    }


    const addToFavorites = async () => {
        try {
            let res = await instance.post('/api/favorites', { course_id: id, user_id: user.id });
            toast.success('تمت إضافة الدورة إلى المفضلة!');
        } catch (error) {
            console.log(error);
            
            toast.error('حدث خطأ أثناء إضافة الدورة إلى المفضلة. حاول مرة أخرى.');
        } finally {
            
        }
    }


    const saveProgress = async (progress) => {
        try {
            let res = await instance.post('/api/favorites/progress', { course_id: id, user_id: user.id, progress });
            console.log(res.data);
            toast.success('تم حفظ تقدمك!');
        } catch (error) {
            console.log(error);
            toast.error('حدث خطأ أثناء حفظ تقدمك. حاول مرة أخرى.');
        }
    }

    useEffect(() => {
        getCourseVideos();
        console.log(user?.fav_courses.map(fav => fav.course_id));
        console.log(user?.fav_courses.map(fav => fav.course_id).indexOf(+id));
        
    }, [])

    return (
        <ProtectedRoute>
            <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-end">
                <main className="min-h-screen p-10 w-full relative">
                    {
                        (courseVideos.length > 0 && !user.fav_courses.map(fav=>fav.course_id).includes(+id)) && (
                            <button onClick={addToFavorites} className="mb-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md absolute top-10 left-10 cursor-pointer">
                                اضافه الى المفضلة
                            </button>
                        )
                    }
                    <h1 className="text-4xl font-bold mb-5">{course.name}</h1>
                    <p className="text-3xl text-gray-600 mb-10">{course.description}</p>
                    <div className="grid grid-cols-4 gap-10">
                        {
                            loading ? <p className='text-center flex h-125 justify-center items-center gap-5 col-span-4 text-gray-600 text-xl'>
                                جاري تحميل الفيديوهات...
                            </p>
                                :
                                courseVideos.length === 0 ? <p className='text-center flex h-125 justify-center items-center gap-5 col-span-4 text-gray-600 text-xl'>
                                    لا توجد فيديوهات لهذه الدورة
                                </p>
                                    :
                                    <>
                                        <div className="w-full h-screen col-span-3">
                                            <iframe src={videoUrl} frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-[80%] rounded-lg shadow-lg"
                                            ></iframe>
                                            <h1 className='text-2xl font-bold mt-5'>{videoTitle}</h1>
                                            {
                                                user?.fav_courses[user?.fav_courses.map(fav => fav.course_id).indexOf(+id)]?.progress > (currentVideoIndex + 1) / courseVideos.length * 100 ? <p className='text-green-500 font-bold'>لقد شاهدت هذا الفيديو بالفعل</p> :
                                                <button
                                                    onClick={() => {
                                                        let index = courseVideos.findIndex(video => video.url === videoUrl);
                                                        let progress = (index + 1) / courseVideos.length * 100;
                                                        saveProgress(progress);
                                                    }
                                                    }
                                                    className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors mt-5'>
                                                    حفظ التقدم
                                                </button>
                                            }
                                        </div>
                                        <div className="flex flex-col gap-1 max-h-screen overflow-y-auto">
                                            {
                                                courseVideos.map((video, index) => (
                                                    <button key={video.id}
                                                        className={`flex w-full items-center border text-blue-900 border-blue-600 rounded p-3 hover:text-white hover:bg-blue-900 gap-5 transition-all duration-150 cursor-pointer ${video.url === videoUrl ? 'bg-blue-900 text-white' : ''}`}
                                                        onClick={() => {
                                                            setVideoUrl(video.url);
                                                            setVideoTitle(video.title);
                                                            setCurrentVideoIndex(index);
                                                        }
                                                        }
                                                    >
                                                        <h2 className="text-lg font-bold max-w-full truncate">{video.title}</h2>
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </>
                        }

                    </div>
                </main>
            </div>
        </ProtectedRoute>
    )
}

export default Course