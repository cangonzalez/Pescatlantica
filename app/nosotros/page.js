export default function NosotrosPage() {
  return (
    <main>
      <section className="hero">
        <h1>Sobre Pescatlántica</h1>
        <p>
          Más de dos décadas de experiencia en la industria pesquera argentina, 
          construyendo una empresa sólida basada en la calidad y el compromiso.
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
              Pescatlántica S.A. nace con la visión de integrar verticalmente la cadena 
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
                Proveer productos pesqueros de la más alta calidad al mercado nacional 
                e internacional, operando de manera responsable y sustentable en toda 
                la cadena de valor.
              </p>
            </div>

            <div className="card">
              <h3>Visión</h3>
              <p>
                Ser reconocidos como la empresa pesquera argentina de referencia por 
                excelencia operativa, compromiso con la sustentabilidad e innovación 
                tecnológica.
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
            Instalaciones modernas y equipamiento de última generación
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
                Instalaciones certificadas HACCP e ISO 9001, con líneas automatizadas, 
                cámaras frigoríficas y control de calidad integral.
              </p>
            </div>

            <div className="card">
              <h3>Laboratorio de Calidad</h3>
              <p>
                Laboratorio interno para análisis físico-químicos, microbiológicos y 
                sensoriales en todas las etapas.
              </p>
            </div>

            <div className="card">
              <h3>Logística Integrada</h3>
              <p>
                Centro de distribución con cámaras de conservación, flota refrigerada 
                y gestión que garantiza entregas puntuales.
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
                  Supermercados, pescaderías, restaurantes y distribuidores mayoristas 
                  en todo el territorio argentino.
                </p>
              </div>

              <div className="card">
                <h3>Exportaciones</h3>
                <p>
                  Clientes en Europa, Asia y América, cumpliendo requisitos sanitarios 
                  de cada mercado.
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
