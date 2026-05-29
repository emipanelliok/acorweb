import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Salpicado | Acortex',
  description:
    'Es ideal para realzar los revoques existentes y cubrir micro fisuras y grietas, logrando una textura decorativa de buen acabado.',
};

export default function SalpicadosPage() {
  return (
    <ProductPage
      title="Salpicado"
      subtitle="Revestimiento versátil y resistente"
      description="Es ideal para realzar los revoques existentes y cubrir micro fisuras y grietas, logrando una textura decorativa de buen acabado."
      heroImage="/salpicado.png"
      tags={['Interior', 'Exterior', 'Versátil']}
      longDescription="Revestimiento versátil, flexible y resistente a climas rigurosos. Disponible en tres acabados —Gota Fina, Gota Media y Planchado— para adaptarse a cada necesidad. Ideal para superficies curvas, molduras y emprendimientos de gran escala por su fácil aplicación, rapidez y bajo costo de mano de obra."
      variants={[
        { name: 'Salpicado Gota Fina', image: '/salpicado-textura-gota-fina.jpg', thickness: '1,2 a 1,5 mm', consumption: '2 a 3 kg/m²', zoom: 1.55 },
        { name: 'Salpicado Gota Media', image: '/salpicado-textura-gota-media.jpg', thickness: '1,5 – 1,7 mm', consumption: '2 a 3 kg/m²' },
        { name: 'Salpicado Planchado', image: '/salpicado-textura-planchado.jpg', thickness: '1,5 – 1,7 mm', consumption: '2 a 3 kg/m²', zoom: 1.55 },
      ]}
      features={[
        { title: 'Versátil y Resistente', desc: 'Revestimiento versátil, flexible y resistente a climas rigurosos.' },
        { title: 'Protección Total', desc: 'Cuida tus paredes internas y externas.' },
        { title: 'Excelente Adherencia', desc: 'Capa de excelente adherencia que garantiza su durabilidad.' },
        { title: 'Realza y Cubre', desc: 'Realza revoques existentes y cubre micro fisuras y grietas.' },
        { title: 'Superficies Curvas', desc: 'Ideal para molduras, cornisas, balaustres y otras superficies curvas donde no es posible aplicar con llana.' },
        { title: 'Gran Escala', desc: 'Ideal para emprendimientos de gran escala debido a su fácil aplicación, rapidez y bajo costo de mano obra.' },
        { title: 'Flexible', desc: 'Permite acompañar las dilataciones del muro sin que se cuartee el revestimiento.' },
      ]}
      specsImage="/salpicado-gota-fina-fine-speckled-texture.jpg"
      specs={[
        { label: 'Salpicado Gota Fina', value: 'Espesor 1,2–1,5 mm · Consumo 2–3 kg/m²' },
        { label: 'Salpicado Gota Media', value: 'Espesor 1,5–1,7 mm · Consumo 2–3 kg/m²' },
        { label: 'Salpicado Planchado', value: 'Espesor 1,5–1,7 mm · Consumo 2–3 kg/m²' },
        { label: 'Aplicación', value: 'Rodillo, soplete, llana' },
      ]}
      uses={[
        'Adecuado para todo tipo de superficies murales (paredes y cielorrasos), placas de roca de yeso, placas de cemento.',
        'Ideal para proteger y revestir muros interiores y exteriores en viviendas, edificios, balcones, locales comerciales y fachadas expuestas a la intemperie.',
        'Perfecto para renovar paredes, uniformar superficies y aportar diseño con alta resistencia.',
        'Apto para molduras, cornisas, balaustres y superficies curvas donde no es posible aplicar con llana.',
      ]}
      application={[
        {
          title: 'Aplicación con pistola o rodillo',
          desc: 'Se aplica con pistolas de aire (elemak o similar) o rodillo de lana común.',
        },
        {
          title: 'Base acrílica previa',
          desc: 'Para mejorar el rendimiento y el anclaje del producto se sugiere el uso de base acrílica del mismo color.',
        },
        {
          title: 'Terminación planchada',
          desc: 'Si el material es Salpicado Planchado, alisar con llana plástica para quitar posibles excedentes durante la carga, para mejorar el grado de terminación.',
        },
      ]}
    />
  );
}
