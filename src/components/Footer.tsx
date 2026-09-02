import Link from "next/link";
import { Shield, Mail, ArrowUpRight, Terminal, Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-white">
                  ATK
                </div>
              </div>
              <span className="font-bold text-white text-base">ATKlabs</span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Engineering high-speed Windows desktop utilities, real-time monitors, and intelligent AI tools built for extreme performance.
            </p>
            <div className="flex items-center gap-3 pt-2 text-zinc-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1 text-xs">
                <Globe className="w-3.5 h-3.5" /> GitHub
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1 text-xs">
                <Share2 className="w-3.5 h-3.5" /> Socials
              </a>
              <a href="mailto:contact@atklabs.io" className="hover:text-white transition-colors flex items-center gap-1 text-xs">
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </div>
          </div>

          {/* Featured Software */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Featured Software
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/software/kaunhaibe" className="hover:text-cyan-400 transition-colors">KaunHaiBe Anomaly Monitor</Link></li>
              <li><Link href="/software/moderntaskmanager" className="hover:text-cyan-400 transition-colors">Modern Task Manager</Link></li>
              <li><Link href="/software/systemmonitors" className="hover:text-cyan-400 transition-colors">System Monitors Suite</Link></li>
              <li><Link href="/software/captureme" className="hover:text-cyan-400 transition-colors">CaptureME 4K</Link></li>
              <li><Link href="/software/aeterna" className="hover:text-cyan-400 transition-colors">Aeterna AI Memory Engine</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Platform & Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Resume & Portfolio</Link></li>
              <li><Link href="/request" className="hover:text-white transition-colors">Custom Software Request</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About ATKlabs</Link></li>
              <li><Link href="/admin" className="hover:text-white transition-colors">Admin CMS</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy & Terms</Link></li>
            </ul>
          </div>

          {/* System Status */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Infrastructure Status
            </h4>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Payment Gateway</span>
                <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Operational</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Download CDN</span>
                <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Operational</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">AI Diagnostic Engine</span>
                <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">qwen2.5:14b Ready</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} ATKlabs. All rights reserved. Crafted for extreme performance.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-zinc-400 transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
