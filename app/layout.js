import { Changa } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import BackToTop from "./components/BackToTop";
import { ToastContainer } from "react-toastify";

const changa = Changa({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "كَوِّدها | منصة تعلم البرمجة بالعربية",
  description:
    "منصة تعليمية شاملة لتعلم البرمجة وتطوير المهارات التقنية. نقدم دورات تدريبية عالية الجودة في مجالات تطوير الواجهة الأمامية، تطوير الواجهة الخلفية، تطوير التطبيقات، الذكاء الاصطناعي، علوم البيانات، وأمن المعلومات.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${changa.className} bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100`}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
        <BackToTop />
        <ToastContainer position="bottom-left" theme="colored" autoClose={3000} rtl />
      </body>
    </html>
  );
}
