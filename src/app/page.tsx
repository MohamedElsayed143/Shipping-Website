import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { Trust } from "@/components/Trust";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-black text-white tracking-tighter">
            SMA <span className="text-cyan-400">GROUB</span>
          </div>
          <div className="hidden md:flex gap-8 text-slate-300 font-medium">
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Tracking</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
          </div>
          <button className="bg-white text-slate-950 px-6 py-2 rounded-full font-bold hover:bg-cyan-400 transition-colors">
            Get Quote
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Trust />
      </main>

      <Footer />
    </div>
  );
}
