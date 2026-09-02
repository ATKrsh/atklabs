import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black font-sans antialiased">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">About ATKlabs</span>
          <h1 className="text-4xl font-extrabold tracking-tight">Engineering Without Compromise</h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            ATKlabs was founded to create high-speed Windows desktop utilities, process control solutions, and offline AI agent memory systems built for extreme performance.
          </p>
        </div>

        <div className="bg-zinc-900/40 border border-white/10 p-8 rounded-3xl space-y-6 text-sm text-zinc-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white">Our Philosophy</h2>
          <p>
            Modern operating systems have become bloated with unnecessary background telemetries, slow web-wrapper interfaces, and high latency memory footprints. ATKlabs builds standalone, single-file native utilities compiled with optimized C++, Rust, and Python routines.
          </p>
          <p>
            Every software application in our catalog is engineered to execute at Task Manager-level speeds (0.16s scan latencies), run completely offline, and respect user privacy.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
