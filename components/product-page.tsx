'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { OrganicVisualizer } from './organic-visualizer';

type Feature = { icon?: LucideIcon; title: string; desc: string };
type Spec = { label: string; value: string };
type Step = { title: string; desc: string };
type Color = { name: string; image: string };
type Variant = { name: string; image: string; thickness: string; consumption: string; thicknessLabel?: string; zoom?: number };
type Work = { name: string; image: string; location?: string; desc: string };

export interface ProductPageProps {
  title: string;
  subtitle?: string;
  description: string;
  heroImage: string;
  heroImages?: string[];
  tags?: string[];
  longDescription?: string;
  gallery?: string[];
  variants?: Variant[];
  works?: Work[];
  features?: Feature[];
  specsImage?: string;
  specs?: Spec[];
  uses?: string[];
  application?: Step[];
  colors?: Color[];
  colorsLayout?: 'grid' | 'strips';
  visualizer?: { image: string; colors: { name: string; swatch: string; texture: string }[] };
}

export function ProductPage(p: ProductPageProps) {
  const heroSlides = p.heroImages && p.heroImages.length > 0 ? p.heroImages : null;
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!heroSlides) return;
    const id = setInterval(() => setHeroIdx(i => (i + 1) % heroSlides.length), 3500);
    return () => clearInterval(id);
  }, [heroSlides]);

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
              {heroSlides ? (
                heroSlides.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`${p.title} ${i + 1}`}
                    fill
                    priority={i === 0}
                    className={`object-cover product-hero-slide ${i === heroIdx ? 'active' : ''}`}
                  />
                ))
              ) : (
                <Image src={p.heroImage} alt={p.title} fill className="object-cover" priority />
              )}
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

      {/* VARIANTS / TEXTURAS */}
      {p.variants && p.variants.length > 0 && (
        <section className="prod-section">
          <div className="prod-section-head fade-up">
            <div className="overline">Texturas</div>
            <h2>Variantes disponibles</h2>
          </div>
          <div className="prod-variants fade-up d1">
            {p.variants.map((v, i) => (
              <div key={i} className="prod-variant">
                <div className="prod-variant-img">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover"
                    style={v.zoom ? { transform: `scale(${v.zoom})` } : undefined}
                  />
                </div>
                <h3>{v.name}</h3>
                <div className="prod-variant-specs">
                  <p><span>{v.thicknessLabel ?? 'Espesor'}:</span> {v.thickness}</p>
                  <p><span>Consumo aprox.:</span> {v.consumption}</p>
                </div>
              </div>
            ))}
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

      {/* GALLERY */}
      {p.gallery && p.gallery.length > 0 && (
        <section className="prod-section prod-section-light">
          <div className="prod-section-head fade-up">
            <div className="overline">Galería</div>
            <h2>Aplicaciones</h2>
          </div>
          <div className="prod-gallery fade-up d1">
            {p.gallery.map((src, i) => (
              <div key={i} className="prod-gallery-img">
                <Image src={src} alt={`${p.title} — aplicación ${i + 1}`} fill className="object-cover" />
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

      {/* WORKS / OBRAS */}
      {p.works && p.works.length > 0 && (
        <section className="prod-section prod-section-light">
          <div className="prod-section-head fade-up">
            <div className="overline">Obras</div>
            <h2>Proyectos realizados</h2>
          </div>
          <div className="prod-works fade-up d1">
            {p.works.map((w, i) => (
              <div key={i} className="prod-work">
                <div className="prod-work-img">
                  <Image src={w.image} alt={w.name} fill className="object-cover" />
                </div>
                <div className="prod-work-body">
                  {w.location && <div className="prod-work-loc">{w.location}</div>}
                  <h3>{w.name}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* VISUALIZER */}
      {p.visualizer && (
        <OrganicVisualizer image={p.visualizer.image} colors={p.visualizer.colors} />
      )}

      {/* COLORS */}
      {p.colors && p.colors.length > 0 && (
        <section className="prod-section prod-section-light">
          <div className="prod-section-head fade-up">
            <div className="overline">Paleta</div>
            <h2>Colores disponibles</h2>
          </div>
          <div className={`prod-colors-grid fade-up d1 ${p.colorsLayout === 'strips' ? 'prod-colors-strips' : ''}`}>
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
