import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Membrana Líquida | Acortex',
  description:
    'Producto impermeabilizante versátil y duradero, ideal para proteger techos y superficies expuestas a la intemperie.',
};

export default function MembranaLiquidaPage() {
  return (
    <ProductPage
      title="Membrana Líquida"
      subtitle="Impermeabilizante para techos"
      description="Es un producto impermeabilizante versátil y duradero, ideal para proteger techos y superficies expuestas a la intemperie."
      heroImage="/membrana-liquida-roof-waterproofing.jpg"
      tags={['Impermeabilizante', 'Techos', 'Exterior']}
      longDescription="Una solución completa para impermeabilizar techos y superficies expuestas. Aporta elasticidad, resistencia a la intemperie y al ensuciamiento, eficiencia energética y extiende la vida útil de las estructuras. Aplicable con pincel, rodillo o soplete."
      features={[
        { title: 'Impermeabilidad', desc: 'Capacidad de prevenir la entrada de agua.' },
        { title: 'Elasticidad', desc: 'Flexibilidad para adaptarse a diversas formas y superficies.' },
        { title: 'Resistencia a la intemperie', desc: 'Capacidad de conservar sus propiedades a temperaturas extremas.' },
        { title: 'Resistencia al ensuciamiento', desc: 'Capacidad de mantener su apariencia y funcionalidad.' },
        { title: 'Adaptabilidad', desc: 'Se adapta a superficies con detalles complejos y accesibilidad limitada.' },
        { title: 'Eficiencia energética', desc: 'Mejora la eficiencia energética y reduce costos de enfriamiento.' },
        { title: 'Extensión de vida útil', desc: 'Extiende la vida útil de los techos y estructuras.' },
      ]}
      specsImage="/membrana-liquida-application-roof.jpg"
      specs={[
        { label: 'Consumo aproximado', value: '1 a 1,5 kg/m² de techo' },
        { label: 'Herramientas', value: 'Pincel, rodillo o soplete' },
      ]}
      uses={[
        'La superficie debe estar limpia, seca, libre de grasa, sin partes sueltas ni polvillo.',
        'En caso de grasitud limpiar con agua y detergente.',
        'En caso de hongos eliminar con solución de lavandina y agua (al 50%). Enjuagar y dejar secar antes de aplicar.',
        'En caso de productos asfálticos aplicados previamente, realizar una limpieza profunda.',
        'No aplicar sobre cerámica esmaltada. Sobre cerámica sin esmaltar tratar previamente con ácido muriático al 10%.',
      ]}
      application={[
        {
          title: 'Tratamiento previo',
          desc: 'La superficie debe estar limpia, seca, libre de grasa, sin partes sueltas ni polvillo. En caso de grasitud limpiar con agua y detergente.',
        },
        {
          title: 'Eliminar hongos',
          desc: 'Si hay hongos, eliminarlos con solución de lavandina y agua al 50%. Enjuagar y dejar secar antes de aplicar.',
        },
        {
          title: 'Cerámicas y asfalto',
          desc: 'No aplicar sobre cerámica esmaltada. Sobre cerámica sin esmaltar tratar previamente con ácido muriático al 10%. Si hay productos asfálticos previos, realizar limpieza profunda.',
        },
        {
          title: 'Aplicación',
          desc: 'Con rodillo, pincel o soplete en 2-3 manos según condiciones. No aplicar si se esperan lluvias en las próximas 24 hs.',
        },
      ]}
    />
  );
}
