"use client";

import { motion } from "framer-motion";
import { Globe, Code2, Bot, Zap, Smartphone, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Sites Institucionais & Landing Pages",
    desc: "Plataformas web ultrarrápidas, focadas em SEO e altíssima conversão de vendas.",
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Sistemas Web e CRMs",
    desc: "Softwares personalizados para gestão total da sua operação empresarial.",
    icon: <Code2 className="w-8 h-8 text-emerald-400" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Chatbots de IA",
    desc: "Atendimento automático 24/7 integrado ao WhatsApp com Inteligência Artificial.",
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Integrações e Automações",
    desc: "Conectamos todas as suas ferramentas para você poupar tempo e escalar os resultados.",
    icon: <Zap className="w-8 h-8 text-amber-400" />,
    colSpan: "md:col-span-2",
  }
];

export function ServicesBento() {
  return (
    <section className="w-full py-24 bg-slate-950 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Soluções completas para <br/>o seu ecossistema.
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Não entregamos apenas código. Entregamos máquinas de vendas e otimização de processos baseados em tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors ${service.colSpan}`}
            >
              <div className="mb-6 p-4 rounded-2xl bg-slate-950/50 inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
