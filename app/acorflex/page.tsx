import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Acorflex | Acortex',
  description:
    'Revestimiento decorativo de alta prestación, desarrollado para imitar el aspecto del microcemento tradicional.',
};

export default function AcorflexPage() {
  return (
    <ProductPage
      title="Acorflex"
      subtitle="Revestimiento decorativo"
      description="Revestimiento decorativo de alta prestación, desarrollado para imitar el aspecto del microcemento tradicional. Permite obtener superficies continuas, de estética moderna y aspecto cementicio, con una aplicación más simple y flexible que el microcemento real."
      heroImage="/acorflex1.jpg"
      tags={['Decorativo', 'Microcemento', 'Premium']}
      longDescription="Material elaborado a base de minerales que permiten crear un revestimiento decorativo liso y con alta duración. Con colores esfumados, pero con todas las características de la nueva generación de revestimientos continuos, imita el aspecto del microcemento. Se aplica como un estuco tradicional, en capas finas y logra una terminación continua, lisa o apenas texturada, muy similar al microcemento pulido."
      gallery={['/acorflex2.jpg', '/acorflex3.png', '/acorflex4.jpg', '/acorflex5.webp']}
      features={[
        { title: 'Acabado marmóreo', desc: 'Efecto similar al microcemento. Moderno, uniforme con efecto cementicio.' },
        { title: 'Bajo espesor', desc: 'Se aplica en capas finas, sin agregar peso al sustrato.' },
        { title: 'Alta elongación', desc: 'Evita fisuras y cubre pequeñas grietas.' },
        { title: 'Flexibilidad', desc: 'Permite acompañar las dilataciones del muro sin que se cuartee el revestimiento.' },
        { title: 'Elegancia y diseño', desc: 'Amplia gama de colores y terminaciones.' },
        { title: 'Protección UV', desc: 'Repele el agua y tiene protección de rayos UV.' },
        { title: 'Fácil aplicación', desc: 'Se trabaja como un estuco, sin los procesos complejos del microcemento verdadero.' },
        { title: 'Buena adherencia', desc: 'Sobre revoques, yeso, placas y superficies preparadas.' },
      ]}
      specsImage="/acorflex-texture-smooth-finish.jpg"
      specs={[
        { label: 'Espesor', value: '0,5 – 0,8 mm' },
        { label: 'Consumo aprox.', value: '1 kg/m²' },
      ]}
      uses={[
        'Ideal para aplicaciones en interiores o exteriores preparadas en fino, placas de yeso, madera o sobre enduido.',
        'Apto para columnas y cielorrasos.',
        'Ideal para renovar paredes sin realizar obras o demolición.',
        'Se aplica sobre superficies firmes, limpias, secas y perfectamente niveladas.',
      ]}
      application={[
        {
          title: 'Capa de base',
          desc: 'Aplicar con llana metálica una mano a toda la superficie, generando espesores mínimos. Lijar en seco con lija al agua malla 150 después de 24 horas.',
        },
        {
          title: 'Aplicación en manchas',
          desc: 'Colocar con espátula o llana metálica flexible en sucesivas capas, generando "manchas". Quitar los sobrantes friccionando con el filo de la herramienta.',
        },
        {
          title: 'Terminación marmórea',
          desc: 'Llenar los espacios vacíos con nuevas aplicaciones para completar el diseño marmóreo. El brillo se obtiene con fricciones de la llana metálica.',
        },
      ]}
    />
  );
}
