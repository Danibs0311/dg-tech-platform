"use client";

import { motion } from "framer-motion";
import { Globe, Code2, Bot, Search, ArrowRight, ShieldCheck, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    title: "Sites Institucionais de Alta Conversão",
    description: "Criamos a sua vitrine digital com foco absoluto em gerar leads e transmitir autoridade no seu mercado.",
    features: ["Design Exclusivo e Premium", "Otimização SEO (Google)", "Velocidade Extrema (Next.js)", "Estatísticas Integradas"]
  },
  {
    icon: <Code2 className="w-8 h-8 text-indigo-400" />,
    title: "Sistemas Web Sob Medida (SaaS)",
    description: "Automatize processos internos ou crie um novo modelo de negócio digital com sistemas robustos e seguros.",
    features: ["Painéis Administrativos", "Integração com APIs", "Banco de Dados em Nuvem", "Arquitetura Escalável"]
  },
  {
    icon: <Bot className="w-8 h-8 text-cyan-400" />,
    title: "Automação com IA (Chatbots & n8n)",
    description: "Reduza custos operacionais integrando Inteligência Artificial no seu atendimento e fluxos de trabalho.",
    features: ["Atendimento 24/7 (WhatsApp)", "Fluxos n8n Personalizados", "Integração CRM", "Treinamento de IA Customizada"]
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    title: "Aplicativos Mobile",
    description: "Esteja literalmente no bolso do seu cliente com aplicativos nativos e híbridos de alta performance.",
    features: ["iOS e Android", "Notificações Push", "Experiência Fluida", "Integração Web"]
  }
];

export default function Servicos() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20 overflow-hidden relative">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" /> Soluções Completas
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que podemos construir para o seu negócio?
          </h1>
          <p className="text-lg text-slate-400">
            Nós unimos design, engenharia de software e inteligência artificial para criar produtos digitais que resolvem problemas reais e impulsionam o seu faturamento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl hover:bg-slate-800/40 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-white/5 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full bg-transparent border-slate-700 text-white hover:bg-white hover:text-slate-900 transition-colors">
                Saber mais sobre isso
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400 mb-6">Não encontrou o que procurava? Desenvolvemos soluções 100% customizadas.</p>
          <Link href="/contato">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white gap-2">
              Conversar com um Especialista <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
