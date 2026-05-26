import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Pastas | Acortex',
  description:
    'Los texturados Acortex son ideales para decoración y protección externa e interna de casas y edificios.',
};

export default function PastasPage() {
  return (
    <ProductPage
      title="Pastas"
      subtitle="Revestimiento"
      description="Los texturados Acortex son ideales para decoración y protección externa e interna de casas y edificios, brindando un efecto decorativo inalterable con el tiempo."
      heroImage="/smooth-paste-coating-application.jpg"
      tags={['Interior', 'Exterior']}
      longDescription="Un revestimiento moldeable, hidrorepelente y durable, pensado para decorar y proteger paredes internas y externas. Su conformación permite un nivel de personalización alto y su excelente adherencia garantiza larga duración."
      features={[
        { title: 'Hidrorepelente', desc: 'Cuida tus paredes tanto internas como externas.' },
        { title: 'Durable', desc: 'Capa de excelente adherencia que garantiza su larga duración.' },
        { title: 'Moldeable', desc: 'Su conformación permite un nivel de personalización alto.' },
      ]}
      specs={[
        { label: 'Espesor', value: '0,5–1,5 mm' },
        { label: 'Consumo', value: '1,0–2,0 kg/m²' },
        { label: 'Aplicación', value: 'Rodillo' },
      ]}
      uses={[
        'Decoración y protección externa e interna de edificios y casas.',
        'Se fabrica en color natural (blanco tiza) o en colores según solicitud del cliente o dirección técnica de la obra, sin costo adicional —con excepción del blanco.',
        'Para mejorar el rendimiento y el anclaje del producto se sugiere el uso de bases acrílicas del mismo color de la pasta.',
        'Para lograr texturas medianas se incrementa el consumo proporcionalmente a la textura requerida.',
      ]}
      application={[
        {
          title: 'Extendido del material',
          desc: 'Se extiende el material con rodillo o llana para acabados de texturas finas.',
        },
        {
          title: 'Aplicación con pistola',
          desc: 'Pudiéndose optar por el uso de pistolas con aire y salpicar en lugar del uso de los elementos antes mencionados, obteniendo de esta forma mejores rendimientos sobre la superficie.',
        },
        {
          title: 'Ajuste de viscosidad',
          desc: 'La viscosidad del trabajo puede acondicionarse con agua, según el sistema empleado.',
        },
      ]}
    />
  );
}
