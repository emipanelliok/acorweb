import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Enduido | Acortex',
  description:
    'Material pastoso para alisar, tapar imperfecciones y preparar paredes o techos antes de pintar.',
};

export default function EnduidoPage() {
  return (
    <ProductPage
      title="Enduido"
      subtitle="Preparación de paredes y techos"
      description="Material pastoso para alisar, tapar imperfecciones y preparar paredes o techos antes de pintar. El Enduido ACORTEX esta formulado en base a emulsiones al agua y acrílicas, las cuales garantizan excelente adherencia y óptimo poder de relleno logrando resultados perfectos."
      heroImage="/enduido-wall-preparation-product.jpg"
      tags={['Preparación', 'Interior', 'Exterior']}
      longDescription="Disponible en versiones Interior y Exterior, el Enduido Acortex se adapta a cada necesidad. La versión interior tiene textura fina y cremosa, secado rápido y excelente poder de relleno fino. La versión exterior es apta para intemperie, resistente a la humedad y la lluvia, con mayor dureza."
      features={[
        { title: 'Textura pastosa y suave', desc: 'Fácil de trabajar y aplicar.' },
        { title: 'Alta adherencia', desc: 'Se adhiere perfectamente a distintas superficies.' },
        { title: 'Fácil aplicación y lijado', desc: 'Trabajo más rápido y eficiente.' },
        { title: 'Secado rápido', desc: 'Menor tiempo de espera entre manos.' },
        { title: 'Corrige imperfecciones', desc: 'Rayas, poros y grietas finas.' },
        { title: 'Superficie lisa y uniforme', desc: 'Acabado profesional garantizado.' },
        { title: 'No estructural', desc: 'Solo para terminación.' },
        { title: 'Versiones interior y exterior', desc: 'Adaptable a cada necesidad.' },
      ]}
      specsImage="/enduido-interior-smooth-wall-finish.jpg"
      specs={[
        { label: 'Presentación', value: '40 kg / 200 kg' },
        { label: 'Base', value: 'Emulsiones al agua y acrílicas' },
        { label: 'Versiones', value: 'Interior / Exterior' },
      ]}
      uses={[
        'Enduido Interior: uso exclusivo en interiores, base al agua, textura fina y cremosa, secado rápido, fácil de lijar, excelente poder de relleno fino. Ideal para aplicar sobre yeso, Durlock, revoque fino y paredes pintadas.',
        'Enduido Exterior: apto para intemperie, resistente a la humedad y la lluvia, mayor dureza que el interior, buena adherencia sobre revoque y hormigón, menor absorción de agua.',
        'No reemplaza revoques ni arreglos estructurales.',
        'Aplicable con espátula, llana metálica, llana plástica, rodillo (diluido) o proyectado.',
      ]}
      application={[
        {
          title: 'Limpiar la superficie',
          desc: 'Limpiar muy bien la superficie. Deberá estar seca, sin polvo ni grasa.',
        },
        {
          title: 'Aplicación en capas finas',
          desc: 'Aplicar con espátula o llana en capas finas.',
        },
        {
          title: 'Secado',
          desc: 'Dejar secar entre 1 a 3 horas dependiendo de la humedad y/o temperatura del ambiente.',
        },
        {
          title: 'Lijado',
          desc: 'Lijar suavemente con lija grano 180-220. En caso de hacer falta aplicar una segunda mano y repetir el proceso de lijado.',
        },
        {
          title: 'Terminación',
          desc: 'Quitar el polvo y pintar.',
        },
      ]}
    />
  );
}
