import '../styles/globals.css';
import LanguageSelector from './components/LanguageSelector';

export const metadata = {
  title: 'Pescatlantica Group S.A.S - Merluza del Atlántico Sur',
  description: 'Procesamiento y comercialización de merluza con planta productiva en Caleta Olivia, Santa Cruz, Patagonia Argentina.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <div className="header-container">
            <a href="/" className="brand" aria-label="Ir al inicio de Pescatlantica">
              <img src="/imagenes/logo.jpeg" alt="Pescatlantica" className="logo" />
              <span className="brand-copy">
                <span className="brand-name">PESCATLANTICA</span>
                <span className="brand-tagline">Productos del Mar</span>
              </span>
            </a>

            <nav className="nav" aria-label="Navegación principal">
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/nosotros">Nosotros</a></li>
                <li><a href="/servicios">Servicios</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>
            </nav>

            <LanguageSelector />
          </div>
        </header>

        {children}

        <footer className="footer">
          <p>&copy; 2026 Pescatlantica Group S.A.S. Todos los derechos reservados.</p>
          <p>Planta productiva en Caleta Olivia, Santa Cruz, Patagonia Argentina</p>
          <p>Trazabilidad • Cadena de frío • Compromiso operativo</p>
        </footer>
      </body>
    </html>
  );
}
