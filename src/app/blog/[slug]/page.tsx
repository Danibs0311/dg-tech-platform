import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60; // ISR cache

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase.from("posts").select("title, excerpt").eq("slug", slug).single();
  
  if (!post) return { title: "Post não encontrado" };
  
  return {
    title: `${post.title} | DG TECH`,
    description: post.excerpt || "Artigo do blog DG TECH.",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase.from("posts").select("*").eq("slug", slug).single();

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl py-20 px-4">
      <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o Blog
      </Link>
      
      {post.cover_image && (
        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 bg-muted">
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{post.title}</h1>
      <p className="text-xl text-muted-foreground mb-10 border-l-4 border-primary pl-4">{post.excerpt}</p>
      
      <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content || "" }} />
    </article>
  );
}
