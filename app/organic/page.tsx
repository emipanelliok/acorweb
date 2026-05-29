import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Organic Series | Acortex',
  description:
    'Línea Piedra Orgánica Natural: revestimiento texturado con piedra natural pura, directo de la cantera. Sin pigmentos artificiales.',
};

export default function OrganicPage() {
  return (
    <ProductPage
      title="Organic Series"
      subtitle="Línea Piedra Orgánica Natural"
      description="La arquitectura vuelve a su origen. Llevamos la fuerza y la pureza de la piedra natural directo desde la cantera a tus paredes: un revestimiento único, elaborado con minerales seleccionados en su estado más puro, sin un solo gramo de pigmentación artificial."
      heroImage="/organic-hero.jpg"
      heroImages={[
        '/organic-piedra-1.jpg',
        '/organic-piedra-2.jpg',
        '/organic-piedra-3.jpg',
        '/organic-piedra-4.jpg',
        '/organic-piedra-5.jpg',
        '/organic-piedra-6.jpg',
      ]}
      tags={['0% Pigmentos', 'Piedra Natural', 'Fachada']}
      longDescription="Es la naturaleza misma plasmando su propia paleta de colores, texturas y destellos en tus proyectos. A nuestra reconocida base de texturados acrílicos de alta resistencia le sumamos el componente más noble de la tierra. Texturas con alma. Belleza eterna que no se altera con el tiempo."
      features={[
        { title: '0% pigmentos sintéticos', desc: 'El color que ves es el color real de la roca mineral extraída directamente de la cantera.' },
        { title: 'Inalterable al sol', desc: 'Al no contener tintes artificiales, los tonos resisten los rayos UV sin perder intensidad ni degradarse jamás.' },
        { title: 'Efecto mineral genuino', desc: 'Un acabado con relieve y destellos sutiles que solo la verdadera piedra natural puede ofrecer.' },
        { title: 'Base acrílica de alta resistencia', desc: 'Sobre nuestra reconocida base de texturados, con la durabilidad que la caracteriza.' },
        { title: 'Menos procesos, más naturaleza', desc: 'No inventamos sus colores; fuimos a buscarlos a la montaña. Sin agregados, sin pigmentos.' },
        { title: 'Belleza cruda y eterna', desc: 'La textura natural de la piedra, plasmada en la fachada de tu proyecto.' },
      ]}
      specsImage="/organic-piedra-cruda.jpg"
      specs={[
        { label: 'Granulometría', value: '2,5 a 5,0 mm' },
        { label: 'Consumo aprox.', value: '4,0 a 5,0 kg/m²' },
        { label: 'Pigmentación', value: '0% pigmentos artificiales' },
        { label: 'Aplicación', value: 'Llana metálica' },
      ]}
      uses={[
        'Ideal para fachadas y revestimientos exteriores de alta exposición.',
        'Aporta un acabado mineral genuino, con relieve y destellos naturales.',
        'Tonos inalterables al sol: no se degradan ni pierden intensidad con el tiempo.',
        'Perfecto para proyectos que buscan una estética natural, noble y atemporal.',
      ]}
      visualizer={{
        image: '/casa-organic.jpg',
        colors: [
          { name: 'Almendra', swatch: '/organic-almendra.jpg', texture: '/organic-wall-almendra.jpg' },
          { name: 'Café', swatch: '/organic-cafe.jpg', texture: '/organic-wall-cafe.jpg' },
          { name: 'Mármol', swatch: '/organic-marmol.jpg', texture: '/organic-wall-marmol.jpg' },
          { name: 'Óxido', swatch: '/organic-oxido.jpg', texture: '/organic-wall-oxido.jpg' },
          { name: 'Rosa', swatch: '/organic-rosa.jpg', texture: '/organic-wall-rosa.jpg' },
          { name: 'Verde', swatch: '/organic-verde.jpg', texture: '/organic-wall-verde.jpg' },
        ],
      }}
      colorsLayout="strips"
      colors={[
        { name: 'Almendra', image: '/organic-almendra.jpg' },
        { name: 'Café', image: '/organic-cafe.jpg' },
        { name: 'Mármol', image: '/organic-marmol.jpg' },
        { name: 'Óxido', image: '/organic-oxido.jpg' },
        { name: 'Rosa', image: '/organic-rosa.jpg' },
        { name: 'Verde', image: '/organic-verde.jpg' },
      ]}
    />
  );
}
