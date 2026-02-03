"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { Trust } from "@/components/Trust";
import { Footer } from "@/components/Footer";
import { Loader2 } from "lucide-react";

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
            Loading...
          </p>
        </div>
      </div>
    );
  }

  // إذا لم يكن هناك جلسة، لا تعرض محتوى الداشبورد (سيقوم useEffect بالتوجيه)
  if (!session) return null;

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Navbar />

      <main className="pt-20">
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
