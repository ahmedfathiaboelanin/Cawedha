'use client'
import React from 'react'
import TextSection from './TextSection'
import FormSection from './FormSection'
function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50/70 via-slate-50 to-slate-50 px-4 py-10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
            <main className="w-full max-w-5xl">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <FormSection/>
                    <TextSection />
                </div>
            </main>
        </div>
    )
}

export default Login