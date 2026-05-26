import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Látex | Acortex',
  description:
    'Color y protección que transforman tu espacio. Líneas de látex interior y exterior diseñadas para proteger y embellecer.',
};

export default function LatexPage() {
  return (
    <ProductPage
      title="Látex"
      subtitle="Pintura interior y exterior"
      description="Color y protección que transforman tu espacio. Nuestras líneas de látex interior y exterior están diseñadas para quienes no solo buscan pintar, sino proteger y embellecer."
      heroImage="/colorful-latex-paint-cans-display.jpg"
      tags={['Interior', 'Exterior', 'Pintura']}
      longDescription="Formulados con polímeros de alta calidad, garantizamos un acabado impecable y una durabilidad superior en cada capa. Tenemos líneas distintas para interior y exterior, cada una optimizada para sus condiciones de uso específicas."
      features={[
        { title: 'Poder cubritivo extra', desc: 'Resultados profesionales en menos manos (interior).' },
        { title: 'Bajo olor y secado rápido', desc: 'Habitá tus espacios el mismo día que pintás (interior).' },
        { title: 'Lavabilidad superior', desc: 'Limpieza fácil sin perder la intensidad del color (interior).' },
        { title: 'Anti-hongo', desc: 'Protección activa para ambientes más saludables (interior).' },
        { title: 'Filtro UV activo', desc: 'Colores que no se degradan ni "tizan" bajo el sol intenso (exterior).' },
        { title: 'Impermeable y transpirable', desc: 'Evita la entrada de agua pero permite que el muro "respire", previniendo ampollas (exterior).' },
        { title: 'Gran elasticidad', desc: 'Acompaña los movimientos estructurales para evitar microfisuras (exterior).' },
        { title: 'Alta resistencia a la intemperie', desc: 'Soporta lluvia, viento y cambios bruscos de temperatura (exterior).' },
      ]}
      specs={[
        { label: 'Versiones', value: 'Interior / Exterior' },
        { label: 'Base', value: 'Acuosa' },
        { label: 'Acabado', value: 'Mate / Satinado' },
      ]}
      uses={[
        'Espacios solares — living, comedores y pasillos que requieren terminación elegante.',
        'Dormitorios — por su bajo contenido de compuestos orgánicos volátiles, ideal para zonas de descanso.',
        'Cielorrasos — acabado mate profundo evita reflejos y disimula grietas o marcas.',
        'Fachadas de viviendas — protección total contra rayos UV y lluvia.',
        'Muros perimetrales y patios — resistente a la abrasión climática y al desgaste por viento.',
        'Superficies de mampostería — ideal para revoques finos y hormigón.',
      ]}
      application={[
        {
          title: 'Preparación',
          desc: 'Limpiar la superficie de polvo, grasa y partículas sueltas.',
        },
        {
          title: 'Aplicación interior',
          desc: 'Aplicar con rodillo de lana o pincel en 2-3 manos según poder cubritivo deseado.',
        },
        {
          title: 'Aplicación exterior',
          desc: 'Aplicar 2 manos en días sin lluvia esperada en 24 hs. Respetar tiempo de secado entre manos.',
        },
      ]}
    />
  );
}
