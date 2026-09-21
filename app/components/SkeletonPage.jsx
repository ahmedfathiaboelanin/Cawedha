// skeleton page component to show while loading data
export default function SkeletonPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950" dir="rtl">
      <main className="mx-auto max-w-7xl animate-pulse px-4 py-8 md:px-8">
        <div className="h-10 w-64 rounded-xl bg-slate-200 dark:bg-white/10" />
        <div className="mt-3 h-5 w-96 max-w-full rounded bg-slate-100 dark:bg-white/5" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
              <div className="h-48 bg-slate-200 dark:bg-white/10" />
              <div className="flex flex-col gap-3 p-5">
                <div className="h-5 w-2/3 rounded bg-slate-200 dark:bg-white/10" />
                <div className="h-4 w-full rounded bg-slate-100 dark:bg-white/5" />
                <div className="h-10 rounded-xl bg-slate-100 dark:bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
