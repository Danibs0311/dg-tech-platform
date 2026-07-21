import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato | DG TECH",
  description: "Fale com a equipe da DG TECH e solicite um orçamento sem compromisso.",
};

export default function ContatoPage() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-16 bg-muted/30 border-b text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            Vamos conversar?
          </h1>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário abaixo ou utilize nossos canais de atendimento direto. Nossa equipe responderá em breve.
          </p>
        </div>
      </section>

      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Telefone / WhatsApp</h4>
                    <p className="text-muted-foreground">+55 (11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">E-mail</h4>
                    <p className="text-muted-foreground">contato@dgtech.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Endereço</h4>
                    <p className="text-muted-foreground">Atendimento 100% Remoto para todo o Brasil.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-card p-8 rounded-2xl border shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="nome" className="text-sm font-medium">Nome completo</label>
                <Input id="nome" placeholder="Digite seu nome" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">E-mail corporativo</label>
                <Input id="email" type="email" placeholder="seu@email.com" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="telefone" className="text-sm font-medium">WhatsApp</label>
                <Input id="telefone" placeholder="(11) 99999-9999" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="mensagem" className="text-sm font-medium">Como podemos ajudar?</label>
                <Textarea id="mensagem" placeholder="Descreva brevemente o seu projeto..." rows={4} required />
              </div>
              <Button type="button" className="w-full font-bold">Enviar Mensagem</Button>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}
