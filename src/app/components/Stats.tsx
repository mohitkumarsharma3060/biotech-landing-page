"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to, duration, suffix = "" }: { from: number; to: number; duration: number, suffix?: string }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  return (
    <motion.span
      ref={ref}
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      className="text-5xl font-extrabold text-white sm:text-6xl"
    >
      {rounded}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section className="bg-emerald-950/20 border-y border-emerald-900/30 py-24 text-center">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Counter from={0} to={94} duration={2} suffix="%" />
            <span className="text-sm font-medium text-emerald-400 uppercase tracking-widest">Target Accuracy</span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter from={0} to={12} duration={2} />
            <span className="text-sm font-medium text-emerald-400 uppercase tracking-widest">Active Pipelines</span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter from={0} to={500} duration={2.5} suffix="M+" />
            <span className="text-sm font-medium text-emerald-400 uppercase tracking-widest">Simulations Run</span>
          </div>
        </div>
      </div>
    </section>
  );
}