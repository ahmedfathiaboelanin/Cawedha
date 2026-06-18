// protecte route
'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../store/useAuthStore';
import SkeletonPage from '../components/SkeletonPage';
function ProtectedRoute({ children }) {
    const router = useRouter();
    const { token } = useAuthStore();
    useEffect(() => {
        if (!token) {
            router.push('/login');
        }
    }, [token, router]);

    return (
        <>
            {token ? children : <SkeletonPage />}
        </>
    )
}
export default ProtectedRoute