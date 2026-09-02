import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediaGallery from "@/components/MediaGallery";
import allMediaData from "@/data/all_media.json";
import { Code, Briefcase, GraduationCap, Award, Cpu, Terminal, CheckCircle2, FileText, ArrowUpRight, Video, Image as ImageIcon, Sparkles, FolderArchive, Layers, Play } from "lucide-react";

export default function PortfolioPage() {
  const experiences = [
    {
      role: "Founder & Chief Systems Architect",
      company: "ATKlabs",
      period: "2024 - Present",
      description: "Engineering high-speed Windows desktop diagnostics, Ring0 hardware monitor drivers, real-time process forensics (KaunHaiBe), and local LLM memory systems (Aeterna)."
    },
    {
      role: "Lead Creative Designer & Motion Engineer",
      company: "Epris / Freelance Creative Studio",
      period: "2020 - 2024",
      description: "Directed high-impact brand identities, motion graphics reels, UI/UX designs, and multimedia commercial campaigns for major clients including Delhi University (DU Antardhvani), Dentalkart, Hemophilia Federation India (HFI), and SKA basmati."
    },
    {
      role: "Senior UI/UX & Brand Design Consultant",
      company: "Magical Footsteps & SKA Enterprises",
      period: "2018 - 2020",
      description: "Designed 3D architectural floor plans, branding systems, print publications, and commercial basmati product packaging."
    }
  ];

  const portfolioProjects = [
    {
      title: "DU Antardhvani & Website UI Design",
      category: "UI/UX & Web Design",
      client: "University of Delhi",
      type: "Official Institutional UI & Festival Branding",
      description: "Complete UI design, digital assets, and festival media for Delhi University's premier cultural fest and web portal.",
      tags: ["UI/UX", "Institutional Web Design", "Typography", "Branding"]
    },
    {
      title: "Dentalkart Commercial Motion Graphics",
      category: "Motion Graphics & Video Production",
      client: "Dentalkart",
      type: "4K Promotional Campaign",
      description: "High-octane commercial motion graphics video reel showcasing medical tech e-commerce products.",
      tags: ["After Effects", "Motion Graphics", "3D Animation", "Commercial"]
    },
    {
      title: "Hemophilia Federation (INDIA) Publications",
      category: "Print & Brand Identity",
      client: "Hemophilia Federation India",
      type: "Annual Reports & Campaign Collateral",
      description: "Comprehensive print layout, biannual reports, donation coupons, and awareness campaign design.",
      tags: ["Publication Design", "InDesign", "Print Architecture", "NGO"]
    },
    {
      title: "Magical Footsteps Visual Identity",
      category: "Brand Design & Photography",
      client: "Magical Footsteps Studio",
      type: "Complete Brand & Gallery Suite",
      description: "Curated portfolio layout and visual branding suite featuring over 37 high-resolution creative designs.",
      tags: ["Brand Identity", "Visual Design", "Creative Direction"]
    },
    {
      title: "SKA basmati & Buraq Product Packaging",
      category: "Packaging & 3D Design",
      client: "SKA Enterprises",
      type: "Commercial Packaging & 3D Renders",
      description: "Product packaging, basmati rice label design, 3D table displays, and festive campaign collateral.",
      tags: ["Packaging Design", "3D Product Render", "Branding"]
    },
    {
      title: "Healthation 3D Floor Plan & Interior Architecture",
      category: "3D Visualization & Spatial Design",
      client: "Healthation Center",
      type: "Spatial 3D Floor Plan",
      description: "Architectural 3D render and spatial layout design for modern healthcare facility floors.",
      tags: ["3D Architecture", "Spatial Design", "Interior Render"]
    }
  ];

  const mediaVault = [
    { name: "Dentalkart Commercial Reel (dentalkart.mp4)", size: "63.3 MB", type: "Video" },
    { name: "Dromen Brand Motion (Dromen.mp4 & dromen2.mp4)", size: "49.2 MB", type: "Video" },
    { name: "Paraliburn VFX Reel (paraliburn.mp4)", size: "100.7 MB", type: "Video" },
    { name: "PMJAY Promo Campaign (pmjaypro.mp4)", size: "73.5 MB", type: "Video" },
    { name: "DU Antardhvani Animated GIF", size: "13.7 MB", type: "Motion GIF" },
    { name: "Epris Brand Identity Shoot (atkrsh-epris.jpeg)", size: "46.7 KB", type: "Image" },
    { name: "Healthation 3D Render (Healthation Floor3D.jpg)", size: "373 KB", type: "3D Render" }
  ];

  const skills = [
    "C++ / Win32 API / Native NT", "Python 3.12 / PyQt5 / WMI", "Rust / HNSW Vector Search", "TypeScript / Next.js / Tailwind",
    "Motion Graphics / After Effects", "3D Render & Spatial Design", "UI/UX Architecture", "Local LLM Engines (Ollama / Qwen)"
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Hero Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Resume & Portfolio Archives</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">AtkrshH — Lead Architect & Creative Director</h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Bridging low-level Windows systems engineering (C++, Rust, PyQt5) with high-end creative design, 3D visualization, and motion graphics.
          </p>
        </div>

        {/* Engineering & Creative Experience Timeline */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            Experience & Leadership Timeline
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-zinc-900/40 border border-white/10 p-6 rounded-2xl space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base font-bold text-white">{exp.role} — <span className="text-cyan-400">{exp.company}</span></h3>
                  <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Portfolio Projects (from ATK_DATA) */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Client & Studio Showcase</span>
            <h2 className="text-2xl font-bold mt-1">Featured Creative & Architectural Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((proj, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-white/10 p-6 rounded-2xl space-y-4 hover:border-white/20 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full uppercase">
                    {proj.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">{proj.title}</h3>
                  <p className="text-xs text-cyan-400 font-mono">Client: {proj.client}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">{proj.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ATK_DATA Complete Media Gallery (All 126 Images & Motion Videos) */}
        <MediaGallery mediaItems={allMediaData as any} />

        {/* Core Skills Summary */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            Engineering & Creative Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-zinc-300">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
