/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation';
import { useState } from 'react';
import instance from '@/app/_axios';
import { toast } from 'react-toastify';
import { useAuthStore } from '@/app/store/useAuthStore';
import VIDEOS from '@/app/Static/Videos.json';
import COURSES from '@/app/Static/coureses.json';

function Course() {
    const id = useParams().id;
    const [courseVideos, setCourseVideos] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [videoUrl, setVideoUrl] = useState('');
    const [videoTitle, setVideoTitle] = useState('');
    const [course, setCourse] = useState(COURSES.find(course => course.id == id));

    const { user } = useAuthStore();

    const getCourseVideos = () => {
        let videos = VIDEOS.filter(video => video.course_id == id);
        setCourseVideos(videos);
        setVideoUrl(videos[0].url);
        setVideoTitle(videos[0].title);
    }

    useEffect(() => {
        getCourseVideos();
    }, [])

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-end">
            <main className="min-h-screen p-10 w-full relative">
                <h1 className="text-4xl font-bold mb-5">{course.title}</h1>
                <p className="text-3xl text-gray-600 mb-10">{course.description}</p>
                <div className="grid grid-cols-4 gap-10">
                    {
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
    )
}

export default Course