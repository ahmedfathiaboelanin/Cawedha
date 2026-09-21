import { Suspense } from 'react';
import CoursesClient from './CoursesClient';

export const metadata = {
  title: 'الدورات التدريبية | كوّدها',
  description: 'تصفح جميع الدورات التدريبية في البرمجة: أساسيات، فرونت إند، باك إند وفل ستاك.',
};

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-slate-950" />}>
      <CoursesClient />
    </Suspense>
  );
}
