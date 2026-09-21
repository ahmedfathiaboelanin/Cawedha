import Image from 'next/image';

const LOGOS = [
  { src: '/trust-1.png', alt: 'شريك 1' },
  { src: '/trust-2.png', alt: 'شريك 2' },
  { src: '/trust-3.png', alt: 'شريك 3' },
  { src: '/trust-4.png', alt: 'شريك 4' },
  { src: '/trust-5.png', alt: 'شريك 5' },
];

export default function Trust() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/80 py-10 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 md:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
          موثوقة من أكثر من 45 ألف متعلم وشركات تقنية
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {LOGOS.map((l) => (
            <div
              key={l.src}
              className="group flex h-16 w-40 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <Image
                src={l.src}
                width={130}
                height={40}
                alt={l.alt}
                className="max-h-10 w-auto object-contain opacity-60 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
