"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function submitLead(formData: FormData) {
  const nome = formData.get("nome")?.toString()
  const email = formData.get("email")?.toString()
  const telefone = formData.get("telefone")?.toString()
  const mensagem = formData.get("mensagem")?.toString()

  if (!nome || !email) {
    return { error: "Nome e E-mail são obrigatórios." }
  }

  const supabase = await createClient()

  const { error } = await supabase
    .from("leads")
    .insert([
      { nome, email, telefone, mensagem }
    ])

  if (error) {
    console.error("Erro ao inserir lead:", error)
    return { error: "Erro ao enviar mensagem. Tente novamente." }
  }

  revalidatePath("/contato")
  return { success: true }
}
