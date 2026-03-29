'use client'
import React from 'react'
import { FaBook } from 'react-icons/fa'
import {MdOutlineEmail, MdPassword} from 'react-icons/md'
import TextSection from './TextSection'
import FormSection from './FormSection'
function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black text-end">
            <main className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full p-5">
                    <FormSection/>
                    <TextSection />
                </div>
            </main>
        </div>
    )
}

export default Login