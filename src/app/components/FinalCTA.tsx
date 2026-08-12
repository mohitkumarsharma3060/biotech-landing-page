"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="finalcta" className="relative overflow-hidden bg-slate-950 py-32 text-center text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl">Ready to accelerate discovery?</h2>
          <p className="mb-10 text-xl text-slate-400">
            Partner with us to leverage our proprietary synthesis platform for your next breakthrough.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-200"
          >
            Contact Partnerships
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}