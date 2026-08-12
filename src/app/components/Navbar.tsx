"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close the menu when a mobile link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0  z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-10 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white" onClick={closeMenu}>
          <Activity className="h-6 w-6 text-emerald-400" />
          <span className="text-xl font-bold tracking-tight">
            Cyto<span className="text-emerald-400">Matrix</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:block text-sm font-medium text-slate-300">
          <Link href="#about" className="transition-colors hover:text-emerald-400">About</Link>
          <Link href="#technology" className="transition-colors hover:text-emerald-400">Technology</Link>
          <Link href="#capabilities" className="transition-colors hover:text-emerald-400">Capabilities</Link>
          <Link href="#contact" className="transition-colors hover:text-emerald-400">Contact</Link>
        </nav>

        {/* Desktop Button */}
        {/* <button className="hidden rounded-full bg-white/10 px-6 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:block">
          Partner Portal
        </button> */}

        {/* Mobile Menu Toggle Button */}
        <button 
          className="text-slate-300 md:hidden p-2 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-slate-950/95 backdrop-blur-md md:hidden overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 px-6 py-8 text-base font-medium text-slate-300">
              <Link href="#about" onClick={closeMenu} className="transition-colors hover:text-emerald-400">About</Link>
              <Link href="#technology" onClick={closeMenu} className="transition-colors hover:text-emerald-400">Technology</Link>
              <Link href="#capabilities" onClick={closeMenu} className="transition-colors hover:text-emerald-400">Capabilities</Link>
              <Link href="#contact" onClick={closeMenu} className="transition-colors hover:text-emerald-400">Contact</Link>
              
              {/* <div className="pt-4">
                <button className="w-full rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20">
                  Partner Portal
                </button>
              </div> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}