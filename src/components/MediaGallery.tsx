"use client";

import { useState, useMemo, useRef } from "react";
import { 
  Video, 
  Image as ImageIcon, 
  Folder, 
  Search, 
  Play, 
  X, 
  Maximize2, 
  Download, 
  Filter, 
  Layers, 
  Film, 
  Sparkles,
  ChevronRight,
  Info
} from "lucide-react";
import MediaCard from "./MediaCard";

export interface MediaItem {
  id: number;
  title: string;
  fileName: string;
  originalName: string;
  type: "video" | "image";
  category: string;
  size: string;
  src: string;
}

interface MediaGalleryProps {
  mediaItems: MediaItem[];
}

const CATEGORY_NAMES: Record<string, { label: string; desc: string }> = {
  "ATK_DATA": { 
    label: "Root ATK_DATA Vault", 
    desc: "Core brand renders, master video cuts, and key high-res graphics." 
  },
  "Central Hindi Training Institute": { 
    label: "Central Hindi Training Institute", 
    desc: "Official institutional layout designs and publication collateral." 
  },
  "DU website designs": { 
    label: "DU Antardhvani & Web UI", 
    desc: "Delhi University premier festival branding and website UI components." 
  },
  "Epris": { 
    label: "Epris Creative Studio", 
    desc: "Brand identity shoots, vector artwork, and creative portfolio pieces." 
  },
  "Hemophilia Federation (INDIA)": { 
    label: "Hemophilia Federation India (HFI)", 
    desc: "NGO publication layouts, annual reports, coupons, and awareness flyers." 
  },
  "Magical Footsteps": { 
    label: "Magical Footsteps Gallery", 
    desc: "Extensive studio photo suite, creative design catalog, and portrait art." 
  },
  "SKA": { 
    label: "SKA Enterprises & Buraq", 
    desc: "Commercial packaging designs, basmati rice 3D renders, and festive labels." 
  },
  "Video": { 
    label: "Motion Reels & Commercial Videos", 
    desc: "High-octane After Effects video reels, promotional campaigns, and VFX shots." 
  }
};

