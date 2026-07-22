import { createClient } from "@/lib/supabase/server";
import { Users, FolderGit2, LifeBuoy } from "lucide-react";

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  
  // Buscar contagens rápidas
  const { count: leadsCount } = await supabase.from('leads').select('*', { count: 'exact', head: true });
  const { count: projectsCount } = await supabase.from('projects').select('*', { count: 'exact', head: true });
  const { count: ticketsCount } = await supabase.from('tickets').select('*', { count: 'exact', head: true });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Painel de Controle</h1>
        <p className="text-slate-400">Visão geral da operação da DG TECH.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-950 p-6 border border-slate-800 rounded-xl flex items-center gap-4">
          <div className="p-4 bg-primary/20 rounded-full text-primary">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <p className="text-slate-400 font-medium">Total de Leads</p>
            <h3 className="text-3xl font-bold">{leadsCount || 0}</h3>
          </div>
        </div>
        
        <div className="bg-slate-950 p-6 border border-slate-800 rounded-xl flex items-center gap-4">
          <div className="p-4 bg-blue-500/20 rounded-full text-blue-500">
            <FolderGit2 className="w-8 h-8" />
          </div>
          <div>
            <p className="text-slate-400 font-medium">Projetos Ativos</p>
            <h3 className="text-3xl font-bold">{projectsCount || 0}</h3>
          </div>
        </div>

        <div className="bg-slate-950 p-6 border border-slate-800 rounded-xl flex items-center gap-4">
          <div className="p-4 bg-orange-500/20 rounded-full text-orange-500">
            <LifeBuoy className="w-8 h-8" />
          </div>
          <div>
            <p className="text-slate-400 font-medium">Chamados</p>
            <h3 className="text-3xl font-bold">{ticketsCount || 0}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
