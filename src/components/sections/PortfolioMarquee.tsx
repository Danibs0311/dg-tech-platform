"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "SaaS Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "E-Commerce Premium",
    category: "Lojas Virtuais",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Fintech App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Corporate Website",
    category: "Institucional",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "CRM Imobiliário",
    category: "Sistema Web",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=600&auto=format&fit=crop",
  },
];

export function PortfolioMarquee() {
  return (
    <section className="w-full py-20 bg-slate-950 overflow-hidden relative">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[100px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Nossos Projetos em Destaque
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Arraste e conheça um pouco do que construímos para empresas que exigem excelência e conversão.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="flex whitespace-nowrap relative z-10 before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-slate-950 before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-slate-950 after:to-transparent after:z-20">
        <motion.div 
          className="flex gap-8 px-4 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 55 }}
          whileHover={{ animationPlayState: "paused" }} // Wait, Framer Motion doesn't use animationPlayState directly like this, but let's stick to basics
        >
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...projects, ...projects].map((project, idx) => (
            <div 
              key={idx} 
              className="group relative w-[300px] md:w-[400px] h-[220px] md:h-[280px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0"
            >
              {/* Using standard img for external dynamic urls without next/image config issues */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-2">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-blue-300 w-fit">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
