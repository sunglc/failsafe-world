import { NextResponse } from 'next/server'

// MVP: Log waitlist signups to console (visible in Vercel logs)
// TODO: Connect to database (Supabase, Vercel KV, or Resend) for persistence
export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Log to Vercel server logs for now
    console.log(`[WAITLIST] ${new Date().toISOString()} — ${email}`)

    // TODO: Uncomment one of these integrations:

    // Option 1: Resend (email marketing)
    // await fetch('https://api.resend.com/audiences/{audience_id}/contacts', {
    //   method: 'POST',
    //   headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email }),
    // })

    // Option 2: Supabase
    // import { createClient } from '@supabase/supabase-js'
    // const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
    // await supabase.from('waitlist').insert({ email, created_at: new Date().toISOString() })

    // Option 3: Vercel KV
    // import { kv } from '@vercel/kv'
    // await kv.sadd('waitlist', email)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[WAITLIST ERROR]', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
