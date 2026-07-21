import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 bg-muted/40">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">DG TECH</h3>
          <p className="text-sm text-muted-foreground">
            Ajudando empresas a crescer através da tecnologia, oferecendo soluções digitais modernas, inteligentes e escaláveis.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Serviços</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/servicos/sites" className="hover:text-primary">Criação de Sites</Link></li>
            <li><Link href="/servicos/sistemas" className="hover:text-primary">Sistemas Web</Link></li>
            <li><Link href="/servicos/automacao" className="hover:text-primary">Automação com IA</Link></li>
            <li><Link href="/servicos/seo" className="hover:text-primary">SEO Estratégico</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/sobre" className="hover:text-primary">Sobre Nós</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary">Cases de Sucesso</Link></li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link href="/contato" className="hover:text-primary">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/termos" className="hover:text-primary">Termos de Uso</Link></li>
            <li><Link href="/privacidade" className="hover:text-primary">Política de Privacidade</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} DG TECH - Soluções Tecnológicas. Todos os direitos reservados.
      </div>
    </footer>
  );
}
