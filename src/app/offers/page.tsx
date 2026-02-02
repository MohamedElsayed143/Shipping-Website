"use client";

import { motion } from "framer-motion";
import { Tag, Clock, ArrowRight, Zap, Gift, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const offers = [
  {
    title: "Express Air 20% Off",
    description: "Save 20% on all air freight shipments between Europe and Asia this month.",
    code: "AIR20MAY",
    expires: "Ends in 12 days",
    icon: Zap,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Free First-Mile Pickup",
    description: "New customers get free pickup for their first 5 shipments within the city center.",
    code: "FREESTART",
    expires: "Ongoing",
    icon: Gift,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Premium Insurance Promo",
    description: "Get full coverage insurance for the price of basic coverage for high-value goods.",
    code: "SECURESHIP",
    expires: "Ends in 5 days",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-500"
  }
];

export default function Offers() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-4"
            >
              <Tag className="w-4 h-4" />
              EXCLUSIVE DEALS
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Latest Shipping <span className="text-cyan-400">Offers</span>
            </motion.h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Take advantage of our current promotions and save on your next global shipment. 
              Updated weekly with the best logistics deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity rounded-3xl -z-10" style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }} />
                
                <div className="bg-slate-900/50 border border-white/5 p-8 rounded-3xl h-full flex flex-col hover:border-white/10 transition-all">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/10`}>
                    <offer.icon className="text-white w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{offer.title}</h3>
                  <p className="text-slate-400 mb-8 flex-1">{offer.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-dashed border-white/10">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">PROMO CODE</span>
                      <span className="text-cyan-400 font-black tracking-widest">{offer.code}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" />
                        {offer.expires}
                      </div>
                      <button className="flex items-center gap-2 text-white font-bold group/btn hover:text-cyan-400 transition-colors">
                        Apply
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
