"use client";

import { motion } from "framer-motion";
import { Dna, Microscope, Cpu } from "lucide-react";

const features = [
  {
    icon: <Dna className="h-6 w-6 text-emerald-400" />,
    title: "Genomic Sequencing",
    description: "Ultra-rapid genome mapping utilizing quantum processing layers."
  },
  {
    icon: <Microscope className="h-6 w-6 text-cyan-400" />,
    title: "Molecular Design",
    description: "Synthesizing novel proteins tailored to specific pathogenic receptors."
  },
  {
    icon: <Cpu className="h-6 w-6 text-emerald-400" />,
    title: "AI Prediction Models",
    description: "Machine learning algorithms that predict trial outcomes with 94% accuracy."
  }
];

export default function Technology() {
  return (
    <section id="technology" className="bg-slate-950 py-32 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Proprietary Architecture</h2>
          <p className="text-slate-400">Our platform bridges the gap between biological complexity and computational scale.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-colors hover:border-emerald-500/30 hover:bg-slate-800/50"
            >
              <div className="mb-6 inline-flex rounded-lg bg-slate-950 p-3 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-100">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}