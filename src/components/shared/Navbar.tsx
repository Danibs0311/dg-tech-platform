"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/60 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/40"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <div className="flex gap-8 lg:gap-12 items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold inline-block text-xl tracking-tight text-white">DG TECH</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {['Sobre', 'Serviços', 'Portfólio', 'Contato'].map((item, idx) => (
              <Link 
                key={idx}
                href={`/${item.toLowerCase().replace('ç', 'c').replace('í', 'i').replace('ó', 'o')}`} 
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contato" className="hidden md:block">
            <Button size="sm" className="bg-white text-slate-950 hover:bg-slate-200 shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
              Fale Conosco
            </Button>
          </Link>
          <Link href="/cliente/dashboard" className="hidden lg:block">
            <Button variant="outline" size="sm" className="border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white">
              Área do Cliente
            </Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
