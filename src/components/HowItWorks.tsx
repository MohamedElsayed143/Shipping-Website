"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    title: "Book Your Shipment",
    description: "Use our easy online platform to quote and book your shipment in minutes.",
    icon: ClipboardCheck,
  },
  {
    title: "Cargo Pickup",
    description: "Our team collects your package from your doorstep or warehouse.",
    icon: PackageCheck,
  },
  {
    title: "Real-time Tracking",
    description: "Monitor your shipment's journey across the globe with live updates.",
    icon: Truck,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600 text-lg">
            A simple three-step process to get your goods moving globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50"
            >
              <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold mb-8 absolute -top-5">
                {index + 1}
              </div>
              <div className="w-20 h-20 bg-slate-950 text-white rounded-3xl flex items-center justify-center mb-6">
                <step.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
