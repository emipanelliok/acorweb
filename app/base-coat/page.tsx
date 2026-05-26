import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Base Coat | Acortex',
  description:
    'Mortero cementicio aditivado, ideal para usar como adhesivo y como revestimiento base en sistemas de aislamiento térmico.',
};

export default function BaseCoatPage() {
  return (
    <ProductPage
      title="Base Coat"
      subtitle="Mortero cementicio"
      description="Mortero cementicio aditivado, ideal para usar como adhesivo y como revestimiento base en sistemas de aislamiento térmico."
      heroImage="/elastomero-polymer-construction-additive.jpg"
      tags={['Adhesivo', 'Aislamiento térmico', 'Base']}
      longDescription="La Base Coat ACORTEX es un producto que se utiliza para nivelar y renovar fachadas y paredes exteriores, y también adecuado para revestimientos antiguos. Se aplica como base en sistemas de aislamiento térmico (EIFS), garantizando adherencia y resistencia."
      features={[
        { title: 'Mejora la adherencia', desc: 'De la pintura superior.' },
        { title: 'Uniforma color y textura', desc: 'De la pared.' },
        { title: 'Protege materiales de fondo', desc: 'Madera, yeso, metal y otros.' },
        { title: 'Textura líquida o cremosa', desc: 'Se aplica fácil con brocha, rodillo o pistola.' },
        { title: 'Secado rápido', desc: 'Superficie lista para pintar con pocas capas y menos polvo.' },
        { title: 'Reduce consumo de pintura', desc: 'Al cubrir mejor la superficie.' },
        { title: 'Protección previa', desc: 'Resguarda de humedad, polvo y manchas antes de la capa final.' },
      ]}
      specs={[
        { label: 'Presentación', value: 'Bolsa 84 lb (38 kg)' },
        { label: 'Aplicación', value: 'Brocha, rodillo o pistola' },
        { label: 'Uso', value: 'Adhesivo y base' },
      ]}
      uses={[
        'Adhesivo para sistemas de aislamiento térmico (EIFS).',
        'Revestimiento base sobre paredes exteriores.',
        'Nivelación y renovación de fachadas.',
        'Aplicación sobre revestimientos antiguos.',
      ]}
      application={[
        {
          title: 'Mezclado',
          desc: 'Solo agregar el mortero según indicaciones del fabricante.',
        },
        {
          title: 'Aplicación',
          desc: 'Con brocha, rodillo o pistola sobre superficie limpia, seca y libre de polvo.',
        },
        {
          title: 'Secado',
          desc: 'Esperar el tiempo de secado indicado antes de aplicar la siguiente capa o producto.',
        },
      ]}
    />
  );
}
