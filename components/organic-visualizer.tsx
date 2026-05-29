'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type ColorOpt = { name: string; swatch: string; texture: string };

const TILE = 220; // tamaño del patrón de textura (px) sobre la foto
const TEX_V = '?v=4'; // cache-busting de las texturas de pared

function loadImg(src: string) {
  return new Promise<HTMLImageElement>((res, rej) => {
    const im = new Image();
    im.crossOrigin = 'anonymous';
    im.onload = () => res(im);
    im.onerror = rej;
    im.src = src;
  });
}

export function OrganicVisualizer({ image, colors }: { image: string; colors: ColorOpt[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const baseRef = useRef<ImageData | null>(null);
  const maskRef = useRef<Uint8Array | null>(null);
  const dimsRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const texRef = useRef<Record<string, HTMLImageElement>>({});
  const [idx, setIdx] = useState(0);
  const [ready, setReady] = useState(false);

  const render = useCallback((ci: number) => {
    const canvas = canvasRef.current;
    const base = baseRef.current;
    const mask = maskRef.current;
    if (!canvas || !base || !mask) return;
    const ctx = canvas.getContext('2d');
    const tex = texRef.current[colors[ci].texture];
    if (!ctx || !tex) return;
    const { w, h } = dimsRef.current;

    // textura tileada a tamaño w x h
    const tc = document.createElement('canvas');
    tc.width = w; tc.height = h;
    const tctx = tc.getContext('2d')!;
    const ratio = tex.naturalHeight / tex.naturalWidth;
    const tw = TILE, th = Math.round(TILE * ratio);
    const tile = document.createElement('canvas');
    tile.width = tw; tile.height = th;
    tile.getContext('2d')!.drawImage(tex, 0, 0, tw, th);
    // tiling espejado: alterna flip H/V para que los bordes coincidan
    // y se rompa la repetición visible (sin costuras ni bandas)
    let row = 0;
    for (let ty = 0; ty < h; ty += th, row++) {
      let col = 0;
      for (let tx = 0; tx < w; tx += tw, col++) {
        const fx = (col & 1) === 1;
        const fy = (row & 1) === 1;
        tctx.save();
        tctx.translate(tx + (fx ? tw : 0), ty + (fy ? th : 0));
        tctx.scale(fx ? -1 : 1, fy ? -1 : 1);
        tctx.drawImage(tile, 0, 0, tw, th);
        tctx.restore();
      }
    }
    const t = tctx.getImageData(0, 0, w, h).data;

    // combinar (multiply solo en paredes)
    const out = ctx.createImageData(w, h);
    const b = base.data, o = out.data;
    for (let i = 0; i < b.length; i += 4) {
      const p = i >> 2;
      if (mask[p]) {
        o[i] = (b[i] * t[i]) / 255;
        o[i + 1] = (b[i + 1] * t[i + 1]) / 255;
        o[i + 2] = (b[i + 2] * t[i + 2]) / 255;
      } else {
        o[i] = b[i]; o[i + 1] = b[i + 1]; o[i + 2] = b[i + 2];
      }
      o[i + 3] = 255;
    }
    ctx.putImageData(out, 0, 0);
  }, [colors]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const baseImg = await loadImg(image);
      if (cancelled) return;
      const w = baseImg.naturalWidth, h = baseImg.naturalHeight;
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(baseImg, 0, 0);
      const base = ctx.getImageData(0, 0, w, h);
      baseRef.current = base;
      dimsRef.current = { w, h };

      // máscara de paredes
      const d = base.data;
      const mask = new Uint8Array(w * h);
      const yCut = Math.floor(h * 0.86);
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const p = y * w + x;
          const i = p << 2;
          const r = d[i], g = d[i + 1], bl = d[i + 2];
          const max = Math.max(r, g, bl), min = Math.min(r, g, bl);
          const lum = 0.299 * r + 0.587 * g + 0.114 * bl;
          const sat = max - min;
          const isSky = bl > r + 12 && bl > g + 4 && bl > 110;
          const isGreen = g > r + 10 && g > bl + 6;
          const isDark = lum < 95;
          mask[p] = !isSky && !isGreen && !isDark && lum > 120 && sat < 55 && y < yCut ? 1 : 0;
        }
      }
      maskRef.current = mask;

      // precargar texturas
      const imgs = await Promise.all(colors.map(c => loadImg(c.texture + TEX_V)));
      if (cancelled) return;
      colors.forEach((c, i) => { texRef.current[c.texture] = imgs[i]; });
      setReady(true);
    })();
    return () => { cancelled = true; };
  }, [image, colors]);

  useEffect(() => {
    if (ready) render(idx);
  }, [ready, idx, render]);

  const active = colors[idx];

  return (
    <section className="prod-section ov-section">
      <div className="prod-section-head fade-up">
        <div className="overline">Probador de color</div>
        <h2>Visualizá tu fachada</h2>
        <p className="ov-intro">Tocá un color y mirá cómo queda el revestimiento Organic Series aplicado sobre una fachada real.</p>
      </div>

      <div className="ov-wrap fade-up d1">
        <div className="ov-canvas">
          <canvas ref={canvasRef} className="ov-canvasel" aria-label={`Fachada con revestimiento ${active.name}`} />
          {!ready && <div className="ov-loading">Cargando…</div>}
        </div>

        <div className="ov-controls">
          <div className="ov-current">
            <div className="ov-current-label">Color seleccionado</div>
            <div className="ov-current-name">{active.name}</div>
          </div>
          <div className="ov-swatches" role="listbox" aria-label="Colores Organic Series">
            {colors.map((c, i) => (
              <button
                key={c.name}
                type="button"
                role="option"
                aria-selected={i === idx}
                className={`ov-swatch ${i === idx ? 'active' : ''}`}
                onClick={() => setIdx(i)}
                title={c.name}
              >
                <span className="ov-swatch-img" style={{ backgroundImage: `url(${c.swatch})` }} />
                <span className="ov-swatch-name">{c.name}</span>
              </button>
            ))}
          </div>
          <p className="ov-note">Representación ilustrativa. Los tonos pueden variar según la iluminación y el sustrato.</p>
        </div>
      </div>
    </section>
  );
}
