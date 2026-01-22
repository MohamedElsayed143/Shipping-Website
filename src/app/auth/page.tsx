"use client";

import { useState } from "react";
import { Mail, Lock, User, Building2, Eye, EyeOff, ArrowRight, Loader2, Truck, Package, Globe, Shield, TrendingUp } from "lucide-react";

type AuthMode = "login" | "signup";

interface FormField {
  name: string;
  label: string;
  type: string;
  icon: React.ReactNode;
  placeholder: string;
}

const loginFields: FormField[] = [
  { name: "email", label: "Email", type: "email", icon: <Mail className="w-5 h-5" />, placeholder: "name@company.com" },
  { name: "password", label: "Password", type: "password", icon: <Lock className="w-5 h-5" />, placeholder: "Enter your password" },
];

const signupFields: FormField[] = [
  { name: "fullName", label: "Full Name", type: "text", icon: <User className="w-5 h-5" />, placeholder: "John Doe" },
  { name: "companyName", label: "Company Name", type: "text", icon: <Building2 className="w-5 h-5" />, placeholder: "Acme Logistics" },
  { name: "email", label: "Email", type: "email", icon: <Mail className="w-5 h-5" />, placeholder: "name@company.com" },
  { name: "password", label: "Password", type: "password", icon: <Lock className="w-5 h-5" />, placeholder: "Create a password" },
];

const features = [
  { icon: Package, label: "Smart Tracking" },
  { icon: Globe, label: "Global Network" },
  { icon: Shield, label: "Secure Delivery" },
];

const stats = [
  { value: "99.9%", label: "Delivery Rate" },
  { value: "150+", label: "Countries" },
  { value: "50M+", label: "Shipments" },
];

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-lg">
        <FloatingElement delay={0.2}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <Truck className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-white/70">Logistics Reimagined</span>
          </div>
        </FloatingElement>

        <FloatingElement delay={0.3}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">FleetSync</h2>
        </FloatingElement>

        <FloatingElement delay={0.4}>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            The intelligent shipping platform that connects your business to the world. Track, manage, and optimize your deliveries in real-time.
          </p>
        </FloatingElement>

        <FloatingElement delay={0.5}>
          <div className="flex justify-center gap-6 mb-12">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-xs text-white/50">{feature.label}</span>
              </div>
            ))}
          </div>
        </FloatingElement>

        <FloatingElement delay={0.8}>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </FloatingElement>
      </div>

      <FloatingElement delay={1.2} className="absolute top-20 right-20 hidden xl:block">
        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">Live Tracking</div>
              <div className="text-xs text-white/50">1,247 active shipments</div>
            </div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement delay={1.4} className="absolute bottom-20 left-20 hidden xl:block">
        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <div>
              <div className="text-sm font-medium text-white">+24% efficiency</div>
              <div className="text-xs text-white/50">This quarter</div>
            </div>
          </div>
        </div>
      </FloatingElement>
    </div>
  );
}

function AuthInput({ field, index, showPassword, togglePassword }: { field: FormField; index: number; showPassword: boolean; togglePassword: () => void }) {
  const isPassword = field.type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : field.type;

  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-white/80">{field.label}</label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-blue-500 transition-colors duration-300">
          {field.icon}
        </div>
        <input
          type={inputType}
          placeholder={field.placeholder}
          className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 text-sm"
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors duration-300"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  );
}

function SocialLoginButtons({ isLoading }: { isLoading: boolean }) {
  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
    // هنا يمكنك إضافة كود OAuth للتسجيل الفعلي
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        onClick={() => handleSocialLogin('Google')}
        disabled={isLoading}
        className="py-3 px-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white/80 text-sm font-medium disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Google
      </button>

      <button
        onClick={() => handleSocialLogin('Facebook')}
        disabled={isLoading}
        className="py-3 px-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white/80 text-sm font-medium disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        Facebook
      </button>
    </div>
  );
}

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fields = mode === "login" ? loginFields : signupFields;

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setShowPassword(false);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative">
        <HeroVisual />
      </div>

      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">FleetSync</span>
            </div>
          </div>

          <div className="rounded-3xl p-8 sm:p-10 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[80px]" />

            <div 
              key={mode}
              className="relative z-10"
              style={{
                animation: 'fadeSlideIn 0.5s ease-out'
              }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {mode === "login" ? "Welcome back" : "Create account"}
                </h2>
                <p className="text-white/40 text-sm">
                  {mode === "login" ? "Sign in to manage your shipments" : "Start tracking with FleetSync today"}
                </p>
              </div>

              <SocialLoginButtons isLoading={isLoading} />

              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs text-white/30 uppercase tracking-widest">or continue with email</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <div className="space-y-5">
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
                    <button className="text-xs text-blue-400 hover:text-white transition-colors">
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full mt-4 py-3.5 rounded-xl bg-blue-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 disabled:opacity-70"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      {mode === "login" ? "Sign In" : "Create Account"}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center mt-8 text-sm text-white/40">
                {mode === "login" ? "Don't have an account? " : "Already have an account? "}
                <button onClick={toggleMode} className="text-blue-400 hover:text-white font-semibold transition-colors">
                  {mode === "login" ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
            
            <style jsx>{`
              @keyframes fadeSlideIn {
                from {
                  opacity: 0;
                  transform: translateX(20px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
            `}</style>
          </div>

          <p className="text-center text-white/40 text-sm mt-6">
            By continuing, you agree to our{" "}
            <a href="#" className="text-white/60 hover:text-white/80 underline underline-offset-2 transition-colors">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-white/60 hover:text-white/80 underline underline-offset-2 transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}