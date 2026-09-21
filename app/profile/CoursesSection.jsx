'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaBookmark } from 'react-icons/fa';
import InfoSection from './InfoSection';
import { useAuthStore } from '../store/useAuthStore';
import instance from '../_axios';

const FALLBACK = [
  { course_id: '13', course: { name: 'React', description: 'إنشاء واجهات مستخدم ديناميكية باستخدام React', img: '/react.png' }, progress: 70 },
  { course_id: '27', course: { name: 'Python', description: 'تعلم لغة Python لتطوير البرمجيات والخوادم', img: '/python.jpg' }, progress: 45 },
  { course_id: '7', course: { name: 'HTML', description: 'أساسيات تصميم صفحات الويب باستخدام HTML', img: '/Html.png' }, progress: 100 },
];

export default function CoursesSection() {
  const { user } = useAuthStore();
  const [favorites, setFavorites] = useState(FALLBACK);
  const [tab, setTab] = useState('all');

  useEffect(() => {
    if (!user) return;
    (async () => {
      try {
        const res = await instance.get(`api/favorites/user/${user.id}`);
        if (Array.isArray(res.data) && res.data.length) setFavorites(res.data);
      } catch {
        /* keep fallback */
      }
    })();
  }, [user]);

  const list = tab === 'done' ? favorites.filter((c) => (c.progress || 0) >= 100) : tab === 'in' ? favorites.filter((c) => (c.progress || 0) < 100) : favorites;

  return (
    <div className="mt-5 grid grid-cols-1 items-start gap-5 lg:grid-cols-3">
      <InfoSection />
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6 lg:col-span-2 dark:border-white/10 dark:bg-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-slate-900 dark:text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber-500/10 text-amber-500">
              <FaBookmark />
            </span>
            دوراتي التدريبية
          </h2>
          <div className="flex gap-1.5 rounded-full bg-slate-100 p-1 dark:bg-white/5">
            {[
              ['all', 'الكل'],
              ['in', 'قيد التقدم'],
              ['done', 'مكتملة'],
            ].map(([v, l]) => (
              <button
                key={v}
                onClick={() => setTab(v)}
                className={`rounded-full px-4 py-1.5 text-sm font-bold transition ${tab === v ? 'bg-white text-blue-700 shadow dark:bg-blue-600 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {list.length === 0 ? (
          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-white/10">
            <p className="font-bold text-slate-500">لا توجد دورات في هذا التبويب بعد.</p>
            <Link href="/courses" className="mt-3 inline-block rounded-xl bg-blue-600 px-5 py-2.5 font-bold text-white">
              تصفح الدورات
            </Link>
          </div>
        ) : (
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2" dir="rtl">
            {list.map((c, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]">
                <div className="relative h-40 overflow-hidden">
                  <Image src={c.course?.img || '/front.png'} alt={c.course?.name || 'course'} width={400} height={200} className="h-full w-full object-cover transition group-hover:scale-105" />
                  <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-black ${(c.progress || 0) >= 100 ? 'bg-green-500 text-white' : 'bg-white/90 text-blue-700'}`}>
                    {(c.progress || 0) >= 100 ? 'مكتملة ✓' : `${Number(c.progress || 0).toFixed(0)}%`}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-extrabold text-slate-900 dark:text-white">{c.course?.name}</h3>
                  <p className="clamp-2 mt-1 text-sm text-slate-500">{c.course?.description}</p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-l from-blue-700 to-cyan-400" style={{ width: `${c.progress || 0}%` }} />
                  </div>
                  <Link href={`/courses/${c.course_id}`} className="mt-3 flex items-center gap-2 text-sm font-black text-blue-700 dark:text-blue-300">
                    الذهاب إلى الدورة <FaArrowLeft className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
