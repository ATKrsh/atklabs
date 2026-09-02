import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SoftwareGrid from "@/components/SoftwareGrid";
import Link from "next/link";
import { Shield, Sparkles, Terminal, Cpu, Download, ArrowRight, Layers, LayoutGrid, Zap, CheckCircle, Lock, Server } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 border-b border-white/10">
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 backdrop-blur-md shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>ATKlabs Software Systems v2026.7</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
            High-Performance Desktop Utilities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Intelligent Systems</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Crafting raw C++, Rust, and PyQt5 system monitors, process controllers, and local AI engines engineered for Windows 11 power users.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/software"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 to-purple-400 hover:opacity-95 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
            >
              Explore Software Suite
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              href="/request"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2"
            >
              Request Custom Build
            </Link>
          </div>

          {/* Metric Bar */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10">
            <div>
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-white">16+</span>
              <span className="text-xs text-zinc-500 font-mono">Production Apps</span>
            </div>
            <div>
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-white">250,000+</span>
              <span className="text-xs text-zinc-500 font-mono">Downloads</span>
            </div>
            <div>
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-white">0.16s</span>
              <span className="text-xs text-zinc-500 font-mono">Scan Latency</span>
            </div>
            <div>
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-white">100%</span>
              <span className="text-xs text-zinc-500 font-mono">Offline & Secure</span>
            </div>
          </div>

        </div>
      </section>

      {/* Software Catalog Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Software Marketplace</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Browse our full roster of standalone desktop monitors, productivity suites, and system tools.
          </p>
        </div>

        <SoftwareGrid />
      </section>

      {/* Tech Architecture Banner */}
      <section className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Engineering Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Built for Zero Overhead & Maximum Latency Speed</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Task Manager Speed</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Processes and system vitals are polled using optimized Ring0 and WMI hooks, cutting iteration overhead down to 0.16 seconds.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Offline AI Diagnostics</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Embedded Matrix Terminals interface directly with local Ollama endpoints (qwen2.5:14b), providing offline system advice.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Verified Single Binaries</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                All software binaries are packaged as standalone single-file executables with strict checksum verification.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
