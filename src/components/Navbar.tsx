"use client";

import { useSession, signOut } from "next-auth/react";
import { LogOut, User as UserIcon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-black text-white tracking-tighter cursor-pointer">
          SMA <span className="text-cyan-400">GROUP</span>
        </Link>

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
          {session && (
            <div className="hidden sm:flex flex-col items-end mr-2">
              <span className="text-xs text-slate-400 uppercase tracking-widest">
                Welcome
              </span>
              <span className="text-sm font-bold text-white flex items-center gap-1">
                <UserIcon className="w-3 h-3 text-cyan-400" />
                {session.user?.name || "Member"}
              </span>
            </div>
          )}

          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: "/auth" })}
              className="flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-2 rounded-full font-bold hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg shadow-red-500/5"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          ) : (
            <Link
              href="/auth"
              className="bg-cyan-500 text-white px-6 py-2 rounded-full font-bold hover:bg-cyan-600 transition-all"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
