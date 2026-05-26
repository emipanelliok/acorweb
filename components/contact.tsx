'use client'

import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  return (
    <section id="contacto" className="py-24 lg:py-32 scroll-mt-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Contacto
          </h2>
          <p className="text-xl text-muted-foreground">
            ACORTEX - CASA CENTRAL
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              Envianos un mensaje con tus datos en el siguiente formulario y te contestaremos a la brevedad.
            </p>
            <form className="space-y-6">
              <Input placeholder="Nombre" className="h-14 text-base rounded-xl" />
              <Input type="email" placeholder="Email" className="h-14 text-base rounded-xl" />
              <Input placeholder="Teléfono" className="h-14 text-base rounded-xl" />
              <Textarea placeholder="Mensaje" rows={6} className="text-base rounded-xl" />
              <Button size="lg" className="w-full h-14 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                Enviar
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: 'Dirección',
                content: (
                  <>
                    Barcala 1931<br />
                    San José – Guaymallén<br />
                    Mendoza, Argentina<br />
                    CP (5519)
                  </>
                )
              },
              {
                icon: Clock,
                title: 'Atención',
                content: (
                  <>
                    Lunes a Jueves: 09:00 – 17:30<br />
                    Viernes: 09:00 – 16:30
                  </>
                )
              },
              {
                icon: Phone,
                title: 'Contacto',
                content: (
                  <>
                    Tel: (0261) 4 452 319<br />
                    Email: ventas@acortex.com.ar
                  </>
                )
              }
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 rounded-2xl p-3 border border-primary/20">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg mt-8">
              <img
                src="/map-location-mendoza-argentina.jpg"
                alt="Ubicación Acortex"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
