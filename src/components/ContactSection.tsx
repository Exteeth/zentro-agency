import { Button } from '@/components/ui/Button'

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl glass border border-border p-8 md:p-16 text-center relative overflow-hidden">
          
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-brand-gold/5 pointer-events-none" />
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              Ready to build something amazing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Start a Project
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Schedule a Call
              </Button>
            </div>
            
            <div className="mt-12 text-sm text-muted-foreground">
              <p>Email: hello@zentro.agency</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
