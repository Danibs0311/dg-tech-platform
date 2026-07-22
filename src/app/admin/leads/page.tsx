import { createClient } from "@/lib/supabase/server";

export default async function AdminLeadsPage() {
  const supabase = await createClient();
  
  const { data: leads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Gestão de Leads</h1>
        <p className="text-slate-400">Contatos recebidos através do site.</p>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-900 text-slate-400 uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Data</th>
              <th className="px-6 py-4 font-medium">Nome</th>
              <th className="px-6 py-4 font-medium">Contato</th>
              <th className="px-6 py-4 font-medium">Mensagem</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-200">
            {leads?.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(lead.created_at).toLocaleDateString('pt-BR')}
                </td>
                <td className="px-6 py-4 font-medium">{lead.nome}</td>
                <td className="px-6 py-4">
                  <div>{lead.email}</div>
                  <div className="text-slate-400 text-xs mt-1">{lead.telefone}</div>
                </td>
                <td className="px-6 py-4 max-w-xs truncate" title={lead.mensagem}>
                  {lead.mensagem}
                </td>
                <td className="px-6 py-4">
                  <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded-full text-xs font-semibold uppercase border border-slate-700">
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
            {(!leads || leads.length === 0) && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                  Nenhum lead encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
