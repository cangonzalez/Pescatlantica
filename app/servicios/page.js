export default function ServiciosPage() {
  return (
    <main>
      <section className="hero">
        <h1>Nuestros Servicios</h1>
        <p>
          Soluciones integrales para el mercado pesquero, desde la captura hasta 
          la entrega final, adaptadas a las necesidades de cada cliente.
        </p>
      </section>

      <section>
        <div className="content-section">
          <h2 className="section-title">Captura y Procesamiento</h2>
          <p className="section-subtitle">
            Operación integrada que garantiza productos de máxima frescura y calidad
          </p>

          <div className="cards-container">
            <div className="card">
              <h3>Captura Responsable</h3>
              <p>
                Operamos bajo estrictos protocolos de pesca sostenible, respetando 
                cuotas y temporadas de veda. Artes de pesca selectivos que minimizan 
                captura incidental.
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>Producto actual:</strong> Merluza.
              </p>
            </div>

            <div className="card">
              <h3>Procesamiento Inmediato</h3>
              <p>
                El pescado se procesa en planta dentro de las primeras horas, 
                garantizando máxima frescura. Líneas de eviscerado, descabezado, 
                fileteado y envasado.
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>Certificaciones:</strong> HACCP, ISO 9001:2015, SENASA.
              </p>
            </div>

            <div className="card">
              <h3>Control de Calidad</h3>
              <p>
                Cada lote analizado en laboratorio interno. Pruebas microbiológicas, 
                físico-químicas, organolépticas y trazabilidad completa.
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>Trazabilidad:</strong> Registro digital desde captura hasta producto final.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="content-section">
          <h2 className="section-title">Productos y Presentaciones</h2>
          <p className="section-subtitle">
            Presentaciones de merluza para diferentes necesidades comerciales
          </p>

          <div className="cards-container">
            <div className="card">
              <h3>Merluza Fresca</h3>
              <p>
                <strong>• Merluza entera eviscerada</strong><br />
                Presentación tradicional para comercialización mayorista.<br /><br />
                <strong>• Filetes frescos</strong><br />
                Con o sin piel, listos para consumo.<br /><br />
                <strong>• HG (sin cabeza ni vísceras)</strong><br />
                Para fileteado propio del cliente.<br /><br />
                <strong>Conservación:</strong> 0-4°C, vida útil 8-10 días.
              </p>
            </div>

            <div className="card">
              <h3>Merluza Congelada</h3>
              <p>
                <strong>• Bloques IQF</strong><br />
                Congelado individual rápido.<br /><br />
                <strong>• Filetes congelados</strong><br />
                Presentaciones para canal comercial e industrial.<br /><br />
                <strong>• Producto clasificado</strong><br />
                Selección por presentación y requerimiento comercial.<br /><br />
                <strong>Congelación:</strong> -18°C, túneles rápidos.
              </p>
            </div>

            <div className="card">
              <h3>Preparación Comercial</h3>
              <p>
                <strong>• Clasificación por lote</strong><br />
                Organización según calidad, tamaño y presentación.<br /><br />
                <strong>• Empaque y rotulado</strong><br />
                Identificación clara para trazabilidad comercial.<br /><br />
                <strong>• Conservación</strong><br />
                Manejo de frío según condición del producto.<br /><br />
                <strong>Packaging:</strong> Vacío, skin pack, MAP.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="content-section">
          <h2 className="section-title">Logística y Distribución</h2>
          <p className="section-subtitle">
            Red de distribución con entregas puntuales manteniendo cadena de frío
          </p>

          <div className="cards-container">
            <div className="card">
              <h3>Distribución Nacional</h3>
              <p>
                Atendemos todo el territorio con flota propia y socios certificados. 
                Vehículos con refrigeración y monitoreo de temperatura en tiempo real.
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>Cobertura:</strong> Buenos Aires, Córdoba, Rosario, Mendoza, Patagonia.
              </p>
            </div>

            <div className="card">
              <h3>Exportaciones</h3>
              <p>
                Experiencia en despachos a Europa, Asia y América. Habilitaciones 
                SENASA y cumplimiento de requisitos sanitarios internacionales.
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>Servicios:</strong> Documentación, aduana, logística puerta a puerta.
              </p>
            </div>

            <div className="card">
              <h3>Almacenamiento</h3>
              <p>
                Cámaras de refrigeración (0-4°C) y congelación (-18°C) con control 
                de inventario en tiempo real.
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>Capacidad:</strong> 2.000 m³ refrigerado, 1.500 m³ congelado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="content-section">
          <h2 className="section-title">Servicios Adicionales</h2>

          <div className="cards-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="card">
              <h3>Asesoramiento Técnico</h3>
              <p>
                Soporte en manipulación, conservación, preparación y comercialización 
                de productos del mar.
              </p>
            </div>

            <div className="card">
              <h3>Desarrollo de Producto</h3>
              <p>
                Trabajamos con clientes industriales en desarrollo de productos con 
                especificaciones a medida.
              </p>
            </div>

            <div className="card">
              <h3>Certificaciones</h3>
              <p>
                Asistencia en obtención de certificaciones y documentación para 
                operaciones y exportaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="content-section" style={{ textAlign: 'center' }}>
          <h2 className="section-title">¿Necesita más información?</h2>
          <p className="section-subtitle">
            Nuestro equipo comercial está disponible para asesorarlo sobre 
            productos, presentaciones y condiciones de venta.
          </p>
          <a href="/contacto" className="btn btn-primary">Contactar a ventas</a>
        </div>
      </section>
    </main>
  );
}
