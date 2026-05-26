import { ProductPage } from '@/components/product-page';

export const metadata = {
  title: 'Fijador al Agua | Acortex',
  description:
    'Sellador líquido que se aplica antes de pintar o enduir para unificar la absorción de la pared y mejorar la adherencia.',
};

export default function FijadorAlAguaPage() {
  return (
    <ProductPage
      title="Fijador al Agua"
      subtitle="Sellador base acuosa"
      description="Sellador líquido que se aplica antes de pintar o enduir para unificar la absorción de la pared y mejorar la adherencia. El fijador ACORTEX es un producto que se aplica sobre las paredes para sellarlas y preparar la superficie. Ayuda a que la pintura o el enduido se adhieran mejor y evita que la pared absorba demasiado producto. Se usa tanto en interiores y exteriores sobre revoques, yeso o cemento."
      heroImage="/fijador-al-agua-wall-sealer.jpg"
      tags={['Sellador', 'Preparación', 'Interior/Exterior']}
      longDescription="Un fijador de base acuosa, sin olor fuerte, que sella superficies porosas y mejora la adherencia del enduido, la pintura y la base coat. Reduce la absorción del sustrato, evita descascaramientos y aporta mayor durabilidad. Secado rápido y versatilidad total para uso interior y exterior."
      features={[
        { title: 'Base acuosa', desc: 'Sin olor fuerte, apto para interiores.' },
        { title: 'Sella y fija', desc: 'Superficies porosas, mejorando uniformidad de absorción.' },
        { title: 'Mejora adherencia', desc: 'Del enduido, la pintura y la base coat sobre el sustrato.' },
        { title: 'Reduce absorción', desc: 'Del sustrato — economiza pintura en capas posteriores.' },
        { title: 'Evita descascaramientos', desc: 'Previene patologías típicas de pinturas sobre muros desnudos.' },
        { title: 'Secado rápido', desc: 'Permite continuar con la siguiente capa más rápido.' },
        { title: 'Uso interior y exterior', desc: 'Versátil para todo tipo de aplicaciones.' },
      ]}
      specs={[
        { label: 'Revoque nuevo / muy absorbente', value: '1 parte de fijador + 3 partes de agua' },
        { label: 'Pared pintada en buen estado', value: '1 parte de fijador + 5 partes de agua' },
        { label: 'Mantenimiento ligero', value: '1 parte de fijador + 6 partes de agua' },
      ]}
      uses={[
        'Aplicar con rodillo, pincel o pulverizador.',
        'Superficie limpia y seca.',
        'Mano uniforme, sin chorrear.',
        'Apto para revoques, yeso o cemento, en interiores y exteriores.',
      ]}
      application={[
        {
          title: 'Preparación',
          desc: 'Limpiar la superficie y asegurarse de que esté seca antes de aplicar.',
        },
        {
          title: 'Aplicación',
          desc: 'Aplicar con rodillo, pincel o pulverizador en mano uniforme, sin chorrear.',
        },
        {
          title: 'Secado',
          desc: 'Dejar secar 2-4 horas.',
        },
        {
          title: 'Segunda mano',
          desc: 'Si la pared sigue "chupando" dar una segunda mano diluida. Luego enduir o pintar.',
        },
      ]}
    />
  );
}
