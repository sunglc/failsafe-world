# Failsafe — failsafe.world

Your digital life's disaster recovery center. Map dependencies, see your blast radius, back up what matters.

## Quick Start

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push to GitHub
2. Import in [Vercel Dashboard](https://vercel.com/new)
3. Add custom domain: `failsafe.world`
4. Done!

## Waitlist Storage

The waitlist API (`/api/waitlist`) currently logs emails to server console (visible in Vercel Logs > Functions). 

To add persistent storage, uncomment one of the integrations in `app/api/waitlist/route.js`:
- **Resend** — Best for email marketing integration
- **Supabase** — Free tier, good for structured data
- **Vercel KV** — Simplest, $0 for low volume

## Project Structure

```
app/
  layout.js          # Root layout with metadata + fonts
  page.js            # Main landing page
  globals.css        # CSS variables + reset
  api/waitlist/      # Waitlist signup endpoint
components/
  Nav.js             # Sticky nav with scroll effect
  Hero.js            # Hero section + blast radius demo
  BlastRadiusDemo.js # Interactive dependency visualization
  WaitlistForm.js    # Email capture form (reused)
  SocialProof.js     # Stats banner
  Features.js        # 6 feature cards with scroll animation
  HowItWorks.js      # 4-step process
  RiskScore.js       # Animated risk score demo
  OriginStory.js     # Founder quote
  FinalCTA.js        # Bottom waitlist CTA
  Footer.js          # Footer
```
