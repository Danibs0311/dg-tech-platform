"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Briefing & Estratégia", desc: "Mapeamos seu negócio, concorrentes e objetivos para desenhar a solução ideal." },
  { num: "02", title: "UI/UX Design", desc: "Criamos interfaces modernas e focadas na melhor experiência para o seu usuário." },
  { num: "03", title: "Desenvolvimento Code", desc: "Escrevemos código limpo, escalável e utilizando as melhores tecnologias do mercado." },
  { num: "04", title: "Lançamento & Suporte", desc: "Seu projeto no ar com estabilidade, SEO técnico e acompanhamento contínuo." }
];

export function ProcessTimeline() {
  return (
    <section className="w-full py-24 bg-slate-950 border-t border-slate-900 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Como trabalhamos</h2>
          <p className="text-slate-400 text-lg">Nosso processo testado e validado para o sucesso do seu projeto.</p>
        </div>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
            >
              <div className="text-5xl md:text-7xl font-black text-slate-800 shrink-0">
                {step.num}
              </div>
              <div className="pt-2 md:pt-4">
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-lg">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
