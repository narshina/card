import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import WeddingCurtainIntro from './components/WeddingCurtainIntro'
import HeroSection from './components/HeroSection'
import InvitationSection from './components/InvitationSection'
import DateSection from './components/DateSection'
import CountdownSection from './components/CountdownSection'
import LocationSection from './components/LocationSection'
import FinalInvitation from './components/FinalInvitation'
import './App.css'

export default function App() {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  return (
    <div className="app-shell">
      <AnimatePresence>
        {!opened && (
          <WeddingCurtainIntro key="curtain" onOpened={() => setOpened(true)} />
        )}
      </AnimatePresence>

      {opened && (
        <main>
          <HeroSection />
          <InvitationSection />
          <DateSection />
          <CountdownSection />
          <LocationSection />
          <FinalInvitation />
        </main>
      )}
    </div>
  )
}
