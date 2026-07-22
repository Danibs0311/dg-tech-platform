import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    
    // Mercado Pago envia topic=payment ou type=payment no body
    const topic = searchParams.get('topic') || body.type;
    const paymentId = searchParams.get('id') || body.data?.id;

    if (topic === 'payment' && paymentId) {
      // 1. Busca os detalhes do pagamento direto da API do Mercado Pago
      const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`
        }
      });
      
      const paymentData = await mpResponse.json();

      // 2. Se foi aprovado, localiza a Fatura pelo ID customizado que enviamos (external_reference)
      if (paymentData.status === 'approved' && paymentData.external_reference) {
        
        // Conexão de Admin que ignora o RLS, pois o Webhook roda fora da sessão de usuário
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; 
        
        const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

        const { error } = await supabaseAdmin
          .from('invoices')
          .update({ status: 'paid' })
          .eq('id', paymentData.external_reference);

        if (error) {
          console.error("Supabase Update Error:", error);
          return NextResponse.json({ error: 'Falha ao atualizar no banco de dados' }, { status: 500 });
        }
      }
    }

    // Mercado Pago exige retorno 200 rápido para webhooks
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook MP Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
