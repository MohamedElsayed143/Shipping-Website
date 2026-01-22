"use client";

import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 tracking-tighter">ORCHIDS GLOBAL</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Leading the world in global logistics and supply chain solutions since 1995. 
              We move the world, one package at a time.
            </p>
            <div className="flex gap-4">
              <Facebook className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors" size={20} />
              <Twitter className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors" size={20} />
              <Linkedin className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors" size={20} />
              <Instagram className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors" size={20} />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Air Freight</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Ocean Cargo</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Land Transport</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Warehousing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">News & Blog</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe to get latest updates and news.</p>
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-none focus:ring-0 text-white w-full px-4"
              />
              <button className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-lg transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Orchids Global Shipping. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
