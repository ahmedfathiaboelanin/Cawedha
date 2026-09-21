'use client';
import { useEffect, useState } from 'react';

const STATS = [
  { value: 45000, suffix: '+', label: 'طالب نشط' },
  { value: 120, suffix: '+', label: 'دورة تدريبية' },
  { value: 9, suffix: '', label: 'مسارات مهنية' },
  { value: 98, suffix: '%', label: 'نسبة الرضا' },
];

function useCountUp(target, start) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1400, 1);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return val;
}

function Stat({ value, suffix, label, start }) {
  const v = useCountUp(value, start);
  return (
    <div className="flex flex-col items-center gap-1 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:bg-white/15">
      <span className="text-4xl font-black text-white md:text-5xl">
        {v.toLocaleString('en-US')}
        {suffix}
      </span>
      <span className="font-bold text-blue-100">{label}</span>
    </div>
  );
}

export default function Stats() {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('stats-section');
      if (el && el.getBoundingClientRect().top < window.innerHeight) setStart(true);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="stats-section" className="relative overflow-hidden bg-gradient-to-l from-blue-800 via-blue-700 to-blue-600 py-14" dir="rtl">
      <div className="pointer-events-none absolute -top-20 left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 md:px-8 lg:grid-cols-4">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} start={start} />
        ))}
      </div>
    </section>
  );
}
