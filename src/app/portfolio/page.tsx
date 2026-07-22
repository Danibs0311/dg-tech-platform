"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "SaaS Dashboard B2B",
    category: "Sistemas Web",
    description: "Plataforma completa para gestão financeira de médias empresas com integração bancária automática.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "Supabase", "TailwindCSS"]
  },
  {
    id: 2,
    title: "E-Commerce de Luxo",
    category: "Lojas Virtuais",
    description: "Loja virtual de alta conversão para marca de relógios de luxo com checkout transparente e 3D viewer.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Stripe", "Node.js"]
  },
  {
    id: 3,
    title: "Fintech App",
    category: "Mobile",
    description: "Aplicativo mobile para conta digital com pagamentos por aproximação e cartão virtual.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    tech: ["React Native", "PostgreSQL", "AWS"]
  },
  {
    id: 4,
    title: "Portal Imobiliário",
    category: "Sites Institucionais",
    description: "Portal de busca de imóveis com mapa interativo e sistema de agendamento automático.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "Prisma", "Google Maps API"]
  },
  {
    id: 5,
    title: "App de Logística",
    category: "Mobile",
    description: "Solução para motoristas rastrearem entregas em tempo real com roteirização inteligente via IA.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop",
    tech: ["Flutter", "Firebase", "Python"]
  },
  {
    id: 6,
    title: "Plataforma EAD Educacional",
    category: "Sistemas Web",
    description: "Ambiente virtual de aprendizagem gamificado para mais de 50.000 alunos simultâneos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "PostgreSQL", "Redis"]
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" /> Nossas Entregas
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos que Transformam Negócios
          </h1>
          <p className="text-lg text-slate-400">
            Conheça algumas das soluções digitais desenvolvidas pela DG TECH. 
            Do conceito ao deploy, focamos em alta performance, design premium e conversão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-colors h-[450px] flex flex-col cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-3xl p-10 md:p-16 backdrop-blur-sm relative overflow-hidden"
        >
          {/* subtle moving light effect */}
          <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" />
          
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para o próximo nível?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Vamos construir o seu próximo caso de sucesso juntos. Fale com um de nossos especialistas e descubra a solução ideal para a sua empresa.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white gap-2 text-md h-12 px-8">
            Iniciar Meu Projeto <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
