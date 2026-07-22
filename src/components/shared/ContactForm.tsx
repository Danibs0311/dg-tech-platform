"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitLead } from "@/app/actions/lead"

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    const formData = new FormData(e.currentTarget)
    const result = await submitLead(formData)

    if (result.error) {
      setError(result.error)
    } else if (result.success) {
      setSuccess(true)
      e.currentTarget.reset()
    }
    
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success && (
        <div className="p-4 bg-green-50 text-green-700 rounded-md border border-green-200 mb-4 font-medium">
          Mensagem enviada com sucesso! Em breve nossa equipe entrará em contato.
        </div>
      )}
      
      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md border border-red-200 mb-4 font-medium">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="nome" className="text-sm font-medium">Nome completo</label>
        <Input id="nome" name="nome" placeholder="Digite seu nome" required disabled={loading} />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">E-mail corporativo</label>
        <Input id="email" name="email" type="email" placeholder="seu@email.com" required disabled={loading} />
      </div>
      <div className="space-y-2">
        <label htmlFor="telefone" className="text-sm font-medium">WhatsApp</label>
        <Input id="telefone" name="telefone" placeholder="(11) 99999-9999" required disabled={loading} />
      </div>
      <div className="space-y-2">
        <label htmlFor="mensagem" className="text-sm font-medium">Como podemos ajudar?</label>
        <Textarea id="mensagem" name="mensagem" placeholder="Descreva brevemente o seu projeto..." rows={4} required disabled={loading} />
      </div>
      <Button type="submit" className="w-full font-bold" disabled={loading}>
        {loading ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  )
}
