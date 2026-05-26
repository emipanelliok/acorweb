import Image from 'next/image';

interface ProductDetailHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  tags?: string[];
}

export function ProductDetailHero({
  title,
  subtitle = 'Producto',
  description,
  imageSrc,
  tags = [],
}: ProductDetailHeroProps) {
  return (
    <section className="product-hero">
      <div className="product-hero-bg" />
      <div className="product-hero-geo">
        <div className="geo-1" />
        <div className="geo-2" />
      </div>

      <div className="product-hero-content">
        <div className="product-hero-left">
          <div className="overline" style={{ color: 'rgba(255,255,255,.65)' }}>
            {subtitle}
          </div>
          <h1 className="product-hero-h1">
            {title}<span style={{ color: 'var(--clay)' }}>.</span>
          </h1>
          {tags.length > 0 && (
            <div className="product-hero-tags">
              {tags.map(tag => (
                <span key={tag} className="product-hero-tag">{tag}</span>
              ))}
            </div>
          )}
          <p className="product-hero-sub">{description}</p>
        </div>

        <div className="product-hero-right">
          <div className="product-hero-photo">
            <Image
              src={imageSrc || '/placeholder.svg'}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
