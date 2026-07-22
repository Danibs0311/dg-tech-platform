"use client";

import { motion } from "framer-motion";
import { Target, Users, Zap, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: "Inovação Constante",
    description: "Estamos sempre buscando as tecnologias mais recentes e eficientes para entregar resultados superiores."
  },
  {
    icon: <Target className="w-6 h-6 text-blue-400" />,
    title: "Foco em Conversão",
    description: "Não criamos apenas sites bonitos. Criamos máquinas de vendas otimizadas para o seu crescimento."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    title: "Parceria Estratégica",
    description: "Trabalhamos lado a lado com nossos clientes, entendendo suas dores e objetivos de negócio."
  },
  {
    icon: <Award className="w-6 h-6 text-blue-400" />,
    title: "Excelência Técnica",
    description: "Código limpo, arquitetura escalável e segurança são os pilares de tudo o que desenvolvemos."
  }
];

export default function SobreNos() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-32 pt-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              Sobre a DG TECH
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tecnologia como motor do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">seu crescimento.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Fundada com a missão de democratizar o acesso à tecnologia de alto nível, a DG TECH é uma parceira estratégica para empresas que desejam se destacar no ambiente digital. 
              Nós transformamos ideias complexas em plataformas escaláveis, rápidas e orientadas a resultados.
            </p>
            <div className="space-y-3">
              {["Desenvolvimento Full-Stack", "Design Focado no Usuário (UX/UI)", "Arquitetura Cloud & IA"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Equipe trabalhando"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl">
              <div className="flex gap-8">
                <div>
                  <p className="text-4xl font-bold text-white mb-1">50+</p>
                  <p className="text-sm text-slate-400">Projetos Entregues</p>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <p className="text-4xl font-bold text-blue-400 mb-1">99%</p>
                  <p className="text-sm text-slate-400">Satisfação</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Bento Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Nossos Pilares</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Os valores que guiam cada linha de código que escrevemos e cada projeto que lançamos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:bg-slate-800/50 hover:border-blue-500/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
