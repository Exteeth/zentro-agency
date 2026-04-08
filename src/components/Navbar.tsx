import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

// Nav links hoisted outside component (rendering-hoist-jsx)
const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

interface NavbarProps {
  onGetStarted: () => void
}

export function Navbar({ onGetStarted }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    // Passive event listener (client-passive-event-listeners)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  return (
    <nav
      id="navbar"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass border-b border-border shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-background/90 to-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" id="logo-link">
            <img
              src="/logo.png"
              alt="Zentro Agency"
              className="h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105 invert brightness-0 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-surface-hover"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button size="sm" onClick={onGetStarted} id="navbar-cta">
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden flex flex-col items-center justify-center size-10 gap-1.5 rounded-lg hover:bg-surface-hover transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={cn(
                'w-5 h-0.5 bg-foreground rounded-full transition-all duration-300',
                isMobileMenuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'w-5 h-0.5 bg-foreground rounded-full transition-all duration-300',
                isMobileMenuOpen && 'opacity-0 scale-0'
              )}
            />
            <span
              className={cn(
                'w-5 h-0.5 bg-foreground rounded-full transition-all duration-300',
                isMobileMenuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 glass border-t border-border',
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-surface-hover rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <Button
              size="sm"
              className="w-full"
              onClick={() => {
                setIsMobileMenuOpen(false)
                onGetStarted()
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
