"use client";

import { motion } from "framer-motion";
import {
  Search,
  Package,
  MapPin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
          alt="Logistics Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Fast & Reliable <br />
            <span className="text-cyan-400">Shipping from Turkey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-300 mb-10 max-w-xl"
          >
            We handle everything from Turkish stores to your doorstep in Egypt. Enjoy seamless shopping with transparent pricing and express delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-2xl"
          >
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
              <Package className="text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter Tracking Number..."
                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 font-medium"
              />
            </div>
            <div className="h-8 w-[1px] bg-slate-200 hidden md:block" />
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
              <MapPin className="text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Destination"
                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 font-medium"
              />
            </div>
            <button className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group">
              Track Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/201029124517"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-10 right-10 hidden lg:block group"
      >
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-emerald-500/95 backdrop-blur-md hover:bg-emerald-600 
               text-white px-6 py-4 rounded-2xl shadow-xl 
               border border-white/10
               flex items-center gap-3
               transition-all duration-300"
        >
          {/* Icon */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" />
          </motion.div>

          {/* Text */}
          <div className="leading-tight">
            <p className="font-semibold text-sm">Chat with us</p>
            <p className="text-xs text-white/80">We’re online</p>
          </div>
        </motion.div>
      </motion.a>
    </section>
  );
}
