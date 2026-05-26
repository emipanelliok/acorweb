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
      features={[
        { title: 'PROCREAR EZEIZA', desc: 'Buenos Aires. Desarrollo urbanístico ubicado en Ezeiza, con más de 400 viviendas. Se realizaron trabajos tanto en el exterior como en el interior de las mismas.' },
        { title: 'PROCREAR MENDOZA', desc: 'Planing. Desarrollo ubicado en la ciudad de Mendoza, consta de edificios de doce pisos y 1.109 departamentos. Se realizaron obras de revestimiento interno y externo.' },
        { title: 'POLO JUDICIAL', desc: 'Mendoza. Nueva locación para el Poder Judicial de Mendoza. Cuenta con una superficie cubierta de 14.709,80 m². Se realizaron trabajos de pintura tanto en exterior como en el interior del recinto.' },
        { title: 'Líneas para grandes superficies', desc: 'Productos preparados para optimizar rendimiento sin bajar la calidad.' },
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
