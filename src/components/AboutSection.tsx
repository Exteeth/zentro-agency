import { Rocket } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass border border-border/50 flex items-center justify-center bg-surface/50 relative z-10">
               <div className="text-center p-8 flex flex-col items-center">
                 <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold">
                   <Rocket className="h-10 w-10 animate-float" />
                 </div>
                 <h4 className="text-2xl font-bold text-foreground mb-2">Since 2026</h4>
                 <p className="text-muted-foreground">Building the web's future</p>
               </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-teal/20 to-brand-gold/20 blur-3xl -z-10 rounded-full opacity-50" />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h2 className="text-brand-gold font-medium text-sm tracking-widest uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              We design and build experiences that matter.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/50 mt-8">
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
