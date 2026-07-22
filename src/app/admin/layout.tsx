import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Users, FolderGit2, LifeBuoy, FileText, Image, LogOut, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // TODO: Em produção, verificar se o user.email é o e-mail do dono da agência.

  async function signOut() {
    "use server"
    const supabaseClient = await createClient();
    await supabaseClient.auth.signOut();
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-50">
      <aside className="w-64 bg-slate-950 border-r border-slate-800 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="font-bold text-lg text-primary">DG TECH - Admin</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-md font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link href="/admin/leads" className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-md font-medium transition-colors">
            <Users className="w-5 h-5" />
            Gestão de Leads
          </Link>
          <Link href="/admin/projetos" className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-md font-medium transition-colors">
            <FolderGit2 className="w-5 h-5" />
            Projetos & Clientes
          </Link>
          <Link href="/admin/chamados" className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-md font-medium transition-colors">
            <LifeBuoy className="w-5 h-5" />
            Helpdesk
          </Link>
          <div className="pt-4 mt-4 border-t border-slate-800">
            <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Conteúdo</p>
            <Link href="/admin/blog" className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800 rounded-md font-medium transition-colors">
              <FileText className="w-5 h-5" />
              Blog
            </Link>
            <Link href="/admin/chamados" className="flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors">
              <LifeBuoy className="w-5 h-5" />
              <span>Chamados</span>
            </Link>
            
            <Link href="/admin/financeiro" className="flex items-center space-x-3 text-emerald-400 hover:text-emerald-300 hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors">
              <DollarSign className="w-5 h-5" />
              <span>Financeiro</span>
            </Link>
          </div>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <form action={signOut}>
            <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-red-400 hover:bg-slate-900">
              <LogOut className="w-5 h-5 mr-3" />
              Sair
            </Button>
          </form>
        </div>
      </aside>
      
      <main className="flex-1 p-8 overflow-y-auto bg-slate-900">
        {children}
      </main>
    </div>
  );
}
