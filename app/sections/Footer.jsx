'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaPaperPlane } from 'react-icons/fa';

const COURSE_LINKS = ['تطوير الواجهة الأمامية', 'تطوير الواجهة الخلفية', 'تطوير التطبيقات', 'خرائط الطريق'];
const POLICY_LINKS = ['سياسة الخصوصية', 'شروط الاستخدام', 'اتصل بنا', 'الأسئلة الشائعة'];

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        {/* brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-2xl font-black text-white">
              ك
            </span>
            <span className="text-2xl font-extrabold text-white">
              كَوِّد<span className="text-blue-400">ها</span>
            </span>
          </Link>
          <p className="leading-relaxed text-slate-400">
            منصة عربية لتعلم البرمجة من الصفر للاحتراف عبر دورات عملية وخرائط طريق واضحة ومجتمع داعم.
          </p>
          <div className="flex gap-2">
            {[FaTwitter, FaGithub, FaLinkedin, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* courses */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-extrabold text-white">الدورات التدريبية</h3>
          {COURSE_LINKS.map((c) => (
            <Link key={c} href="/courses" className="w-fit text-slate-400 transition hover:translate-x-[-4px] hover:text-white">
              {c}
            </Link>
          ))}
        </div>

        {/* policy */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-extrabold text-white">روابط سريعة</h3>
          {POLICY_LINKS.map((c) => (
            <Link key={c} href="#" className="w-fit text-slate-400 transition hover:translate-x-[-4px] hover:text-white">
              {c}
            </Link>
          ))}
          <Link href="/roadmaps" className="w-fit font-bold text-blue-400 hover:text-blue-300">
            خرائط الطريق المهنية
          </Link>
        </div>

        {/* newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-extrabold text-white">اشترك في النشرة البريدية</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            نصائح برمجية وفرص تدريب ودورات جديدة — مرة واحدة أسبوعياً.
          </p>
          <form
            className="flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="بريدك الإلكتروني"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
            />
            <button className="grid h-11 w-12 shrink-0 place-items-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-500">
              <FaPaperPlane />
            </button>
          </form>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-400">
            تواصل: <span className="font-bold text-slate-200">ahmedfathiaboelanin@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-slate-500 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} كوّدها — جميع الحقوق محفوظة</p>
          <p>
            صُنع بشغف لتعليم البرمجة <span className="text-blue-400">بالعربية</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
