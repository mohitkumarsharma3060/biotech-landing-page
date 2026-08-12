import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import Technology from "../app/components/Technology";
import About from "../app/components/About";
import Capabilities from "../app/components/Capabilities";
import Stats from "../app/components/Stats";
import FinalCTA from "../app/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <About />
      <Technology /> {/* Make sure you add id="technology" to the section tag in Technology.tsx if you want the nav link to work */}
      <Capabilities />
      <Stats />
      <FinalCTA />
    </main>
  );
}