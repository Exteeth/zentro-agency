import { useState, useCallback } from 'react'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { ContactModal } from '@/components/ContactModal'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = useCallback(() => setIsModalOpen(true), [])
  const closeModal = useCallback(() => setIsModalOpen(false), [])

  return (
    <div className="dark min-h-[100dvh] bg-background text-foreground flex flex-col">
      <Navbar onGetStarted={openModal} />
      
      <main className="flex-1">
        <HeroSection onGetStarted={openModal} />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground glass">
        <p>© 2026 Zentro Agency. All rights reserved.</p>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
