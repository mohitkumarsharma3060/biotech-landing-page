This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
CytoMatrix — Next-Generation Biotech Landing Page
A premium, interactive, animation-driven biotechnology landing page built with Next.js, React Three Fiber (Three.js), Framer Motion, and Tailwind CSS.

🚀 Live Demo & Repository
<!-- Live Site: [https://your-deployment-url.vercel.app](https://your-deployment-url.vercel.app) (Replace with your deployed URL) -->

GitHub Repository: [https://github.com/mohitkumarsharma3060/biotech-landing-page](https://github.com/mohitkumarsharma3060/biotech-landing-page) 

Submission Form: Submitted via Google Form

🛠️ Tech Stack
Framework: Next.js (React 18/19, App Router, TypeScript)

Styling: Tailwind CSS

3D Visuals: Three.js / @react-three/fiber / @react-three/drei

Animations & Micro-interactions: Framer Motion

Icons: Lucide React

Deployment: Vercel

✨ Key Features
Interactive 3D Particle Canvas: Real-time particle sphere rendered using React Three Fiber, calculating 5,000 spatial coordinates using native trigonometry for zero-lag rendering.

Glassmorphic Responsive Navigation: Floating blur header with stateful mobile drawer navigation (AnimatePresence).

Scroll-Triggered Reveals: Micro-interactions and entrance animations that trigger dynamically as elements enter the viewport.

Animated Stat Counters: Framer Motion useMotionValue counters that smoothly count up when scrolled into view.

Interactive Grid Layouts: Capabilities section featuring smooth card elevation on hover with accent borders.

Smooth Anchor Navigation: Native CSS smooth scrolling wired directly to section targets (#about, #technology, #capabilities, #contact).

🎨 Design Approach
Visual Identity: Built from scratch to avoid generic template aesthetics. Designed to look like a high-end, real-world synthetic biology startup (e.g., DeepPiction, Ginkgo Bioworks).

Color Palette: Deep slate-950 dark mode background paired with high-contrast emerald-400 and cyan-400 accents representing bio-luminescence and computational genetic technology.

Typography & Hierarchy: Clean sans-serif typography with strong structural weight contrast (from font-extrabold display headers down to readable text-slate-400 body copy).

Glassmorphism: Subdued radial background glows and translucent blur panels (backdrop-blur-md) to build visual depth.

⚡ Animation & Performance Approach
Native Mathematical Calculations: Bypassed external random-number generators in favor of native Math.random() and useMemo hooks. This ensures Float32Array buffers have valid coordinate sets (eliminating NaN bounding sphere crashes in Turbopack/Next.js).

GPU-Accelerated Transitions: Framer Motion transforms strictly utilize CSS transform (y, scale) and opacity properties to prevent DOM layout thrashing and maintain 60 FPS scrolling.

Viewport Thresholding: Animations use viewport={{ once: true, margin: "-100px" }} so elements reveal naturally as the user scrolls, avoiding sudden layout pops.

💻 Local Setup & Installation Instructions
Prerequisites
Node.js: v18.17.0 or higher

npm: v9.0.0 or higher

Step 4: Build for Production
Bash
npm run build
npm run start
📦 Folder Structure
src
├── app/
│   ├── layout.tsx         # Root layout with scroll-smooth and font setups
│   ├── page.tsx           # Main assembly combining all landing page sections
│   └── globals.css        # Tailwind directives and global styles
├── components/
│   ├── canvas/
│   │   └── DNAVisual.tsx  # React Three Fiber 3D particle canvas
│   ├── Navbar.tsx         # Responsive glassmorphic navigation header
│   ├── Hero.tsx           # Hero section with headline and 3D visual wrapper
│   ├── About.tsx          # Innovation overview section
│   ├── Technology.tsx     # Feature cards with scroll reveal animations
│   ├── Capabilities.tsx   # Service grid layout
│   ├── Stats.tsx          # Scroll-triggered animated counter section
│   └── FinalCTA.tsx       # Bottom call-to-action with background radial glow
└── public/                # Static assets and icons

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


<!-- 
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
