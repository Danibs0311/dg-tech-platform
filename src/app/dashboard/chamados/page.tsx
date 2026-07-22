import { LifeBuoy, MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChamadosPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Suporte</h1>
          <p className="text-slate-400">Acompanhe seus chamados de suporte técnico e manutenções.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-lg shadow-emerald-900/20">
          <MessageSquarePlus className="w-4 h-4 mr-2" />
          Abrir Chamado
        </Button>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-6">
          <LifeBuoy className="w-8 h-8 text-slate-500" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Nenhum chamado aberto</h3>
        <p className="text-slate-400 max-w-md mb-8">
          Seu sistema está rodando perfeitamente. Se precisar de alguma ajuda técnica, nossa equipe está pronta para atender.
        </p>
      </div>
    </div>
  );
}
