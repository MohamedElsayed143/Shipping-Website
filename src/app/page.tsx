"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { Trust } from "@/components/Trust";
import { Footer } from "@/components/Footer";
import { LogOut, User as UserIcon, Loader2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // تأمين إضافي على مستوى الصفحة (Client-side Protection)
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [status, router]);

  // حالة التحميل أثناء التأكد من الجلسة
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-cyan-400 animate-spin" />
          <p className="text-slate-400 font-medium animate-pulse">
            Verifying Session...
          </p>
        </div>
      </div>
    );
  }

  // إذا لم يكن هناك جلسة، لا تعرض محتوى الداشبورد (سيقوم useEffect بالتوجيه)
  if (!session) return null;

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      {/* Navbar المعدل */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-black text-white tracking-tighter">
            SMA <span className="text-cyan-400">GROUP</span>
          </div>

          {/* روابط الداشبورد */}
          <div className="hidden md:flex gap-8 text-slate-300 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>

            <Link
              href="/dashboard/packages"
              className="hover:text-white transition-colors"
            >
              My Packages
            </Link>

            <Link href="/offers" className="hover:text-white transition-colors">
              Offers
            </Link>

            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
          </div>

          {/* معلومات المستخدم وزر تسجيل الخروج */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end mr-2">
              <span className="text-xs text-slate-400 uppercase tracking-widest">
                Welcome
              </span>
              <span className="text-sm font-bold text-white flex items-center gap-1">
                <UserIcon className="w-3 h-3 text-cyan-400" />
                {session.user?.name || "Member"}
              </span>
            </div>

            <button
              onClick={() => signOut({ callbackUrl: "/auth" })}
              className="flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-2 rounded-full font-bold hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg shadow-red-500/5"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* نمرر بيانات السيشن للـ Hero إذا كنت تريد عرض اسمه هناك */}
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Trust />
      </main>

      <Footer />
    </div>
  );
}
