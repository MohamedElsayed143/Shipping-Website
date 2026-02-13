"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: "10", suffix: "+" },
  { label: "Packages Delivered", value: "100", suffix: "K+" },
  { label: "Happy Clients", value: "1200", suffix: "+" },
  { label: "Brands Supported", value: "100", suffix: "+" },
];

export function Stats() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                {stat.value}{stat.suffix}
              </h3>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
