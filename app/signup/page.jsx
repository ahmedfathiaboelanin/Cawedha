'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegUser, FaEye, FaEyeSlash, FaUserPlus } from 'react-icons/fa';
import { MdPassword, MdEmail } from 'react-icons/md';

export default function Signup() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50/70 via-slate-50 to-slate-50 px-4 py-10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <main className="w-full max-w-6xl">
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-5">
          {/* form */}
          <div dir="rtl" className="flex flex-col justify-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 md:p-8 lg:col-span-2 dark:border-white/10 dark:bg-slate-900">
            <span className="grid h-13 w-13 w-fit place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 p-3.5 text-xl text-white shadow-lg">
              <FaUserPlus />
            </span>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">انضم إلى كوّدها اليوم</h1>
            <p className="text-slate-500 dark:text-slate-400">حساب مجاني، تعلم فوري، وشهادات عند الإتمام.</p>

            <form className="flex flex-col gap-3" dir="rtl" onSubmit={submit}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="relative">
                  <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input required type="text" placeholder="الاسم الأول" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
                </div>
                <div className="relative">
                  <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input required type="text" placeholder="الاسم الأخير" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
                </div>
              </div>
              <div className="relative">
                <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input required type="text" placeholder="اسم المستخدم" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
              </div>
              <div className="relative">
                <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input required type="email" placeholder="البريد الإلكتروني" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
              </div>
              <div className="relative">
                <MdPassword className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input required minLength={6} type={show ? 'text' : 'password'} placeholder="كلمة المرور (6 أحرف على الأقل)" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-16 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
                <button type="button" onClick={() => setShow(!show)} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600">
                  {show ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <label className="flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                <input required type="checkbox" className="checkbox checkbox-primary checkbox-xs mt-1" />
                أوافق على شروط الاستخدام وسياسة الخصوصية الخاصة بمنصة كوّدها.
              </label>
              <button type="submit" disabled={loading} className="rounded-xl bg-gradient-to-l from-blue-700 to-blue-500 py-3.5 font-black text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 disabled:opacity-60">
                {loading ? <span className="loading loading-spinner loading-sm" /> : 'إنشاء حساب مجاني'}
              </button>
            </form>
            <p className="text-center text-sm text-slate-500">
              لديك حساب بالفعل؟{' '}
              <Link href="/login" className="font-bold text-blue-600 hover:underline">
                سجل الدخول
              </Link>
            </p>
          </div>

          {/* visual */}
          <div className="relative hidden overflow-hidden rounded-3xl bg-gradient-to-bl from-blue-900 via-blue-700 to-cyan-600 p-8 lg:col-span-3 lg:flex lg:flex-col lg:justify-between">
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative flex items-center justify-between text-white">
              <span className="rounded-full bg-white/15 px-4 py-1 text-sm font-bold backdrop-blur">انضم لـ +45 ألف متعلم</span>
              <span className="flex gap-1 text-amber-300">★★★★★ 4.9</span>
            </div>
            <Image src="/hero1.png" width={600} height={380} alt="ابدأ التعلم" className="relative mx-auto w-full max-w-md animate-float rounded-3xl shadow-2xl" />
            <div className="relative grid grid-cols-3 gap-3 text-center text-white">
              {[
                ['120+', 'دورة عملية'],
                ['9', 'مسارات مهنية'],
                ['100%', 'مجاني للبدء'],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                  <p className="text-xl font-black">{v}</p>
                  <p className="text-xs font-bold text-blue-100">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
