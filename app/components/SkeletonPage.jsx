// skeleton page component to show while loading data
import React from 'react';
function SkeletonPage() {
    return (
        <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black text-end">
            <main className="flex flex-col p-5 bg-gray-100 w-full animate-pulse">
                <div className="mt-5 grid grid-cols-1 gap-4">
                    <div className="bg-gray-300 rounded-md w-full h-60 mb-4"></div>
                    
                </div>
                <div className="mt-5 grid grid-cols-3 gap-4">
                    <div className="bg-gray-300 rounded-md w-full h-60 mb-4"></div>
                    <div className="bg-gray-300 rounded-md w-full h-60 mb-4"></div>
                    <div className="bg-gray-300 rounded-md w-full h-60 mb-4"></div>
                </div>
                <div className="mt-5 grid grid-cols-4 gap-4">
                    <div className="bg-gray-300 rounded-md w-full h-60 mb-4"></div>
                    <div className="bg-gray-300 rounded-md w-full h-60 mb-4"></div>
                    <div className="bg-gray-300 rounded-md w-full h-60 mb-4"></div>
                    <div className="bg-gray-300 rounded-md w-full h-60 mb-4"></div>
                </div>
            </main>
        </div>
    )
}
export default SkeletonPage