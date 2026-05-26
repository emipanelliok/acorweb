import { Paintbrush, BarChart3, Home, Palette } from 'lucide-react'

interface ProductSpecsProps {
  application: string
  performance: string
  uses: string
  colors?: string
}

export function ProductSpecs({ application, performance, uses, colors }: ProductSpecsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-xl p-3 shrink-0">
                <Paintbrush className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Modo de Aplicación</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {application}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-xl p-3 shrink-0">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Rendimiento</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {performance}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-xl p-3 shrink-0">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Usos</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {uses}
                </p>
              </div>
            </div>
          </div>

          {colors && (
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-xl p-3 shrink-0">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Colores</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {colors}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
