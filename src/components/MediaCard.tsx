"use client";

import { useRef } from "react";
import { Play, Image as ImageIcon } from "lucide-react";

interface MediaCardProps {
  title: string;
  category: string;
  mediaSrc: string;
  type: "video" | "image";
  description: string;
  size: string;
  onClick?: () => void;
}

export default function MediaCard({ title, category, mediaSrc, type, description, size, onClick }: MediaCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (type === "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-zinc-900/60 border border-white/10 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-xl flex flex-col justify-between cursor-pointer"
    >
      {/* Media Preview Container */}
      <div className="relative aspect-video bg-black overflow-hidden border-b border-white/10 flex items-center justify-center">
        {type === "video" ? (
          <video
            ref={videoRef}
            src={mediaSrc}
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        ) : (
          <img
            src={mediaSrc}
            alt={title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transition-transform"
          />
        )}

        {/* Floating Type Badge */}
        {type === "video" ? (
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[10px] font-mono text-cyan-400 flex items-center gap-1.5 opacity-90 group-hover:opacity-0 transition-opacity">
            <Play className="w-3 h-3 fill-cyan-400" />
            <span>Hover to Play</span>
          </div>
        ) : (
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[10px] font-mono text-purple-400 flex items-center gap-1.5">
            <ImageIcon className="w-3 h-3" />
            <span>Image Asset</span>
          </div>
        )}

        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[10px] font-mono text-zinc-300">
          {size}
        </div>
      </div>

      {/* Card Details */}
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
