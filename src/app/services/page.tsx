"use client";

import { motion } from "framer-motion";
import { Ship, Plane, Truck, Warehouse, Globe, Headphones } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const services = [
  {
    title: "Air Freight",
    description: "Global delivery at lightning speed for your most urgent shipments.",
    icon: Plane,
    details: ["Express Delivery", "Temperature Controlled", "Door-to-Door"]
  },
  {
    title: "Ocean Freight",
    description: "Cost-effective solutions for large volumes across the world's oceans.",
    icon: Ship,
    details: ["Full Container Load", "Less than Container Load", "Port Handling"]
  },
  {
    title: "Road Transport",
    description: "Reliable land logistics for regional and national distributions.",
    icon: Truck,
    details: ["LTL/FTL Services", "GPS Tracking", "Last-mile Delivery"]
  },
  {
    title: "Warehousing",
    description: "Secure storage and inventory management in strategic locations.",
    icon: Warehouse,
    details: ["Inventory Management", "Pick & Pack", "Cross-docking"]
  },
  {
    title: "Supply Chain",
    description: "Optimization strategies to streamline your entire business flow.",
    icon: Globe,
    details: ["Network Design", "Process Management", "Risk Assessment"]
  },
  {
    title: "24/7 Support",
    description: "Dedicated assistance for all your logistics questions and needs.",
    icon: Headphones,
    details: ["Live Tracking", "Claim Management", "Expert Consulting"]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-20">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              Our Logistics <br />
              <span className="text-cyan-400">Core Services</span>
            </motion.h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              We provide comprehensive shipping and logistics solutions tailored to your unique requirements. 
              From small packages to industrial cargo, we handle it all with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/50 hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-500 group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-cyan-500/20">
                  <service.icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-slate-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-cyan-600 to-blue-700 relative overflow-hidden text-center md:text-left"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to optimize your shipping?</h2>
                <p className="text-white/80 text-lg">Contact our logistics experts for a customized quote today.</p>
              </div>
              <button className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-2xl">
                Get a Quote Now
              </button>
            </div>
            
            {/* Decorative BG element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
