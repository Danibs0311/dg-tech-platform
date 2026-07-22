import { createPost } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NovoPostPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Novo Artigo</h1>
        <p className="text-slate-400">Crie uma nova publicação para o blog.</p>
      </div>

      <div className="bg-slate-950 p-6 border border-slate-800 rounded-xl">
        <form action={createPost} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200">Título</label>
            <Input name="title" required className="bg-slate-900 border-slate-800" placeholder="Ex: A importância de um site profissional" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200">Slug (URL amigável)</label>
            <Input name="slug" required className="bg-slate-900 border-slate-800" placeholder="Ex: importancia-site-profissional" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200">Resumo (Excerpt)</label>
            <Textarea name="excerpt" className="bg-slate-900 border-slate-800" placeholder="Pequeno resumo que aparece na listagem do blog..." />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200">Conteúdo (Suporta Markdown)</label>
            <Textarea name="content" required className="bg-slate-900 border-slate-800 min-h-[300px]" placeholder="# Título 1&#10;Escreva o conteúdo completo aqui..." />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="published" name="published" className="rounded border-slate-800 bg-slate-900" />
            <label htmlFor="published" className="text-sm text-slate-200">Publicar imediatamente?</label>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-800">
            <Button type="submit">Salvar Artigo</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
