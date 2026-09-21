import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function SignupBtn({ compact = false }) {
  return (
    <Link
      href="/signup"
      className={`group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-blue-700 to-blue-500 font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30 ${
        compact ? 'px-5 py-2 text-sm' : 'w-full px-6 py-3.5 text-lg sm:w-auto'
      }`}
    >
      اشترك الآن مجاناً
      <FaArrowLeft className="text-sm transition group-hover:-translate-x-1" />
    </Link>
  );
}
