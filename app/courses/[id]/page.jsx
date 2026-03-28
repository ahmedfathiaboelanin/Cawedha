'use client'
import React from 'react'
import VIDEOS from '../../Static/Videos.json'
import COURSES from '../../Static/coureses.json'
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

function Course() {
    const id = useParams().id;
    const course = COURSES.find(course => course.id === id);
    var courseVideos = VIDEOS.filter(video => video.course_id === id);
    const [videoUrl, setVideoUrl] = useState(courseVideos[0]?.url);
    const [videoTitle, setVideoTitle] = useState(courseVideos[0]?.title);
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-end">
            <main className="min-h-screen p-10 w-full">
                <h1 className="text-4xl font-bold mb-5">{course.title}</h1>
                <p className="text-3xl text-gray-600 mb-10">{course.description}</p>
                <div className="grid grid-cols-4 gap-10">
                    {
                        courseVideos.length === 0 ? <p className='text-center flex h-125 justify-center items-center gap-5 col-span-4 text-gray-600 text-xl'>
                            لا يوجد فيديوهات لهذه الدورة
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
                                        courseVideos.map(video => (
                                            <button key={video.id}
                                                className={`flex w-full items-center border text-blue-900 border-blue-600 rounded p-3 hover:text-white hover:bg-blue-900 gap-5 transition-all duration-150 cursor-pointer ${video.url === videoUrl ? 'bg-blue-900 text-white' : ''}`}
                                                onClick={() => {
                                                    setVideoUrl(video.url);
                                                    setVideoTitle(video.title);
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