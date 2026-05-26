'use client'
import { Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ProductColors() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 md:p-16 border border-border text-center">
          <Palette className="w-16 h-16 text-primary mx-auto mb-6" />
          <p className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">
            Paleta
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Colores Originales
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
            La paleta de colores que utilizamos es 100% original de Acortex y son todas reproducibles al detalle de la imagen.
          </p>
          <p className="text-2xl font-bold text-primary mb-8">
            Contamos con más de 2.800 colores disponibles
          </p>
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            onClick={() => {
              const contactSection = document.getElementById('contacto')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Consultar Colores
          </Button>
        </div>
      </div>
    </section>
  )
}
