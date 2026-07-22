'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function createPost(formData: FormData) {
  const supabase = await createClient()

  const title = formData.get('title') as string
  const slug = formData.get('slug') as string
  const excerpt = formData.get('excerpt') as string
  const content = formData.get('content') as string
  const published = formData.get('published') === 'on'

  const { error } = await supabase.from('posts').insert({
    title,
    slug,
    excerpt,
    content,
    published
  })

  if (error) {
    console.error(error)
    return redirect('/admin/blog/novo?error=true')
  }

  revalidatePath('/blog')
  revalidatePath('/admin/blog')
  redirect('/admin/blog')
}
