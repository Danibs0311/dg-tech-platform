import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, LogOut, FolderGit2, LifeBuoy, Receipt, Menu, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  async function signOut() {
    "use server"
    const supabaseClient = await createClient();
    await supabaseClient.auth.signOut();
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      
      {/* Sidebar - Desktop */}
      <aside className="w-72 hidden md:flex flex-col bg-slate-900/50 backdrop-blur-xl border-r border-slate-800 z-20 sticky top-0 h-screen">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">DG TECH</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <div className="mb-4 mt-2 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Menu Principal
          </div>
          
          <Link href="/dashboard" className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all">
            <LayoutDashboard className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            <span className="font-medium">Visão Geral</span>
          </Link>
          
          <Link href="/dashboard/projetos" className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all">
            <FolderGit2 className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            <span className="font-medium">Meus Projetos</span>
          </Link>
          
          <Link href="/dashboard/chamados" className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all">
            <LifeBuoy className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            <span className="font-medium">Suporte</span>
          </Link>
          
          <Link href="/dashboard/faturas" className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all">
            <Receipt className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            <span className="font-medium">Financeiro</span>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-3 py-3 mb-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold text-blue-400 border border-slate-700">
              {user.email?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-white truncate">Cliente</p>
              <p className="text-xs text-slate-400 truncate">{user.email}</p>
            </div>
          </div>
          
          <form action={signOut}>
            <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-red-400 hover:bg-red-950/30 transition-colors">
              <LogOut className="w-5 h-5 mr-3" />
              Sair da conta
            </Button>
          </form>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen max-w-full overflow-hidden">
        
        {/* Top Header - Mobile & Desktop Profile */}
        <header className="h-20 bg-slate-900/30 backdrop-blur-md border-b border-slate-800 flex items-center justify-between md:justify-end px-6 sticky top-0 z-10">
          <div className="flex items-center md:hidden gap-3">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white">DG TECH</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button>
            <div className="md:hidden">
              <button className="p-2 text-slate-400 hover:text-white">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 lg:p-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
