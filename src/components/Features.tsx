"use client";

import { motion } from "framer-motion";
import { Plane, Ship, Truck, Globe, Shield, Clock } from "lucide-react";

const services = [
  {
    title: "Air Freight",
    description: "Fastest delivery options for your urgent international shipments.",
    icon: Plane,
    color: "bg-blue-500",
  },
  {
    title: "Ocean Cargo",
    description: "Cost-effective shipping for large-scale global transportation.",
    icon: Ship,
    color: "bg-cyan-500",
  },
  {
    title: "Last-Mile Delivery",
    description: "Precise and reliable delivery right to your customer's doorstep.",
    icon: Truck,
    color: "bg-orange-500",
  },
  {
    title: "Global Warehousing",
    description: "Strategic storage solutions in key global trade hubs.",
    icon: Globe,
    color: "bg-indigo-500",
  },
  {
    title: "Secure Handling",
    description: "Advanced tracking and security for high-value cargo.",
    icon: Shield,
    color: "bg-emerald-500",
  },
  {
    title: "Express Shipping",
    description: "Next-day delivery services for time-sensitive packages.",
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
            Our Premium Logistics Services
          </h2>
          <p className="text-slate-600 text-lg">
            We provide comprehensive shipping solutions tailored to your business needs, 
            ensuring your goods reach their destination safely and on time.
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
