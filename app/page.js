export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Excelencia en Productos del Mar</h1>
        <p>
          Pescatlántica S.A. es una empresa integrada verticalmente especializada en la captura, 
          procesamiento y comercialización de productos pesqueros del Atlántico Sur.
        </p>
      </section>

      <section style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="content-section">
          <h2 className="section-title">Nuestra Operación</h2>
          <p className="section-subtitle">
            Control total de la cadena de valor desde la captura hasta la distribución final
          </p>

          <div className="content-grid">
            <div className="content-image">
              <img src="/barco_costado.png" alt="Flota pesquera" />
            </div>
            <div className="content-text">
              <h2>Flota Pesquera Propia</h2>
              <p>
                Contamos con una flota moderna de embarcaciones equipadas con tecnología 
                de punta que operan en el Atlántico Sur, garantizando capturas responsables 
                y trazabilidad completa desde el origen.
              </p>
              <p>
                Nuestros buques cumplen con los más altos estándares internacionales de 
                seguridad y operan bajo estrictos protocolos de pesca sostenible.
              </p>
            </div>
          </div>

          <div className="content-grid reverse">
            <div className="content-image">
              <img src="/guardado_2_.jpeg" alt="Procesamiento" />
            </div>
            <div className="content-text">
              <h2>Procesamiento de Alta Calidad</h2>
              <p>
                Nuestras instalaciones cuentan con tecnología de última generación y 
                certificaciones HACCP e ISO 9001, asegurando productos que cumplen con 
                las más exigentes normativas.
              </p>
              <p>
                Procesamos el pescado inmediatamente después de la captura, manteniendo 
                la cadena de frío ininterrumpida.
              </p>
            </div>
          </div>

          <div className="content-grid">
            <div className="content-image">
              <img src="/camion.jpeg" alt="Logística" />
            </div>
            <div className="content-text">
              <h2>Logística Especializada</h2>
              <p>
                Nuestra red de distribución garantiza la entrega oportuna en todo el 
                territorio nacional, manteniendo la cadena de frío.
              </p>
              <p>
                Trabajamos con flotas propias y socios logísticos certificados para 
                atender mercado local y exportaciones internacionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="content-section">
          <h2 className="section-title">Nuestros Productos</h2>
          <p className="section-subtitle">
            Amplia variedad de especies del Atlántico Sur procesadas con los más altos estándares
          </p>

          <div className="cards-container">
            <div className="card">
              <h3>Merluza</h3>
              <p>
                Merluza hubbsi de primera calidad, disponible fresca y congelada. 
                Filetes, HG y productos con valor agregado.
              </p>
            </div>

            <div className="card">
              <h3>Corvina</h3>
              <p>
                Corvina rubia y negra capturada en aguas del Atlántico Sur. 
                Excelente para mercados gourmet.
              </p>
            </div>

            <div className="card">
              <h3>Calamar</h3>
              <p>
                Illex argentinus, principal producto de exportación. Disponible en 
                tube, ring, tentáculo y elaborados.
              </p>
            </div>

            <div className="card">
              <h3>Productos con Valor Agregado</h3>
              <p>
                Desarrollo de productos especiales: porciones individuales, 
                empanizados, marinados según requerimientos del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-light)' }}>
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
              <h3>Certificaciones</h3>
              <p>
                Operaciones certificadas bajo estándares internacionales: 
                HACCP, ISO 9001 y MSC en proceso.
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
