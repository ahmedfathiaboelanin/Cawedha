'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaFire, FaMedal, FaBookOpen } from 'react-icons/fa';
import { MdEdit, MdShare } from 'react-icons/md';
import CoursesSection from './CoursesSection';

const STATS = [
  { icon: FaBookOpen, value: '12', label: 'دورة مسجلة', color: 'from-blue-600 to-cyan-400' },
  { icon: FaFire, value: '23 يوم', label: 'سلسلة التعلم', color: 'from-orange-500 to-amber-400' },
  { icon: FaMedal, value: '5', label: 'شهادات', color: 'from-violet-600 to-fuchsia-400' },
];

export default function Profile() {
  const user = { fname: 'محمد', lname: 'محمد' };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950" dir="rtl">
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        {/* cover */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-blue-900 via-blue-700 to-cyan-600 p-6 md:p-8">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="relative flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image src="/avatar.png" alt="الصورة الشخصية" width={96} height={96} className="h-24 w-24 rounded-3xl border-4 border-white/40 object-cover shadow-xl" />
                <span className="absolute -bottom-1 -left-1 h-5 w-5 rounded-full border-2 border-white bg-green-500" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white md:text-3xl">{user.fname} {user.lname}</h1>
                <p className="font-bold text-blue-100">مهندس برمجيات • عضو منذ 2024</p>
                <div className="mt-2 flex gap-2">
                  <button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-black text-blue-800 transition hover:-translate-y-0.5">
                    <MdEdit /> تعديل
                  </button>
                  <button className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/25">
                    <MdShare /> مشاركة
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {STATS.map((s) => (
                <div key={s.label} className="flex min-w-24 flex-col items-center gap-1 rounded-2xl bg-white/12 p-3 text-white backdrop-blur">
                  <span className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white`}>
                    <s.icon className="text-sm" />
                  </span>
                  <b className="text-lg leading-none">{s.value}</b>
                  <span className="text-[11px] font-bold text-blue-100">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* weekly goal */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900">
          <div>
            <h3 className="font-extrabold text-slate-900 dark:text-white">هدف هذا الأسبوع 🎯</h3>
            <p className="text-sm text-slate-500">أكمل 5 دروس للوصول لهدفك الأسبوعي</p>
          </div>
          <div className="flex flex-1 items-center gap-3">
            <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
              <div className="h-full w-3/5 rounded-full bg-gradient-to-l from-blue-700 to-cyan-400" />
            </div>
            <b className="text-sm text-blue-700 dark:text-blue-300">60%</b>
          </div>
          <Link href="/courses" className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700">
            أكمل التعلم <FaArrowLeft className="text-xs" />
          </Link>
        </div>

        <CoursesSection />
      </main>
    </div>
  );
}
