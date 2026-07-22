import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog | DG TECH",
  description: "Artigos, dicas e novidades sobre tecnologia e negócios.",
};

export const revalidate = 60; // ISR cache (1 minute)

export default async function BlogPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-16 bg-muted/30 border-b text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Nosso Blog</h1>
          <p className="text-lg text-muted-foreground">Insights sobre tecnologia, SEO, sistemas web e automação de IA.</p>
        </div>
      </section>

      <section className="w-full py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {(!posts || posts.length === 0) ? (
             <div className="text-center py-10">
               <h3 className="text-xl text-muted-foreground mb-4">Nenhum artigo publicado ainda.</h3>
             </div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {posts.map((post) => (
                 <div key={post.id} className="border bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col">
                   <div className="h-48 bg-muted w-full relative">
                     {post.cover_image ? (
                        <img src={post.cover_image} alt={post.title} className="object-cover w-full h-full" />
                     ) : (
                        <div className="flex items-center justify-center w-full h-full text-muted-foreground">Sem imagem</div>
                     )}
                   </div>
                   <div className="p-6 flex flex-col flex-grow">
                     <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                     <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
                     <div className="mt-auto">
                       <Link href={`/blog/${post.slug}`}>
                         <Button variant="outline" className="w-full">Ler artigo</Button>
                       </Link>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          )}
        </div>
      </section>
    </div>
  );
}
