import Image from 'next/image'
import React from 'react'

export default function Signup() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-end">
            <main className="flex justify-center items-center">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col items-start justify-center gap-4">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Create an account</h1>
                        <p className="text-gray-600 dark:text-gray-300">Join us today and start your journey with us.</p>
                        <form className="flex flex-col gap-4 w-full">
                            <input type="text" placeholder="Username" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Sign Up</button>
                        </form>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                        <Image src="/hero1.png" width={500} height={300} alt="Signup" className="w-full h-auto rounded-md" />
                        </div>
                </div>
            </main>
        </div>
    )
}
