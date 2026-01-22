"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  Building2,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  Truck,
  Package,
  Globe,
  Shield,
  TrendingUp,
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

const formVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
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

function AuthInput({
  field,
  index,
  showPassword,
  togglePassword,
}: {
  field: FormField;
  index: number;
  showPassword: boolean;
  togglePassword: () => void;
}) {
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
      className="space-y-1.5"
    >
      <label className="text-sm font-medium text-white/80">{field.label}</label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#3b82f6] transition-colors duration-300">
          {field.icon}
        </div>
        <input
          type={inputType}
          placeholder={field.placeholder}
          className="w-full pl-12 pr-12 py-3 rounded-xl glass-input text-white placeholder:text-white/20 focus:outline-none text-sm"
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors duration-300"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function AuthPage() {
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
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#0a1628] text-white overflow-hidden">
      {/* Left Side: Informational */}
      <div className="hidden lg:flex relative flex-col items-center justify-center p-12 overflow-hidden border-r border-white/5">
        {/* Background Radar Effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full" />
          <div className="absolute w-[800px] h-[800px] border border-white/5 rounded-full" />
          <div className="absolute w-[1100px] h-[1100px] border border-white/5 rounded-full" />
          <div className="absolute inset-0 bg-radial-gradient from-[#3b82f6]/10 to-transparent" />
        </div>

        {/* Floating Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-20 right-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div>
            <div className="text-xs text-white/60">Live Tracking</div>
            <div className="text-sm font-semibold">1,247 active shipments</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-20 left-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold">+24% efficiency</div>
            <div className="text-xs text-white/60">This quarter</div>
          </div>
        </motion.div>

        {/* Center Content */}
        <div className="relative z-10 text-center max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-8"
          >
            <Truck className="w-4 h-4" />
            Logistics Reimagined
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl font-black mb-6 tracking-tighter"
          >
            FleetSync
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 mb-12 leading-relaxed"
          >
            The intelligent shipping platform that connects your business to the world. 
            Track, manage, and optimize your deliveries in real-time.
          </motion.p>

          {/* Feature Icons */}
          <div className="flex justify-center gap-12 mb-16">
            {[
              { icon: <Package />, label: "Smart Tracking" },
              { icon: <Globe />, label: "Global Network" },
              { icon: <Shield />, label: "Secure Delivery" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500">
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-white/40 uppercase tracking-widest">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { val: "99.9%", label: "Delivery Rate" },
              { val: "150+", label: "Countries" },
              { val: "50M+", label: "Shipments" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="text-2xl font-bold mb-1">{stat.val}</div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="flex flex-col items-center justify-center p-6 lg:p-12 relative">
        <div className="w-full max-w-md">
          <div className="bg-[#0f2140] rounded-[32px] p-8 lg:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Subtle light effect on card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[80px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative z-10"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {mode === "login" ? "Welcome back" : "Create account"}
                  </h2>
                  <p className="text-white/40 text-sm">
                    {mode === "login"
                      ? "Sign in to manage your shipments"
                      : "Start tracking with FleetSync today"}
                  </p>
                </div>

                <SocialLoginButtons isLoading={isLoading} />

                <div className="flex items-center gap-4 my-8">
                  <div className="flex-1 h-px bg-white/5" />
                  <span className="text-xs text-white/20 uppercase tracking-widest">or continue with email</span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
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
                    <div className="text-right">
                      <button
                        type="button"
                        className="text-xs text-[#3b82f6] hover:text-white transition-colors"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full mt-4 py-3.5 rounded-xl bg-[#3b82f6] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#2563eb] transition-all duration-300 shadow-lg shadow-blue-500/20 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        {mode === "login" ? "Sign In" : "Create Account"}
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>

                <p className="text-center mt-8 text-sm text-white/40">
                  {mode === "login"
                    ? "Don't have an account? "
                    : "Already have an account? "}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="text-[#3b82f6] hover:text-white font-semibold transition-colors"
                  >
                    {mode === "login" ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Bottom links */}
          <div className="mt-12 text-center">
            <div className="text-[10px] text-white/20 flex items-center justify-center gap-4">
              <span>By continuing, you agree to our <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a></span>
              <span>and <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
