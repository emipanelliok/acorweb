'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ObraPublica() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="obra-publica" className="py-24 lg:py-32 scroll-mt-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mb-4">
              ACORTEX
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Obras Públicas
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed mb-8 text-primary-foreground/90">
              Para este efecto tratamos de compatibilizar calidad y precio, fabricando especialmente líneas de alto rendimiento, e incluso productos complementarios que ayudan a mejorar rendimientos y costos.
            </p>
            <Button 
              onClick={scrollToContact}
              variant="secondary" 
              size="lg"
              className="h-12 px-6 group"
            >
              Más Información
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
            <img
              src="/modern-public-building-construction-project.jpg"
              alt="Obra Pública Acortex"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-black/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={`/residential-building-exterior-.jpg?height=400&width=600&query=residential building exterior ${i}`}
                alt={`Proyecto ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
