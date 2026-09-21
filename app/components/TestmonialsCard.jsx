import { FaQuoteRight, FaStar } from 'react-icons/fa';

export default function TestmonialsCard({ comment, user, role = 'طالب في المنصة', initial, color = 'bg-blue-600' }) {
  return (
    <div className="flex w-80 max-w-full flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <FaQuoteRight className="text-2xl text-blue-100 dark:text-blue-500/25" />
        <div className="flex gap-1 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className="text-sm" />
          ))}
        </div>
      </div>
      <p className="flex-1 leading-relaxed text-slate-600 dark:text-slate-300">&quot;{comment}&quot;</p>
      <div className="flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-white/10">
        <span className={`grid h-11 w-11 place-items-center rounded-full text-base font-black text-white ${color}`}>
          {initial || (user || 'ك').trim().charAt(0)}
        </span>
        <div>
          <h2 className="font-extrabold text-slate-900 dark:text-white">{user}</h2>
          <p className="text-xs font-semibold text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
