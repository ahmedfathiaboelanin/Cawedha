'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="العودة للأعلى"
      className="fixed bottom-6 left-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-700"
    >
      <FaArrowUp />
    </button>
  );
}
