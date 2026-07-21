import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Zap, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-muted/50 text-center px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Transforme sua empresa com <span className="text-primary">tecnologia de ponta.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Desenvolvemos ecossistemas digitais escaláveis, sites premium, sistemas personalizados e automações de IA para o seu negócio vender mais.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/orcamento">
              <Button size="lg" className="w-full sm:w-auto text-base">
                Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                Ver Nosso Portfólio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Soluções</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tudo o que sua empresa precisa para escalar no meio digital, em um só lugar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
              <Globe className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Criação de Sites e Landing Pages</h3>
              <p className="text-muted-foreground mb-4">Sites extremamente rápidos, otimizados para SEO e focados em alta conversão.</p>
            </div>
            
            {/* Service 2 */}
            <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
              <Code className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Sistemas Web Sob Medida</h3>
              <p className="text-muted-foreground mb-4">Sistemas robustos, CRM, portais e dashboards personalizados para sua operação.</p>
            </div>

            {/* Service 3 */}
            <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Automação e Agentes de IA</h3>
              <p className="text-muted-foreground mb-4">Automatize atendimento no WhatsApp, processos internos e integre Inteligência Artificial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel Section */}
      <section className="w-full py-16 bg-muted/30 border-y overflow-hidden">
        <div className="text-center mb-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Cases de Sucesso</h2>
          <p className="text-muted-foreground">Resultados reais que geramos para nossos clientes.</p>
        </div>
        
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee flex gap-8 px-4 w-max">
            {[
              { title: "E-commerce de Moda", desc: "Aumento de 150% nas vendas online", tag: "Loja Virtual" },
              { title: "App de Logística", desc: "Redução de 30% em custos operacionais", tag: "Sistema Web" },
              { title: "SaaS Jurídico", desc: "Conversão de 12% em leads orgânicos", tag: "Landing Page" },
              { title: "ERP Indústria", desc: "Gestão completa de estoque em tempo real", tag: "Sistema Web" },
              { title: "Clínica Odonto", desc: "Chatbot IA com agenda automática 24/7", tag: "Automação IA" },
              { title: "E-commerce de Moda", desc: "Aumento de 150% nas vendas online", tag: "Loja Virtual" },
              { title: "App de Logística", desc: "Redução de 30% em custos operacionais", tag: "Sistema Web" },
              { title: "SaaS Jurídico", desc: "Conversão de 12% em leads orgânicos", tag: "Landing Page" },
              { title: "ERP Indústria", desc: "Gestão completa de estoque em tempo real", tag: "Sistema Web" },
              { title: "Clínica Odonto", desc: "Chatbot IA com agenda automática 24/7", tag: "Automação IA" }
            ].map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-80 p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs font-semibold text-primary mb-3 bg-primary/10 inline-block px-2 py-1 rounded-full">{item.tag}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground whitespace-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para o próximo nível?</h2>
          <p className="text-primary-foreground/80 mb-10 text-lg">
            Nossa equipe de especialistas está pronta para desenhar a arquitetura perfeita para o seu negócio.
          </p>
          <Link href="/contato">
            <Button size="lg" variant="secondary" className="text-lg text-primary">
              Falar com um Especialista
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
