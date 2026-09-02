"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Send, Upload, CheckCircle2, FileCode, Clock } from "lucide-react";

export default function RequestPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [requestId, setRequestId] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestId(`ATK-REQ-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black font-sans antialiased">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="text-center space-y-4">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Custom Engineering</span>
          <h1 className="text-4xl font-extrabold tracking-tight">Custom Software Request Portal</h1>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Need a bespoke Windows utility, C++ hardware driver, or local AI agent system? Submit your project requirements below.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl space-y-6 backdrop-blur-xl">
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-400">Project Title</label>
              <input
                required
                type="text"
                placeholder="e.g. Real-time Audio DSP Buffer Monitor"
                className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 font-sans"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-400">Estimated Budget (INR)</label>
                <select className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 font-sans">
                  <option value="10k-25k">₹10,000 - ₹25,000</option>
                  <option value="25k-50k">₹25,000 - ₹50,000</option>
                  <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                  <option value="100k+">₹1,00,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-400">Desired Timeline</label>
                <select className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 font-sans">
                  <option value="1-week">Within 1 Week</option>
                  <option value="2-weeks">2 - 3 Weeks</option>
                  <option value="1-month">1 Month</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-400">Project Specifications & Features</label>
              <textarea
                required
                rows={5}
                placeholder="Describe your desired software features, performance constraints, and UI aesthetic preferences..."
                className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 font-sans"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-400">Contact Email</label>
              <input
                required
                type="email"
                placeholder="your.email@company.com"
                className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl font-bold text-sm text-black bg-gradient-to-r from-amber-400 to-orange-400 hover:opacity-95 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Submit Software Project Inquiry
            </button>

          </form>
        ) : (
          <div className="bg-zinc-900/60 border border-emerald-500/30 p-8 rounded-3xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-bold">Request Created Successfully!</h2>
              <p className="text-xs text-zinc-400 mt-1 font-mono">Reference Tracking ID: {requestId}</p>
            </div>

            <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
              Our engineering team has received your custom software request. We will review your technical requirements and contact you within 24 hours.
            </p>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
