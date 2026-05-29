import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="ft-brand">
          <Link href="/" className="nav-logo-img" aria-label="Acortex">
            <Image src="/logo-acortex.png" alt="Acortex" width={120} height={36} />
          </Link>
          <p>Fábrica de revestimientos y pinturas arquitectónicas. Mendoza, Argentina.</p>
        </div>
        <div className="ft-col">
          <h4>Productos</h4>
          <ul>
            <li><Link href="/granulado">Granulado</Link></li>
            <li><Link href="/duprilene">Duprilene</Link></li>
            <li><Link href="/salpicados">Salpicados</Link></li>
            <li><Link href="/elastomero">Elastómero</Link></li>
            <li><Link href="/acorflex">Acorflex</Link></li>
            <li><Link href="/acorfloor">Acorfloor</Link></li>
            <li><Link href="/base-coat">Base Coat</Link></li>
            <li><Link href="/latex">Látex</Link></li>
            <li><Link href="/membrana-liquida">Membrana Líquida</Link></li>
            <li><Link href="/enduido">Enduido</Link></li>
            <li><Link href="/pastas">Pastas</Link></li>
          </ul>
        </div>
        <div className="ft-col">
          <h4>Empresa</h4>
          <ul>
            <li><Link href="/#about">Quiénes somos</Link></li>
            <li><Link href="/#obras">Obras</Link></li>
            <li><Link href="/obra-publica">Obra Pública</Link></li>
            <li><Link href="/#arquitectos">Arquitectos</Link></li>
          </ul>
        </div>
        <div className="ft-col">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#">Brochure PDF</a></li>
            <li><a href="#">Fichas técnicas</a></li>
            <li><a href="#">Aplicadores</a></li>
          </ul>
        </div>
        <div className="ft-col">
          <h4>Contacto</h4>
          <ul>
            <li><a href="https://wa.me/5492612488902" target="_blank" rel="noopener noreferrer">WhatsApp: 261 248-8902</a></li>
            <li><a href="mailto:ventas@acortex.com.ar">ventas@acortex.com.ar</a></li>
            <li>Azcuénaga, Acceso Sur Lateral Este, Luján de Cuyo, Mendoza</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Acortex. Revestimientos y Pinturas desde 1971.</p>
        <div className="footer-social">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
