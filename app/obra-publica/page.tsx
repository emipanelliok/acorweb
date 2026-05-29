import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Obra Pública | Acortex',
  description:
    'Pensamos en llevar el mejor producto al mejor precio posible para grandes superficies.',
};

export default function ObraPublicaPage() {
  return (
    <ProductPage
      title="Obra Pública"
      subtitle="Acortex Somos Diferentes"
      description="Pensamos en llevar el mejor producto al mejor precio posible. Contamos con líneas preparadas para grandes superficies, con productos que ayudan a este propósito sin bajar la calidad."
      heroImage="/modern-public-building-construction-project.jpg"
      tags={['Gran Escala', 'Obra Pública', 'Calidad']}
      longDescription="Acompañamos proyectos de obra pública de gran envergadura, desde desarrollos urbanísticos hasta edificios institucionales. Nuestras líneas están preparadas para grandes superficies, manteniendo la calidad y reduciendo costos."
      works={[
        { name: 'Procrear Ezeiza', location: 'Ezeiza, Buenos Aires', image: '/obra-procrear-ezeiza.png', desc: 'Desarrollo urbanístico con más de 400 viviendas. Se realizaron trabajos tanto en el exterior como en el interior de las mismas.' },
        { name: 'Procrear Mendoza', location: 'Ciudad de Mendoza', image: '/obra-procrear-mendoza.png', desc: 'Desarrollo de edificios de doce pisos y 1.109 departamentos. Se realizaron obras de revestimiento interno y externo.' },
        { name: 'Polo Judicial', location: 'Mendoza', image: '/obra-polo-judicial.png', desc: 'Nueva locación para el Poder Judicial de Mendoza, con una superficie cubierta de 14.709,80 m². Trabajos de pintura en exterior e interior del recinto.' },
      ]}
      features={[
        { title: 'Líneas para grandes superficies', desc: 'Productos preparados para optimizar el rendimiento sin bajar la calidad.' },
        { title: 'Mejor producto al mejor precio', desc: 'Soluciones pensadas para escalar grandes metrajes con costos optimizados.' },
        { title: 'Cobertura integral', desc: 'Revestimiento y pintura tanto en interiores como en exteriores.' },
        { title: 'Acompañamiento técnico', desc: 'Asesoría desde el inicio del proyecto hasta la entrega.' },
      ]}
      specsImage="/residential-building-exterior-.jpg"
      specs={[
        { label: 'Tipo', value: 'Obra Pública / Gran escala' },
        { label: 'Cobertura', value: 'Interior y exterior' },
      ]}
      uses={[
        'Desarrollos urbanísticos y viviendas sociales.',
        'Edificios institucionales y gubernamentales.',
        'Grandes superficies que requieren rendimiento sin perder calidad.',
        'Renovación y revestimiento de fachadas a gran escala.',
      ]}
      application={[
        {
          title: 'Asesoramiento técnico',
          desc: 'Acompañamos el proyecto desde el inicio para definir los productos y líneas adecuadas a cada obra.',
        },
        {
          title: 'Provisión a escala',
          desc: 'Entregamos las cantidades necesarias para cubrir grandes superficies en los tiempos del proyecto.',
        },
      ]}
    />
  );
}
