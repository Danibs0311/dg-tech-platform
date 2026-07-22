import { login } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ message: string }> }) {
  const params = await searchParams;
  return (
    <div className="flex-1 flex items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-md p-8 bg-card border rounded-2xl shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Área do Cliente</h1>
          <p className="text-muted-foreground text-sm mt-2">Faça login para acessar seus projetos e chamados.</p>
        </div>
        
        <form action={login} className="space-y-4 flex flex-col">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">E-mail</label>
            <Input id="email" name="email" type="email" required placeholder="cliente@empresa.com.br" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="password">Senha</label>
            <Input id="password" name="password" type="password" required />
          </div>
          
          <Button type="submit" className="w-full font-bold mt-4">Entrar</Button>

          {params?.message && (
            <p className="mt-4 p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200 text-center">
              E-mail ou senha incorretos.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
