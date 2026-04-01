'use client'

import { useState, useEffect, useRef } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import RiskScore from '@/components/RiskScore'
import AgentSection from '@/components/AgentSection'
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
      <HowItWorks />
      <RiskScore />
      <AgentSection />
      <OriginStory />
      <FinalCTA />
      <Footer />
    </main>
  )
}
