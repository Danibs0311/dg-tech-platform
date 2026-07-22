import { createClient } from "@/lib/supabase/server";
import { LifeBuoy, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ChamadosPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: tickets } = await supabase
    .from("tickets")
    .select("*")
    .eq("client_id", user?.id)
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Suporte e Chamados</h1>
          <p className="text-muted-foreground">Abra tickets e acompanhe suas solicitações.</p>
        </div>
        <Button className="font-bold">
          <PlusCircle className="w-4 h-4 mr-2" />
          Novo Chamado
        </Button>
      </div>

      {(!tickets || tickets.length === 0) ? (
        <div className="bg-card p-8 border rounded-xl shadow-sm text-center">
          <LifeBuoy className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h2 className="text-xl font-bold mb-2">Nenhum chamado aberto</h2>
          <p className="text-muted-foreground">Você não possui tickets de suporte no momento.</p>
        </div>
      ) : (
        <div className="bg-card border rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground uppercase">
              <tr>
                <th className="px-6 py-4 font-medium">Assunto</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Prioridade</th>
                <th className="px-6 py-4 font-medium">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium">{ticket.subject}</td>
                  <td className="px-6 py-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold uppercase">
                      {ticket.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 uppercase text-xs font-semibold text-muted-foreground">{ticket.priority}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {new Date(ticket.created_at).toLocaleDateString('pt-BR')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
