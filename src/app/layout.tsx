import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

// إعداد الخطوط الأساسية
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// استخدام بيانات FleetSync لأنها الأكثر احترافية
export const metadata: Metadata = {
  title: "FleetSync - Intelligent Shipping Platform",
  description: "Track, manage, and optimize your deliveries in real-time with FleetSync",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* الـ children هنا هيعرض صفحات الـ Landing Page وصفحات الـ Auth اللي دمجناها */}
        {children}
        
        {/* أداة الـ Visual Edits لو محتاجها في المشروع المدمج */}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}