import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Duprilene | Acortex',
  description:
    'Revestimiento diseñado especialmente para decoración y protección de paredes exteriores e interiores.',
};

export default function DuprilenePage() {
  return (
    <ProductPage
      title="Duprilene"
      subtitle="Revestimiento"
      description="Este revestimiento está diseñado especialmente para decoración y protección de paredes exteriores e interiores, por su resistencia y acabado decorativo."
      heroImage="/duprilene-hero.jpg"
      tags={['Interior', 'Exterior']}
      longDescription="Un revestimiento completo con todas las propiedades que necesitás: textura rústica decorativa, base acuosa sin solventes contaminantes, alta adherencia y durabilidad frente a la intemperie. Disponible en tres granulometrías —Fino, Fino+ y Medio— para adaptarse a cada proyecto."
      variants={[
        { name: 'Duprilene Fino', image: '/duprilene-textura-fino.jpg', thicknessLabel: 'Granulometría', thickness: '1,0 – 1,5 mm', consumption: '1,5 a 2 kg/m²' },
        { name: 'Duprilene Fino+', image: '/duprilene-textura-fino-plus.jpg', thicknessLabel: 'Granulometría', thickness: '1,0 – 1,5 mm', consumption: '2 a 2,3 kg/m²', zoom: 1.9 },
        { name: 'Duprilene Medio', image: '/duprilene-textura-medio.jpg', thicknessLabel: 'Granulometría', thickness: '2,0 – 2,5 mm', consumption: '2,3 a 3 kg/m²' },
      ]}
      features={[
        { title: 'Acabado decorativo con textura rústica', desc: 'Aporta carácter y personalidad a la superficie revestida.' },
        { title: 'Elaborado en base a resinas en base acuosa', desc: 'Sin solventes contaminantes, más amigable con el ambiente.' },
        { title: 'Disimula imperfecciones', desc: 'Cubre y oculta las irregularidades de las superficies recubiertas.' },
        { title: 'Soporta dilataciones sin cuartearse', desc: 'Acompaña los movimientos del muro sin agrietarse.' },
        { title: 'Excelente adherencia', desc: 'Se fija firmemente sobre múltiples superficies.' },
        { title: 'Repele el agua y la humedad', desc: 'Protege el sustrato evitando filtraciones.' },
        { title: 'Durabilidad frente a rayos UV', desc: 'Resiste cambios climáticos sin perder propiedades.' },
        { title: 'Fácil mantenimiento y limpieza', desc: 'Apto para interiores y exteriores.' },
      ]}
      specsImage="/duprilene-medio-texture-rustic-coating.jpg"
      specs={[
        { label: 'Duprilene Fino', value: 'Granulometría 1,0–1,5 mm · Consumo 1,5–2 kg/m²' },
        { label: 'Duprilene Fino+', value: 'Granulometría 1,0–1,5 mm · Consumo 2–2,3 kg/m²' },
        { label: 'Duprilene Medio', value: 'Granulometría 2,0–2,5 mm · Consumo 2,3–3 kg/m²' },
        { label: 'Aplicación', value: 'Llana, rodillo, soplete' },
      ]}
      uses={[
        'Apto para aplicar sobre revoques tradicionales, hormigón, placas cementicias y superficies previamente preparadas.',
        'Brinda a la superficie revestida una imagen de piedra natural.',
        'Resiste a la intemperie y a los rayos UV.',
        'Previene la formación de hongos y algas.',
        'Impermeabiliza sin evitar la normal respiración de los muros.',
      ]}
      application={[
        {
          title: 'Aplicación uniforme',
          desc: 'Se aplica con llana metálica o plástica de forma uniforme sobre la superficie preparada.',
        },
        {
          title: 'Terminación final',
          desc: 'La terminación final se logra planchando con llana ejerciendo una mínima presión sobre la superficie, en forma de líneas o giros según el efecto deseado.',
        },
      ]}
      visualizer={{
        image: '/casa-organic.jpg',
        colors: [
          { name: 'Blanco Tiza', swatch: '/colores/blanco-tiza-tex.jpg', texture: '/colores/blanco-tiza-tex.jpg' },
          { name: 'Arena', swatch: '/colores/marron-arena-tex.jpg', texture: '/colores/marron-arena-tex.jpg' },
          { name: 'Marfil', swatch: '/colores/amarillo-marfil-tex.jpg', texture: '/colores/amarillo-marfil-tex.jpg' },
          { name: 'Avellana', swatch: '/colores/beige-avellana-tex.jpg', texture: '/colores/beige-avellana-tex.jpg' },
          { name: 'Cacao', swatch: '/colores/beige-cacao-tex.jpg', texture: '/colores/beige-cacao-tex.jpg' },
          { name: 'Chocolate', swatch: '/colores/marron-chocolate-tex.jpg', texture: '/colores/marron-chocolate-tex.jpg' },
          { name: 'Gris Humo', swatch: '/colores/gris-humo-tex.jpg', texture: '/colores/gris-humo-tex.jpg' },
          { name: 'Verde Oliva', swatch: '/colores/verde-oliva-tex.jpg', texture: '/colores/verde-oliva-tex.jpg' },
          { name: 'Verde Cemento', swatch: '/colores/verde-cemento-tex.jpg', texture: '/colores/verde-cemento-tex.jpg' },
        ],
      }}
      colors={[
        { name: 'Blanco Tiza', image: '/colores/blanco-tiza.jpg' },
        { name: 'Arena', image: '/colores/marron-arena.jpg' },
        { name: 'Marfil', image: '/colores/amarillo-marfil.jpg' },
        { name: 'Avellana', image: '/colores/beige-avellana.jpg' },
        { name: 'Avellana', image: '/colores/beige-cacao.jpg' },
        { name: 'Chocolate', image: '/colores/marron-chocolate.jpg' },
        { name: 'Gris Humo', image: '/colores/gris-humo.jpg' },
        { name: 'Verde Oliva', image: '/colores/verde-oliva.jpg' },
        { name: 'Verde Cemento', image: '/colores/verde-cemento.jpg' },
      ]}
    />
  );
}
