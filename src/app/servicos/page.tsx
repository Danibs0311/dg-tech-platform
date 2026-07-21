import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Code, Globe, Zap, Search, Server, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nossos Serviços | DG TECH",
  description: "Desenvolvimento de Sites, Sistemas Web, Automação IA e SEO para sua empresa.",
};

export default function ServicosPage() {
  const servicos = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Criação de Sites e Landing Pages",
      desc: "Sites extremamente rápidos, responsivos e focados em alta conversão. Utilizamos Next.js para garantir o melhor SEO do mercado.",
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Sistemas Web Customizados",
      desc: "Plataformas SaaS, painéis administrativos, CRM e ERPs feitos sob medida para a operação da sua empresa.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Automação e Chatbots IA",
      desc: "Automação de processos internos (n8n) e robôs de atendimento integrados ao WhatsApp com inteligência artificial.",
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Otimização SEO Local",
      desc: "Posicionamento orgânico no Google para que sua empresa seja encontrada primeiro quando seu cliente pesquisar.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Aplicativos Híbridos",
      desc: "Desenvolvimento de aplicativos modernos para iOS e Android focados na melhor experiência do usuário.",
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Infraestrutura Cloud",
      desc: "Hospedagem de alta performance, configuração de servidores, Vercel, Supabase e segurança de dados.",
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-16 bg-muted/30 border-b text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            Soluções completas para escalar.
          </h1>
          <p className="text-lg text-muted-foreground">
            Dominamos as tecnologias mais modernas do mercado para entregar projetos que geram resultados reais.
          </p>
        </div>
      </section>

      <section className="w-full py-20 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((svc, i) => (
            <div key={i} className="p-8 border bg-card rounded-2xl hover:shadow-lg transition-all">
              <div className="mb-6 bg-primary/10 w-fit p-3 rounded-xl">
                {svc.icon}
              </div>
              <h2 className="text-2xl font-bold mb-3">{svc.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {svc.desc}
              </p>
              <Link href="/orcamento">
                <Button variant="outline" className="w-full group">
                  Saber mais <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
