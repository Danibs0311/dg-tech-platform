"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="w-full py-24 bg-slate-900 px-4 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      
      <div className="container relative z-10 mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">O que dizem sobre nós</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-950/50 backdrop-blur-xl border border-slate-800 text-left"
            >
              <div className="flex gap-1 text-amber-400 mb-6">
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
              </div>
              <p className="text-slate-300 mb-6 text-lg">
                "A DG TECH mudou completamente a forma como nossa empresa se posiciona no digital. O sistema que criaram automatizou grande parte do nosso trabalho."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800" />
                <div>
                  <h4 className="font-bold text-white">Empresário Satisfeito</h4>
                  <span className="text-sm text-slate-500">CEO, Startup Tech</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
