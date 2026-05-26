import { Check } from 'lucide-react'

export function Complementos() {
  const productos = [
    'Fijador Sellador',
    'Hidrosoluble para ladrillos, hormigón, piedras',
    'Enduido',
    'Masilla',
    'Pasta Relleno',
    'Base Coat Bicomponente',
    'Membrana Líquida',
  ]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              PRODUCTOS ACORTEX
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight">
              Complementos
            </h2>
            <ul className="space-y-4 mb-8">
              {productos.map((producto) => (
                <li key={producto} className="flex items-start gap-4 group">
                  <div className="mt-1 bg-primary/10 rounded-xl p-2 group-hover:bg-primary/20 transition-colors">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-foreground leading-relaxed">{producto}</span>
                </li>
              ))}
            </ul>
            <div className="p-6 bg-accent/10 border border-accent/20 rounded-2xl">
              <p className="text-muted-foreground italic">
                La calidad y compatibilidad de estos productos está garantizada por Acortex.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
            <img
              src="/construction-materials-and-supplies-organized-disp.jpg"
              alt="Productos Complementarios Acortex"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
