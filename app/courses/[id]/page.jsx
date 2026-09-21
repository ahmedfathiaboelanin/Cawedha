'use client';
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheck, FaPlay, FaList, FaClock } from 'react-icons/fa';
import VIDEOS from '@/app/Static/Videos.json';
import COURSES from '@/app/Static/coureses.json';

export default function Course() {
  const { id } = useParams();
  const course = useMemo(() => COURSES.find((c) => String(c.id) === String(id)), [id]);
  const videos = useMemo(() => VIDEOS.filter((v) => String(v.course_id) === String(id)), [id]);

  const [current, setCurrent] = useState(0);
  const [watched, setWatched] = useState({});
  const storageKey = `course-${id}-watched`;

  useEffect(() => {
    try {
      setWatched(JSON.parse(localStorage.getItem(storageKey) || '{}'));
    } catch {
      setWatched({});
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(watched));
  }, [watched, storageKey]);

  if (!course) {
    return (
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center" dir="rtl">
        <h1 className="text-3xl font-black">الدورة غير موجودة</h1>
        <Link href="/courses" className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white">
          العودة للدورات
        </Link>
      </main>
    );
  }

  const pct = videos.length ? Math.round((Object.values(watched).filter(Boolean).length / videos.length) * 100) : 0;
  const video = videos[current];

  const markWatched = () => {
    if (!video) return;
    setWatched((w) => ({ ...w, [video.id]: true }));
    if (current < videos.length - 1) setCurrent(current + 1);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950" dir="rtl">
      {/* breadcrumb header */}
      <div className="border-b border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
            <Link href="/" className="hover:text-blue-600">الرئيسية</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-blue-600">الدورات</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white">{course.title}</span>
          </div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
                {course.track}
              </span>
              <h1 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl dark:text-white">{course.title}</h1>
              <p className="mt-2 max-w-2xl text-slate-500 dark:text-slate-400">{course.description}</p>
            </div>
            <div className="min-w-56 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="text-slate-600 dark:text-slate-300">تقدمك في الدورة</span>
                <span className="text-blue-700 dark:text-blue-300">{pct}%</span>
              </div>
              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-l from-blue-700 to-cyan-400 transition-all" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <FaClock /> {videos.length} درس • {Object.values(watched).filter(Boolean).length} مكتمل
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:px-8 lg:grid-cols-3">
        {/* player */}
        <div className="lg:col-span-2">
          {videos.length === 0 ? (
            <div className="grid min-h-96 place-items-center rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-white/10 dark:bg-white/[0.03]">
              <div>
                <p className="text-6xl">🎬</p>
                <h3 className="mt-3 text-xl font-black">لا توجد فيديوهات لهذه الدورة بعد</h3>
                <p className="mt-1 text-slate-500">نعمل على إضافة المحتوى قريباً — تصفح دورات أخرى meanwhile.</p>
                <Link href="/courses" className="mt-4 inline-block rounded-xl bg-blue-600 px-6 py-2.5 font-bold text-white">
                  تصفح الدورات
                </Link>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-slate-900">
              <div className="aspect-video w-full bg-black">
                <iframe
                  key={video?.url}
                  src={video?.url}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  title={video?.title}
                />
              </div>
              <div className="flex flex-wrap items-start justify-between gap-4 p-5 md:p-6">
                <div>
                  <p className="text-xs font-black text-blue-600">الدرس {current + 1} من {videos.length}</p>
                  <h2 className="mt-1 text-xl font-extrabold text-slate-900 md:text-2xl dark:text-white">{video?.title}</h2>
                </div>
                <div className="flex gap-2">
                  <button
                    disabled={current === 0}
                    onClick={() => setCurrent(current - 1)}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-300 disabled:opacity-40 dark:border-white/10 dark:text-slate-200"
                  >
                    <FaArrowRight /> السابق
                  </button>
                  <button
                    onClick={markWatched}
                    className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-700"
                  >
                    <FaCheck /> إتمام ومتابعة
                  </button>
                  <button
                    disabled={current === videos.length - 1}
                    onClick={() => setCurrent(current + 1)}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700 disabled:opacity-40"
                  >
                    التالي <FaArrowLeft />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* playlist */}
        <aside className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
          <div className="flex items-center gap-2 border-b border-slate-100 p-4 font-extrabold dark:border-white/10">
            <FaList className="text-blue-600" /> قائمة الدروس
          </div>
          <div className="max-h-[70vh] divide-y divide-slate-100 overflow-y-auto dark:divide-white/5">
            {videos.map((v, i) => {
              const isActive = i === current;
              const isWatched = watched[v.id];
              return (
                <button
                  key={v.id}
                  onClick={() => setCurrent(i)}
                  className={`flex w-full items-center gap-3 p-3.5 text-right transition ${
                    isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50 dark:hover:bg-white/5'
                  }`}
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-black ${
                      isActive ? 'bg-white/20 text-white' : isWatched ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300'
                    }`}
                  >
                    {isWatched && !isActive ? <FaCheck className="text-xs" /> : isActive ? <FaPlay className="text-xs" /> : i + 1}
                  </span>
                  <span className="min-w-0">
                    <span className={`block truncate text-sm font-bold ${isActive ? 'text-white' : 'text-slate-800 dark:text-slate-100'}`}>
                      {v.title}
                    </span>
                    <span className={`text-xs font-semibold ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                      {isWatched ? 'مكتمل ✓' : `الدرس ${i + 1}`}
                    </span>
                  </span>
                </button>
              );
            })}
            {videos.length === 0 && <p className="p-5 text-center text-sm text-slate-500">لا توجد دروس بعد</p>}
          </div>
        </aside>
      </div>
    </main>
  );
}
