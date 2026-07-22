import { createClient } from "@/lib/supabase/server";

export default async function AdminChamadosPage() {
  const supabase = await createClient();
  
  const { data: tickets } = await supabase
    .from('tickets')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Helpdesk (Chamados)</h1>
        <p className="text-slate-400">Atenda às solicitações de suporte dos seus clientes.</p>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-900 text-slate-400 uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Data</th>
              <th className="px-6 py-4 font-medium">Cliente ID</th>
              <th className="px-6 py-4 font-medium">Assunto</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Prioridade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-200">
            {tickets?.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(ticket.created_at).toLocaleDateString('pt-BR')}
                </td>
                <td className="px-6 py-4 font-mono text-xs text-slate-500 truncate max-w-[100px]">{ticket.client_id}</td>
                <td className="px-6 py-4 font-medium">{ticket.subject}</td>
                <td className="px-6 py-4">
                  <span className="bg-orange-500/20 text-orange-400 px-2 py-1 border border-orange-500/30 rounded-full text-xs font-semibold uppercase">
                    {ticket.status.replace('_', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4 uppercase text-xs font-semibold text-slate-400">{ticket.priority}</td>
              </tr>
            ))}
            {(!tickets || tickets.length === 0) && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                  Nenhum chamado aberto.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
