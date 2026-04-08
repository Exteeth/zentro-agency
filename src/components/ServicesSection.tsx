import { Code, Palette, TrendingUp } from 'lucide-react'

const SERVICES = [
  {
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: Code,
  },
  {
    title: 'UI/UX Design',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: Palette,
  },
  {
    title: 'Digital Strategy',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    icon: TrendingUp,
  },
] as const

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-teal font-medium text-sm tracking-widest uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Comprehensive Digital Solutions
          </h3>
          <p className="mt-4 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div 
                key={service.title} 
                className="p-8 rounded-2xl glass border border-border/50 hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal transition-transform group-hover:scale-110 group-hover:bg-brand-teal/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
