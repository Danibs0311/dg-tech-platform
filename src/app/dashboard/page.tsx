import { createClient } from "@/lib/supabase/server";
import { Activity, CreditCard, ExternalLink, FolderGit2, LifeBuoy, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">
          Bem-vindo de volta
        </h1>
        <p className="text-slate-400">
          Acompanhe o andamento dos seus projetos e solicitações na DG TECH.
        </p>
      </div>

      {/* Bento Grid - Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Stat Card 1 */}
        <div className="relative overflow-hidden bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between group hover:border-blue-500/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-colors" />
          <div className="flex items-start justify-between mb-8">
            <div className="bg-blue-950/50 border border-blue-900/50 p-3 rounded-xl">
              <FolderGit2 className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-sm font-medium text-blue-400 bg-blue-950/50 px-2.5 py-1 rounded-full border border-blue-900/50">
              Ativos
            </span>
          </div>
          <div>
            <h3 className="text-slate-400 font-medium mb-1">Projetos em Andamento</h3>
            <p className="text-4xl font-black text-white">0</p>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="relative overflow-hidden bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between group hover:border-emerald-500/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] group-hover:bg-emerald-500/20 transition-colors" />
          <div className="flex items-start justify-between mb-8">
            <div className="bg-emerald-950/50 border border-emerald-900/50 p-3 rounded-xl">
              <LifeBuoy className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-sm font-medium text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-900/50">
              Suporte
            </span>
          </div>
          <div>
            <h3 className="text-slate-400 font-medium mb-1">Chamados Abertos</h3>
            <p className="text-4xl font-black text-white">0</p>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="relative overflow-hidden bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between group hover:border-purple-500/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] group-hover:bg-purple-500/20 transition-colors" />
          <div className="flex items-start justify-between mb-8">
            <div className="bg-purple-950/50 border border-purple-900/50 p-3 rounded-xl">
              <CreditCard className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-sm font-medium text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-full border border-slate-700">
              Em dia
            </span>
          </div>
          <div>
            <h3 className="text-slate-400 font-medium mb-1">Faturas Pendentes</h3>
            <p className="text-4xl font-black text-white">0</p>
          </div>
        </div>
      </div>

      {/* Main Content Area - Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Activity Chart Placeholder */}
        <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Métricas do Projeto</h2>
              <p className="text-sm text-slate-400">Visão geral da evolução nos últimos 30 dias</p>
            </div>
            <TrendingUp className="w-5 h-5 text-slate-500" />
          </div>
          
          <div className="h-64 w-full rounded-xl border border-dashed border-slate-800 flex items-center justify-center bg-slate-950/50 relative">
             <Activity className="w-12 h-12 text-slate-800 mb-4" />
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-slate-500 font-medium z-10">Gráfico de Progresso</span>
                <span className="text-xs text-slate-600 z-10 mt-2">Os dados aparecerão quando o projeto iniciar</span>
             </div>
             {/* Fake lines to look like a chart placeholder */}
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="lg:col-span-1 bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Atualizações Recentes</h2>
          
          <div className="space-y-6">
            {/* Empty State */}
            <div className="flex flex-col items-center justify-center text-center py-10">
              <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mb-4">
                <LifeBuoy className="w-5 h-5 text-slate-500" />
              </div>
              <p className="text-slate-300 font-medium mb-1">Nenhuma atualização</p>
              <p className="text-sm text-slate-500 mb-6">Seu histórico de atividades aparecerá aqui.</p>
              
              <Link href="/dashboard/chamados">
                <Button variant="outline" className="w-full bg-transparent border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800">
                  Abrir um Chamado
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
