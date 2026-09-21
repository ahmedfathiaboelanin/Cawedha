import { FaAward, FaLaptopCode, FaRoad, FaUsers } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';

const FEATURES = [
  {
    icon: FaLaptopCode,
    color: 'from-blue-600 to-cyan-400',
    title: 'تعلم عملي بالمشاريع',
    desc: 'كل دورة تنتهي بمشروع حقيقي تضيفه لمعرض أعمالك وتستعرضه أمام أصحاب العمل.',
  },
  {
    icon: FaRoad,
    color: 'from-violet-600 to-fuchsia-400',
    title: 'خرائط طريق واضحة',
    desc: 'مسارات مرتبة من الصفر للاحتراف: أساسيات، فرونت إند، باك إند، وفل ستاك.',
  },
  {
    icon: FaAward,
    color: 'from-amber-500 to-orange-400',
    title: 'شهادات معتمدة',
    desc: 'احصل على شهادة إتمام لكل مسار وشاركها على لينكدإن لتعزيز فرصك.',
  },
  {
    icon: FaUsers,
    color: 'from-emerald-500 to-teal-400',
    title: 'مجتمع ودعم عربي',
    desc: 'اسأل، ناقش، وتعلم مع آلاف الطلاب ومرشدين جاهزين لمساعدتك.',
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20" dir="rtl">
      <SectionHeading
        eyebrow="لماذا كوّدها؟"
        title="كل ما تحتاجه لتصبح مطوراً محترفاً"
        description="منظومة تعليمية متكاملة باللغة العربية تجمع بين الشرح المبسط والتطبيق العملي والمتابعة المستمرة."
      />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/10 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-l ${f.color}`} />
            <span className={`inline-grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br p-3.5 text-xl text-white shadow-lg ${f.color}`}>
              <f.icon />
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-slate-900 dark:text-white">{f.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
