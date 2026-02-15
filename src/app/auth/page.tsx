"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff, ArrowRight, Loader2, Truck, Phone, CheckCircle2, XCircle, User, Circle } from "lucide-react";
import { signIn } from "next-auth/react";
import { registerUser } from "@/lib/actions";
import { useRouter } from "next/navigation";

type AuthMode = "login" | "signup";

interface FormField {
  name: "name" | "phone" | "password";
  label: string;
  type: string;
  icon: React.ReactNode;
  placeholder: string;
  showInSignup?: boolean;
}

const authFields: FormField[] = [
  { name: "name", label: "Full Name", type: "text", icon: <User className="w-5 h-5" />, placeholder: "Enter your full name", showInSignup: true },
  { name: "phone", label: "Phone Number", type: "text", icon: <Phone className="w-5 h-5" />, placeholder: "01xxxxxxxxx" },
  { name: "password", label: "Password", type: "password", icon: <Lock className="w-5 h-5" />, placeholder: "••••••••" },
];

const stats = [
  { value: "Door to Door", label: "Delivery" },
  { value: "Turkey to Egypt", label: "Direct Route" },
  { value: "Weekly", label: "Flights" },
];

// --- Toast Notification Component ---
function Toast({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) {
  useState(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-in">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl backdrop-blur-lg shadow-2xl border ${
        type === "success" 
          ? "bg-emerald-500/90 border-emerald-400/50" 
          : "bg-red-500/90 border-red-400/50"
      }`}>
        {type === "success" ? (
          <CheckCircle2 className="w-6 h-6 text-white" />
        ) : (
          <XCircle className="w-6 h-6 text-white" />
        )}
        <p className="text-white font-medium">{message}</p>
      </div>
    </div>
  );
}

// --- Components ---

function FloatingElement({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  useState(() => {
    setTimeout(() => setIsVisible(true), delay * 1000);
  });
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
      className={className}
    >
      {children}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 lg:p-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10 text-center max-w-lg">
        <FloatingElement delay={0.2}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <Truck className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-white/70">Shopping Made Easy</span>
          </div>
        </FloatingElement>
        <FloatingElement delay={0.3}><h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Sma Group</h2></FloatingElement>
        <FloatingElement delay={0.4}>
          <p className="text-lg text-white/60 mb-8">Shop from Trendyol, Zara, and generic Turkish brands. We deliver straight to your doorstep in Egypt.</p>
        </FloatingElement>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Validation Functions ---
function validatePhone(phone: string): { valid: boolean; error?: string } {
  if (phone.length !== 11) {
    return { valid: false, error: "Phone number must be exactly 11 digits" };
  }
  if (!/^\d+$/.test(phone)) {
    return { valid: false, error: "Phone number must contain only numbers" };
  }
  if (!phone.startsWith("01")) {
    return { valid: false, error: "Phone number must start with 01" };
  }
  return { valid: true };
}

function validatePassword(password: string): { valid: boolean; error?: string } {
  if (password.length < 8) {
    return { valid: false, error: "Password must be at least 8 characters long" };
  }
  if (!/[A-Z]/.test(password)) {
    return { valid: false, error: "Password must contain at least one uppercase letter" };
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, error: "Password must contain at least one number" };
  }
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return { valid: false, error: "Password must contain at least one special character (!@#$%...)" };
  }
  return { valid: true };
}

// --- Inline Validation Hint Row ---
function ValidationHintRow({ satisfied, label }: { satisfied: boolean; label: string }) {
  return (
    <div
      className="flex items-center gap-2 transition-all duration-300"
      style={{ opacity: 1 }}
    >
      {satisfied ? (
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 transition-colors duration-300" />
      ) : (
        <Circle className="w-3.5 h-3.5 text-white/25 transition-colors duration-300" />
      )}
      <span
        className={`text-xs transition-colors duration-300 ${
          satisfied ? "text-emerald-400" : "text-white/35"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

// --- Main Page Component ---

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    password: ""
  });

  // --- Real-time hint states (signup only) ---
  const phoneHints = {
    startsWithZeroOne: formData.phone.startsWith("01"),
    isEleven: formData.phone.length === 11,
  };
  const passwordHints = {
    minEight: formData.password.length >= 8,
    hasUppercase: /[A-Z]/.test(formData.password),
    hasNumber: /[0-9]/.test(formData.password),
    hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.password),
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 11);
      setFormData(prev => ({ ...prev, [name]: numericValue }));
      setErrors(prev => ({ ...prev, phone: "" }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (name === "name") {
        setErrors(prev => ({ ...prev, name: "" }));
      } else if (name === "password") {
        setErrors(prev => ({ ...prev, password: "" }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === "signup" && !formData.name.trim()) {
      setErrors(prev => ({ ...prev, name: "Full name is required" }));
      setToast({ message: "Full name is required", type: "error" });
      return;
    }

    if (mode === "signup") {
      const phoneValidation = validatePhone(formData.phone);
      const passwordValidation = validatePassword(formData.password);

      if (!phoneValidation.valid) {
        setErrors(prev => ({ ...prev, phone: phoneValidation.error || "" }));
        setToast({ message: phoneValidation.error || "Invalid phone number", type: "error" });
        return;
      }

      if (!passwordValidation.valid) {
        setErrors(prev => ({ ...prev, password: passwordValidation.error || "" }));
        setToast({ message: passwordValidation.error || "Invalid password", type: "error" });
        return;
      }
    }

    setIsLoading(true);

    if (mode === "login") {
      const res = await signIn("credentials", {
        phone: formData.phone,
        password: formData.password,
        redirect: false,
      });

      if (res?.error) {
        setToast({ message: "Invalid phone or password", type: "error" });
      } else {
        setToast({ message: "Logged in successfully! Redirecting...", type: "success" });
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 1500);
      }
    } else {
      const res = await registerUser(formData);

      if (res.error) {
        setToast({ message: res.error, type: "error" });
      } else {
        setToast({ message: "Account created successfully! You can now sign in", type: "success" });
        setTimeout(() => {
          setMode("login");
          setFormData({ name: "", phone: "", password: "" });
        }, 2000);
      }
    }

    setIsLoading(false);
  };

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setFormData({ name: "", phone: "", password: "" });
    setErrors({ name: "", phone: "", password: "" });
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative">
        <HeroVisual />
      </div>

      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="w-full max-w-md">
          <div className="rounded-3xl p-8 sm:p-10 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {mode === "login" ? "Welcome back" : "Create account"}
                </h2>
                <p className="text-white/40 text-sm">
                  {mode === "login" ? "Sign in with your phone number" : "Join Sma Group today"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {authFields
                  .filter(field => mode === "signup" ? true : !field.showInSignup)
                  .map((field) => (
                  <div key={field.name} className="space-y-1.5">
                    <label className="text-sm font-medium text-white/80">{field.label}</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-blue-500 transition-colors">
                        {field.icon}
                      </div>
                      <input
                        name={field.name}
                        type={field.name === "password" && !showPassword ? "password" : "text"}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-12 pr-12 py-3 rounded-xl bg-white/5 border ${
                          errors[field.name] ? "border-red-500/50" : "border-white/10"
                        } text-white focus:outline-none focus:border-blue-500/50 transition-all text-sm`}
                      />
                      {field.name === "password" && (
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      )}
                    </div>

                    {/* --- Error message (login mode or signup submit fallback) --- */}
                    {errors[field.name] && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <XCircle className="w-3 h-3" />
                        {errors[field.name]}
                      </p>
                    )}

                    {/* --- Live validation hints (signup only, phone field) --- */}
                    {mode === "signup" && field.name === "phone" && formData.phone.length > 0 && (
                      <div className="mt-2 flex flex-col gap-1.5 px-1">
                        <ValidationHintRow satisfied={phoneHints.startsWithZeroOne} label="Must start with 01" />
                        <ValidationHintRow satisfied={phoneHints.isEleven} label="Must be exactly 11 digits" />
                      </div>
                    )}

                    {/* --- Live validation hints (signup only, password field) --- */}
                    {mode === "signup" && field.name === "password" && formData.password.length > 0 && (
                      <div className="mt-2 flex flex-col gap-1.5 px-1">
                        <ValidationHintRow satisfied={passwordHints.minEight} label="At least 8 characters" />
                        <ValidationHintRow satisfied={passwordHints.hasUppercase} label="At least one uppercase letter" />
                        <ValidationHintRow satisfied={passwordHints.hasNumber} label="At least one number" />
                        <ValidationHintRow satisfied={passwordHints.hasSpecial} label="At least one special character (!@#$%…)" />
                      </div>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 py-3.5 rounded-xl bg-blue-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all disabled:opacity-70"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                    <>
                      {mode === "login" ? "Sign In" : "Create Account"}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-center mt-8 text-sm text-white/40">
                {mode === "login" ? "Don't have an account? " : "Already have an account? "}
                <button onClick={toggleMode} className="text-blue-400 hover:text-white font-semibold transition-colors">
                  {mode === "login" ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}