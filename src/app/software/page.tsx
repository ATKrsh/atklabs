"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SoftwareGrid from "@/components/SoftwareGrid";

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">ATKlabs Roster</span>
          <h1 className="text-4xl font-extrabold tracking-tight">All Software Applications</h1>
          <p className="text-zinc-400 text-sm max-w-2xl">
            Explore our complete suite of high-speed desktop utilities, process managers, offline AI engines, and hardware widgets.
          </p>
        </div>

        <SoftwareGrid />
      </main>

      <Footer />
    </div>
  );
}
