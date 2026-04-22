import { Geist, Geist_Mono } from "next/font/google";
import { Changa } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import { ToastContainer } from "react-toastify";

const changa = Changa({
  subsets: ["arabic"],
  weight: ["300", "400", "600", "700"],
});


export const metadata = {
  title: "كَوِِدْهَا",
  description: "منصة تعليمية شاملة لتعلم البرمجة وتطوير المهارات التقنية. نقدم دورات تدريبية عالية الجودة في مجالات تطوير الواجهة الأمامية، تطوير الواجهة الخلفية، تطوير التطبيقات، الذكاء الاصطناعي، علوم البيانات، وأمن المعلومات. انضم إلينا اليوم وابدأ رحلتك في عالم التكنولوجيا مع كَوِِدْهَا.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${changa.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
