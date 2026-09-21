import Link from 'next/link';
import { FaRocket } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8" dir="rtl">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-l from-blue-900 via-blue-700 to-blue-600 px-6 py-14 text-center shadow-2xl shadow-blue-900/30 md:py-16">
        <div className="pointer-events-none absolute -top-24 right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold text-white backdrop-blur">
            <FaRocket /> ابدأ مجاناً اليوم
          </span>
          <h2 className="text-balance text-3xl font-black leading-snug text-white md:text-5xl">
            جاهز تبدأ رحلتك في عالم البرمجة؟
          </h2>
          <p className="text-lg leading-relaxed text-blue-100">
            انضم لآلاف الطلاب الذين غيروا مسارهم المهني مع كوّدها. أنشئ حسابك المجاني وابدأ أول درس خلال دقائق.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-xl bg-white px-8 py-3.5 text-lg font-black text-blue-800 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              أنشئ حساب مجاني
            </Link>
            <Link
              href="/roadmaps"
              className="rounded-xl border border-white/40 px-8 py-3.5 text-lg font-bold text-white transition hover:bg-white/10"
            >
              استكشف المسارات
            </Link>
          </div>
          <p className="text-sm font-semibold text-blue-200">لا حاجة لبطاقة ائتمان • إلغاء في أي وقت</p>
        </div>
      </div>
    </section>
  );
}
