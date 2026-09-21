'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Dorpdown({ title, options }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
      >
        {title}
        <FaChevronDown className={`text-xs transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <>
          <button aria-label="إغلاق" className="fixed inset-0 z-10 cursor-default" onClick={() => setOpen(false)} />
          <ul className="absolute z-20 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-white/10 dark:bg-slate-900">
            {options.map((option, index) => (
              <li key={index}>
                <a
                  href={option.link}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-blue-500/10"
                >
                  {option.text}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
