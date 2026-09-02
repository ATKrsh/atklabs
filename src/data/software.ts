export interface SoftwareProject {
  id: string;
  name: string;
  tagline: string;
  category: "System Utilities" | "Productivity" | "Multimedia" | "Developer Tools" | "Widgets";
  version: string;
  releaseDate: string;
  priceINR: number;
  rating: number;
  downloads: number;
  views: number;
  likes: number;
  featured: boolean;
  badge?: string;
  iconName: string;
  gradient: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
  systemRequirements: {
    os: string;
    ram: string;
    disk: string;
    arch: string;
  };
  changelog: { version: string; date: string; changes: string[] }[];
  faqs: { question: string; answer: string }[];
  screenshots: string[];
  videoUrl?: string;
}

export const SOFTWARE_CATALOG: SoftwareProject[] = [
  {
    id: "kaunhaibe",
    name: "KaunHaiBe",
    tagline: "Real-time System Anomaly & Resource Access Forensic Monitor",
    category: "System Utilities",
    version: "1.2.0",
    releaseDate: "2026-07-23",
    priceINR: 499,
    rating: 4.9,
    downloads: 14200,
    views: 68500,
    likes: 3820,
    featured: true,
    badge: "BESTSELLER",
    iconName: "ShieldAlert",
    gradient: "from-emerald-500 to-green-700",
    shortDescription: "Task Manager-level speed monitoring for Windows processes, security events, DPC/interrupts, USB/Input devices, and local AI system diagnostics.",
    fullDescription: "KaunHaiBe is a high-speed system diagnostics and security monitoring suite designed for Windows 11 Pro. It monitors process CPU/GPU/Memory metrics at 0.16s latency, tracks real-time file access by processes, captures security and credential permissions, tracks USB hardware states, and features an integrated offline AI diagnostics terminal powered by qwen2.5:14b.",
    features: [
      "Task Manager-speed process scan (0.16s per refresh cycle)",
      "Real-time process file & credential access tracking",
      "Differential DPC & interrupt rate tracking (OK / SPIKE alerts)",
      "Instant USB & Input hardware device status monitoring",
      "Embedded Matrix Terminal #1: Live Problem Tracker",
      "Embedded Matrix Terminal #2: Offline AI Diagnostics (qwen2.5:14b)",
      "Font size slider controls (8px - 24px) & custom filter rules",
      "Standalone 55MB single-file executable architecture"
    ],
    techStack: ["Python 3.12", "PyQt5", "WMI", "psutil", "Ollama REST", "pyqtgraph"],
    systemRequirements: {
      os: "Windows 10 / 11 64-bit",
      ram: "4 GB minimum (8 GB recommended for AI terminal)",
      disk: "150 MB free space",
      arch: "x86_64"
    },
    changelog: [
      {
        version: "1.2.0",
        date: "2026-07-23",
        changes: ["Fixed WMI thread COM initialization", "Added dynamic Font Size Sliders", "Embedded Matrix Terminals into Master Dashboard"]
      },
      {
        version: "1.1.0",
        date: "2026-07-15",
        changes: ["Integrated qwen2.5:14b AI Engine", "Optimized process collector latency by 10x"]
      }
    ],
    faqs: [
      {
        question: "Does KaunHaiBe require internet access?",
        answer: "No. KaunHaiBe operates 100% offline using local Windows APIs and an offline Ollama LLM endpoint."
      },
      {
        question: "Does it support Windows 11 25H2?",
        answer: "Yes, fully tested and optimized for Windows 11 25H2 and earlier builds."
      }
    ],
    screenshots: [
      "/images/software/kaunhaibe-1.jpg",
      "/images/software/kaunhaibe-2.jpg"
    ]
  },
  {
    id: "aeterna",
    name: "Aeterna",
    tagline: "High-Performance Autonomous Memory & Intelligence Engine",
    category: "Developer Tools",
    version: "2.4.1",
    releaseDate: "2026-06-18",
    priceINR: 999,
    rating: 4.8,
    downloads: 9800,
    views: 45000,
    likes: 2450,
    featured: true,
    badge: "FEATURED",
    iconName: "BrainCircuit",
    gradient: "from-purple-500 to-indigo-700",
    shortDescription: "Persistent cognitive memory and vector indexing engine built for local LLM agents and multi-agent systems.",
    fullDescription: "Aeterna provides autonomous agent frameworks with lightning-fast semantic vector storage, long-term memory retrieval, and memory compaction.",
    features: [
      "HNSW vector search with <2ms retrieval latency",
      "Automatic context summarization & memory compaction",
      "Multi-agent state synchronization via IPC",
      "Native python & Node.js bindings"
    ],
    techStack: ["Rust", "Python", "SQLite-VSS", "FastAPI"],
    systemRequirements: {
      os: "Windows / macOS / Linux",
      ram: "2 GB",
      disk: "100 MB",
      arch: "x64 / arm64"
    },
    changelog: [
      {
        version: "2.4.1",
        date: "2026-06-18",
        changes: ["Added zero-copy memory mapping", "Reduced vector query RAM overhead"]
      }
    ],
    faqs: [
      {
        question: "Can I connect Aeterna to LangChain or AutoGen?",
        answer: "Yes, Aeterna provides standard OpenAI-compatible and Python SDK wrappers."
      }
    ],
    screenshots: ["/images/software/aeterna-1.jpg"]
  },
  {
    id: "btabswitch",
    name: "BTabSwitch",
    tagline: "Browser Tab & Session Controller for Power Users",
    category: "Productivity",
    version: "1.0.4",
    releaseDate: "2026-05-10",
    priceINR: 299,
    rating: 4.7,
    downloads: 18400,
    views: 52000,
    likes: 3100,
    featured: false,
    iconName: "Layers",
    gradient: "from-cyan-500 to-blue-600",
    shortDescription: "Instant hotkey browser tab manager and workspace isolator across Chrome, Edge, and Firefox.",
    fullDescription: "Switch between hundreds of open browser tabs in <10ms with fuzzy match search, session grouping, and automatic memory tab suspension.",
    features: [
      "Fuzzy search over 500+ open browser tabs",
      "Tab memory suspension saving up to 60% RAM",
      "Custom hotkey bindings and workspace grouping"
    ],
    techStack: ["TypeScript", "WebExtension API", "React"],
    systemRequirements: { os: "Chrome / Edge / Firefox / Brave", ram: "512 MB", disk: "20 MB", arch: "Any" },
    changelog: [{ version: "1.0.4", date: "2026-05-10", changes: ["Added Firefox Manifest V3 support"] }],
    faqs: [{ question: "Is my browsing data private?", answer: "All tab data remains 100% local on your browser." }],
    screenshots: ["/images/software/btabswitch-1.jpg"]
  },
  {
    id: "captureme",
    name: "CaptureME",
    tagline: "Ultra-Fast Screen Capture & Annotation Suite",
    category: "Multimedia",
    version: "3.1.0",
    releaseDate: "2026-04-22",
    priceINR: 399,
    rating: 4.9,
    downloads: 25600,
    views: 89000,
    likes: 5400,
    featured: true,
    badge: "POPULAR",
    iconName: "Camera",
    gradient: "from-pink-500 to-rose-600",
    shortDescription: "Instant screenshot capture, screen recording, OCR text extraction, and cloud link sharing.",
    fullDescription: "CaptureME is a lightweight Windows utility that lets you capture screens, record 4K 60FPS video clips, extract text from images using local OCR, and auto-upload to your private cloud storage.",
    features: [
      "Instant area screenshot with floating annotation palette",
      "Built-in local OCR engine for text extraction",
      "GPU-accelerated MP4/GIF screen recorder",
      "Custom S3/R2 cloud storage uploader"
    ],
    techStack: ["C#", ".NET 8", "WPF", "DirectX"],
    systemRequirements: { os: "Windows 10 / 11", ram: "2 GB", disk: "50 MB", arch: "x64" },
    changelog: [{ version: "3.1.0", date: "2026-04-22", changes: ["Added 4K 60fps NVENC encoder acceleration"] }],
    faqs: [{ question: "Can I record audio?", answer: "Yes, it records system audio and microphone simultaneously." }],
    screenshots: ["/images/software/captureme-1.jpg"]
  },
  {
    id: "dogtalk",
    name: "Dog Talk",
    tagline: "AI Canine Vocalization & Behavioral Analyzer",
    category: "Multimedia",
    version: "1.3.2",
    releaseDate: "2026-03-14",
    priceINR: 699,
    rating: 4.6,
    downloads: 8200,
    views: 34000,
    likes: 1950,
    featured: false,
    iconName: "Dog",
    gradient: "from-amber-500 to-orange-600",
    shortDescription: "Acoustic ML model that decodes dog barks and whines into mood and alert classifications.",
    fullDescription: "Dog Talk processes live audio inputs using a specialized audio spectrogram neural net to detect stress, excitement, territorial alerts, and playfulness in dogs.",
    features: [
      "Real-time bark spectrogram classification",
      "Pet mood logger and notification alerts",
      "Custom acoustic calibration per dog breed"
    ],
    techStack: ["Python", "TensorFlow Lite", "PyQt5"],
    systemRequirements: { os: "Windows / macOS / Android", ram: "2 GB", disk: "120 MB", arch: "x64 / arm64" },
    changelog: [{ version: "1.3.2", date: "2026-03-14", changes: ["Improved bark detection accuracy to 94%"] }],
    faqs: [{ question: "Does it work with puppies?", answer: "Yes, the neural model includes puppy acoustic profiles." }],
    screenshots: ["/images/software/dogtalk-1.jpg"]
  },
  {
    id: "drive_toggler",
    name: "Drive_Toggler",
    tagline: "Instant Windows Disk & Partition Hider",
    category: "System Utilities",
    version: "2.0.0",
    releaseDate: "2026-02-28",
    priceINR: 199,
    rating: 4.8,
    downloads: 12100,
    views: 41000,
    likes: 2200,
    featured: false,
    iconName: "HardDrive",
    gradient: "from-blue-500 to-indigo-600",
    shortDescription: "One-click security tool to mount, unmount, and lock drives from Windows File Explorer.",
    fullDescription: "Drive_Toggler instantly toggles visibility and access permissions for internal/external hard drives and USB drives to protect sensitive files from unauthorized access.",
    features: [
      "One-click drive letter hiding in Explorer",
      "PIN & Password drive lock authorization",
      "Command-line stealth mode toggling"
    ],
    techStack: ["C++", "Win32 API", "WinUSB"],
    systemRequirements: { os: "Windows 10 / 11", ram: "512 MB", disk: "10 MB", arch: "x86 / x64" },
    changelog: [{ version: "2.0.0", date: "2026-02-28", changes: ["Added bitlocker partition status integration"] }],
    faqs: [{ question: "Will my data be lost when hiding a drive?", answer: "No, files remain completely untouched." }],
    screenshots: ["/images/software/drivetoggler-1.jpg"]
  },
  {
    id: "inputload",
    name: "InputLoad",
    tagline: "Input Latency & Polling Rate Diagnostics Tool",
    category: "System Utilities",
    version: "1.1.0",
    releaseDate: "2026-01-19",
    priceINR: 249,
    rating: 4.9,
    downloads: 15400,
    views: 49000,
    likes: 3400,
    featured: false,
    iconName: "MousePointer",
    gradient: "from-red-500 to-orange-600",
    shortDescription: "Precision 1000Hz+ mouse and keyboard polling rate analyzer and input delay benchmark.",
    fullDescription: "InputLoad monitors high-frequency HID input interrupts, measuring mouse polling consistency, keyboard debounce jitter, and DPC input latency bottlenecks.",
    features: [
      "8000Hz polling rate real-time histogram",
      "Keyboard key debounce jitter test",
      "DPC interrupt latency spikes detector"
    ],
    techStack: ["C++", "RawInput API", "DirectInput"],
    systemRequirements: { os: "Windows 10 / 11", ram: "1 GB", disk: "15 MB", arch: "x64" },
    changelog: [{ version: "1.1.0", date: "2026-01-19", changes: ["Support for 8KHz gaming mice polling rates"] }],
    faqs: [{ question: "Does it work with wireless mice?", answer: "Yes, both 2.4GHz dongles and Bluetooth inputs are measured." }],
    screenshots: ["/images/software/inputload-1.jpg"]
  },
  {
    id: "iwrite",
    name: "iWrite",
    tagline: "Distraction-Free Minimalist AI Writing Studio",
    category: "Productivity",
    version: "2.2.0",
    releaseDate: "2025-12-05",
    priceINR: 599,
    rating: 4.8,
    downloads: 19200,
    views: 61000,
    likes: 4100,
    featured: true,
    badge: "EDITOR'S CHOICE",
    iconName: "FileText",
    gradient: "from-emerald-600 to-teal-800",
    shortDescription: "Zen Markdown editor with offline AI copilot, typography controls, and PDF/HTML export.",
    fullDescription: "iWrite offers a serene Markdown writing environment equipped with inline AI continuation, grammar polishing, custom themes, and focus soundscapes.",
    features: [
      "Zen full-screen dark canvas with typewriter mode",
      "Offline local LLM text auto-completion",
      "Export to PDF, EPUB, HTML, and Markdown"
    ],
    techStack: ["Tauri", "React", "Rust", "KaTeX"],
    systemRequirements: { os: "Windows / macOS / Linux", ram: "2 GB", disk: "80 MB", arch: "x64 / arm64" },
    changelog: [{ version: "2.2.0", date: "2025-12-05", changes: ["Added local Ollama model integration"] }],
    faqs: [{ question: "Where are my documents stored?", answer: "All files are saved as plain text locally on your disk." }],
    screenshots: ["/images/software/iwrite-1.jpg"]
  },
  {
    id: "moderntaskmanager",
    name: "Modern Task Manager",
    tagline: "Sleek GPU & CPU Process Controller for Windows",
    category: "System Utilities",
    version: "1.5.0",
    releaseDate: "2025-11-12",
    priceINR: 449,
    rating: 4.9,
    downloads: 28900,
    views: 94000,
    likes: 6200,
    featured: true,
    badge: "POPULAR",
    iconName: "Activity",
    gradient: "from-violet-600 to-fuchsia-700",
    shortDescription: "Fluent Design Task Manager replacement with real-time graphs and kill tree management.",
    fullDescription: "Modern Task Manager delivers a fluid dark-mode process manager with GPU VRAM tracking, per-core CPU heatmaps, process tree termination, and startup program management.",
    features: [
      "Fluent Dark Mode UI with animated performance graphs",
      "Process tree kill & affinity core assignment",
      "Startup program impact & service manager"
    ],
    techStack: ["C#", "WinUI 3", "Windows App SDK"],
    systemRequirements: { os: "Windows 11 (21H2 or higher)", ram: "2 GB", disk: "45 MB", arch: "x64" },
    changelog: [{ version: "1.5.0", date: "2025-11-12", changes: ["Added DirectX 12 VRAM breakdown"] }],
    faqs: [{ question: "Can it replace default Ctrl+Shift+Esc?", answer: "Yes, includes an optional registry hook." }],
    screenshots: ["/images/software/moderntaskmanager-1.jpg"]
  },
  {
    id: "netwidget",
    name: "Net Widget",
    tagline: "Always-On Floating Network Speedometer",
    category: "Widgets",
    version: "2.1.0",
    releaseDate: "2025-10-01",
    priceINR: 149,
    rating: 4.8,
    downloads: 32000,
    views: 87000,
    likes: 5100,
    featured: false,
    iconName: "Wifi",
    gradient: "from-sky-500 to-indigo-600",
    shortDescription: "Ultra-compact desktop widget displaying real-time upload/download speeds, ping, and data usage.",
    fullDescription: "Net Widget sits subtly on your taskbar or desktop, showing real-time network throughput, ping latencies to major DNS servers, and monthly bandwidth caps.",
    features: [
      "Subtle taskbar & desktop overlay modes",
      "Ping latency graph for gaming connection health",
      "Data usage cap warnings and session statistics"
    ],
    techStack: ["C++", "Qt6", "WinINet API"],
    systemRequirements: { os: "Windows 10 / 11", ram: "256 MB", disk: "12 MB", arch: "x86 / x64" },
    changelog: [{ version: "2.1.0", date: "2025-10-01", changes: ["Added Wi-Fi signal quality indicator"] }],
    faqs: [{ question: "Does it use high CPU?", answer: "No, CPU usage is under 0.05%." }],
    screenshots: ["/images/software/netwidget-1.jpg"]
  },
  {
    id: "nomadwidget",
    name: "Nomad Widget",
    tagline: "System Hardware Vitals Desktop Suite",
    category: "Widgets",
    version: "1.0.8",
    releaseDate: "2025-08-20",
    priceINR: 199,
    rating: 4.7,
    downloads: 14500,
    views: 42000,
    likes: 2700,
    featured: false,
    iconName: "Gauge",
    gradient: "from-emerald-500 to-cyan-600",
    shortDescription: "Minimalist desktop widgets for CPU, GPU, RAM, battery, and disk storage.",
    fullDescription: "Customizable translucent widgets for Windows desktop showing key metrics like CPU temp, GPU fan speed, RAM usage, and battery discharge rates.",
    features: [
      "Customizable glassmorphic widget themes",
      "Low resource footprint (<15MB RAM)",
      "Multi-monitor snap support"
    ],
    techStack: ["Python", "PyQt5", "psutil"],
    systemRequirements: { os: "Windows 10 / 11", ram: "512 MB", disk: "25 MB", arch: "x64" },
    changelog: [{ version: "1.0.8", date: "2025-08-20", changes: ["Added Ryzen CPU temperature support"] }],
    faqs: [{ question: "Can I resize widgets?", answer: "Yes, widgets support smooth scaling." }],
    screenshots: ["/images/software/nomadwidget-1.jpg"]
  },
  {
    id: "processcleaner",
    name: "Process Cleaner",
    tagline: "Automated Idle Process & RAM Optimizer",
    category: "System Utilities",
    version: "2.3.0",
    releaseDate: "2025-07-04",
    priceINR: 349,
    rating: 4.9,
    downloads: 21000,
    views: 73000,
    likes: 4800,
    featured: false,
    iconName: "Zap",
    gradient: "from-yellow-500 to-amber-600",
    shortDescription: "Frees cached standby RAM and suspends background bloatware processes automatically.",
    fullDescription: "Process Cleaner continuously monitors process activity, flushing working sets and suspending background bloat when gaming or launching heavy applications.",
    features: [
      "Smart working set memory trimming",
      "Game mode: auto-suspend background apps",
      "Whitelist process protection"
    ],
    techStack: ["C++", "Win32 API", "Native NT API"],
    systemRequirements: { os: "Windows 10 / 11", ram: "512 MB", disk: "15 MB", arch: "x64" },
    changelog: [{ version: "2.3.0", date: "2025-07-04", changes: ["Added automated standby list purging"] }],
    faqs: [{ question: "Will it close active work?", answer: "No, active foreground windows are never touched." }],
    screenshots: ["/images/software/processcleaner-1.jpg"]
  },
  {
    id: "quicktoggle",
    name: "QuickToggle",
    tagline: "Windows System Setting Hotkey Switcher",
    category: "Productivity",
    version: "1.2.0",
    releaseDate: "2025-05-18",
    priceINR: 199,
    rating: 4.8,
    downloads: 16700,
    views: 48000,
    likes: 3200,
    featured: false,
    iconName: "Sliders",
    gradient: "from-rose-500 to-red-600",
    shortDescription: "Instant hotkeys for Dark Mode, Bluetooth, Wi-Fi, Audio Device, and Resolution.",
    fullDescription: "Bind custom keyboard shortcuts to toggle system settings instantly without navigating through Windows Settings menus.",
    features: [
      "One-click audio output device switcher",
      "Instant resolution & refresh rate toggle",
      "Dark/Light system theme hotkey"
    ],
    techStack: ["C#", ".NET 8", "CoreAudio API"],
    systemRequirements: { os: "Windows 10 / 11", ram: "512 MB", disk: "20 MB", arch: "x64" },
    changelog: [{ version: "1.2.0", date: "2025-05-18", changes: ["Added multi-monitor HDR toggle support"] }],
    faqs: [{ question: "Can I customize hotkeys?", answer: "Yes, full hotkey mapping support is included." }],
    screenshots: ["/images/software/quicktoggle-1.jpg"]
  },
  {
    id: "systemmonitors",
    name: "System Monitors",
    tagline: "Multi-Sensor Hardware Health Dashboard",
    category: "System Utilities",
    version: "3.0.0",
    releaseDate: "2025-04-10",
    priceINR: 599,
    rating: 4.9,
    downloads: 27400,
    views: 81000,
    likes: 5600,
    featured: true,
    badge: "PRO TOOL",
    iconName: "Cpu",
    gradient: "from-teal-500 to-emerald-700",
    shortDescription: "Comprehensive hardware sensor suite monitoring voltages, fan speeds, thermals, and power draw.",
    fullDescription: "System Monitors reads low-level hardware sensor chips to give enthusiasts real-time insights into CPU package power, GPU hotspot temps, fan RPMs, and VRM voltages.",
    features: [
      "Low-level Ring0 hardware sensor driver integration",
      "GPU VRAM & hotspot temperature monitoring",
      "High/low temperature alert triggers"
    ],
    techStack: ["C++", "LibOpenHardwareMonitor", "Qt6"],
    systemRequirements: { os: "Windows 10 / 11", ram: "1 GB", disk: "30 MB", arch: "x64" },
    changelog: [{ version: "3.0.0", date: "2025-04-10", changes: ["Added RTX 40-series and Ryzen 7000 sensor support"] }],
    faqs: [{ question: "Is administrator privilege required?", answer: "Yes, to read low-level motherboard hardware sensors." }],
    screenshots: ["/images/software/systemmonitors-1.jpg"]
  },
  {
    id: "tabswitch",
    name: "TabSwitch",
    tagline: "Rapid Window Tab Manager for Desktop Apps",
    category: "Productivity",
    version: "1.1.2",
    releaseDate: "2025-02-15",
    priceINR: 249,
    rating: 4.7,
    downloads: 13800,
    views: 39000,
    likes: 2400,
    featured: false,
    iconName: "Maximize2",
    gradient: "from-indigo-500 to-purple-600",
    shortDescription: "Groups application windows into unified tabbed containers on Windows OS.",
    fullDescription: "Combine separate app windows (Notepad, File Explorer, Terminals) into a single clean tabbed window interface.",
    features: [
      "Group any Windows application into tabs",
      "Drag-and-drop tab reordering",
      "Automatic application window grouping"
    ],
    techStack: ["C++", "Win32 API", "SetParent API"],
    systemRequirements: { os: "Windows 10 / 11", ram: "512 MB", disk: "15 MB", arch: "x64" },
    changelog: [{ version: "1.1.2", date: "2025-02-15", changes: ["Fixed high DPI scaling artifacts"] }],
    faqs: [{ question: "Does it work with Chrome?", answer: "Yes, compatible with most desktop apps." }],
    screenshots: ["/images/software/tabswitch-1.jpg"]
  },
  {
    id: "windowswitch",
    name: "WindowSwitch",
    tagline: "Supercharged Alt+Tab Window Switcher",
    category: "Productivity",
    version: "2.5.0",
    releaseDate: "2025-01-08",
    priceINR: 299,
    rating: 4.9,
    downloads: 31200,
    views: 92000,
    likes: 6700,
    featured: true,
    badge: "MUST HAVE",
    iconName: "Grid",
    gradient: "from-sky-600 to-blue-800",
    shortDescription: "Instant search window switcher with live window previews and multi-monitor filtering.",
    fullDescription: "Replaces standard Alt+Tab with a blazing-fast searchable window switcher featuring full-text title search, window thumbnails, and virtual desktop switching.",
    features: [
      "Instant title fuzzy search for open windows",
      "Live 60fps window thumbnail previews",
      "Multi-monitor & virtual desktop filtering"
    ],
    techStack: ["C#", "WPF", "DWM API"],
    systemRequirements: { os: "Windows 10 / 11", ram: "1 GB", disk: "25 MB", arch: "x64" },
    changelog: [{ version: "2.5.0", date: "2025-01-08", changes: ["Added search matching for window process executable names"] }],
    faqs: [{ question: "Can I replace default Alt+Tab?", answer: "Yes, includes an optional Alt+Tab hotkey override." }],
    screenshots: ["/images/software/windowswitch-1.jpg"]
  }
];
