import { FaBook, FaCheckCircle, FaGraduationCap, FaUsers } from 'react-icons/fa';

const POINTS = [
  { icon: FaGraduationCap, text: '+120 دورة عربية من الصفر للاحتراف' },
  { icon: FaUsers, text: 'مجتمع نشط ومرشدون يجيبون على أسئلتك' },
  { icon: FaCheckCircle, text: 'شهادات إتمام ومشاريع لمعرض أعمالك' },
];

export default function TextSection() {
  return (
    <div className="relative col-span-2 hidden flex-col justify-center gap-5 overflow-hidden rounded-3xl bg-gradient-to-bl from-blue-900 via-blue-700 to-blue-600 p-8 text-white md:flex lg:p-10">
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="relative">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-bold backdrop-blur">
          <FaBook /> بوابة المعرفة
        </p>
        <h1 className="mt-4 text-4xl font-black leading-snug">
          استأنف رحلتك
          <br />
          في صرح الفكر
        </h1>
        <p className="mt-3 max-w-md leading-relaxed text-blue-100">
          اكتشف عوالم جديدة من المعرفة، حيث يلتقي الفكر بالابتكار. انضم لرحلة استكشاف لا تنتهي نحو مستقبل مشرق.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {POINTS.map((p) => (
            <span key={p.text} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 font-bold backdrop-blur transition hover:bg-white/15">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/20">
                <p.icon />
              </span>
              {p.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
