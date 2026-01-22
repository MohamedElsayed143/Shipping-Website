"use client";

import { motion } from "framer-motion";

const partners = [
  "Maersk", "DHL", "FedEx", "UPS", "Amazon", "Cosco"
];

const testimonials = [
  {
    name: "John Carter",
    role: "Logistics Manager at Global Retail",
    text: "The tracking accuracy and speed of delivery have completely transformed our supply chain efficiency. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=john",
  },
  {
    name: "Sarah Jenkins",
    role: "CEO of TechMove",
    text: "Reliable, transparent, and professional. They've handled our most sensitive cargo with exceptional care.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
];

export function Trust() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Partners */}
        <div className="mb-20">
          <p className="text-center text-slate-400 font-semibold uppercase tracking-[0.2em] mb-10">
            Trusted by Global Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner) => (
              <span key={partner} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row gap-8 items-start"
            >
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl object-cover" />
              <div>
                <p className="text-slate-700 text-lg italic mb-6">"{t.text}"</p>
                <h4 className="font-bold text-slate-900 text-xl">{t.name}</h4>
                <p className="text-cyan-600 font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
