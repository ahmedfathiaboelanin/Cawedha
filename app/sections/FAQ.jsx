import SectionHeading from '../components/SectionHeading';
import { FaChevronDown } from 'react-icons/fa';

const FAQS = [
  {
    q: 'هل الدورات مناسبة للمبتدئين تماماً؟',
    a: 'نعم، جميع المسارات تبدأ من الصفر ولا تفترض أي خبرة سابقة. ستجد دروس تأسيسية ثم تتدرج للمستويات المتقدمة مع مشاريع تطبيقية.',
  },
  {
    q: 'هل أحصل على شهادة بعد الإتمام؟',
    a: 'نعم، بعد إتمام كل مسار ومشاريعه تحصل على شهادة إتمام يمكنك مشاركتها على لينكدإن وإضافتها لسيرتك الذاتية.',
  },
  {
    q: 'هل يمكنني التعلم في أي وقت؟',
    a: 'بالتأكيد. الدروس مسجلة ومتاحة على مدار الساعة من الجوال أو الكمبيوتر، وتستطيع تتبع تقدمك والعودة من حيث توقفت.',
  },
  {
    q: 'ما هي خرائط الطريق؟',
    a: 'هي مسارات مرتبة خطوة بخطوة (فرونت إند، باك إند، فل ستاك، أمن سيبراني...) توضح لك ماذا تتعلم وبأي ترتيب مع موارد ومشاريع لكل مرحلة.',
  },
  {
    q: 'هل التسجيل مجاني؟',
    a: 'نعم، يمكنك إنشاء حساب مجاني وتصفح الدورات وخرائط الطريق والبدء في التعلم فوراً دون أي التزام.',
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:px-8" dir="rtl">
      <SectionHeading
        eyebrow="الأسئلة الشائعة"
        title="عندك سؤال؟ لدينا الإجابة"
        description="أكثر الأسئلة التي تصلنا من الطلاب الجدد."
      />
      <div className="mt-8 flex flex-col gap-3">
        {FAQS.map((f, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-slate-200 bg-white transition open:border-blue-300 open:shadow-lg open:shadow-blue-600/10 dark:border-white/10 dark:bg-white/[0.03] dark:open:border-blue-500/40"
            {...(i === 0 ? { open: true } : {})}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-extrabold text-slate-900 dark:text-white">
              {f.q}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700 transition group-open:rotate-180 dark:bg-blue-500/15 dark:text-blue-300">
                <FaChevronDown className="text-xs" />
              </span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-slate-600 dark:text-slate-400">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
