import { createClient } from "@/lib/supabase/server";

export default async function AdminProjetosPage() {
  const supabase = await createClient();
  
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Projetos & Clientes</h1>
        <p className="text-slate-400">Gerencie o andamento dos projetos da agência.</p>
      </div>

      {(!projects || projects.length === 0) ? (
        <div className="bg-slate-950 p-8 border border-slate-800 rounded-xl text-center">
          <p className="text-slate-500">Nenhum projeto encontrado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-slate-950 p-6 border border-slate-800 rounded-xl flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl text-slate-100">{proj.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">Cliente ID: {proj.client_id}</p>
                </div>
                <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                  {proj.status.replace('_', ' ')}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-6 flex-grow">{proj.description}</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-slate-300">
                    <span className="font-medium">Progresso</span>
                    <span>{proj.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${proj.progress}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
