import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    const cleanEmail = email.toLowerCase().trim()

    // If Supabase is configured, use it
    if (supabase) {
      // Check for duplicate
      const { data: existing } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', cleanEmail)
        .single()

      if (existing) {
        return NextResponse.json(
          { error: "You're already on the list!" },
          { status: 409 }
        )
      }

      // Insert new signup
      const { error } = await supabase
        .from('waitlist')
        .insert({
          email: cleanEmail,
          source: 'landing_page',
          created_at: new Date().toISOString(),
        })

      if (error) {
        console.error('[WAITLIST SUPABASE ERROR]', error)
        return NextResponse.json(
          { error: 'Something went wrong. Please try again.' },
          { status: 500 }
        )
      }
    }

    // Always log to console as backup
    console.log(`[WAITLIST] ${new Date().toISOString()} — ${cleanEmail}`)
    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('[WAITLIST ERROR]', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
