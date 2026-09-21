'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import { useAuthStore } from '../store/useAuthStore';
import SignupBtn from './SignupBtn';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  { href: '/', label: 'الرئيسية' },
  { href: '/courses', label: 'الدورات' },
  { href: '/roadmaps', label: 'خرائط الطريق' },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { logout, token } = useAuthStore();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
    router.push('/login');
  };

  const submitSearch = (e) => {
    e.preventDefault();
    setOpen(false);
    router.push(query.trim() ? `/courses?q=${encodeURIComponent(query.trim())}` : '/courses');
  };

  const isActive = (href) => pathname === href;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85'
          : 'border-b border-transparent bg-white dark:bg-slate-950'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        {/* logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-2xl font-black text-white shadow-lg shadow-blue-600/30 transition group-hover:rotate-6">
            ك
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              كَوِّد<span className="text-blue-600">ها</span>
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">تعلّم البرمجة بالعربية</span>
          </span>
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1.5 lg:flex dark:border-white/10 dark:bg-white/5">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-5 py-2 text-[15px] font-semibold transition ${
                isActive(l.href)
                  ? 'bg-white text-blue-700 shadow dark:bg-blue-600 dark:text-white'
                  : 'text-slate-600 hover:bg-white hover:text-blue-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* search desktop */}
        <form onSubmit={submitSearch} className="hidden w-full max-w-xs items-center xl:flex">
          <div className="group relative w-full">
            <FaSearch className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 group-focus-within:text-blue-600" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="ماذا تريد أن تتعلم؟"
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-4 pr-10 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10"
            />
          </div>
        </form>

        {/* actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {token ? (
            <div className="hidden items-center gap-2 lg:flex">
              <Link
                href="/profile"
                className="rounded-xl px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-blue-500/10"
              >
                الملف الشخصي
              </Link>
              <button
                onClick={handleLogout}
                className="cursor-pointer rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-600 hover:text-white dark:border-red-500/30 dark:bg-red-500/10"
              >
                تسجيل الخروج
              </button>
            </div>
          ) : (
            <div className="hidden items-center gap-2 lg:flex">
              <Link
                href="/login"
                className="rounded-xl px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              >
                تسجيل الدخول
              </Link>
              <SignupBtn compact />
            </div>
          )}
          <button
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 lg:hidden dark:border-white/10 dark:text-slate-200"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="animate-fade-up border-t border-slate-100 bg-white px-4 pb-6 pt-4 lg:hidden dark:border-white/10 dark:bg-slate-950">
          <form onSubmit={submitSearch} className="mb-3 flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث عن دورة..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
            <button className="rounded-xl bg-blue-600 px-4 text-white">
              <FaSearch />
            </button>
          </form>
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 font-bold transition ${
                  isActive(l.href)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-50 text-slate-700 dark:bg-white/5 dark:text-slate-200'
                }`}
              >
                {l.label}
              </Link>
            ))}
            {token ? (
              <>
                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-blue-50 px-4 py-3 font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                >
                  الملف الشخصي
                </Link>
                <button
                  onClick={handleLogout}
                  className="rounded-xl bg-red-50 px-4 py-3 text-right font-bold text-red-600 dark:bg-red-500/10"
                >
                  تسجيل الخروج
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-slate-100 px-4 py-3 text-center font-bold dark:bg-white/10 dark:text-white"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white"
                >
                  اشترك مجاناً
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
