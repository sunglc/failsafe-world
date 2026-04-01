'use client'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Features from '@/components/Features'
import AgentSection from '@/components/AgentSection'
import HowItWorks from '@/components/HowItWorks'
import RiskScore from '@/components/RiskScore'
import OriginStory from '@/components/OriginStory'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SocialProof />
      <Features />
      <AgentSection />
      <HowItWorks />
      <RiskScore />
      <OriginStory />
      <FinalCTA />
      <Footer />
    </main>
  )
}