export default function MediaGallery({ mediaItems }: MediaGalleryProps) {
  const [activeTab, setActiveTab] = useState<"all" | "video" | "image">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // Counts
  const videoCount = useMemo(() => mediaItems.filter(i => i.type === "video").length, [mediaItems]);
  const imageCount = useMemo(() => mediaItems.filter(i => i.type === "image").length, [mediaItems]);

  // Categories list & counts
  const categoriesWithCounts = useMemo(() => {
    const map: Record<string, { total: number; video: number; image: number }> = {};
    mediaItems.forEach(item => {
      if (!map[item.category]) {
        map[item.category] = { total: 0, video: 0, image: 0 };
      }
      map[item.category].total += 1;
      if (item.type === "video") map[item.category].video += 1;
      else map[item.category].image += 1;
    });
    return map;
  }, [mediaItems]);

  // Filtered items based on Tab, Category, and Search
  const filteredItems = useMemo(() => {
    return mediaItems.filter(item => {
      // Type Tab filter
      if (activeTab === "video" && item.type !== "video") return false;
      if (activeTab === "image" && item.type !== "image") return false;

      // Category Pill filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) return false;

      // Search Query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchName = item.originalName.toLowerCase().includes(q);
        const matchCat = item.category.toLowerCase().includes(q);
        if (!matchTitle && !matchName && !matchCat) return false;
      }

      return true;
    });
  }, [mediaItems, activeTab, selectedCategory, searchQuery]);

  // Group filtered items by category for rendering folder sections
  const groupedSections = useMemo(() => {
    const groups: { categoryKey: string; items: MediaItem[] }[] = [];
    const categoryKeys = Object.keys(categoriesWithCounts);

    categoryKeys.forEach(catKey => {
      const itemsInGroup = filteredItems.filter(item => item.category === catKey);
      if (itemsInGroup.length > 0) {
        groups.push({
          categoryKey: catKey,
          items: itemsInGroup
        });
      }
    });

    return groups;
  }, [filteredItems, categoriesWithCounts]);

  return (
    <div className="space-y-10">
      
      {/* Header & Controls Panel */}
      <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-2xl">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                ATK_DATAF Media Archive
              </span>
              <span className="text-xs font-mono text-zinc-400">126 Total Assets</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Media & Creative Vault Showcase
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Browse brand designs, 3D architectural renders, publication layouts, and motion videos grouped by folder.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search assets by name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/60 border border-white/15 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Media Type Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div className="flex items-center p-1 bg-black/80 border border-white/10 rounded-2xl w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all flex items-center justify-center gap-2 ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Assets ({mediaItems.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("video")}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all flex items-center justify-center gap-2 ${
                activeTab === "video"
                  ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Videos & Motion ({videoCount})</span>
            </button>

            <button
              onClick={() => setActiveTab("image")}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all flex items-center justify-center gap-2 ${
                activeTab === "image"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Images & Renders ({imageCount})</span>
            </button>
          </div>

          {/* Results Summary */}
          <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
            <span>Showing <strong className="text-cyan-400">{filteredItems.length}</strong> matching assets</span>
            {selectedCategory !== "all" && (
              <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-zinc-300">
                Folder: {CATEGORY_NAMES[selectedCategory]?.label || selectedCategory}
              </span>
            )}
          </div>

        </div>

        {/* Folder Category Pills */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
            <Filter className="w-3 h-3 text-cyan-400" />
            <span>Filter by ATK_DATAF Folder:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 border ${
                selectedCategory === "all"
                  ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300 font-bold"
                  : "bg-black/40 border-white/10 text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              <Folder className="w-3.5 h-3.5" />
              <span>All Folders ({mediaItems.length})</span>
            </button>

            {Object.entries(categoriesWithCounts).map(([catKey, counts]) => {
              const info = CATEGORY_NAMES[catKey] || { label: catKey };
              const isSelected = selectedCategory === catKey;
              const countInTab = activeTab === "video" ? counts.video : activeTab === "image" ? counts.image : counts.total;
              
              if (countInTab === 0) return null;

              return (
                <button
                  key={catKey}
                  onClick={() => setSelectedCategory(catKey)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 border ${
                    isSelected
                      ? "bg-purple-500/20 border-purple-500/50 text-purple-300 font-bold"
                      : "bg-black/40 border-white/10 text-zinc-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <Folder className="w-3.5 h-3.5 text-purple-400" />
                  <span>{info.label}</span>
                  <span className="text-[10px] opacity-75 bg-white/10 px-1.5 py-0.2 rounded-full">
                    {countInTab}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Grouped Folder Sections */}
      {groupedSections.length === 0 ? (
        <div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-12 text-center space-y-3">
          <Info className="w-8 h-8 text-zinc-500 mx-auto" />
          <h3 className="text-lg font-bold text-white">No media items found</h3>
          <p className="text-xs text-zinc-400">
            No assets match your active media tab or search query filter.
          </p>
          <button
            onClick={() => {
              setActiveTab("all");
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-xs font-mono text-cyan-400 rounded-xl transition-all"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {groupedSections.map(({ categoryKey, items }) => {
            const catInfo = CATEGORY_NAMES[categoryKey] || {
              label: categoryKey,
              desc: "Folder assets from ATK_DATAF directory."
            };

            const videoCountInGroup = items.filter(i => i.type === "video").length;
            const imageCountInGroup = items.filter(i => i.type === "image").length;

            return (
              <section key={categoryKey} className="space-y-6">
                
                {/* Folder Group Section Header */}
                <div className="bg-gradient-to-r from-zinc-900/80 via-zinc-900/40 to-transparent border-l-4 border-cyan-500 p-4 sm:p-5 rounded-r-2xl border-y border-r border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <Folder className="w-5 h-5 text-cyan-400 fill-cyan-500/20" />
                      <h3 className="text-lg font-extrabold text-white tracking-wide">
                        {catInfo.label}
                      </h3>
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                        {items.length} {items.length === 1 ? "Asset" : "Assets"}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed pl-7">
                      {catInfo.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pl-7 sm:pl-0">
                    {videoCountInGroup > 0 && (
                      <span className="text-[10px] font-mono bg-purple-500/10 border border-purple-500/20 text-purple-300 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Video className="w-3 h-3 text-purple-400" />
                        {videoCountInGroup} Videos
                      </span>
                    )}
                    {imageCountInGroup > 0 && (
                      <span className="text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <ImageIcon className="w-3 h-3 text-emerald-400" />
                        {imageCountInGroup} Images
                      </span>
                    )}
                  </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((media) => (
                    <MediaCard
                      key={media.id}
                      title={media.title}
                      category={media.category}
                      type={media.type}
                      mediaSrc={media.src}
                      description={`File: ${media.originalName}`}
                      size={media.size}
                      onClick={() => setSelectedMedia(media)}
                    />
                  ))}
                </div>

              </section>
            );
          })}
        </div>
      )}

      {/* Lightbox / Preview Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedMedia(null)}
        >
          <div 
            className="relative bg-zinc-950 border border-white/15 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
              <div className="flex items-center gap-3">
                {selectedMedia.type === "video" ? (
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Video className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                )}
                <div>
                  <h3 className="text-base font-bold text-white">{selectedMedia.title}</h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    Folder: {CATEGORY_NAMES[selectedMedia.category]?.label || selectedMedia.category} • Size: {selectedMedia.size}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMedia(null)}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Preview Area */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[65vh] p-4 overflow-hidden">
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-zinc-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-zinc-400">
                Original Filename: <span className="text-white">{selectedMedia.originalName}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedMedia.src}
                  download={selectedMedia.originalName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold flex items-center gap-2 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
