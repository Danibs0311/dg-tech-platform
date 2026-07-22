'use server'

import { createClient } from '@/lib/supabase/server'
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { revalidatePath } from 'next/cache'

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN || '' });

export async function createInvoice(formData: FormData) {
  const supabase = await createClient()

  const clientId = formData.get('client_id') as string;
  const title = formData.get('title') as string;
  const amountStr = formData.get('amount') as string;
  const amount = parseFloat(amountStr);

  try {
    const preference = new Preference(client);
    
    const { data: invoiceData, error: dbError } = await supabase.from('invoices').insert({
      client_id: clientId,
      title: title,
      amount: amount,
      status: 'pending'
    }).select().single();

    if (dbError) throw dbError;

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const mpResponse = await preference.create({
      body: {
        items: [
          {
            id: invoiceData.id,
            title: title,
            quantity: 1,
            unit_price: amount,
            currency_id: 'BRL',
          }
        ],
        external_reference: invoiceData.id,
        back_urls: {
          success: `${siteUrl}/dashboard/faturas`,
          failure: `${siteUrl}/dashboard/faturas`,
          pending: `${siteUrl}/dashboard/faturas`
        },
        auto_return: 'approved',
      }
    });

    await supabase.from('invoices').update({
      mp_preference_id: mpResponse.id,
      mp_payment_link: mpResponse.init_point
    }).eq('id', invoiceData.id);

    revalidatePath('/admin/financeiro');
    return { success: true }
  } catch (error) {
    console.error("Mercado Pago Error:", error);
    return { error: 'Failed to generate payment link' }
  }
}
