"use client";

import { motion } from "framer-motion";
import { Package, Search, Filter, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const mockPackages = [
  { id: "PKG-99283-ID", status: "In Transit", origin: "Shenzhen, CN", destination: "London, UK", date: "2024-05-20" },
  { id: "PKG-88172-US", status: "Delivered", origin: "New York, US", destination: "Paris, FR", date: "2024-05-18" },
  { id: "PKG-77364-DE", status: "Pending", origin: "Berlin, DE", destination: "Tokyo, JP", date: "2024-05-22" },
];

export default function MyPackages() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold text-white mb-2"
              >
                My <span className="text-cyan-400">Packages</span>
              </motion.h1>
              <p className="text-slate-400">Track and manage your global shipments in real-time.</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search tracking ID..." 
                  className="bg-slate-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 w-full md:w-64 transition-all"
                />
              </div>
              <button className="p-2.5 bg-slate-900 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {mockPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-all group cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                      <Package className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{pkg.id}</h3>
                      <p className="text-sm text-slate-500">Last updated: {pkg.date}</p>
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-slate-500 mb-1">Route</span>
                      <span className="text-slate-300 font-medium">{pkg.origin} → {pkg.destination}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-slate-500 mb-1">Status</span>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          pkg.status === "Delivered" ? "bg-green-500" : 
                          pkg.status === "In Transit" ? "bg-cyan-500" : "bg-yellow-500"
                        }`} />
                        <span className="text-slate-300 font-medium">{pkg.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors">
                      Details
                    </button>
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors hidden lg:block" />
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
