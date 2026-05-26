import { AlertTriangle } from 'lucide-react'

export function HumedadAlert() {
  return (
    <section className="py-20 bg-gradient-to-r from-destructive/5 via-destructive/10 to-destructive/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border-2 border-destructive/20 rounded-3xl p-8 lg:p-10 shadow-xl shadow-destructive/5">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="bg-destructive/10 rounded-2xl p-4 border border-destructive/20">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="text-destructive">¡ATENCIÓN!</span>
                  <span>-</span>
                  <span>HUMEDAD</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  El revestimiento acrílico resuelve problemas de humedad, cuando ésta migra de muros exteriores a muros interiores. La humedad de paredes y cimientos, debe resolverse previo a la colocación de cualquiera de nuestros productos. No se deben utilizar en paredes con humedad ni en revoques alterados por efectos de las sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
