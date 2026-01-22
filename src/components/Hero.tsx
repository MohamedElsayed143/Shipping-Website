"use client";

import { motion } from "framer-motion";
import { Search, Package, MapPin, ArrowRight } from "lucide-react";

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
            <span className="text-cyan-400">Global Shipping</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-300 mb-10 max-w-xl"
          >
            Streamline your supply chain with our world-class logistics solutions. 
            From air freight to last-mile delivery, we move the world for you.
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

      {/* Decorative Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center">
              <Package className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold">In Transit</p>
              <p className="text-slate-400 text-sm">PKG-99283-ID</p>
            </div>
          </div>
          <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 2, delay: 1 }}
              className="h-full bg-cyan-500"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
