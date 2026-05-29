'use client';

import { useEffect, useState } from 'react';

const HERO_IMAGES = ['/hero-1.jpg', '/hero-2.jpg', '/hero-3.jpg'];
const COFARMEN_IMAGES = ['/cofarmen-1.jpg', '/cofarmen-2.jpg', '/cofarmen-3.jpg'];
const WHATSAPP_NUMBER = '5492612488902'; // +54 9 261 248-8902

export default function Home() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [cofarmenIdx, setCofarmenIdx] = useState(0);
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hola Acortex! Soy ${form.nombre || '(sin nombre)'}.\n\n` +
      `${form.mensaje || 'Quería hacer una consulta.'}\n\n` +
      `Email: ${form.email || '-'}\n` +
      `Teléfono: ${form.telefono || '-'}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Hero slideshow — cambia cada 6 segundos
    const interval = setInterval(() => {
      setHeroIdx(i => (i + 1) % HERO_IMAGES.length);
    }, 6000);

    // Cofarmen slideshow (tarjeta grande de obras) — cambia cada 4 segundos
    const cofarmenInterval = setInterval(() => {
      setCofarmenIdx(i => (i + 1) % COFARMEN_IMAGES.length);
    }, 4000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      clearInterval(cofarmenInterval);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-geo">
          <div className="geo-1" />
          <div className="geo-2" />
          <div className="geo-3" />
        </div>
        <div className="hero-photo-bg" />
        <div className="hero-slides">
          {HERO_IMAGES.map((src, i) => (
            <div
              key={src}
              className={`hero-slide ${i === heroIdx ? 'active' : ''}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="hero-photo-fade" />
        </div>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-tag">Fábrica · Mendoza · Desde 1972</div>
            <h1 className="hero-h1">
              Ahorrá tiempo<br />
              y dinero con<br />
              <em>Acortex.</em>
            </h1>
          </div>
          <div className="hero-right">
            <p className="hero-sub">Protección, diseño y durabilidad para tu hogar. Más de 50 años de experiencia en revestimientos.</p>
            <div className="hero-btns">
              <a href="#pilares" className="btn-solid">Ver productos</a>
              <a href="/brochure-acortex.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">Descargar brochure</a>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stat-item fade-up">
          <div className="stat-n"><em>+</em>50</div>
          <div className="stat-l">Años de experiencia</div>
        </div>
        <div className="stat-item fade-up d1">
          <div className="stat-n"><em>+</em>3500</div>
          <div className="stat-l">Obras realizadas</div>
        </div>
        <div className="stat-item fade-up d2">
          <div className="stat-n">1972</div>
          <div className="stat-l">Año de fundación</div>
        </div>
        <div className="stat-item fade-up d3">
          <div className="stat-n">®</div>
          <div className="stat-l">Fórmula registrada</div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="about-img">
          <div className="about-img-bg" />
        </div>
        <div className="about-copy">
          <div className="overline">Innovación en superficies</div>
          <h2 className="fade-up">Una empresa que transforma la construcción.</h2>
          <p className="fade-up d1">Somos una marca especializada en la ingeniería de revestimientos destinados a la protección y embellecimiento de espacios arquitectónicos. Transformamos la construcción a través de sistemas que equilibran la sofisticación visual con la integridad funcional. Nuestra propuesta de valor se centra en proporcionar a arquitectos y desarrolladores materiales de alta gama que resisten el paso del tiempo.</p>
          <div className="tag-list fade-up d2">
            <span className="tag">Residencial</span>
            <span className="tag">Comercial</span>
            <span className="tag">Obra pública</span>
            <span className="tag">Renovación</span>
            <span className="tag">Interiores</span>
          </div>
        </div>
      </section>

      {/* SISTEMA INTEGRAL */}
      <section id="sistema">
        <div className="sistema-left">
          <h2 className="fade-up">Un sistema<br /><em>reemplaza tres.</em></h2>
          <p className="fade-up d1">Acortex reemplaza yeso, revoques finos y pinturas por un único sistema. Menos capas, menos tiempo de obra y menor costo total por metro cuadrado.</p>
          <a href="#" className="btn-white fade-up d2">Ver comparativa técnica →</a>
        </div>
        <div className="sistema-right fade-up d1">
          <div className="sist-row">
            <div className="sist-num">1</div>
            <div className="sist-text">
              <h4>Revoque fino</h4>
              <p>Preparación de base — capa separada</p>
            </div>
          </div>
          <div className="sist-row">
            <div className="sist-num">2</div>
            <div className="sist-text">
              <h4>Yeso / Enduido</h4>
              <p>Nivelación — capa separada</p>
            </div>
          </div>
          <div className="sist-row">
            <div className="sist-num">3</div>
            <div className="sist-text">
              <h4>Pintura</h4>
              <p>Terminación — capa separada</p>
            </div>
          </div>
          <div className="sist-row winner">
            <div className="sist-num">→</div>
            <div className="sist-text">
              <h4>Sistema Acortex</h4>
              <p>Todo en uno — preparación + terminación + protección</p>
            </div>
            <div className="sist-badge">SOLUCIÓN</div>
          </div>
        </div>
      </section>

      {/* 6 PILARES */}
      <section id="pilares">
        <div className="pilares-top">
          <h2 className="fade-up">Por qué Acortex</h2>
          <span>06 razones</span>
        </div>
        <div className="pilares-grid">
          <div className="pilar fade-up">
            <div className="pilar-num">01</div>
            <h3>Sustitución inteligente</h3>
            <p>Simplificamos la obra al reemplazar múltiples capas tradicionales (pintura, yeso, revoque) por un solo sistema de alto desempeño.</p>
          </div>
          <div className="pilar fade-up d1">
            <div className="pilar-num">02</div>
            <h3>Ciclo de vida prolongado</h3>
            <p>Máxima durabilidad que protege la inversión a largo plazo.</p>
          </div>
          <div className="pilar fade-up d2">
            <div className="pilar-num">03</div>
            <h3>Tecnología hidrófuga</h3>
            <p>Propiedades de impermeabilización avanzadas con permeabilidad al vapor para evitar patologías edilicias.</p>
          </div>
          <div className="pilar fade-up d3">
            <div className="pilar-num">04</div>
            <h3>Protección exterior</h3>
            <p>Estabilidad garantizada frente a la radiación UV y agentes atmosféricos.</p>
          </div>
          <div className="pilar fade-up">
            <div className="pilar-num">05</div>
            <h3>Sofisticación en terminaciones</h3>
            <p>Diversidad de texturas y colores que elevan el estándar visual de cada proyecto.</p>
          </div>
          <div className="pilar fade-up d1">
            <div className="pilar-num">06</div>
            <h3>Aplicación integral</h3>
            <p>Eficacia comprobada en edificaciones desde cero y rehabilitaciones arquitectónicas.</p>
          </div>
        </div>
      </section>

      {/* MÁS VENDIDOS */}
      <section id="destacados">
        <div className="destacados-head">
          <div className="overline fade-up">Línea principal</div>
        </div>
        <div className="destacados-grid">
          <a className="dest-card fade-up" href="/granulado">
            <div className="dest-img" style={{ backgroundImage: "url('/granulado-textura-medio.jpg')" }} />
            <div className="dest-body">
              <h3>Granulado</h3>
              <p>Capa dura y elástica de gran durabilidad. Tres texturas: Fino, 20/40 y Medio.</p>
              <span className="dest-link">Ver producto →</span>
            </div>
          </a>
          <a className="dest-card fade-up d1" href="/duprilene">
            <div className="dest-img" style={{ backgroundImage: "url('/duprilene-textura-medio.jpg')" }} />
            <div className="dest-body">
              <h3>Duprilene</h3>
              <p>Textura rústica decorativa en base acuosa. Tres granulometrías para cada proyecto.</p>
              <span className="dest-link">Ver producto →</span>
            </div>
          </a>
          <a className="dest-card fade-up d2" href="/salpicados">
            <div className="dest-img" style={{ backgroundImage: "url('/salpicado-textura-gota-media.jpg')" }} />
            <div className="dest-body">
              <h3>Salpicado</h3>
              <p>Versátil y flexible, ideal para grandes superficies y formas curvas. Tres acabados.</p>
              <span className="dest-link">Ver producto →</span>
            </div>
          </a>
        </div>
      </section>

      {/* PRODUCTOS NUEVOS */}
      <section id="nuevos">
        <div className="nuevo-item">
          <div className="nuevo-photo">
            <div className="np-bg np-bg-3" />
          </div>
          <div className="nuevo-copy">
            <div className="overline">Nueva línea</div>
            <h2>Organic Series.<br /><em>Piedra natural,<br />directo de la cantera.</em></h2>
            <p>Revestimiento con minerales en su estado más puro, sin pigmentos artificiales. Color real de la roca, inalterable al sol. Probá los colores sobre una fachada.</p>
            <a href="/organic" className="btn-solid" style={{ alignSelf: 'flex-start' }}>Conocer Organic →</a>
          </div>
        </div>
        <div className="nuevo-item" style={{ borderTop: '1px solid rgba(30,33,38,.08)' }}>
          <div className="nuevo-photo">
            <div className="np-bg np-bg-1" />
          </div>
          <div className="nuevo-copy">
            <div className="overline">Nuevo producto</div>
            <h2>Acorflex.<br /><em>La alternativa<br />al microcemento.</em></h2>
            <p>Acabado continuo tipo microcemento con la simplicidad del estuco. Para baños, livings, columnas y cielorrasos de diseño.</p>
            <a href="/acorflex" className="btn-solid" style={{ alignSelf: 'flex-start' }}>Conocer Acorflex →</a>
          </div>
        </div>
        <div className="nuevo-item" style={{ borderTop: '1px solid rgba(30,33,38,.08)' }}>
          <div className="nuevo-photo">
            <div className="np-bg np-bg-2" />
          </div>
          <div className="nuevo-copy">
            <div className="overline">Nuevo producto</div>
            <h2>Acorfloor.<br /><em>Pisos exteriores<br />que duran.</em></h2>
            <p>Granito antiderrapante decorativo para patios, piletas y terrazas. Alta resistencia climática y bajo costo por m².</p>
            <a href="/acorfloor" className="btn-solid" style={{ alignSelf: 'flex-start' }}>Conocer Acorfloor →</a>
          </div>
        </div>
      </section>

      {/* OBRAS */}
      <section id="obras">
        <div className="obras-head">
          <h2 className="fade-up">Obras</h2>
          <a href="#">Ver todas →</a>
        </div>
        <div className="bento">
          <div className="bento-card fade-up">
            <div className="bc-bg bc-rotate">
              {COFARMEN_IMAGES.map((src, i) => (
                <div
                  key={src}
                  className={`bc-slide ${i === cofarmenIdx ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
            </div>
            <div className="bc-overlay" />
            <div className="bc-info">
              <div className="bc-title">Cofarmen</div>
              <div className="bc-meta">Mendoza · Fachada e interiores</div>
            </div>
          </div>
          <div className="bento-card fade-up d1">
            <div className="bc-bg bc-2" /><div className="bc-overlay" />
            <div className="bc-info">
              <div className="bc-title">Casa en barrio privado</div>
              <div className="bc-meta">Mendoza · Revestimiento exterior</div>
            </div>
          </div>
          <div className="bento-card fade-up d2">
            <div className="bc-bg bc-3" /><div className="bc-overlay" />
            <div className="bc-info">
              <div className="bc-title">Casa moderna</div>
              <div className="bc-meta">Mendoza · Texturado fino</div>
            </div>
          </div>
          <div className="bento-card fade-up d1">
            <div className="bc-bg bc-4" /><div className="bc-overlay" />
            <div className="bc-info">
              <div className="bc-title">Casa de campo</div>
              <div className="bc-meta">Mendoza · Revestimiento exterior</div>
            </div>
          </div>
          <div className="bento-card fade-up d2">
            <div className="bc-bg bc-5" /><div className="bc-overlay" />
            <div className="bc-info">
              <div className="bc-title">Edificio residencial</div>
              <div className="bc-meta">Mendoza · Revestimiento de fachada</div>
            </div>
          </div>
        </div>
      </section>

      {/* ARQUITECTOS */}
      <section id="arquitectos">
        <div className="arq-left">
          <div className="overline">B2B Profesional</div>
          <h2 className="fade-up">Para arquitectos<br />y desarrolladores.</h2>
          <p className="fade-up d1">Fichas técnicas completas, asesoría de aplicación, muestras físicas y red de aplicadores certificados.</p>
          <div className="arq-btns fade-up d2">
            <a href="/brochure-acortex.pdf" target="_blank" rel="noopener noreferrer" className="btn-ink">Descargar brochure PDF</a>
            <a href="#contacto" className="btn-outline-ink">Solicitar asesoría técnica</a>
          </div>
        </div>
        <div className="arq-right">
          <div className="arq-right-bg" />
          <div className="arq-grid">
            <div className="arq-cell ac-1" />
            <div className="arq-cell ac-2" />
            <div className="arq-cell ac-3" />
            <div className="arq-cell ac-4" />
            <div className="arq-cell ac-5" />
            <div className="arq-cell ac-6" />
            <div className="arq-cell ac-7" />
            <div className="arq-cell ac-8" />
            <div className="arq-cell ac-9" />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        <div className="contacto-left">
          <h2>Hablemos.</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Nombre</label>
              <input type="text" placeholder="Tu nombre completo" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input type="email" placeholder="tu@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="form-row">
              <label>Teléfono</label>
              <input type="tel" placeholder="(261) 000-0000" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} />
            </div>
            <div className="form-row">
              <label>Mensaje</label>
              <textarea placeholder="¿En qué podemos ayudarte?" value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} />
            </div>
            <button type="submit" className="btn-solid" style={{ border: 'none' }}>Enviar por WhatsApp</button>
          </form>
        </div>
        <div className="contacto-right">
          <div className="ci">
            <div className="ci-label">Dirección</div>
            <p>
              <strong>ACORTEX Casa Central</strong><br />
              Azcuénaga, Acceso Sur Lateral Este<br />
              Luján de Cuyo<br />
              Mendoza, Argentina · M5507
            </p>
          </div>
          <div className="ci-div" />
          <div className="ci">
            <div className="ci-label">Horario</div>
            <p>Lunes a Jueves: 9:00 – 17:30<br />Viernes: 9:00 – 16:30</p>
          </div>
          <div className="ci-div" />
          <div className="ci">
            <div className="ci-label">Contacto</div>
            <p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">WhatsApp: 261 248-8902</a><br />
              ventas@acortex.com.ar
            </p>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=Azcu%C3%A9naga%2C+Acceso+Sur+Lateral+Este%2C+Luj%C3%A1n+de+Cuyo%2C+Mendoza" target="_blank" rel="noopener noreferrer" className="btn-outline-ink" style={{ display: 'inline-block', marginTop: '8px', fontSize: '13px', padding: '10px 20px' }}>Ver en Maps →</a>
        </div>
      </section>
    </>
  );
}
