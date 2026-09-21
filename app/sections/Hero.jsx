import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaPlay, FaStar, FaUsers } from 'react-icons/fa';
import SignupBtn from '../components/SignupBtn';

const AVATARS = ['أ', 'م', 'س', 'خ'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      {/* blobs */}
      <div className="pointer-events-none absolute -top-24 right-[10%] h-72 w-72 rounded-full bg-blue-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-40 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/2 h-56 w-[42rem] translate-x-1/2 rounded-[100%] bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-14 md:px-8 lg:grid-cols-2 lg:pt-20">
        {/* text */}
        <div className="animate-fade-up flex flex-col items-start gap-6" dir="rtl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-bold text-blue-700 shadow-sm dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            +4500 طالب انضموا هذا الشهر
          </div>

          <h1 className="text-balance text-4xl font-black leading-[1.25] tracking-tight text-slate-900 md:text-6xl dark:text-white">
            طوِّر مهاراتك،
            <br />
            <span className="bg-gradient-to-l from-blue-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              وشكّل مستقبلك المهني
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            ابدأ رحلتك التعليمية اليوم مع منصة عربية تجمع أفضل الدورات، خرائط الطريق العملية،
            والمشاريع التطبيقية — لتصل إلى طموحك بأسرع طريق.
          </p>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <SignupBtn />
            <Link
              href="/courses"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-lg font-bold text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-600 text-sm text-white transition group-hover:scale-110">
                <FaPlay className="mr-[-2px]" />
              </span>
              تصفح الدورات
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <span className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
              <FaCheckCircle className="text-green-500" /> شهادات إتمام
            </span>
            <span className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
              <FaCheckCircle className="text-green-500" /> مشاريع عملية
            </span>
            <span className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
              <FaCheckCircle className="text-green-500" /> مجتمع داعم
            </span>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-3 pr-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="flex -space-x-3 space-x-reverse">
              {AVATARS.map((a, i) => (
                <span
                  key={i}
                  className={`grid h-10 w-10 place-items-center rounded-full border-2 border-white text-sm font-black text-white dark:border-slate-900 ${
                    ['bg-blue-600', 'bg-violet-600', 'bg-cyan-500', 'bg-emerald-500'][i]
                  }`}
                >
                  {a}
                </span>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-xs" />
                ))}
                <b className="mr-1 text-slate-900 dark:text-white">4.9</b>
              </div>
              <p className="font-semibold text-slate-500 dark:text-slate-400">موثوقة من +45 ألف متعلم</p>
            </div>
          </div>
        </div>

        {/* visual */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-cyan-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-blue-900/15 dark:border-white/10 dark:bg-slate-900">
            <Image src="/hero1.png" alt="طالب يتعلم البرمجة" width={700} height={500} className="h-auto w-full object-cover" priority />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/50 bg-white/90 p-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/90">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 animate-float place-items-center rounded-xl bg-green-500 text-white">
                  <FaUsers />
                </span>
                <div>
                  <p className="text-sm font-black text-slate-900 dark:text-white">دورة React الكاملة</p>
                  <p className="text-xs font-semibold text-slate-500">72 درس • 12 ساعة</p>
                </div>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700 dark:bg-green-500/15 dark:text-green-300">
                الأكثر طلباً
              </span>
            </div>
          </div>

          <div className="absolute -right-3 top-8 animate-float rounded-2xl border border-slate-100 bg-white p-3 shadow-xl dark:border-white/10 dark:bg-slate-900">
            <p className="text-xs font-bold text-slate-500">نسبة الإتمام</p>
            <p className="text-xl font-black text-blue-700 dark:text-blue-300">92%</p>
            <div className="mt-2 h-2 w-28 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-l from-blue-700 to-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
