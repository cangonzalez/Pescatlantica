export const metadata = {
  title: 'Merluza | Pescatlantica Group S.A.S',
  description:
    'Merluza argentina procesada en Caleta Olivia: filetes con piel, sin piel y HGT/HG, con trazabilidad, cadena de frío y preparación comercial.',
};

const products = [
  {
    title: 'Filet de merluza sin piel',
    image: '/imagenes/merluza/filetes-bandejas-vertical.jpeg',
    bullets: ['Congelado en tierra', 'Poca espina', 'Interfoliado'],
    calibers: '60/120 g · 120/200 g · 200/up · 2/4 oz · 4/6 oz · 6/8 oz',
    formats:
      'Bloques interfoliados, cajas master y presentaciones comerciales según requerimiento.',
  },
  {
    title: 'Merluza HGT / HG',
    image: '/imagenes/merluza/corte-merluza-mesa.jpeg',
    bullets: ['Congelado en tierra', 'Poca espina', 'Interfoliado'],
    calibers: '80/300 g · 300/500 g · 500/800 g',
    formats:
      'Presentación entera sin cabeza ni vísceras, lista para procesamiento posterior o venta mayorista.',
  },
];

const specs = [
  {
    title: 'Características',
    items: [
      'Nombre comercial: filet de merluza / merluza HGT',
      'Nombre científico: Merluccius hubbsi',
      'País de origen: Argentina',
      'Zona de captura: Atlántico Sudoccidental / FAO 41',
      'Tratamiento: congelado en tierra, freezer o placa',
      'Conservación: cámara a -22°C para mantener producto a -18°C',
    ],
  },
  {
    title: 'Calidad e inocuidad',
    items: [
      'Proceso orientado a preservar textura, color y frescura',
      'Clasificación por presentación, calibre y lote',
      'Cadena de frío controlada desde planta hasta despacho',
      'Trazabilidad comercial para cada operación',
      'Preparación documental según destino y requerimiento del cliente',
    ],
  },
  {
    title: 'Información nutricional',
    items: [
      'Producto magro, de sabor suave y alta versatilidad gastronómica',
      'Aporte natural de proteínas de origen marino',
      'Bajo contenido graso frente a otras especies comerciales',
      'Valores sujetos a época de captura, tamaño y condición del lote',
    ],
  },
];

export default function MerluzaPage() {
  return (
    <main>
      <section className="product-hero merluza-hero">
        <div className="product-hero-overlay">
          <p className="eyebrow">Producto principal</p>
          <h1>Merluza argentina del Atlántico Sur</h1>
          <p>
            Filetes y presentaciones HGT/HG procesadas en nuestra planta de
            Caleta Olivia, con foco en trazabilidad, cadena de frío y calidad
            comercial.
          </p>
          <div className="hero-actions">
            <a href="/contacto" className="btn">Consultar disponibilidad</a>
            <a href="/servicios" className="btn btn-secondary">Ver proceso</a>
          </div>
        </div>
      </section>

      <section>
        <div className="content-section narrow-intro">
          <p>
            Pescatlantica Group S.A.S trabaja merluza hubbsi desde Patagonia
            Argentina para clientes comerciales e industriales. La operación se
            concentra en una única planta productiva en Caleta Olivia, Santa
            Cruz, donde el producto se clasifica, procesa, envasa y conserva
            según presentación y requerimiento comercial.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="content-section">
          <h2 className="section-title">Presentaciones de merluza</h2>
          <p className="section-subtitle">
            Formatos preparados para venta mayorista, industria, distribución y
            operaciones de exportación.
          </p>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-detail-card" key={product.title}>
                <img src={product.image} alt={product.title} loading="lazy" decoding="async" />
                <div>
                  <h3>{product.title}</h3>
                  <ul className="check-list">
                    {product.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Calibres:</strong><br />
                    {product.calibers}
                  </p>
                  <p>
                    <strong>Presentaciones:</strong><br />
                    {product.formats}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="image-band" aria-label="Proceso de merluza en planta">
        <img src="/imagenes/merluza/sala-fileteado-amplia.jpeg" alt="Sala de fileteado de merluza" loading="lazy" decoding="async" />
        <img src="/imagenes/merluza/planta-proceso-interfoliado.jpeg" alt="Proceso de interfoliado en planta" loading="lazy" decoding="async" />
        <img src="/imagenes/merluza/mesa-clasificacion.jpeg" alt="Clasificación manual de merluza" loading="lazy" decoding="async" />
      </section>

      <section>
        <div className="content-section">
          <h2 className="section-title">Planta Caleta Olivia</h2>
          <p className="section-subtitle">
            Una operación centralizada para sostener consistencia, control y
            respuesta comercial.
          </p>

          <div className="plant-feature">
            <div className="plant-copy">
              <h3>Procesamiento patagónico en origen</h3>
              <p>
                La planta se encuentra en Caleta Olivia, Santa Cruz, y está
                orientada al trabajo de merluza para distintas presentaciones:
                fileteado, clasificación, interfoliado, empaque, congelado,
                almacenamiento y despacho.
              </p>
              <p>
                El proceso se organiza por lote y requerimiento comercial para
                responder a clientes nacionales e internacionales con
                continuidad, trazabilidad y cuidado de la cadena de frío.
              </p>
            </div>
            <img
              src="/imagenes/merluza/sala-fileteado-linea.jpeg"
              alt="Interior de la planta de Pescatlantica en Caleta Olivia"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="content-section">
          <h2 className="section-title">Ficha técnica comercial</h2>
          <p className="section-subtitle">
            Información útil para evaluar presentación, conservación y
            preparación de cada operación.
          </p>

          <div className="spec-grid">
            {specs.map((spec) => (
              <article className="spec-card" key={spec.title}>
                <h3>{spec.title}</h3>
                <ul>
                  {spec.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partnership-section">
        <div className="content-section partnership-grid">
          <div>
            <p className="eyebrow">Proyección internacional</p>
            <h2>Partnership comercial con WOFCO</h2>
          </div>
          <div>
            <p>
              En alianza comercial con WOFCO, fortalecemos la proyección
              internacional de la merluza argentina, integrando producción
              patagónica con canales globales de comercialización.
            </p>
            <p>
              Este vínculo acompaña la apertura de nuevos mercados y permite
              presentar productos con estándares consistentes para clientes que
              requieren volumen, continuidad y preparación documental.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="content-section" style={{ textAlign: 'center' }}>
          <h2 className="section-title">¿Buscás merluza para tu operación?</h2>
          <p className="section-subtitle">
            Consultá disponibilidad, presentaciones, calibres y condiciones
            comerciales con nuestro equipo.
          </p>
          <a href="/contacto" className="btn btn-primary">Contactar a ventas</a>
        </div>
      </section>
    </main>
  );
}
