import { Button } from '@/components/ui/Button'
import { Sparkles, Zap } from 'lucide-react'

// Trust stats hoisted outside component (rendering-hoist-jsx)
const TRUST_STATS = [
  { value: '50+', label: 'Projects' },
  { value: '30+', label: 'Clients' },
  { value: '5★', label: 'Rating' },
] as const

interface HeroSectionProps {
  onGetStarted: () => void
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {

  return (
    <section
      id="hero-section"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-20 pb-12 lg:pt-0 lg:pb-0"
    >
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl animate-glow-pulse-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-teal/3 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto mt-10 lg:mt-0 max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column — Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tighter opacity-0 animate-fade-up-delay-1"
            >
              Build modern websites{' '}
              <span className="text-gradient-brand">
                for growing businesses
              </span>
            </h1>

            {/* Subheading */}
            <p
              id="hero-subheading"
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-up-delay-2"
            >
              We create responsive and clean digital experiences for startups
              and businesses that want to stand out in the digital world.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up-delay-3">
              <Button size="lg" onClick={onGetStarted} id="hero-get-started">
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                Get Started
              </Button>
              <Button variant="outline" size="lg" id="hero-view-portfolio">
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                View Portfolio
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="flex items-center gap-8 justify-center lg:justify-start opacity-0 animate-fade-up-delay-4">
              {TRUST_STATS.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {index > 0 && (
                    <div className="w-px h-8 bg-border -ml-4 mr-1" />
                  )}
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gradient-brand font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Illustration */}
          <div className="relative flex items-center justify-center opacity-0 animate-fade-up-delay-2">
            {/* Glow behind image */}
            <div
              className="absolute inset-0 m-auto w-80 h-80 rounded-full bg-gradient-to-br from-brand-teal/20 to-brand-gold/20 blur-3xl"
              aria-hidden="true"
            />

            {/* Decorative ring */}
            <div
              className="absolute inset-0 m-auto w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] rounded-full border border-brand-teal/10"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 m-auto w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full border border-brand-gold/10"
              aria-hidden="true"
            />

            {/* Main illustration */}
            <img
              src="/hero-illustration.png"
              alt="Modern digital solutions — abstract 3D geometric shapes representing innovative technology"
              className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl animate-float drop-shadow-2xl"
              loading="eager"
            />

            {/* Floating accent cards */}
            <div className="absolute -top-4 -right-4 sm:top-4 sm:right-0 glass rounded-2xl px-4 py-3 border border-brand-teal/20 animate-float shadow-lg" style={{ animationDelay: '-2s' }}>
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-gradient-to-br from-brand-teal to-brand-teal-dark flex items-center justify-center text-background text-sm">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Quality First</div>
                  <div className="text-[10px] text-muted-foreground">Premium Design</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 sm:bottom-8 sm:left-0 glass rounded-2xl px-4 py-3 border border-brand-gold/20 animate-float shadow-lg" style={{ animationDelay: '-4s' }}>
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-gradient-to-br from-brand-gold to-brand-gold-light flex items-center justify-center text-background text-sm">
                  <Zap className="h-4 w-4 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Fast Delivery</div>
                  <div className="text-[10px] text-muted-foreground">2 Week Sprints</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
