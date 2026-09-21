import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaStar, FaClock } from 'react-icons/fa';

const TRACK_COLORS = {
  Basics: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  Frontend: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300',
  Backend: 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300',
  Fullstack: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
};

export default function CourseCard({ title: name, description, track, img, id }) {
  const badgeCls = TRACK_COLORS[track] || TRACK_COLORS.Basics;
  // pseudo-stable rating/duration from id for visual richness
  const seed = String(id).charCodeAt(0) + String(id).length;
  const rating = (4.4 + ((seed % 6) / 10)).toFixed(1);
  const lessons = 12 + (seed % 40);

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/10 dark:border-white/10 dark:bg-slate-900">
      <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-white/5">
        <Image
          src={img}
          alt={name}
          width={400}
          height={220}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
        <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-black ${badgeCls}`}>
          {track}
        </span>
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          <FaClock /> {lessons} درس
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">{name}</h2>
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-black text-amber-600 dark:bg-amber-500/10">
            <FaStar className="text-[11px]" /> {rating}
          </span>
        </div>
        <p className="clamp-2 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">{description}</p>
        <Link
          href={`/courses/${id}`}
          className="mt-auto inline-flex items-center gap-2 rounded-xl bg-blue-600/5 px-4 py-2.5 font-bold text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-300"
        >
          <FaArrowLeft className="text-sm transition group-hover:-translate-x-1" />
          ابدأ الآن
        </Link>
      </div>
    </article>
  );
}
