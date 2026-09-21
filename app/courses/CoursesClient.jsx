'use client';
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CourseCard from '../components/CourseCard';
import { FaArrowDown, FaSearch, FaTimes } from 'react-icons/fa';
import CATEGORIES from '../Static/Tracks.json';
import COURSES from '../Static/coureses.json';

const PAGE_SIZE = 8;

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="animate-pulse overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
          <div className="h-52 bg-slate-200 dark:bg-white/10" />
          <div className="flex flex-col gap-3 p-5">
            <div className="h-5 w-2/3 rounded bg-slate-200 dark:bg-white/10" />
            <div className="h-4 w-full rounded bg-slate-100 dark:bg-white/5" />
            <div className="h-10 w-full rounded-xl bg-slate-100 dark:bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CoursesClient() {
  const searchParams = useSearchParams();
  const initialTrack = searchParams.get('track') || 'All';
  const initialQuery = searchParams.get('q') || '';

  const [filter, setFilter] = useState(initialTrack);
  const [search, setSearch] = useState(initialQuery);
  const [sort, setSort] = useState('newest');
  const [count, setCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFilter(searchParams.get('track') || 'All');
    setSearch(searchParams.get('q') || '');
  }, [searchParams]);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(t);
  }, [filter, search, sort]);

  useEffect(() => {
    setCount(PAGE_SIZE);
  }, [filter, search, sort]);

  const filtered = useMemo(() => {
    let list = [...COURSES];
    if (filter !== 'All') list = list.filter((c) => c.track === filter);
    if (search.trim()) {
      const q = search.trim();
      list = list.filter((c) => c.title.includes(q) || c.description.includes(q));
    }
    if (sort === 'az') list.sort((a, b) => a.title.localeCompare(b.title, 'ar'));
    return list;
  }, [filter, search, sort]);

  const visible = filtered.slice(0, count);

  const pickFilter = (badge) => {
    setFilter(badge);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950" dir="rtl">
      {/* header */}
      <div className="relative overflow-hidden bg-gradient-to-l from-blue-900 via-blue-700 to-blue-600 pb-10 pt-12">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <p className="mb-2 inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-bold text-white backdrop-blur">
            {filtered.length} دورة متاحة
          </p>
          <h1 className="text-4xl font-black text-white md:text-5xl">الدورات التدريبية</h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-blue-100">
            يمكنك بدء مسيرتك المهنية أو تغييرها أو تطويرها — اختر مسارك وابدأ التعلم اليوم.
          </p>

          {/* search + sort */}
          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث عن دورة: React, Python, CSS..."
                className="w-full rounded-2xl border-0 bg-white py-3.5 pl-4 pr-11 text-[15px] font-semibold text-slate-800 shadow-xl outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/30"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-100 p-1.5 text-slate-500 hover:bg-slate-200"
                  aria-label="مسح البحث"
                >
                  <FaTimes className="text-xs" />
                </button>
              )}
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-2xl border-0 bg-white px-4 py-3.5 text-sm font-bold text-slate-700 shadow-xl outline-none"
            >
              <option value="newest">الأحدث أولاً</option>
              <option value="az">ترتيب أبجدي</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => pickFilter('All')}
            className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold transition ${
              filter === 'All'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300'
            }`}
          >
            كل الدورات
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => pickFilter(cat.badge)}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold transition ${
                filter === cat.badge
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <p className="mt-5 text-sm font-semibold text-slate-500 dark:text-slate-400">
          عرض {visible.length} من {filtered.length} دورة
          {filter !== 'All' && (
            <>
              {' '}في مسار <b className="text-blue-700 dark:text-blue-300">{filter}</b>
            </>
          )}
        </p>

        {/* grid */}
        <div className="mt-5">
          {loading ? (
            <SkeletonGrid />
          ) : visible.length === 0 ? (
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-white/10 dark:bg-white/[0.03]">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-blue-50 text-2xl text-blue-600 dark:bg-blue-500/10">
                <FaSearch />
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">لا توجد نتائج مطابقة</h3>
              <p className="max-w-md text-slate-500">جرّب كلمة بحث مختلفة أو أعد ضبط الفلاتر لعرض جميع الدورات المتاحة.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setFilter('All');
                }}
                className="rounded-xl bg-blue-600 px-6 py-2.5 font-bold text-white transition hover:bg-blue-700"
              >
                عرض كل الدورات
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          )}
        </div>

        {count < filtered.length && !loading && (
          <div className="mt-10 flex justify-center">
            <button
              className="group flex items-center gap-3 rounded-2xl border border-blue-200 bg-white px-8 py-3 font-bold text-blue-700 shadow-sm transition hover:bg-blue-600 hover:text-white dark:border-blue-500/30 dark:bg-white/5 dark:text-blue-300"
              onClick={() => setCount(count + PAGE_SIZE)}
            >
              عرض المزيد ({filtered.length - count} متبقية)
              <FaArrowDown className="animate-bounce text-sm" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
