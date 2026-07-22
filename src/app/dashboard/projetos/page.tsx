import { createClient } from "@/lib/supabase/server";
import { FolderGit2, Calendar, Clock } from "lucide-react";

export default async function ProjetosPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("client_id", user?.id)
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Meus Projetos</h1>
        <p className="text-muted-foreground">Acompanhe o andamento dos seus projetos contratados.</p>
      </div>

      {(!projects || projects.length === 0) ? (
        <div className="bg-card p-8 border rounded-xl shadow-sm text-center">
          <FolderGit2 className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h2 className="text-xl font-bold mb-2">Nenhum projeto ativo</h2>
          <p className="text-muted-foreground">Você ainda não possui projetos em andamento conosco.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-card p-6 border rounded-xl shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">{proj.title}</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase">
                  {proj.status.replace('_', ' ')}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">{proj.description}</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Progresso</span>
                    <span>{proj.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${proj.progress}%` }}></div>
                  </div>
                </div>
                
                <div className="flex gap-4 text-xs text-muted-foreground border-t pt-4">
                  {proj.start_date && (
                    <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/> Início: {proj.start_date}</div>
                  )}
                  {proj.deadline && (
                    <div className="flex items-center gap-1"><Clock className="w-4 h-4"/> Prazo: {proj.deadline}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
