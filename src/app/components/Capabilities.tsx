"use client";

import { motion } from "framer-motion";

const capabilities = [
  "CRISPR-Cas9 Editing",
  "Protein Folding Simulation",
  "Vector Development",
  "Stem Cell Reprogramming",
  "Targeted Drug Delivery",
  "Biomarker Discovery"
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-white/5 bg-slate-950 py-32 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Core Capabilities</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">End-to-end synthetic biology services powering the next decade of therapeutics.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer rounded-xl bg-slate-900 p-8 border border-white/5 transition-colors hover:border-emerald-500/50 hover:bg-emerald-950/30"
            >
              <div className="mb-4 h-2 w-12 rounded-full bg-slate-800 transition-colors group-hover:bg-emerald-500" />
              <h3 className="text-xl font-semibold">{cap}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}