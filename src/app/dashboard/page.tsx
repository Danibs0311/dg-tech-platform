import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Olá, {user?.email}</h1>
        <p className="text-muted-foreground">Bem-vindo à sua área exclusiva da DG TECH.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-6 border rounded-xl shadow-sm">
          <h3 className="font-semibold text-muted-foreground mb-2">Projetos Ativos</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-card p-6 border rounded-xl shadow-sm">
          <h3 className="font-semibold text-muted-foreground mb-2">Chamados Abertos</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>
      
      <div className="bg-card p-8 border rounded-xl shadow-sm mt-8">
        <h2 className="text-xl font-bold mb-4">Atualizações Recentes</h2>
        <p className="text-muted-foreground">Nenhuma atualização recente no seu projeto.</p>
      </div>
    </div>
  );
}
