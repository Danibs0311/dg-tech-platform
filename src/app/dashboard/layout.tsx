import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, LogOut, FolderGit2, LifeBuoy, Receipt } from "lucide-react";
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
    <div className="flex min-h-[80vh] bg-slate-50 dark:bg-transparent">
      <aside className="w-64 bg-card border-r hidden md:flex flex-col">
        <div className="p-6 border-b">
          <h2 className="font-bold text-lg text-primary">Painel do Cliente</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 hover:bg-muted text-foreground rounded-md font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Visão Geral
          </Link>
          <Link href="/dashboard/projetos" className="flex items-center gap-3 px-3 py-2 hover:bg-muted text-foreground rounded-md font-medium transition-colors">
            <FolderGit2 className="w-5 h-5" />
            Meus Projetos
          </Link>
          <Link href="/dashboard/chamados" className="flex items-center gap-3 px-3 py-2 hover:bg-muted text-foreground rounded-md font-medium transition-colors">
            <LifeBuoy className="w-5 h-5" />
            Suporte (Chamados)
          </Link>
          <Link href="/dashboard/faturas" className="flex items-center gap-3 px-3 py-2 hover:bg-muted text-foreground rounded-md font-medium transition-colors">
            <Receipt className="w-5 h-5" />
            Faturas
          </Link>
        </nav>
        <div className="p-4 border-t">
          <form action={signOut}>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-red-500">
              <LogOut className="w-5 h-5 mr-3" />
              Sair
            </Button>
          </form>
        </div>
      </aside>
      
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
