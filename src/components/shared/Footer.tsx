import Link from 'next/link';
import { Code2, Mail, Globe, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 relative z-10">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold inline-block text-lg tracking-tight text-white">DG TECH</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Ajudando empresas a crescer através da tecnologia, oferecendo soluções digitais modernas, inteligentes e escaláveis para o futuro.
          </p>
          <div className="flex gap-4 pt-2">
            {[Mail, Globe, Phone].map((Icon, i) => (
              <a key={i} href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">Serviços</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/servicos" className="hover:text-blue-400 transition-colors">Criação de Sites</Link></li>
            <li><Link href="/servicos" className="hover:text-blue-400 transition-colors">Sistemas Web</Link></li>
            <li><Link href="/servicos" className="hover:text-blue-400 transition-colors">Automação com IA</Link></li>
            <li><Link href="/servicos" className="hover:text-blue-400 transition-colors">SEO Estratégico</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">Empresa</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/sobre" className="hover:text-blue-400 transition-colors">Sobre Nós</Link></li>
            <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors">Cases de Sucesso</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
            <li><Link href="/contato" className="hover:text-blue-400 transition-colors">Contato</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">Legal</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/termos" className="hover:text-blue-400 transition-colors">Termos de Uso</Link></li>
            <li><Link href="/privacidade" className="hover:text-blue-400 transition-colors">Política de Privacidade</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} DG TECH - Soluções Tecnológicas.</p>
        <p>Desenvolvido com excelência no Brasil.</p>
      </div>
    </footer>
  );
}
