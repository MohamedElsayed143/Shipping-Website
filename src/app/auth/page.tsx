"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion"; // ضفنا Variants هنا
import {
  Mail,
  Lock,
  User,
  Building2,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { SocialLoginButtons } from "./SocialLoginButtons";

type AuthMode = "login" | "signup";

interface FormField {
  name: string;
  label: string;
  type: string;
  icon: React.ReactNode;
  placeholder: string;
}

const loginFields: FormField[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    icon: <Mail className="w-5 h-5" />,
    placeholder: "name@company.com",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    icon: <Lock className="w-5 h-5" />,
    placeholder: "Enter your password",
  },
];

const signupFields: FormField[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    icon: <User className="w-5 h-5" />,
    placeholder: "John Doe",
  },
  {
    name: "companyName",
    label: "Company Name",
    type: "text",
    icon: <Building2 className="w-5 h-5" />,
    placeholder: "Acme Logistics",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    icon: <Mail className="w-5 h-5" />,
    placeholder: "name@company.com",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    icon: <Lock className="w-5 h-5" />,
    placeholder: "Create a password",
  },
];

// تحديد الـ Type بـ Variants بيحل مشكلة الـ TypeScript
const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// هنا التعديل الأساسي بإضافة : Variants
const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

interface AuthInputProps {
  field: FormField;
  index: number;
  showPassword: boolean;
  togglePassword: () => void;
}

function AuthInput({
  field,
  index,
  showPassword,
  togglePassword,
}: AuthInputProps) {
  const isPassword = field.type === "password";
  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : field.type;

  return (
    <motion.div
      custom={index}
      variants={fieldVariants}
      initial="hidden"
      animate="visible"
      className="space-y-2"
    >
      <label className="text-sm font-medium text-white/80">{field.label}</label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#3b82f6] transition-colors duration-300">
          {field.icon}
        </div>
        <input
          type={inputType}
          placeholder={field.placeholder}
          className="w-full pl-12 pr-12 py-3.5 rounded-xl glass-input text-white placeholder:text-white/30 focus:outline-none"
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors duration-300"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function AuthForm() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fields = mode === "login" ? loginFields : signupFields;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setShowPassword(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          variants={formVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="text-center mb-8">
            <motion.h1
              className="text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {mode === "login" ? "Welcome back" : "Create account"}
            </motion.h1>
            <motion.p
              className="text-white/60"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {mode === "login"
                ? "Sign in to manage your shipments"
                : "Start tracking with FleetSync today"}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <SocialLoginButtons isLoading={isLoading} />
          </motion.div>

          <motion.div
            className="flex items-center gap-4 my-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="text-sm text-white/40">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field, index) => (
              <AuthInput
                key={field.name}
                field={field}
                index={index}
                showPassword={showPassword}
                togglePassword={() => setShowPassword(!showPassword)}
              />
            ))}

            {mode === "login" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-right"
              >
                <button
                  type="button"
                  className="text-sm text-[#60a5fa] hover:text-[#3b82f6] transition-colors duration-300"
                >
                  Forgot password?
                </button>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-semibold flex items-center justify-center gap-2 hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all duration-300 electric-glow disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {mode === "login" ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-6 text-white/60"
          >
            {mode === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              type="button"
              onClick={toggleMode}
              className="text-[#60a5fa] hover:text-[#3b82f6] font-medium transition-colors duration-300"
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
