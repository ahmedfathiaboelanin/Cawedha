import { MdInfo } from 'react-icons/md';
import { RiGraduationCapFill, RiMailFill, RiMapPinFill } from 'react-icons/ri';

export default function InfoSection() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
      <h2 className="flex items-center gap-2 text-lg font-extrabold text-slate-900 dark:text-white">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600/10 text-blue-700 dark:text-blue-300">
          <MdInfo />
        </span>
        المعلومات الشخصية
      </h2>
      <div className="mt-4 flex flex-col gap-3 text-[15px]">
        <p className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-3 font-bold text-slate-700 dark:bg-white/5 dark:text-slate-200">
          <RiMailFill className="shrink-0 text-lg text-blue-600" />
          <span className="truncate" dir="ltr">ahmedfathiaboelanin@gmail.com</span>
        </p>
        <p className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-3 font-bold text-slate-700 dark:bg-white/5 dark:text-slate-200">
          <RiGraduationCapFill className="shrink-0 text-lg text-blue-600" />
          مهندس برمجيات
        </p>
        <p className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-3 font-bold text-slate-700 dark:bg-white/5 dark:text-slate-200">
          <RiMapPinFill className="shrink-0 text-lg text-blue-600" />
          القاهرة، مصر
        </p>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        مطور برمجيات متخصص في بناء تطبيقات الويب الحديثة باستخدام React وNext.js. شغوف بتجربة المستخدم والتعلم المستمر وبناء مشاريع مفتوحة المصدر.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {['React', 'Next.js', 'Tailwind', 'Node.js'].map((s) => (
          <span key={s} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700 dark:bg-blue-500/10 dark:text-blue-300" dir="ltr">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
