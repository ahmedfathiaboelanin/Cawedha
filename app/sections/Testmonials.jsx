import Image from 'next/image';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';

const comments = [
  {
    user: 'أحمد فتحي',
    role: 'مطور واجهات أمامية',
    initial: 'أ',
    color: 'bg-blue-600',
    comment: 'لقد غيرت هذه المنصة مساري المهني بالكامل. المحتوى منظم جداً، وتمكنت من الحصول على وظيفة أحلامي بعد إنهاء مسار تطوير الويب.',
  },
  {
    user: 'محمد خليل',
    role: 'مطور باك إند',
    initial: 'م',
    color: 'bg-violet-600',
    comment: 'المنصة توفر تجربة تعليمية فريدة. جودة الشرح والمشاريع العملية تجعل التعلم ممتعاً وسهلاً. أنصح بها كل شخص يريد تطوير مهاراته بجدية.',
  },
  {
    user: 'سارة علي',
    role: 'مصممة UI/UX',
    initial: 'س',
    color: 'bg-emerald-500',
    comment: 'أفضل ما في المنصة هو المرونة. أستطيع التعلم في أي وقت ومن أي مكان، وخرائط الطريق ساعدتني أعرف بالضبط ما الذي يجب تعلمه.',
  },
];

export default function Testmonials() {
  return (
    <section className="bg-slate-50 py-16 md:py-20 dark:bg-white/[0.02]" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="قالوا عنا"
          title="قصص نجاح ملهمة من طلابنا"
          description="آلاف الخريجين بدأوا من الصفر واليوم يعملون في أفضل الشركات التقنية."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {comments.map((c) => (
            <figure
              key={c.user}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-blue-600 to-cyan-400 opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <FaQuoteRight className="text-3xl text-blue-100 transition group-hover:text-blue-300 dark:text-blue-500/20" />
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
              </div>
              <blockquote className="flex-1 leading-loose text-slate-600 dark:text-slate-300">
                &quot;{c.comment}&quot;
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/10">
                <span className={`grid h-12 w-12 place-items-center rounded-full text-lg font-black text-white ${c.color}`}>
                  {c.initial}
                </span>
                <div>
                  <p className="font-extrabold text-slate-900 dark:text-white">{c.user}</p>
                  <p className="text-sm font-semibold text-slate-500">{c.role}</p>
                </div>
                <Image src="/avatar.png" alt="" width={1} height={1} className="hidden" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
