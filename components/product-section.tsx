'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface ProductSectionProps {
  id: string
  title: string
  subtitle: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  tags: string[]
}

export function ProductSection({
  id,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  tags,
}: ProductSectionProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id={id} className="py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image */}
          <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-primary/10 transition-shadow duration-500">
              <img
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                {subtitle}
              </span>
              <div className="flex gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              {title}
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>

            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all group h-12 px-6"
            >
              Consultar
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
