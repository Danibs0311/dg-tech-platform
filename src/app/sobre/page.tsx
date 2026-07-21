import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | DG TECH",
  description: "Conheça a missão, visão e os valores da DG TECH Soluções Tecnológicas.",
};

export default function SobrePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-20 bg-muted/30 border-b text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Construindo o futuro digital das empresas.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            A DG TECH nasceu com um propósito claro: democratizar o acesso à tecnologia de ponta, permitindo que empresas de todos os tamanhos possam escalar e operar com máxima eficiência.
          </p>
        </div>
      </section>

      <section className="w-full py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6 bg-card border rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Ajudar empresas a crescer através da tecnologia, oferecendo soluções digitais modernas, inteligentes e altamente escaláveis.
              </p>
            </div>
            <div className="p-6 bg-card border rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Nossa Visão</h3>
              <p className="text-muted-foreground">
                Ser reconhecida nacionalmente como o principal hub tecnológico de inovação e transformação digital para pequenos e médios negócios.
              </p>
            </div>
            <div className="p-6 bg-card border rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Nossos Valores</h3>
              <ul className="text-left space-y-3 text-muted-foreground mt-4 inline-block">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Inovação Contínua</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Excelência Técnica</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Foco no Resultado</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Transparência</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
