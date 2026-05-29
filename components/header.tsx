'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const mainLinks = [
  { href: '/organic', label: 'Organic' },
  { href: '/granulado', label: 'Granulado' },
  { href: '/duprilene', label: 'Duprilene' },
  { href: '/salpicados', label: 'Salpicados' },
  { href: '/elastomero', label: 'Elastómero' },
  { href: '/obra-publica', label: 'Obra Pública' },
];

const otrosLinks = [
  { href: '/acorflex', label: 'Acorflex' },
  { href: '/acorfloor', label: 'Acorfloor' },
  { href: '/base-coat', label: 'Base Coat' },
  { href: '/latex', label: 'Látex' },
  { href: '/membrana-liquida', label: 'Membrana Líquida' },
  { href: '/enduido', label: 'Enduido' },
  { href: '/fijador-al-agua', label: 'Fijador al Agua' },
  { href: '/pastas', label: 'Pastas' },
];

export function Header() {
  const [otrosOpen, setOtrosOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('mainNav');
    const handleScroll = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="mainNav">
      <Link href="/" className="nav-logo-img" aria-label="Acortex">
        <Image
          src="/logo-acortex.png"
          alt="Acortex"
          width={240}
          height={72}
          priority
          style={{ height: 72, width: 'auto' }}
        />
      </Link>

      <div className="nav-links">
        {mainLinks.map(l => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
        <div
          className="nav-otros"
          onMouseEnter={() => setOtrosOpen(true)}
          onMouseLeave={() => setOtrosOpen(false)}
        >
          <button type="button" className="nav-otros-trigger">Otros ▾</button>
          {otrosOpen && (
            <div className="nav-otros-menu">
              {otrosLinks.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOtrosOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link href="/#contacto" className="nav-cta">Contacto</Link>

      <button
        className="nav-burger"
        aria-label="Menu"
        onClick={() => setMobileOpen(v => !v)}
      >
        <span /><span /><span />
      </button>

      {mobileOpen && (
        <div className="nav-mobile">
          {mainLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="nav-mobile-sep">Otros</div>
          {otrosLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/#contacto" className="nav-cta" onClick={() => setMobileOpen(false)}>
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
