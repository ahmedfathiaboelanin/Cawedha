'use client';
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useMemo, useState } from 'react';
import {
  FaServer,
  FaLayerGroup,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaDatabase,
  FaCode,
  FaPalette,
  FaHeadset,
  FaSearch,
  FaCheck,
  FaRedo,
} from 'react-icons/fa';

const ROADMAPS = [
  {
    id: 'backend',
    icon: FaServer,
    color: 'from-emerald-500 to-teal-400',
    title: 'مسار مطور الباك إند',
    en: 'Backend Developer',
    level: 'متوسط',
    duration: '6 أشهر',
    steps: [
      { title: 'لغة الخادم', desc: 'أتقن PHP أو Python أو Node.js أو Java مع فهم HTTP وبناء APIs قوية.' },
      { title: 'قواعد البيانات', desc: 'تعلم MySQL وPostgreSQL وMongoDB: العلاقات، الفهارس، وتحسين الاستعلامات.' },
      { title: 'بناء APIs', desc: 'صمم REST وGraphQL مع التوثيق والإصدارات وأفضل الممارسات.' },
      { title: 'الحماية', desc: 'طبق JWT وOAuth2 والتشفير واحمِ تطبيقك من SQL Injection وXSS.' },
      { title: 'المستوى المتقدم', desc: 'الكاش مع Redis، الاختبارات، تحسين الأداء، واستراتيجيات النشر.' },
    ],
  },
  {
    id: 'fullstack',
    icon: FaLayerGroup,
    color: 'from-blue-600 to-cyan-400',
    title: 'مسار مطور فل ستاك',
    en: 'Full-Stack Developer',
    level: 'متقدم',
    duration: '9 أشهر',
    steps: [
      { title: 'أساسيات الويب', desc: 'أتقن HTML5 وCSS3 وJavaScript الحديث والتصميم المتجاوب.' },
      { title: 'أطر الواجهات', desc: 'تعلم React أو Vue مع إدارة الحالة والمكونات والـ Hooks.' },
      { title: 'الباك إند', desc: 'ابنِ تطبيقات كاملة مع المصادقة باستخدام Node أو Laravel أو Django.' },
      { title: 'البيانات', desc: 'تعامل مع SQL/NoSQL عبر Prisma وMongoose مع الهجرات والبذور.' },
      { title: 'النشر', desc: 'Docker وCI/CD والنشر على Vercel والسحابة وتحسين الإنتاج.' },
    ],
  },
  {
    id: 'mobile',
    icon: FaMobileAlt,
    color: 'from-violet-600 to-fuchsia-400',
    title: 'مسار مطور تطبيقات',
    en: 'Mobile Developer',
    level: 'متوسط',
    duration: '7 أشهر',
    steps: [
      { title: 'لغة البرمجة', desc: 'اختر Kotlin أو Swift أو Dart حسب المنصة المستهدفة.' },
      { title: 'إطار الواجهات', desc: 'تعلم Jetpack Compose أو SwiftUI أو Flutter لبناء واجهات جميلة.' },
      { title: 'الشبكات وAPIs', desc: 'استهلك APIs وتعلم التعامل مع الحالات غير المتصلة.' },
      { title: 'قواعد محلية', desc: 'خزن البيانات محلياً مع Room أو CoreData أو Hive.' },
      { title: 'النشر', desc: 'جهز تطبيقك وانشره على Play Store وApp Store.' },
    ],
  },
  {
    id: 'devops',
    icon: FaCloud,
    color: 'from-orange-500 to-amber-400',
    title: 'مسار مهندس DevOps',
    en: 'DevOps Engineer',
    level: 'متقدم',
    duration: '8 أشهر',
    steps: [
      { title: 'لينكس والشبكات', desc: 'أساسيات النظام والشبكات وإدارة الخوادم.' },
      { title: 'Git', desc: 'إدارة النسخ والتعاون الاحترافي عبر GitHub.' },
      { title: 'CI/CD', desc: 'ابنِ خطوط النشر الآلي مع GitHub Actions وJenkins.' },
      { title: 'الحاويات', desc: 'احترف Docker وKubernetes لإدارة الخدمات.' },
      { title: 'السحابة', desc: 'تعلم AWS أو Azure أو GCP والنشر الإنتاجي.' },
    ],
  },
  {
    id: 'security',
    icon: FaShieldAlt,
    color: 'from-red-500 to-rose-400',
    title: 'مسار الأمن السيبراني',
    en: 'Cybersecurity',
    level: 'متقدم',
    duration: '8 أشهر',
    steps: [
      { title: 'الشبكات ولينكس', desc: 'افهم البروتوكولات والأنظمة قبل التعمق في الحماية.' },
      { title: 'أدوات الفحص', desc: 'احترف Nmap وBurp Suite وتحليل الثغرات.' },
      { title: 'ثغرات الويب', desc: 'ادرس OWASP Top 10 وكيفية استغلالها والحماية منها.' },
      { title: 'الاختراق الأخلاقي', desc: 'منهجيات اختبار الاختراق وكتابة التقارير.' },
      { title: 'الشهادات', desc: 'استعد لشهادات Security+ وCEH لتعزيز مسارك.' },
    ],
  },
  {
    id: 'dba',
    icon: FaDatabase,
    color: 'from-sky-600 to-blue-400',
    title: 'مسار مدير قواعد البيانات',
    en: 'Database Administrator',
    level: 'متوسط',
    duration: '6 أشهر',
    steps: [
      { title: 'أساسيات SQL', desc: 'الاستعلامات والعلاقات ومخططات ERD.' },
      { title: 'أنظمة RDBMS', desc: 'تعامل مع MySQL وPostgreSQL وOracle.' },
      { title: 'الحماية والفهرسة', desc: 'الصلاحيات والتشفير وتحسين الأداء بالفهارس.' },
      { title: 'النسخ والتوافر', desc: 'استراتيجيات النسخ الاحتياطي والتكرار والتوافر العالي.' },
      { title: 'المراقبة', desc: 'راقب الأداء وحسّن الاستعلامات باستمرار.' },
    ],
  },
  {
    id: 'software',
    icon: FaCode,
    color: 'from-slate-700 to-slate-500',
    title: 'مسار مهندس البرمجيات',
    en: 'Software Engineer',
    level: 'متقدم',
    duration: '12 شهر',
    steps: [
      { title: 'الخوارزميات', desc: 'أتقن هياكل البيانات والخوارزميات وحل المشكلات.' },
      { title: 'OOP', desc: 'البرمجة كائنية التوجه ومبادئ SOLID.' },
      { title: 'تصميم الأنظمة', desc: 'أساسيات System Design للأنظمة القابلة للتوسع.' },
      { title: 'الكود النظيف', desc: 'أنماط التصميم وكتابة كود قابل للصيانة.' },
      { title: 'الأنظمة الموزعة', desc: 'السحابة والخدمات المصغرة وقواعد البيانات الموزعة.' },
    ],
  },
  {
    id: 'uiux',
    icon: FaPalette,
    color: 'from-pink-500 to-rose-400',
    title: 'مسار مصمم UI/UX',
    en: 'UI / UX Designer',
    level: 'مبتدئ',
    duration: '5 أشهر',
    steps: [
      { title: 'أساسيات التصميم', desc: 'الألوان والخطوط والتخطيط والتسلسل البصري.' },
      { title: 'النماذج الأولية', desc: 'ارسم Wireframes باستخدام Figma وAdobe XD.' },
      { title: 'تصميم الواجهات', desc: 'ابنِ أنظمة المكونات والشاشات الاحترافية.' },
      { title: 'أبحاث المستخدم', desc: 'افهم المستخدم وارسم رحلات الاستخدام.' },
      { title: 'الاختبار', desc: 'اختبر النماذج وحسّنها بناءً على الملاحظات.' },
    ],
  },
  {
    id: 'helpdesk',
    icon: FaHeadset,
    color: 'from-teal-500 to-emerald-400',
    title: 'مسار الدعم الفني',
    en: 'IT Help Desk',
    level: 'مبتدئ',
    duration: '4 أشهر',
    steps: [
      { title: 'العتاد والأنظمة', desc: 'أساسيات الحاسب وأنظمة التشغيل.' },
      { title: 'الشبكات', desc: 'المفاهيم الأساسية للشبكات وحل مشكلاتها.' },
      { title: 'التشخيص', desc: 'منهجيات اكتشاف الأعطال وحلها بسرعة.' },
      { title: 'أنظمة التذاكر', desc: 'تعامل مع Jira وServiceNow باحترافية.' },
      { title: 'المهارات الناعمة', desc: 'التواصل الفعال وإدارة توقعات العملاء.' },
    ],
  },
];

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('roadmap-progress') || '{}');
  } catch {
    return {};
  }
}

