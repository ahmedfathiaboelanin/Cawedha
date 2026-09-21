export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-start';
  return (
    <div className={`flex flex-col gap-3 ${alignCls} animate-fade-up`} dir="rtl">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl dark:text-white text-balance">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg dark:text-slate-400">
          {description}
        </p>
      )}
      <div className="mt-1 h-1 w-24 rounded-full bg-gradient-to-l from-blue-600 via-sky-400 to-transparent" />
    </div>
  );
}
