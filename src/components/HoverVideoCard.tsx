"use client";

import { useRef } from "react";
import { Play } from "lucide-react";

interface HoverVideoCardProps {
  title: string;
  category: string;
  videoSrc: string;
  description: string;
  size: string;
}

export default function HoverVideoCard({ title, category, videoSrc, description, size }: HoverVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-zinc-900/60 border border-white/10 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-xl flex flex-col justify-between"
    >
      {/* Video Container */}
      <div className="relative aspect-video bg-black overflow-hidden border-b border-white/10">
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Floating Hover Indicator Badge */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[10px] font-mono text-cyan-400 flex items-center gap-1.5 opacity-90 group-hover:opacity-0 transition-opacity">
          <Play className="w-3 h-3 fill-cyan-400" />
          <span>Hover to Play</span>
        </div>

        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[10px] font-mono text-zinc-300">
          {size}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-2">
        <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
