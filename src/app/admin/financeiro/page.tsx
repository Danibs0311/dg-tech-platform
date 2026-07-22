import { createClient } from "@/lib/supabase/server";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function AdminFinanceiroPage() {
  const supabase = await createClient();
  
  const { data: invoices } = await supabase
    .from('invoices')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Gestão Financeira</h1>
          <p className="text-slate-400">Gere cobranças e acompanhe o status de pagamento (Integração Mercado Pago).</p>
        </div>
        <Button className="font-bold bg-blue-600 hover:bg-blue-700">
          <PlusCircle className="w-4 h-4 mr-2" />
          Nova Cobrança
        </Button>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-900 text-slate-400 uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Data</th>
              <th className="px-6 py-4 font-medium">Cliente ID</th>
              <th className="px-6 py-4 font-medium">Descrição</th>
              <th className="px-6 py-4 font-medium">Valor</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-200">
            {invoices?.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(invoice.created_at).toLocaleDateString('pt-BR')}
                </td>
                <td className="px-6 py-4 font-medium">
                  {invoice.client_id.substring(0, 8)}...
                </td>
                <td className="px-6 py-4">{invoice.title}</td>
                <td className="px-6 py-4 font-bold text-emerald-400">
                  R$ {invoice.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-6 py-4">
                  {invoice.status === 'paid' ? (
                    <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 rounded-full text-xs font-semibold uppercase">Pago</span>
                  ) : invoice.status === 'cancelled' ? (
                     <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 rounded-full text-xs font-semibold uppercase">Cancelado</span>
                  ) : (
                    <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-1 rounded-full text-xs font-semibold uppercase">Pendente</span>
                  )}
                </td>
              </tr>
            ))}
            {(!invoices || invoices.length === 0) && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                  Nenhuma cobrança gerada ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
