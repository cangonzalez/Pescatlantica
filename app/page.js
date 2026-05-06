export default function Home() {
  return (
    <main>
      <section className="hero home-hero">
        <div className="home-hero-inner">
          <p className="hero-kicker">Caleta Olivia · Patagonia Argentina</p>
          <h1>Merluza argentina procesada en origen</h1>
          <p>
            Captura, procesamiento y preparación comercial de merluza con planta
            productiva en Santa Cruz, trazabilidad por lote y cadena de frío
            controlada.
          </p>
          <div className="hero-actions">
            <a href="/productos/merluza" className="btn">Ver presentaciones</a>
            <a href="/contacto" className="btn btn-secondary">Consultar disponibilidad</a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="content-section">
          <h2 className="section-title">Nuestra Operación</h2>
          <p className="section-subtitle">
            Control total de la cadena de valor desde la captura hasta la distribución final
          </p>

          <div className="content-grid">
            <div className="content-image">
              <img
                src="/imagenes/barco-costado-web.jpeg"
                alt="Flota pesquera"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="content-text">
              <h2>Flota Pesquera Propia</h2>
              <p>
                Contamos con una flota moderna de embarcaciones equipadas con tecnología 
                adecuada que opera en el Atlántico Sur, con foco en capturas responsables 
                y trazabilidad desde el origen.
              </p>
              <p>
                La operación se realiza con foco en seguridad, continuidad de suministro
                y cuidado responsable del recurso.
              </p>
            </div>
          </div>

          <div className="content-grid reverse">
            <div className="content-image">
              <img
                src="/imagenes/pescado_barco.jpeg"
                alt="Equipo pesquero con captura diaria a bordo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="content-text">
              <h2>Captura diaria</h2>
              <p>
                Nuestro equipo realiza capturas diarias asegurando productos frescos 
                y abastecimiento constante.
              </p>
              <p>
                Cada operación se trabaja con foco en trazabilidad, calidad y cuidado 
                de la cadena de valor desde el origen.
              </p>
            </div>
          </div>

          <div className="content-grid">
            <div className="content-image">
              <img src="/imagenes/fileteado.jpeg" alt="Fileteado de pescado" loading="lazy" decoding="async" />
            </div>
            <div className="content-text">
              <h2>Procesamiento Inmediato</h2>
              <p>
                El pescado se procesa en planta con protocolos orientados a preservar 
                frescura, calidad y condiciones de conservación.
              </p>
              <p>
                Nuestro equipo realiza fileteado, eviscerado y preparación con criterios 
                de higiene, orden y control operativo.
              </p>
            </div>
          </div>

          <div className="content-grid reverse">
            <div className="content-image">
              <img src="/imagenes/guardado-2.jpeg" alt="Empaquetado" loading="lazy" decoding="async" />
            </div>
            <div className="content-text">
              <h2>Empaquetado y Conservación</h2>
              <p>
                Utilizamos sistemas de empaquetado al vacío y atmósfera modificada para 
                preservar la frescura y prolongar la vida útil de nuestros productos.
              </p>
              <p>
                Cada unidad es etiquetada con información completa de trazabilidad, 
                desde la embarcación hasta el empaque final.
              </p>
            </div>
          </div>

          <div className="content-grid">
            <div className="content-image">
              <img src="/imagenes/camion-web.jpeg" alt="Logística" loading="lazy" decoding="async" />
            </div>
            <div className="content-text">
              <h2>Logística Especializada</h2>
              <p>
                Coordinamos la distribución según las necesidades comerciales de cada 
                cliente, cuidando la cadena de frío durante la logística.
              </p>
              <p>
                Trabajamos con planificación operativa para sostener calidad, trazabilidad 
                y cumplimiento en cada entrega.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="content-section">
          <h2 className="section-title">Nuestros Productos</h2>
          <p className="section-subtitle">
            Actualmente comercializamos merluza procesada con altos estándares de calidad,
            frescura y trazabilidad.
          </p>

          <div className="featured-product">
            <div className="card product-card">
              <h3>Merluza</h3>
              <p>
                Merluza hubbsi disponible en presentaciones
                frescas y congeladas según disponibilidad y requerimientos comerciales.
              </p>
              <p>
                Trabajamos con foco en consistencia, cadena de frío y control de
                calidad en cada etapa del proceso.
              </p>
              <div style={{ marginTop: '26px' }}>
                <a href="/productos/merluza" className="btn btn-primary">Ver presentaciones</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="content-section">
          <h2 className="section-title">Equipo y Tecnología</h2>
          <p className="section-subtitle">
            Personal capacitado y equipamiento especializado para el proceso productivo
          </p>

          <div className="content-grid">
            <div className="content-image">
              <img src="/imagenes/equipo-trabajo.jpeg" alt="Equipo de trabajo" loading="lazy" decoding="async" />
            </div>
            <div className="content-text">
              <h2>Personal Especializado</h2>
              <p>
                Nuestro equipo está compuesto por profesionales capacitados en todas 
                las áreas de producción, desde la captura hasta el control de calidad.
              </p>
              <p>
                Implementamos capacitación continua para sostener seguridad alimentaria, 
                eficiencia operativa y buenas prácticas de trabajo.
              </p>
            </div>
          </div>

          <div className="content-grid reverse">
            <div className="content-image">
              <img src="/imagenes/planta-procesamiento.jpeg" alt="Planta de procesamiento" loading="lazy" decoding="async" />
            </div>
            <div className="content-text">
              <h2>Instalaciones Modernas</h2>
              <p>
                Nuestra planta en Caleta Olivia cuenta con equipamiento y sistemas 
                de control de temperatura en las distintas etapas del proceso.
              </p>
              <p>
                El trabajo se organiza bajo criterios de inocuidad, trazabilidad y control 
                operativo para responder a las exigencias comerciales del sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="content-section">
          <h2 className="section-title">Compromiso con la Sustentabilidad</h2>
          <p className="section-subtitle">
            Operamos bajo principios de pesca responsable
          </p>

          <div className="cards-container">
            <div className="card">
              <h3>Gestión Responsable</h3>
              <p>
                Cumplimos estrictamente con las cuotas de captura y colaboramos 
                con organismos de investigación pesquera.
              </p>
            </div>

            <div className="card">
              <h3>Criterios de Calidad</h3>
              <p>
                Aplicamos controles internos orientados a inocuidad, trazabilidad y 
                consistencia del producto.
              </p>
            </div>

            <div className="card">
              <h3>Innovación Continua</h3>
              <p>
                Inversión constante en tecnología y capacitación para mejorar 
                procesos y reducir impacto ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
