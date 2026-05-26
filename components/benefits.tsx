import { Shield, Paintbrush, Hammer, Droplet } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'PROTECCIÓN',
      description: 'Protección ante la humedad, hongos e impactos.',
    },
    {
      icon: Paintbrush,
      title: 'DISEÑO',
      description: 'Acortex reemplaza yeso, revoques finos y pinturas.',
    },
    {
      icon: Hammer,
      title: 'DURABILIDAD',
      description: 'Mantiene la firmeza propia de la piedra, conservando intacta su estructura.',
    },
    {
      icon: Droplet,
      title: 'HIDROREPELENTE',
      description: 'Impide la absorción de agua resguarda todas las superficies.',
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Revestimientos Acortex
          </h2>
          <p className="text-xl text-muted-foreground">desde 1971</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
