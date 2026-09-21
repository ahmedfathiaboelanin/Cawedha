import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';

export default function Card({ title, imageUrl, badge }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/10 dark:border-white/10 dark:bg-slate-900">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={imageUrl}
          width={350}
          height={220}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 transition group-hover:opacity-100" />
        {badge && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-blue-700 backdrop-blur">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col items-start gap-2 p-5">
        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{title}</h3>
        <Link
          href="/courses"
          className="mt-auto inline-flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2 text-[15px] font-bold text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-300"
        >
          ابدأ الرحلة
          <FaLongArrowAltLeft className="transition group-hover:-translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
