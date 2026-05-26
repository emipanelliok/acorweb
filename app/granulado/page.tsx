import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Granulado | Acortex',
  description:
    'El revestimiento Granulado forma una capa dura y al mismo tiempo elástica, que asegura una gran durabilidad.',
};

export default function GranuladoPage() {
  return (
    <ProductPage
      title="Granulado"
      subtitle="Revestimiento"
      description="El revestimiento Granulado forma una capa dura y al mismo tiempo elástica, que asegura una gran durabilidad, disminuyendo el riesgo de grietas por dilatación o vibraciones."
      heroImage="/textured-granulated-wall-coating-surface.jpg"
      tags={['Interior', 'Exterior']}
      longDescription="Descubrí las ventajas del revestimiento Granulado. Disponible en tres texturas —Medio, 20/40 y Fino— para elegir la ideal según el proyecto. Forma una capa dura y elástica que asegura durabilidad y reduce el riesgo de fisuras por dilatación."
      features={[
        { title: 'Acabado decorativo', desc: 'Relieve uniforme y moderno.' },
        { title: 'Alta resistencia', desc: 'A impactos y abrasión.' },
        { title: 'Excelente adherencia', desc: 'Sobre múltiples superficies.' },
        { title: 'Repele el agua y la humedad', desc: 'Protegiendo el sustrato.' },
        { title: 'Disimula imperfecciones', desc: 'De los muros existentes.' },
        { title: 'Durabilidad frente a rayos UV', desc: 'Y cambios climáticos.' },
        { title: 'Fácil mantenimiento y limpieza', desc: 'Conserva su apariencia con poco esfuerzo.' },
        { title: 'Apto para interiores y exteriores', desc: 'Versatilidad total.' },
        { title: 'Granulado Medio', desc: 'Espesor 2,0 - 4,0mm. Consumo aproximado 4,0 a 6,0 kg/m².' },
        { title: 'Granulado 20/40', desc: 'Espesor 1,5 - 2,0mm. Consumo aproximado 3,0 a 4,0 kg/m².' },
        { title: 'Granulado Fino', desc: 'Espesor 1,0 - 1,5mm. Consumo aproximado 2,0 a 2,5 kg/m².' },
      ]}
      specsImage="/granulado-medio-thick-textured-coating.jpg"
      specs={[
        { label: 'Granulado Fino', value: 'Espesor 1,0–1,5 mm · Consumo 2,0–2,5 kg/m²' },
        { label: 'Granulado 20/40', value: 'Espesor 1,5–2,0 mm · Consumo 3,0–4,0 kg/m²' },
        { label: 'Granulado Medio', value: 'Espesor 2,0–4,0 mm · Consumo 4,0–6,0 kg/m²' },
        { label: 'Aplicación', value: 'Llana' },
      ]}
      uses={[
        'Apto para aplicar sobre revoques tradicionales, hormigón, placas cementicias y superficies previamente preparadas.',
        'Ideal para proteger y revestir muros interiores y exteriores en viviendas, edificios, balcones, locales comerciales y fachadas expuestas a la intemperie.',
        'Perfecto para renovar paredes, uniformar superficies y aportar diseño con alta resistencia.',
      ]}
      application={[
        {
          title: 'Extender con llana',
          desc: 'Se aplica con llana metálica o de PVC, extendiendo el producto de manera uniforme sobre la superficie.',
        },
        {
          title: 'Acabado texturado',
          desc: 'El acabado texturado final se obtiene con fratacho plástico o herramientas específicas según el efecto buscado.',
        },
      ]}
      colors={[
        { name: 'Blanco Mármol', image: '/colores/blanco-marmol.jpg' },
        { name: 'Beige Crema', image: '/colores/beige-crema.jpg' },
        { name: 'Beige Cacao', image: '/colores/beige-cacao.jpg' },
        { name: 'Gris Acero', image: '/colores/gris-acero.jpg' },
        { name: 'Gris Plomo', image: '/colores/gris-plomo.jpg' },
        { name: 'Nuez', image: '/colores/marron-nuez.jpg' },
        { name: 'Visón', image: '/colores/marron-vison.jpg' },
        { name: 'Tabaco', image: '/colores/marron-tabaco.jpg' },
        { name: 'Caoba', image: '/colores/marron-caoba.jpg' },
        { name: 'Pardo', image: '/colores/marron-adobe.jpg' },
      ]}
    />
  );
}
