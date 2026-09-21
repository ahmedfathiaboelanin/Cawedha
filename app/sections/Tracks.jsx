import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaClock, FaSignal } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import TRACKS from '../Static/Tracks.json';

const META = {
  Basics: { lessons: '24 درس', level: 'مبتدئ', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300' },
  Frontend: { lessons: '68 درس', level: 'متوسط', color: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300' },
  Backend: { lessons: '54 درس', level: 'متوسط', color: 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300' },
  Fullstack: { lessons: '96 درس', level: 'متقدم', color: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300' },
};

export default function Tracks() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/60 py-16 md:py-20 dark:from-slate-950 dark:to-slate-950" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="المسارات التعليمية"
          title="اختر مسارك وابدأ رحلتك التعليمية"
          description="مسارات مصممة بعناية تأخذك من الصفر حتى الجاهزية لسوق العمل مع مشاريع وتقييمات مستمرة."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {TRACKS.map((category) => {
            const meta = META[category.badge] || META.Basics;
            return (
              <article
                key={category.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/15 dark:border-white/10 dark:bg-slate-900"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.img}
                    alt={category.title}
                    width={400}
                    height={250}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-black ${meta.color}`}>
                    {meta.level}
                  </span>
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    <FaClock /> {meta.lessons}
                  </span>
                </div>

                <div className="flex flex-col gap-3 p-5">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{category.title}</h3>
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    <FaSignal className="text-blue-500" />
                    مسار متكامل + مشاريع + شهادة
                  </p>
                  <Link
                    href={`/courses?track=${category.badge}`}
                    className="mt-1 inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2.5 font-bold text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-300 dark:group-hover:bg-blue-600 dark:group-hover:text-white"
                  >
                    ابدأ الرحلة
                    <FaArrowLeft className="text-sm transition group-hover:-translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/courses"
            className="rounded-xl border border-blue-200 px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-600 hover:text-white dark:border-blue-500/30 dark:text-blue-300"
          >
            عرض كل الدورات
          </Link>
          <Link href="/roadmaps" className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900">
            استكشف خرائط الطريق
          </Link>
        </div>
      </div>
    </section>
  );
}
