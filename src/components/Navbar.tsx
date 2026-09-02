import Link from "next/link";
import { Shield, Sparkles, Terminal, Cpu, Download, ArrowRight, Layers, LayoutGrid, Search, Code, Lock } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
              <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-sm">
                ATK
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              ATKlabs
            </span>
            <span className="text-[10px] text-zinc-400 tracking-widest font-mono uppercase">
              Software Systems
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <Link href="/software" className="hover:text-white transition-colors flex items-center gap-1.5">
            <LayoutGrid className="w-4 h-4 text-cyan-400" />
            Software
          </Link>
          <Link href="/portfolio" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Code className="w-4 h-4 text-purple-400" />
            Portfolio & Resume
          </Link>
          <Link href="/request" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Custom Request
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/software"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
          >
            <Search className="w-3.5 h-3.5 text-zinc-400" />
            Browse Apps
          </Link>
          
          <Link
            href="/admin"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-400 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all duration-300"
          >
            <Lock className="w-3.5 h-3.5" />
            CMS Admin
          </Link>
        </div>

      </div>
    </header>
  );
}
