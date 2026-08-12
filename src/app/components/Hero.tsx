"use client";

import { motion } from "framer-motion";
import DNAVisual from "./canvas/DNAVisual";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <DNAVisual />
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl"
        >
          <span className="mb-4 inline-block rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-md">
            Next-Generation Therapeutics
          </span>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            Reprogramming Life at the <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-500">Cellular Level</span>
          </h1>
          <p className="mb-10 text-lg text-slate-400 sm:text-xl max-w-2xl mx-auto">
            Leveraging AI-driven protein synthesis to develop targeted treatments for previously incurable diseases.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-emerald-400 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]"
          >
            Explore Our Pipeline
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="h-16 w-px bg-linear-to-b from-emerald-500/0 via-emerald-500 to-emerald-500/0" />
      </motion.div>
    </section>
  );
}