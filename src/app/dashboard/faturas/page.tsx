import { createClient } from "@/lib/supabase/server";
import { DollarSign, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function ClientFaturasPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return null;

  const { data: invoices } = await supabase
    .from('invoices')
    .select('*')
    .eq('client_id', user.id)
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Minhas Faturas</h1>
        <p className="text-slate-400">Acompanhe seus pagamentos e mensalidades abertas.</p>
      </div>

      <div className="grid gap-4">
        {invoices?.map((invoice) => (
          <div key={invoice.id} className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="font-bold text-lg text-slate-200">{invoice.title}</h3>
              <p className="text-sm text-slate-400">Gerada em {new Date(invoice.created_at).toLocaleDateString('pt-BR')}</p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="block text-2xl font-black text-emerald-400">
                  R$ {invoice.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
                <span className="text-sm text-slate-500 uppercase font-semibold">
                  {invoice.status === 'paid' ? 'Pago' : invoice.status === 'cancelled' ? 'Cancelado' : 'Pendente'}
                </span>
              </div>
              
              {invoice.status === 'pending' && invoice.mp_payment_link && (
                <Link href={invoice.mp_payment_link} target="_blank">
                  <Button className="font-bold bg-emerald-500 hover:bg-emerald-600 text-white">
                    Pagar Agora
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        ))}

        {(!invoices || invoices.length === 0) && (
          <div className="text-center py-12 text-slate-500 bg-slate-950/50 rounded-xl border border-slate-800/50">
            <DollarSign className="w-12 h-12 mx-auto mb-3 opacity-20" />
            <p>Você não possui nenhuma fatura pendente ou histórico de cobranças.</p>
          </div>
        )}
      </div>
    </div>
  );
}
