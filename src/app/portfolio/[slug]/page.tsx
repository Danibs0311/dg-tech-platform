import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: item } = await supabase.from("portfolio").select("title, description").eq("slug", slug).single();
  
  if (!item) return { title: "Case não encontrado" };
  
  return {
    title: `${item.title} | Portfólio DG TECH`,
    description: item.description || "Case de sucesso DG TECH.",
  };
}

export default async function PortfolioItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: item } = await supabase.from("portfolio").select("*").eq("slug", slug).single();

  if (!item) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl py-20 px-4">
      <Link href="/portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o Portfólio
      </Link>
      
      {item.cover_image && (
        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 bg-muted">
          <img src={item.cover_image} alt={item.title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="flex items-center gap-4 mb-4">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">{item.category}</span>
        <span className="text-muted-foreground font-medium">Cliente: {item.client}</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{item.title}</h1>
      <p className="text-xl text-muted-foreground mb-10 border-l-4 border-primary pl-4">{item.description}</p>
      
      <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: item.content || "" }} />
    </article>
  );
}
