"use server";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";

interface RegisterData {
  phone: string;
  password: string;
  name: string; // ✅ أضفنا name عشان schema بتطلبه
}

export async function registerUser(data: RegisterData) {
  try {
    const phone = data.phone?.trim();
    const password = data.password?.trim();
    const name = data.name?.trim();

    // ✅ validation
    if (!phone || !password || !name) {
      return { error: "جميع البيانات مطلوبة" };
    }

    // ✅ check existing
    const existingUser = await db.user.findUnique({
      where: { phone },
    });

    if (existingUser) {
      return { error: "هذا الرقم مسجل بالفعل!" };
    }

    // ✅ hash
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ create
    await db.user.create({
      data: {
        phone,
        password: hashedPassword,
        name,
      },
    });

    return { success: "تم إنشاء الحساب بنجاح!" };
  } catch (error: unknown) {
    console.error("Registration Error:", error);

    // ✅ Prisma duplicate safety
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return { error: "هذا الرقم مسجل بالفعل!" };
      }
    }

    return { error: "حدث خطأ في الخادم" };
  }
}
