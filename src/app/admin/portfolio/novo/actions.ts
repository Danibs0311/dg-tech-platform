'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function createPortfolioItem(formData: FormData) {
  const supabase = await createClient()

  const title = formData.get('title') as string
  const slug = formData.get('slug') as string
  const client = formData.get('client') as string
  const category = formData.get('category') as string
  const description = formData.get('description') as string
  const content = formData.get('content') as string

  const { error } = await supabase.from('portfolio').insert({
    title,
    slug,
    client,
    category,
    description,
    content
  })

  if (error) {
    console.error(error)
    return redirect('/admin/portfolio/novo?error=true')
  }

  revalidatePath('/portfolio')
  revalidatePath('/admin/portfolio')
  redirect('/admin/portfolio')
}