export default function RoadmapsPage() {
  const [active, setActive] = useState(ROADMAPS[0].id);
  const [query, setQuery] = useState('');
  const [done, setDone] = useState({});
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setDone(loadProgress());
  }, []);

  useEffect(() => {
    localStorage.setItem('roadmap-progress', JSON.stringify(done));
  }, [done]);

  const roadmap = ROADMAPS.find((r) => r.id === active);
  const completedCount = roadmap.steps.filter((_, i) => done[`${roadmap.id}-${i}`]).length;
  const pct = Math.round((completedCount / roadmap.steps.length) * 100);

  const filteredRoadmaps = useMemo(() => {
    if (!query.trim()) return ROADMAPS;
    return ROADMAPS.filter((r) => r.title.includes(query) || r.en.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const toggleStep = (idx) => {
    const key = `${roadmap.id}-${idx}`;
    setDone((d) => ({ ...d, [key]: !d[key] }));
  };

  const resetRoadmap = () => {
    setDone((d) => {
      const next = { ...d };
      roadmap.steps.forEach((_, i) => delete next[`${roadmap.id}-${i}`]);
      return next;
    });
  };

  const list = showAll ? filteredRoadmaps : filteredRoadmaps.slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950" dir="rtl">
      <div className="relative overflow-hidden bg-gradient-to-l from-violet-900 via-blue-800 to-blue-600 pb-10 pt-12">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <span className="rounded-full bg-white/15 px-4 py-1 text-sm font-bold text-white backdrop-blur">
            {ROADMAPS.length} مسارات مهنية
          </span>
          <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">خرائط الطريق المهنية</h1>
          <p className="mt-3 max-w-2xl text-lg text-blue-100">
            اختر مسارك، تتبع تقدمك خطوة بخطوة، واحتفل بإنجاز كل مرحلة — تقدمك يُحفظ تلقائياً في متصفحك.
          </p>
          <div className="relative mt-6 max-w-md">
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث عن مسار: باك إند، موبايل..."
              className="w-full rounded-2xl bg-white py-3 pl-4 pr-11 text-sm font-bold text-slate-800 shadow-xl outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* selector grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((r) => {
            const isActive = r.id === active;
            const c = ROADMAPS.find((x) => x.id === r.id);
            const total = c.steps.length;
            const doneCount = c.steps.filter((_, i) => done[`${r.id}-${i}`]).length;
            return (
              <button
                key={r.id}
                onClick={() => setActive(r.id)}
                className={`group flex flex-col gap-2 rounded-2xl border p-4 text-right transition ${
                  isActive
                    ? 'border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-600/25'
                    : 'border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/40'
                }`}
              >
                <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br text-white ${r.color}`}>
                  <r.icon />
                </span>
                <span className={`text-[15px] font-extrabold ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {r.title}
                </span>
                <span className={`text-xs font-bold ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                  {doneCount}/{total} مكتمل
                </span>
                <span className={`h-1.5 overflow-hidden rounded-full ${isActive ? 'bg-white/25' : 'bg-slate-100 dark:bg-white/10'}`}>
                  <span
                    className={`block h-full rounded-full ${isActive ? 'bg-white' : `bg-gradient-to-l ${r.color}`}`}
                    style={{ width: `${Math.round((doneCount / total) * 100)}%` }}
                  />
                </span>
              </button>
            );
          })}
        </div>

        {filteredRoadmaps.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mx-auto mt-4 block rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-bold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            {showAll ? 'عرض أقل' : `عرض كل المسارات (${filteredRoadmaps.length})`}
          </button>
        )}

        {/* active roadmap detail */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900">
          <div className={`bg-gradient-to-l ${roadmap.color} p-6 md:p-8`}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 text-2xl text-white backdrop-blur">
                  <roadmap.icon />
                </span>
                <div>
                  <h2 className="text-2xl font-black text-white md:text-3xl">{roadmap.title}</h2>
                  <p className="font-bold text-white/80">{roadmap.en}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-black text-white backdrop-blur">
                  {roadmap.level}
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-black text-white backdrop-blur">
                  {roadmap.duration}
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/25">
                <div className="h-full rounded-full bg-white transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
              <b className="text-white">{pct}%</b>
              <button
                onClick={resetRoadmap}
                className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold text-white backdrop-blur transition hover:bg-white/30"
              >
                <FaRedo /> إعادة
              </button>
            </div>
          </div>

          <ol className="relative space-y-0 p-6 md:p-8">
            <span className="absolute bottom-8 right-[43px] top-8 w-0.5 bg-gradient-to-b from-blue-300 via-blue-100 to-transparent md:right-[51px] dark:from-blue-500/40 dark:via-blue-500/10" />
            {roadmap.steps.map((step, i) => {
              const isDone = done[`${roadmap.id}-${i}`];
              const isLast = i === roadmap.steps.length - 1;
              return (
                <li key={i} className="relative flex gap-4 pb-6 last:pb-0 md:gap-5">
                  <button
                    onClick={() => toggleStep(i)}
                    title={isDone ? 'وضع كغير مكتمل' : 'تحديد كمكتمل'}
                    className={`relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 font-black transition md:h-11 md:w-11 ${
                      isDone
                        ? 'border-green-500 bg-green-500 text-white shadow-lg shadow-green-500/30'
                        : 'border-blue-200 bg-white text-blue-700 hover:border-blue-500 hover:scale-110 dark:border-blue-500/30 dark:bg-slate-800 dark:text-blue-300'
                    }`}
                  >
                    {isDone ? <FaCheck className="text-sm" /> : i + 1}
                  </button>
                  <div
                    className={`flex-1 rounded-2xl border p-4 transition md:p-5 ${
                      isDone
                        ? 'border-green-200 bg-green-50/60 dark:border-green-500/20 dark:bg-green-500/5'
                        : 'border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-blue-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className={`font-extrabold ${isDone ? 'text-green-800 line-through dark:text-green-300' : 'text-slate-900 dark:text-white'}`}>
                        المرحلة {i + 1}: {step.title}
                      </h3>
                      {!isLast && (
                        <span className="hidden rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-black text-blue-700 sm:block dark:bg-blue-500/10 dark:text-blue-300">
                          الخطوة التالية ↓
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 leading-relaxed text-slate-600 dark:text-slate-400">{step.desc}</p>
                    <button
                      onClick={() => toggleStep(i)}
                      className={`mt-3 rounded-xl px-4 py-1.5 text-sm font-bold transition ${
                        isDone
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-blue-600/5 text-blue-700 hover:bg-blue-600 hover:text-white dark:bg-blue-500/10 dark:text-blue-300'
                      }`}
                    >
                      {isDone ? 'تم الإنجاز ✓ — تراجع' : 'تحديد كمُنجز'}
                    </button>
                  </div>
                </li>
              );
            })}
          </ol>

          {pct === 100 && (
            <div className="mx-6 mb-6 rounded-2xl bg-gradient-to-l from-green-600 to-emerald-500 p-5 text-center font-extrabold text-white md:mx-8">
              🎉 رائع! أكملت مسار {roadmap.title} — شارك إنجازك وواصل لمسار جديد
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
