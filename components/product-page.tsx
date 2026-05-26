'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';

type Feature = { icon?: LucideIcon; title: string; desc: string };
type Spec = { label: string; value: string };
type Step = { title: string; desc: string };
type Color = { name: string; image: string };

export interface ProductPageProps {
  title: string;
  subtitle?: string;
  description: string;
  heroImage: string;
  tags?: string[];
  longDescription?: string;
  features?: Feature[];
  specsImage?: string;
  specs?: Spec[];
  uses?: string[];
  application?: Step[];
  colors?: Color[];
}

export function ProductPage(p: ProductPageProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="product-hero">
        <div className="product-hero-bg" />
        <div className="product-hero-geo">
          <div className="geo-1" />
          <div className="geo-2" />
        </div>
        <div className="product-hero-content">
          <div className="product-hero-left">
            {p.subtitle && (
              <div className="overline" style={{ color: 'rgba(255,255,255,.65)' }}>{p.subtitle}</div>
            )}
            <h1 className="product-hero-h1">
              {p.title}<span style={{ color: 'var(--clay)' }}>.</span>
            </h1>
            {p.tags && p.tags.length > 0 && (
              <div className="product-hero-tags">
                {p.tags.map(t => <span key={t} className="product-hero-tag">{t}</span>)}
              </div>
            )}
            <p className="product-hero-sub">{p.description}</p>
          </div>
          <div className="product-hero-right">
            <div className="product-hero-photo">
              <Image src={p.heroImage} alt={p.title} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* LONG DESCRIPTION */}
      {p.longDescription && (
        <section className="prod-section prod-section-light">
          <div className="prod-narrow fade-up">
            <p className="prod-lead">{p.longDescription}</p>
          </div>
        </section>
      )}

      {/* FEATURES */}
      {p.features && p.features.length > 0 && (
        <section className="prod-section">
          <div className="prod-section-head fade-up">
            <div className="overline">Beneficios</div>
            <h2>Características</h2>
          </div>
          <div className="prod-features">
            {p.features.map((f, i) => (
              <div key={i} className={`prod-feature fade-up ${i % 4 === 1 ? 'd1' : i % 4 === 2 ? 'd2' : i % 4 === 3 ? 'd3' : ''}`}>
                <div className="prod-feature-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SPECS */}
      {p.specs && p.specs.length > 0 && (
        <section className="prod-section prod-section-light">
          <div className="prod-section-head fade-up">
            <div className="overline">Especificaciones</div>
            <h2>Datos técnicos</h2>
          </div>
          <div className="prod-specs-wrap fade-up d1">
            {p.specsImage && (
              <div className="prod-specs-img">
                <Image src={p.specsImage} alt={p.title} fill className="object-cover" />
              </div>
            )}
            <div className="prod-specs-grid">
              {p.specs.map((s, i) => (
                <div key={i} className="prod-spec">
                  <div className="prod-spec-label">{s.label}</div>
                  <div className="prod-spec-value">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* USES + APPLICATION */}
      {((p.uses && p.uses.length > 0) || (p.application && p.application.length > 0)) && (
        <section className="prod-section">
          <div className="prod-section-head fade-up">
            <div className="overline">Instrucciones</div>
            <h2>Usos y aplicaciones</h2>
          </div>
          <div className="prod-uses-grid">
            {p.uses && p.uses.length > 0 && (
              <div className="prod-uses-col fade-up">
                <h3>Superficies ideales</h3>
                <ul className="prod-uses-list">
                  {p.uses.map((u, i) => (
                    <li key={i}><span>—</span>{u}</li>
                  ))}
                </ul>
              </div>
            )}
            {p.application && p.application.length > 0 && (
              <div className="prod-app-col fade-up d1">
                <h3>Método de aplicación</h3>
                <ol className="prod-app-list">
                  {p.application.map((s, i) => (
                    <li key={i}>
                      <span className="prod-app-num">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </section>
      )}

      {/* COLORS */}
      {p.colors && p.colors.length > 0 && (
        <section className="prod-section prod-section-light">
          <div className="prod-section-head fade-up">
            <div className="overline">Paleta</div>
            <h2>Colores disponibles</h2>
          </div>
          <div className="prod-colors-grid fade-up d1">
            {p.colors.map((c, i) => (
              <div key={i} className="prod-color">
                <div className="prod-color-img">
                  <Image src={c.image} alt={c.name} fill className="object-cover" />
                </div>
                <div className="prod-color-name">{c.name}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="prod-cta">
        <div className="prod-cta-inner fade-up">
          <h2>¿Te interesa <em>{p.title}</em>?</h2>
          <p>Pedinos asesoría técnica, fichas o muestras físicas.</p>
          <div className="prod-cta-btns">
            <a href="/#contacto" className="btn-solid">Solicitar información</a>
            <a href="/" className="btn-ghost-light">Ver otros productos</a>
          </div>
        </div>
      </section>
    </>
  );
}
