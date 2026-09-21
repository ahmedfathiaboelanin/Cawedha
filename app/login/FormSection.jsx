'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaRegUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdPassword, MdLogin } from 'react-icons/md';

export default function FormSection() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="flex flex-col justify-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 md:p-8 dark:border-white/10 dark:bg-slate-900">
      <span className="grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 p-3.5 text-xl text-white shadow-lg">
        <MdLogin />
      </span>
      <h1 className="text-2xl font-black text-slate-900 dark:text-white">مرحباً بعودتك 👋</h1>
      <p className="text-slate-500 dark:text-slate-400">أدخل بياناتك للوصول إلى حسابك التعليمي ومتابعة تقدمك.</p>

      <form className="flex flex-col gap-4" dir="rtl" onSubmit={submit}>
        <div>
          <label htmlFor="username" className="mb-1.5 block text-sm font-bold text-slate-700 dark:text-slate-300">
            اسم المستخدم
          </label>
          <div className="relative">
            <FaRegUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              id="username"
              required
              placeholder="مثال: ahmed_dev"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-[15px] outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-bold text-slate-700 dark:text-slate-300">
            كلمة المرور
          </label>
          <div className="relative">
            <MdPassword className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type={show ? 'text' : 'password'}
              id="password"
              required
              minLength={6}
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-20 pr-4 text-[15px] outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center gap-1 text-xs font-bold text-slate-500 hover:text-blue-600"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
              {show ? 'إخفاء' : 'إظهار'}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex cursor-pointer items-center gap-2 font-semibold text-slate-600 dark:text-slate-300">
            <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" defaultChecked />
            تذكرني
          </label>
          <a href="#" className="font-bold text-blue-600 hover:underline">
            نسيت كلمة المرور؟
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-gradient-to-l from-blue-700 to-blue-500 py-3.5 font-black text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 disabled:opacity-60"
        >
          {loading ? <span className="loading loading-spinner loading-sm" /> : 'تسجيل الدخول'}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500">
        ليس لديك حساب؟{' '}
        <Link href="/signup" className="font-bold text-blue-600 hover:underline">
          أنشئ حساباً مجانياً
        </Link>
      </p>
    </div>
  );
}
