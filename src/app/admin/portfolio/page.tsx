import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function AdminPortfolioPage() {
  const supabase = await createClient();
  
  const { data: portfolio } = await supabase
    .from('portfolio')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Gestão do Portfólio</h1>
          <p className="text-slate-400">Gerencie os cases de sucesso exibidos no site.</p>
        </div>
        <Link href="/admin/portfolio/novo">
          <Button className="font-bold">
            <PlusCircle className="w-4 h-4 mr-2" />
            Novo Projeto
          </Button>
        </Link>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-900 text-slate-400 uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Projeto</th>
              <th className="px-6 py-4 font-medium">Cliente</th>
              <th className="px-6 py-4 font-medium">Categoria</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-200">
            {portfolio?.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 font-medium">{item.title}</td>
                <td className="px-6 py-4 text-slate-400">{item.client}</td>
                <td className="px-6 py-4">
                  <span className="bg-slate-800 text-slate-300 border border-slate-700 px-2 py-1 rounded-full text-xs font-semibold">{item.category}</span>
                </td>
              </tr>
            ))}
            {(!portfolio || portfolio.length === 0) && (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-slate-500">
                  Nenhum projeto encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
