export default function NosotrosPage() {
  return (
    <main>
      <section className="hero">
        <h1>Sobre Pescatlantica</h1>
        <p>
          Una empresa pesquera ubicada en Caleta Olivia, Patagonia Argentina, 
          enfocada en merluza, calidad y trazabilidad.
        </p>
      </section>

      <section>
        <div className="content-section">
          <h2 className="section-title">Nuestra Historia</h2>
          <p className="section-subtitle">
            Una trayectoria construida sobre calidad, trazabilidad y compromiso 
            con cada etapa de la cadena pesquera
          </p>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '20px' }}>
              Pescatlantica Group S.A.S nace con la visión de integrar verticalmente la cadena 
              productiva pesquera, conectando captura, procesamiento, control de calidad 
              y comercialización bajo un mismo estándar de trabajo.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '20px' }}>
              Nuestra planta está ubicada en Caleta Olivia, en la Patagonia Argentina, 
              una zona estratégica para la actividad pesquera y el trabajo con productos 
              del Atlántico Sur.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
              Hoy seguimos trabajando con una mirada de mejora continua: invertir en 
              capacitación, optimizar procesos y sostener altos criterios de calidad 
              para responder a las exigencias del mercado nacional e internacional.
            </p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="content-section">
          <h2 className="section-title">Nuestra Filosofía</h2>

          <div className="cards-container">
            <div className="card">
              <h3>Misión</h3>
              <p>
                Proveer merluza con estándares consistentes de calidad, cuidado de la
                cadena de frío y trazabilidad desde el origen.
              </p>
            </div>

            <div className="card">
              <h3>Visión</h3>
              <p>
                Consolidarnos como una empresa confiable para clientes comerciales e
                industriales que buscan abastecimiento responsable desde Patagonia.
              </p>
            </div>

            <div className="card">
              <h3>Valores</h3>
              <p>
                <strong>Calidad:</strong> Compromiso con la excelencia en cada etapa.<br /><br />
                <strong>Transparencia:</strong> Total trazabilidad y cumplimiento normativo.<br /><br />
                <strong>Sustentabilidad:</strong> Respeto por recursos naturales y medio ambiente.<br /><br />
                <strong>Profesionalismo:</strong> Equipo capacitado y comprometido.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="content-section">
          <h2 className="section-title">Infraestructura y Capacidades</h2>
          <p className="section-subtitle">
            Instalaciones y equipamiento orientados al procesamiento de merluza
          </p>

          <div className="cards-container">
            <div className="card">
              <h3>Flota Pesquera</h3>
              <p>
                Embarcaciones propias con sistemas de refrigeración, navegación satelital 
                y tecnología que minimiza el impacto ambiental.
              </p>
            </div>

            <div className="card">
              <h3>Planta de Procesamiento</h3>
              <p>
                Instalaciones orientadas al procesamiento, conservación y preparación
                comercial de merluza.
              </p>
            </div>

            <div className="card">
              <h3>Laboratorio de Calidad</h3>
              <p>
                Controles operativos para acompañar calidad, trazabilidad y consistencia
                durante el proceso.
              </p>
            </div>

            <div className="card">
              <h3>Logística Integrada</h3>
              <p>
                Coordinación logística para conservar el producto y responder a cada
                requerimiento comercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="content-section">
          <h2 className="section-title">Mercados y Clientes</h2>
          <p className="section-subtitle">
            Atendemos diversos segmentos del mercado nacional e internacional
          </p>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="cards-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div className="card">
                <h3>Mercado Nacional</h3>
                <p>
                  Atención a clientes comerciales e industriales según disponibilidad,
                  volumen y presentación.
                </p>
              </div>

              <div className="card">
                <h3>Exportaciones</h3>
                <p>
                  Preparación de operaciones internacionales según requisitos comerciales
                  y documentación aplicable.
                </p>
              </div>

              <div className="card">
                <h3>Sector Industrial</h3>
                <p>
                  Suministro de merluza como materia prima para operaciones 
                  comerciales e industriales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
