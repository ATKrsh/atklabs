"use client";

import { useState } from "react";
import Link from "next/link";
import { SOFTWARE_CATALOG, SoftwareProject } from "@/data/software";
import { Shield, Sparkles, Download, Star, ArrowRight, Eye, Heart, Activity, CheckCircle2, Lock, Cpu, Search, Filter } from "lucide-react";

export default function SoftwareGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "System Utilities", "Productivity", "Multimedia", "Developer Tools", "Widgets"];

  const filteredProjects = SOFTWARE_CATALOG.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      
      {/* Search & Filter Control Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-zinc-900/60 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search apps, tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-black/60 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((app) => (
          <div
            key={app.id}
            className="group relative bg-zinc-900/40 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between"
          >
            {/* Top Header */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${app.gradient} p-0.5 shadow-lg`}>
                    <div className="w-full h-full bg-black/90 rounded-[10px] flex items-center justify-center font-mono font-bold text-white text-sm">
                      {app.name.substring(0, 2).toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {app.name}
                    </h3>
                    <span className="text-[11px] text-zinc-400 font-mono">v{app.version}</span>
                  </div>
                </div>

                {app.badge && (
                  <span className="text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {app.badge}
                  </span>
                )}
              </div>

              <p className="text-xs text-zinc-300 font-medium mb-3 leading-snug">
                {app.tagline}
              </p>

              <p className="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
                {app.shortDescription}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {app.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-300 px-2 py-0.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Price */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-500 block">Single License</span>
                <span className="text-lg font-bold font-mono text-white">₹{app.priceINR}</span>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/software/${app.id}`}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors flex items-center gap-1.5"
                >
                  Explore Page
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-zinc-900/30 rounded-2xl border border-white/10">
          <p className="text-zinc-400 text-sm font-mono">No software applications found matching "{searchQuery}".</p>
        </div>
      )}

    </div>
  );
}
