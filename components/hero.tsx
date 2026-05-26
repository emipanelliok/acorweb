'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Award, Clock } from 'lucide-react'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-52 lg:pb-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-accent/[0.02] to-background -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb)/0.05),transparent_50%)] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8 hover:bg-primary/15 transition-colors">
            <Award className="h-4 w-4" />
            Desde 1971
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 text-balance leading-[1.1]">
            Ahorrá tiempo y dinero con{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              revestimientos
            </span>{' '}
            Acortex
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
            Protección, diseño y durabilidad para tu hogar. Más de 50 años de experiencia en revestimientos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button 
              size="lg"
              onClick={() => scrollToSection('granulado')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all group h-14 px-8 text-base"
            >
              Ver productos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contacto')}
              className="h-14 px-8 text-base border-2 hover:bg-secondary/80"
            >
              Contactanos
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Alta durabilidad',
                description: 'Resistencia garantizada'
              },
              {
                icon: Award,
                title: 'Acabado premium',
                description: 'Calidad profesional'
              },
              {
                icon: Clock,
                title: '50+ años',
                description: 'De experiencia'
              }
            ].map((feature) => (
              <div 
                key={feature.title}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1.5 text-lg">{feature.title}</div>
                  <div className="text-sm text-muted-foreground">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
