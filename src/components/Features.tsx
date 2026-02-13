"use client";

import { motion } from "framer-motion";
import { Plane, Handbag, PackageCheck, Boxes, Shield, Clock } from "lucide-react";

const services = [
  {
    title: "Shop & Ship",
    description: "Get your own Turkish address. Shop from any store, send it to us, and we ship it to Egypt.",
    icon: Plane,
    color: "bg-blue-500",
  },
  {
    title: "Buy For Me",
    description: "Can't pay with your card? Send us the product link, and we will buy it for you.",
    icon: Handbag,
    color: "bg-cyan-500",
  },
  {
    title: "Doorstep Delivery",
    description: "From Istanbul to your home in Cairo. Fast, tracked, and secure delivery.",
    icon: PackageCheck,
    color: "bg-orange-500",
  },
  {
    title: "Order Consolidation",
    description: "Shop from multiple stores. We combine all your orders into one package to save you up to 80% on shipping fees.",
    icon: Boxes,
    color: "bg-indigo-500",
  },
  {
    title: "Secure Handling",
    description: "Advanced tracking and security for high-value items.",
    icon: Shield,
    color: "bg-emerald-500",
  },
  {
    title: "Fast Delivery",
    description: "Receive your order in just 7-10 days. We handle all customs procedures so you don't have to wait.",
    icon: Clock,
    color: "bg-rose-500",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Shopping from Turkey Made Easy
          </h2>
          <p className="text-slate-600 text-lg">
            We handle the shipping, customs, and delivery. You just enjoy the shopping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
