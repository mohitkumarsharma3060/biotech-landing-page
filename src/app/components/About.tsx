"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-32 text-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
              Rewriting the rules of <span className="text-emerald-400">cellular regeneration.</span>
            </h2>
            <p className="mb-6 text-lg text-slate-400 leading-relaxed">
              Founded by a team of computational biologists and genetic engineers, we are building the world's most advanced synthetic biology platform. 
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              By treating biology as code, we can compile precise genetic instructions to target oncological anomalies and rare genetic disorders with unprecedented accuracy.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-full max-w-md mx-auto rounded-full border border-emerald-500/20 bg-emerald-500/5 p-8"
          >
            {/* Abstract visual placeholder for a biological cell/core */}
            <div className="absolute inset-0 m-auto h-3/4 w-3/4 rounded-full bg-linear-to-tr from-emerald-500/20 to-cyan-500/20 blur-3xl" />
            <div className="relative h-full w-full rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm">
               <div className="h-32 w-32 rounded-full border border-emerald-400/50 animate-[spin_10s_linear_infinite] border-t-emerald-400" />
               <div className="absolute h-24 w-24 rounded-full border border-cyan-400/50 animate-[spin_7s_linear_infinite_reverse] border-b-cyan-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}