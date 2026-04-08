import { useState, useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormStatus = 'idle' | 'submitting' | 'success'

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      setFormStatus('submitting')

      // Simulate API call
      setTimeout(() => {
        setFormStatus('success')
        setTimeout(() => {
          setFormStatus('idle')
          setFormData({ name: '', email: '', message: '' })
          onClose()
        }, 2000)
      }, 1500)
    },
    [onClose]
  )

  if (!isOpen) return null

  return (
    <div
      id="contact-modal-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        id="contact-modal"
        className="relative w-full max-w-md rounded-2xl glass border border-border p-8 animate-scale-in shadow-2xl"
      >
        {/* Close button */}
        <button
          id="modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 size-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
          aria-label="Close dialog"
        >
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Use ternary not && (rendering-conditional-render) */}
        {formStatus === 'success' ? (
          <div className="text-center py-8 animate-scale-in">
            <div className="size-16 mx-auto rounded-full bg-gradient-to-br from-brand-teal to-brand-gold flex items-center justify-center mb-4">
              <svg className="size-8 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground font-heading mb-2">
              Thank you!
            </h3>
            <p className="text-muted-foreground text-sm">
              We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2
                id="modal-title"
                className="text-2xl font-bold text-foreground font-heading"
              >
                Let's get started
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Tell us about your project and we'll reach out.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Numchai Boonchan"
                  className="w-full h-11 px-4 rounded-xl bg-surface border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="numchaigamer@gmail.com"
                  className="w-full h-11 px-4 rounded-xl bg-surface border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className={cn('w-full', formStatus === 'submitting' && 'opacity-70 pointer-events-none')}
                id="modal-submit"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="size-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
