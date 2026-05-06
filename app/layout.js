import { Poppins } from 'next/font/google';
import '../styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata = {
  title: 'Pescatlántica - Procesamiento y Comercialización de Productos del Mar',
  description: 'Empresa líder en captura, procesamiento y distribución de productos pesqueros del Atlántico Sur.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <header className="header">
          <div className="header-container">
            <img src="/logo.jpeg" alt="Pescatlántica" className="logo" />
          </div>
        </header>

        <nav className="nav">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>

        {children}

        <footer className="footer">
          <p>&copy; 2026 Pescatlántica S.A. Todos los derechos reservados.</p>
          <p>Mar del Plata, Buenos Aires, Argentina</p>
          <p>Pesca sostenible • Calidad certificada • Compromiso ambiental</p>
        </footer>
      </body>
    </html>
  );
}
