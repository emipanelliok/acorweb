import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Elastómero | Acortex',
  description:
    'Material polimérico con gran elasticidad, a base de resinas sintéticas de cambio molecular progresivo.',
};

export default function ElastomeroPage() {
  return (
    <ProductPage
      title="Elastómero"
      subtitle="Material polimérico con gran elasticidad"
      description="El ERP es un producto a base de resinas sintéticas de cambio molecular progresivo, que se incorpora a mezclas cementicias para ser utilizadas en revoques proyectados sobre paneles EPS."
      heroImage="/elastomero-polymer-construction-additive.jpg"
      tags={['Alta Elasticidad', 'Impermeabilidad', 'Durabilidad']}
      longDescription="Mejora significativa en las propiedades de las mezclas cementicias. El elastómero aporta elasticidad, impermeabilidad y adherencia a los revoques proyectados, prolongando la vida útil del sistema constructivo y previniendo la aparición de fisuras."
      features={[
        { title: 'Alta Elasticidad', desc: 'Acompaña las dilataciones y movimientos del sustrato sin agrietarse.' },
        { title: 'Impermeabilidad Superior', desc: 'Forma una película continua que evita filtraciones y repele el agua.' },
        { title: 'Gran Adherencia', desc: 'Se fija firmemente a revoques, hormigón, placas cementicias y otras superficies asegurando la integridad del sistema constructivo.' },
        { title: 'Durabilidad Extrema', desc: 'Resiste rayos UV, humedad, lluvia, calor y variaciones climáticas.' },
        { title: 'Flexibilidad', desc: 'Cubre micro fisuras existentes y previene la aparición de nuevas.' },
        { title: 'Aplicación Fácil', desc: 'Facilita la aplicación de la mezcla fresca, otorgándole mayor trabajabilidad. Compatible con el acero estructural.' },
      ]}
      specs={[
        { label: 'Presentación', value: '20 L / 200 L' },
        { label: 'Dosificación', value: '1% del agua o 3% del peso del cemento' },
        { label: 'Aplicación', value: 'Sobre hormigonera durante el amasado' },
      ]}
      uses={[
        'Se incorpora a mezclas cementicias para revoques proyectados sobre paneles EPS.',
        'Mejora la trabajabilidad de la mezcla fresca.',
        'Compatible con el acero estructural.',
        'Aporta elasticidad e impermeabilidad al sistema cementicio.',
      ]}
      application={[
        {
          title: 'Dosificación',
          desc: 'El elastómero se dosifica según las proporciones brindadas directo sobre la hormigonera, adicionándolo durante el amasado para asegurar su correcta dispersión en toda la mezcla.',
        },
      ]}
    />
  );
}
