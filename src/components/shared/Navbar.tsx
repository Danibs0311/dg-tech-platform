import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold inline-block text-xl">DG TECH</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/sobre" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Sobre
            </Link>
            <Link href="/servicos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Serviços
            </Link>
            <Link href="/portfolio" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Portfólio
            </Link>
            <Link href="/contato" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/orcamento">
            <Button size="sm">Solicitar Orçamento</Button>
          </Link>
          <Link href="/cliente/dashboard" className="hidden md:block">
            <Button variant="outline" size="sm">Área do Cliente</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
