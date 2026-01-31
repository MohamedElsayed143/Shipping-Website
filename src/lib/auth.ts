// src/auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Phone and Password",
      credentials: {
        phone: { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.password) return null;

        const user = await db.user.findUnique({
          where: { phone: credentials.phone as string }
        });

        if (!user || !user.password) return null;

        const isPasswordMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isPasswordMatch) return null;

        // التعديل هنا: نرجع الاسم الحقيقي من الداتابيز
        return { 
          id: user.id.toString(), // تحويل الـ ID لنص لضمان التوافق
          name: user.name,        // الاسم اللي أضفته في السكيما
          email: user.phone       // بنستخدم التليفون كـ email داخلياً لـ NextAuth
        };
      }
    })
  ],
  callbacks: {
    // إضافة الـ callbacks دي ضرورية عشان الـ name يوصل للـ client-side
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth",
  },
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
});