import { createPortfolioItem } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NovoPortfolioPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Novo Case (Portfólio)</h1>
        <p className="text-slate-400">Adicione um novo projeto entregue ao portfólio.</p>
      </div>

      <div className="bg-slate-950 p-6 border border-slate-800 rounded-xl">
        <form action={createPortfolioItem} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-200">Título do Projeto</label>
              <Input name="title" required className="bg-slate-900 border-slate-800" placeholder="Ex: Landing Page para Clínica" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-200">Slug (URL amigável)</label>
              <Input name="slug" required className="bg-slate-900 border-slate-800" placeholder="Ex: lp-clinica-medica" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-200">Nome do Cliente</label>
              <Input name="client" className="bg-slate-900 border-slate-800" placeholder="Ex: Dra. Ana Sousa" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-200">Categoria</label>
              <Input name="category" className="bg-slate-900 border-slate-800" placeholder="Ex: Web Design" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200">Descrição Curta</label>
            <Textarea name="description" className="bg-slate-900 border-slate-800" placeholder="Breve resumo do projeto..." />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200">Conteúdo do Case (Markdown)</label>
            <Textarea name="content" required className="bg-slate-900 border-slate-800 min-h-[300px]" placeholder="Escreva os detalhes, desafios e resultados do projeto..." />
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-800">
            <Button type="submit">Salvar Projeto</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
