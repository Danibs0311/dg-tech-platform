import { Receipt, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FaturasPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Financeiro</h1>
          <p className="text-slate-400">Gerencie suas faturas, pagamentos e históricos.</p>
        </div>
        <Button variant="outline" className="bg-transparent border-slate-700 text-white hover:bg-slate-800">
          <FileText className="w-4 h-4 mr-2" />
          Ver Histórico Completo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-400 font-medium mb-1">A Vencer</p>
          <p className="text-3xl font-bold text-white">R$ 0,00</p>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-400 font-medium mb-1">Pagas (Mês)</p>
          <p className="text-3xl font-bold text-emerald-400">R$ 0,00</p>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <p className="text-slate-400 font-medium mb-1">Em Atraso</p>
          <p className="text-3xl font-bold text-red-400">R$ 0,00</p>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-6">
          <Receipt className="w-8 h-8 text-slate-500" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Nenhuma fatura pendente</h3>
        <p className="text-slate-400 max-w-md">
          Você está em dia com todas as suas obrigações financeiras. Novas faturas aparecerão aqui.
        </p>
      </div>
    </div>
  );
}
