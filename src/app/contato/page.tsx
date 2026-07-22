"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contato() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vamos construir algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">incrível?</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Preencha o formulário abaixo ou utilize um de nossos canais diretos. Nossa equipe entrará em contato em menos de 24 horas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="bg-slate-900/50 backdrop-blur-md border border-white/5 p-8 rounded-3xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8">Informações de Contato</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">E-mail Comercial</p>
                        <a href="mailto:contato@dgtech.com.br" className="text-white hover:text-blue-400 transition-colors">contato@dgtech.com.br</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">WhatsApp / Telefone</p>
                        <a href="#" className="text-white hover:text-blue-400 transition-colors">(11) 99999-9999</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Localização</p>
                        <p className="text-white">São Paulo, SP - Brasil</p>
                        <p className="text-sm text-slate-500 mt-1">Atendemos clientes globalmente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-slate-900 border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-400">Nome Completo</label>
                      <input 
                        type="text" 
                        id="name"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="João da Silva"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-slate-400">Empresa</label>
                      <input 
                        type="text" 
                        id="company"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="Sua Empresa Ltda"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-400">E-mail Profissional</label>
                      <input 
                        type="email" 
                        id="email"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="joao@empresa.com.br"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-400">WhatsApp</label>
                      <input 
                        type="tel" 
                        id="phone"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium text-slate-400">Motivo do Contato</label>
                    <select 
                      id="interest"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                    >
                      <option value="site">Criação de Site Institucional</option>
                      <option value="saas">Desenvolvimento de Sistema (SaaS)</option>
                      <option value="ai">Automação com IA / n8n</option>
                      <option value="app">Aplicativo Mobile</option>
                      <option value="other">Outro assunto</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-400">Sua Mensagem</label>
                    <textarea 
                      id="message"
                      rows={5}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Conte-nos um pouco sobre o seu projeto e seus objetivos..."
                    ></textarea>
                  </div>

                  <Button type="button" size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white h-12 text-md gap-2">
                    Enviar Mensagem <Send className="w-4 h-4" />
                  </Button>
                  
                  <p className="text-xs text-slate-500 text-center mt-4">
                    Ao enviar esta mensagem, você concorda com nossa Política de Privacidade.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
