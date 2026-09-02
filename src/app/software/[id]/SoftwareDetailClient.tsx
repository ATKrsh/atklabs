"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutModal from "@/components/CheckoutModal";
import type { SoftwareProject } from "@/data/software";
import Link from "next/link";
import { ShieldCheck, Download, Star, Eye, Heart, CheckCircle2, Cpu, HardDrive, Monitor, Lock, ArrowLeft, Activity, Video, Play } from "lucide-react";

interface SoftwareDetailClientProps {
  software: SoftwareProject;
}

export default function SoftwareDetailClient({ software }: SoftwareDetailClientProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Back Link */}
        <Link href="/software" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Software Suite
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column - Main Information */}
          <div className="lg:col-span-2 space-y-8">
            
            <div className="flex items-start gap-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${software.gradient} p-1 shadow-2xl shrink-0`}>
                <div className="w-full h-full bg-black/90 rounded-[14px] flex items-center justify-center font-mono font-bold text-2xl text-white">
                  {software.name.substring(0, 2).toUpperCase()}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{software.name}</h1>
                  <span className="text-xs font-mono bg-white/10 text-zinc-300 border border-white/10 px-2.5 py-1 rounded-full">
                    v{software.version}
                  </span>
                </div>
                <p className="text-base text-cyan-400 font-medium">{software.tagline}</p>
                <p className="text-xs text-zinc-400 font-mono">Released {software.releaseDate} • Category: {software.category}</p>
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-900/40 border border-white/10 p-6 rounded-2xl">
              {software.fullDescription}
            </p>

            {/* App Working Short Video Demo */}
            <div className="bg-zinc-900/60 border border-white/10 p-6 rounded-3xl space-y-4 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    {software.name} Working Video Showcase
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-mono">Real-time application demo &amp; UI execution</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black shadow-inner aspect-video">
                <video
                  src={software.videoUrl || "/media/atkrsh.mp4"}
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Key Architectural Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {software.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Requirements & Tech Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl space-y-4">
                <h4 className="font-mono text-xs font-bold uppercase text-zinc-400 tracking-wider">System Requirements</h4>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-mono">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>OS:</span> <span className="text-white">{software.systemRequirements.os}</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>RAM:</span> <span className="text-white">{software.systemRequirements.ram}</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Disk:</span> <span className="text-white">{software.systemRequirements.disk}</span></li>
                  <li className="flex justify-between"><span>Architecture:</span> <span className="text-white">{software.systemRequirements.arch}</span></li>
                </ul>
              </div>

              <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl space-y-4">
                <h4 className="font-mono text-xs font-bold uppercase text-zinc-400 tracking-wider">Tech Stack &amp; Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {software.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column - Buy & License Box */}
          <div className="bg-zinc-900/60 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 sticky top-24 backdrop-blur-xl shadow-2xl">
            
            <div className="space-y-2">
              <span className="text-xs text-zinc-400 font-mono">Single Commercial License</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold font-mono text-white">₹{software.priceINR}</span>
                <span className="text-xs text-zinc-500 font-mono">incl. GST</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full py-4 rounded-2xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 hover:opacity-95 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
              >
                Buy Commercial License (₹{software.priceINR})
              </button>

              <button
                disabled
                className="w-full py-3 rounded-2xl font-semibold text-xs text-zinc-500 bg-white/5 border border-white/10 cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-zinc-500" />
                Download Locked (Payment Required)
              </button>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-3 text-xs text-zinc-400 font-mono">
              <div className="flex justify-between">
                <span>Downloads:</span>
                <span className="text-white font-bold">{software.downloads.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Rating:</span>
                <span className="text-white font-bold">{software.rating} / 5.0 ★</span>
              </div>
              <div className="flex justify-between">
                <span>License:</span>
                <span className="text-white font-bold">Perpetual Single Machine</span>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl text-[11px] text-emerald-400 font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Virus-Free &amp; SHA256 Code Signed</span>
            </div>

          </div>

        </div>

      </main>

      <CheckoutModal software={software} isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      <Footer />
    </div>
  );
}
