import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { PlusCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function AdminBlogPage() {
  const supabase = await createClient();
  
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Gestão do Blog</h1>
          <p className="text-slate-400">Gerencie os artigos publicados no site.</p>
        </div>
        <Link href="/admin/blog/novo">
          <Button className="font-bold">
            <PlusCircle className="w-4 h-4 mr-2" />
            Novo Artigo
          </Button>
        </Link>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-900 text-slate-400 uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Data</th>
              <th className="px-6 py-4 font-medium">Título</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-200">
            {posts?.map((post) => (
              <tr key={post.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(post.created_at).toLocaleDateString('pt-BR')}
                </td>
                <td className="px-6 py-4 font-medium">{post.title}</td>
                <td className="px-6 py-4">
                  {post.published ? (
                    <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 rounded-full text-xs font-semibold uppercase">Publicado</span>
                  ) : (
                    <span className="bg-slate-800 text-slate-400 border border-slate-700 px-2 py-1 rounded-full text-xs font-semibold uppercase">Rascunho</span>
                  )}
                </td>
              </tr>
            ))}
            {(!posts || posts.length === 0) && (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-slate-500">
                  Nenhum artigo encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
