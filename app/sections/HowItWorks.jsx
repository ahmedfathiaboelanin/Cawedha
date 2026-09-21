import { FaSearch, FaLaptopCode, FaBriefcase } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';

const STEPS = [
  {
    n: '01',
    icon: FaSearch,
    title: 'اختر مسارك',
    desc: 'تصفح الدورات وخرائط الطريق واختر ما يناسب هدفك ومستواك الحالي.',
  },
  {
    n: '02',
    icon: FaLaptopCode,
    title: 'تعلم وطبّق',
    desc: 'شاهد الدروس، نفّذ المشاريع، وتابع تقدمك خطوة بخطوة حتى الإتقان.',
  },
  {
    n: '03',
    icon: FaBriefcase,
    title: 'احصل على وظيفة',
    desc: 'ابنِ معرض أعمالك، احصل على شهادتك، واستعد لمقابلات العمل.',
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8" dir="rtl">
      <SectionHeading
        eyebrow="كيف تبدأ؟"
        title="رحلتك نحو الاحتراف في 3 خطوات"
        description="صممنا تجربة تعلم بسيطة وواضحة تناسب المبتدئين والمحترفين على حد سواء."
      />
      <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="absolute right-[16%] left-[16%] top-10 hidden h-0.5 bg-gradient-to-l from-blue-200 via-blue-400 to-blue-200 md:block" />
        {STEPS.map((s) => (
          <div key={s.n} className="relative flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03]">
            <span className="relative z-10 grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 text-3xl text-white shadow-lg shadow-blue-600/30">
              <s.icon />
              <span className="absolute -left-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-slate-900 text-xs font-black text-white dark:bg-white dark:text-slate-900">
                {s.n}
              </span>
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{s.title}</h3>
            <p className="leading-relaxed text-slate-500 dark:text-slate-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
