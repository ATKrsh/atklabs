"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SOFTWARE_CATALOG } from "@/data/software";
import { LayoutDashboard, ShoppingBag, Users, DollarSign, Download, Activity, Settings, Database, RefreshCw, Lock } from "lucide-react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "software" | "orders" | "analytics">("overview");

  const totalRevenue = SOFTWARE_CATALOG.reduce((acc, app) => acc + app.downloads * app.priceINR, 0);
  const totalDownloads = SOFTWARE_CATALOG.reduce((acc, app) => acc + app.downloads, 0);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full uppercase">
                ATKlabs CMS
              </span>
              <span className="text-xs font-mono text-emerald-400">● Live Operational</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight mt-1">Admin Control Center</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-mono text-zinc-300 flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5" /> Refresh Metrics
            </button>
          </div>
        </div>

        {/* CMS Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-zinc-900/40 border border-white/10 p-6 rounded-2xl space-y-2">
            <span className="text-xs font-mono text-zinc-400">Total Marketplace Revenue</span>
            <div className="text-2xl font-bold font-mono text-emerald-400">₹{(totalRevenue / 100000).toFixed(2)} Lakhs</div>
          </div>
          <div className="bg-zinc-900/40 border border-white/10 p-6 rounded-2xl space-y-2">
            <span className="text-xs font-mono text-zinc-400">Total Software Downloads</span>
            <div className="text-2xl font-bold font-mono text-cyan-400">{totalDownloads.toLocaleString()}</div>
          </div>
          <div className="bg-zinc-900/40 border border-white/10 p-6 rounded-2xl space-y-2">
            <span className="text-xs font-mono text-zinc-400">Active Roster Products</span>
            <div className="text-2xl font-bold font-mono text-purple-400">{SOFTWARE_CATALOG.length} Apps</div>
          </div>
          <div className="bg-zinc-900/40 border border-white/10 p-6 rounded-2xl space-y-2">
            <span className="text-xs font-mono text-zinc-400">Conversion Rate</span>
            <div className="text-2xl font-bold font-mono text-amber-400">4.82%</div>
          </div>
        </div>

        {/* Catalog Management Table */}
        <div className="bg-zinc-900/40 border border-white/10 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h3 className="font-bold text-base">Software Catalog Inventory</h3>
            <span className="text-xs font-mono text-zinc-400">Showing all {SOFTWARE_CATALOG.length} projects</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-black/60 text-zinc-400 uppercase tracking-wider border-b border-white/10">
                <tr>
                  <th className="p-4">App Name</th>
                  <th className="p-4">Version</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Downloads</th>
                  <th className="p-4">Rating</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {SOFTWARE_CATALOG.map((app) => (
                  <tr key={app.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white">{app.name}</td>
                    <td className="p-4 text-zinc-400">v{app.version}</td>
                    <td className="p-4 text-cyan-400">{app.category}</td>
                    <td className="p-4 text-emerald-400 font-bold">₹{app.priceINR}</td>
                    <td className="p-4 text-zinc-300">{app.downloads.toLocaleString()}</td>
                    <td className="p-4 text-amber-400">{app.rating} ★</td>
                    <td className="p-4">
                      <button className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-white text-[11px]">
                        Edit Entry
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
