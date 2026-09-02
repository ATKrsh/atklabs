import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black font-sans antialiased">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <h1 className="text-3xl font-extrabold">Privacy Policy & Terms of Service</h1>
        <div className="bg-zinc-900/40 border border-white/10 p-8 rounded-3xl space-y-4 text-xs text-zinc-400 font-mono leading-relaxed">
          <p>Effective Date: July 23, 2026</p>
          <p>
            ATKlabs respects your privacy. All system diagnostics software (including KaunHaiBe, Modern Task Manager, System Monitors, and Aeterna) operates 100% locally on your machine. We do not collect, transmit, or monetize your local process data, telemetry logs, or file access histories.
          </p>
          <p>
            Commercial software licenses purchased through ATKlabs grant perpetual usage for single physical machines. Digital download links are securely generated and verified post-payment confirmation.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
