'use client';

import { useEffect } from 'react';
import Image from 'next/image';

const swatchColors = [
  '#F0EAE0','#E4DBD0','#D8CEC0','#CCBFAC','#C0B098','#B0A080',
  '#A09068','#907858','#806448','#705438','#604428','#50341A',
  '#40260E','#301A08','#C8B8A0','#B8A888','#A89870','#988860',
  '#887850','#786840','#885840','#984838','#A84030','#A43A2B',
  '#B83828','#A03020','#882818','#702010','#E0D8C8','#D0C8A8',
  '#C0B888','#B0A870','#C9A437','#B89028','#A07C20','#886818',
  '#705410','#584008','#402C00','#281A00','#E0E0DC','#D0D0C8',
  '#C0C0B0','#B0B098','#9EA090','#8C9080','#7A8070','#6A7060',
  '#5A6050','#4A5040','#3A4032','#2A3024','#1E2126','#141618',
];

export default function Home() {
  useEffect(() => {
    const nav = document.getElementById('mainNav');
    const handleScroll = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav id="mainNav">
        <a href="#">
          <Image src="/logo-acortex.png" alt="Acortex" width={120} height={36} priority style={{ height: '36px', width: 'auto' }} />
        </a>
        <div className="nav-links">
          <a href="/granulado">Granulado</a>
          <a href="/duprilene">Duprilene</a>
          <a href="/salpicados">Salpicados</a>
          <a href="/elastomero">Elastómero</a>
          <a href="/obra-publica">Obra Pública</a>
          <a href="/otros">Otros</a>
        </div>
        <a href="#contacto" className="nav-cta">Contacto</a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-geo">
          <div className="geo-1" />
          <div className="geo-2" />
          <div className="geo-3" />
        </div>
        <div className="hero-photo-bg" />
        <div className="hero-photo" />

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-tag">Fábrica · Mendoza · Desde 1971</div>
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
              <a href="#arquitectos" className="btn-ghost">Descargar brochure</a>
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
          <div className="stat-n">50<em>+</em></div>
          <div className="stat-l">Años de experiencia</div>
        </div>
        <div className="stat-item fade-up d1">
          <div className="stat-n">25<em>+</em></div>
          <div className="stat-l">Productos en catálogo</div>
        </div>
        <div className="stat-item fade-up d2">
          <div className="stat-n"><em>+</em>1200</div>
          <div className="stat-l">Colores disponibles</div>
        </div>
        <div className="stat-item fade-up d3">
          <div className="stat-n">∞</div>
          <div className="stat-l">Aplicaciones posibles</div>
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
          <p className="fade-up d1">Acortex reemplaza yeso, revoques finos y pinturas por un sistema único de alto desempeño. Alta durabilidad, acabado premium y más de 50 años de experiencia respaldan cada obra.</p>
          <div className="tag-list fade-up d2">
            <span className="tag">Residencial</span>
            <span className="tag">Comercial</span>
            <span className="tag">Obra pública</span>
            <span className="tag">Rehabilitación</span>
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
            <h3>Protección</h3>
            <p>Protección ante la humedad, hongos e impactos. Resguarda la estructura de tu propiedad a largo plazo.</p>
          </div>
          <div className="pilar fade-up d1">
            <div className="pilar-num">02</div>
            <h3>Diseño</h3>
            <p>Acortex reemplaza yeso, revoques finos y pinturas. Un solo sistema para preparación y terminación.</p>
          </div>
          <div className="pilar fade-up d2">
            <div className="pilar-num">03</div>
            <h3>Durabilidad</h3>
            <p>Mantiene la firmeza propia de la piedra, conservando intacta su estructura ante el paso del tiempo.</p>
          </div>
          <div className="pilar fade-up d3">
            <div className="pilar-num">04</div>
            <h3>Hidrorepelente</h3>
            <p>Impide la absorción de agua y resguarda todas las superficies. Tecnología hidrófuga con permeabilidad al vapor.</p>
          </div>
          <div className="pilar fade-up">
            <div className="pilar-num">05</div>
            <h3>Alta resistencia</h3>
            <p>Resistencia garantizada frente a impactos, abrasión, rayos UV y variaciones climáticas extremas.</p>
          </div>
          <div className="pilar fade-up d1">
            <div className="pilar-num">06</div>
            <h3>Acabado premium</h3>
            <p>Calidad profesional con más de 1200 colores y múltiples texturas. Estética sofisticada en cada terminación.</p>
          </div>
        </div>
      </section>

      {/* PRODUCTOS NUEVOS */}
      <section id="nuevos">
        <div className="nuevo-item">
          <div className="nuevo-photo">
            <div className="np-bg np-bg-1" />
          </div>
          <div className="nuevo-copy">
            <div className="overline">Nuevo producto</div>
            <h2>Acorflex.<br /><em>La alternativa<br />al microcemento.</em></h2>
            <p>Acabado continuo tipo microcemento con la simplicidad del estuco. Para baños, livings, columnas y cielorrasos de diseño.</p>
            <a href="#" className="btn-solid" style={{ alignSelf: 'flex-start' }}>Conocer Acorflex →</a>
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
            <a href="#" className="btn-solid" style={{ alignSelf: 'flex-start' }}>Conocer Acorfloor →</a>
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
            <div className="bc-bg bc-1" /><div className="bc-overlay" />
            <div className="bc-info">
              <div className="bc-title">Casa Chacras de Coria</div>
              <div className="bc-meta">Mendoza · Granulado Medio</div>
            </div>
          </div>
          <div className="bento-card fade-up d1">
            <div className="bc-bg bc-2" /><div className="bc-overlay" />
            <div className="bc-info">
              <div className="bc-title">Edificio Comercial</div>
              <div className="bc-meta">Guaymallén · Duprilene</div>
            </div>
          </div>
          <div className="bento-card fade-up d2">
            <div className="bc-bg bc-3" /><div className="bc-overlay" />
            <div className="bc-info">
              <div className="bc-title">Country El Carrizal</div>
              <div className="bc-meta">Luján · Salpicado</div>
            </div>
          </div>
          <div className="bento-card fade-up d1">
            <div className="bc-bg bc-4" /><div className="bc-overlay" />
            <div className="bc-info">
              <div className="bc-title">Duplex San José</div>
              <div className="bc-meta">Mendoza · Acorflex</div>
            </div>
          </div>
          <div className="bento-card fade-up d2">
            <div className="bc-bg bc-5" /><div className="bc-overlay" />
            <div className="bc-info">
              <div className="bc-title">Housing Palmares</div>
              <div className="bc-meta">Maipú · Granulado Fino</div>
            </div>
          </div>
        </div>
      </section>

      {/* COLORES */}
      <section id="colores">
        <div className="colores-head">
          <h2><em>+1200</em><br />colores.</h2>
          <p>Filtrá por producto, tono o familia. Más de 1200 opciones entre todas las líneas.</p>
        </div>
        <div className="swatch-strip">
          {swatchColors.map((color, i) => (
            <div key={i} className="sw" style={{ background: color }} />
          ))}
        </div>
      </section>

      {/* ARQUITECTOS */}
      <section id="arquitectos">
        <div className="arq-left">
          <div className="overline">B2B Profesional</div>
          <h2 className="fade-up">Para arquitectos<br />y desarrolladores.</h2>
          <p className="fade-up d1">Fichas técnicas completas, asesoría de aplicación, muestras físicas y red de aplicadores certificados.</p>
          <div className="arq-btns fade-up d2">
            <a href="#" className="btn-ink">Descargar brochure PDF (16 pág.)</a>
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
          <form onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <label>Nombre</label>
              <input type="text" placeholder="Tu nombre completo" />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input type="email" placeholder="tu@email.com" />
            </div>
            <div className="form-row">
              <label>Teléfono</label>
              <input type="tel" placeholder="(261) 000-0000" />
            </div>
            <div className="form-row">
              <label>Mensaje</label>
              <textarea placeholder="¿En qué podemos ayudarte?" />
            </div>
            <button type="submit" className="btn-solid" style={{ border: 'none' }}>Enviar mensaje</button>
          </form>
        </div>
        <div className="contacto-right">
          <div className="ci">
            <div className="ci-label">Dirección</div>
            <p>
              <strong>ACORTEX Casa Central</strong><br />
              Barcala 1931<br />
              San José – Guaymallén<br />
              Mendoza, Argentina · CP 5519
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
            <p>(0261) 4 452 319<br />ventas@acortex.com.ar</p>
          </div>
          <a href="#" className="btn-outline-ink" style={{ display: 'inline-block', marginTop: '8px', fontSize: '13px', padding: '10px 20px' }}>Ver en Maps →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="ft-brand">
            <Image src="/logo-acortex.png" alt="Acortex" width={120} height={36} style={{ height: '32px', width: 'auto' }} />
            <p>Fábrica de revestimientos y pinturas arquitectónicas. Mendoza, Argentina.</p>
          </div>
          <div className="ft-col">
            <h4>Productos</h4>
            <ul>
              <li><a href="/granulado">Granulado</a></li>
              <li><a href="/duprilene">Duprilene</a></li>
              <li><a href="/salpicados">Salpicados</a></li>
              <li><a href="/elastomero">Elastómero</a></li>
              <li><a href="#">Acorflex</a></li>
              <li><a href="#">Acorfloor</a></li>
              <li><a href="/latex">Látex</a></li>
            </ul>
          </div>
          <div className="ft-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Quiénes somos</a></li>
              <li><a href="#">Historia</a></li>
              <li><a href="#">Obras</a></li>
              <li><a href="/obra-publica">Obra Pública</a></li>
            </ul>
          </div>
          <div className="ft-col">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#">Brochure PDF</a></li>
              <li><a href="#">Fichas técnicas</a></li>
              <li><a href="#">Explorador colores</a></li>
              <li><a href="#">Aplicadores</a></li>
            </ul>
          </div>
          <div className="ft-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="tel:02614452319">(0261) 4 452 319</a></li>
              <li><a href="mailto:ventas@acortex.com.ar">ventas@acortex.com.ar</a></li>
              <li><a href="#">Barcala 1931, Mendoza</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Acortex. Revestimientos y Pinturas desde 1971.</p>
          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </footer>
    </>
  );
}
