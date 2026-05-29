import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Acorfloor | Acortex',
  description:
    'Recubrimiento antiderrapante de granito decorativo de uso interior/exterior que revive superficies de concreto.',
};

export default function AcorfloorPage() {
  return (
    <ProductPage
      title="Acorfloor"
      subtitle="Pisos exteriores"
      description="Recubrimiento antiderrapante de granito decorativo de uso interior/exterior que revive superficies de concreto. Acabado durable, decorativo y funcional que protege y renueva patios, albercas, pasillos, terrazas y espacios."
      heroImage="/acorfloor.jpg"
      tags={['Antiderrapante', 'Exterior', 'Granito decorativo']}
      longDescription="Recubrimiento antiderrapante de granito decorativo de uso interior/exterior que revive superficies de concreto. Provee un acabado durable, decorativo y funcional que protege y renueva, dando vida al patio, alberca, pasillo, terraza y espacios interiores y exteriores."
      features={[
        { title: 'Acabado decorativo y funcional', desc: 'Estética y desempeño en una sola solución.' },
        { title: 'Renovar y dar vida', desc: 'Patios, albercas, pasillos, terrazas e interiores.' },
        { title: 'Protege y mejora', desc: 'Superficies de concreto en tu hogar.' },
        { title: 'Bajo costo por m²', desc: 'Solución económica para grandes superficies.' },
        { title: 'Antiderrapante', desc: 'Resistente a resbaladuras, seguro para niños.' },
        { title: 'Alta durabilidad', desc: 'Acabado que mantiene su estética con el tiempo.' },
        { title: 'Oculta imperfecciones', desc: 'Grietas finas y manchas.' },
        { title: 'Resistente', desc: 'Humedad, manchas domésticas, productos químicos, suciedad.' },
      ]}
      specs={[
        { label: 'Acabado', value: 'Granito decorativo' },
        { label: 'Uso', value: 'Interior / Exterior' },
        { label: 'Resistencia', value: 'Lluvia con viento 158 kph' },
      ]}
      uses={[
        'Recubrimiento granito antiderrapante, decorativo, interior y exterior.',
        'Residencial, oficinas, comercial, escuelas.',
        'Para patios, terrazas, pasillos y alrededor de albercas.',
        'Pintura/impermeabilizante acrílica base agua — alta resistencia a presión de agua.',
        'Previene entrada de agua subterránea — acabado resistente al hongo.',
      ]}
      application={[
        {
          title: 'Preparación',
          desc: 'Las superficies deben estar libres de polvo y grasa.',
        },
        {
          title: 'Tiempo de fragüe',
          desc: 'Las superficies de concreto deben haber fraguado durante al menos 30 días antes de aplicar el recubrimiento.',
        },
        {
          title: 'Limpieza',
          desc: 'Las superficies deben estar libres de partículas.',
        },
        {
          title: 'Tratamiento previo',
          desc: 'No deben presentar manchas por hongos — eliminar previamente con productos adecuados.',
        },
      ]}
    />
  );
}
