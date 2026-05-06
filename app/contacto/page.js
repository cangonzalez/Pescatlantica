'use client';

import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre || formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Ingrese un email válido';
    }

    if (!formData.asunto || formData.asunto.trim().length < 5) {
      newErrors.asunto = 'El asunto debe tener al menos 5 caracteres';
    }

    if (!formData.mensaje || formData.mensaje.trim().length < 20) {
      newErrors.mensaje = 'El mensaje debe tener al menos 20 caracteres';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main>
      <section className="hero">
        <h1>Contacto</h1>
        <p>
          Estamos a su disposición para responder consultas comerciales, 
          solicitudes de cotización y cualquier información sobre nuestros servicios.
        </p>
      </section>

      <section>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Información de Contacto</h3>

            <div className="info-item">
              <strong>Atención comercial</strong>
              Consultas sobre productos, cotizaciones y disponibilidad.<br />
              Respondemos solicitudes de clientes nacionales e internacionales.
            </div>

            <div className="info-item">
              <strong>📞 Teléfono</strong>
              +54 223 XXX-XXXX<br />
              Lunes a Viernes: 8:00 - 18:00 hs
            </div>

            <div className="info-item">
              <strong>✉️ Email</strong>
              ventas@pescatlantica.com.ar<br />
              info@pescatlantica.com.ar
            </div>

            <div className="info-item">
              <strong>💼 Departamentos</strong>
              <strong>Ventas:</strong> ventas@pescatlantica.com.ar<br />
              <strong>Exportaciones:</strong> export@pescatlantica.com.ar<br />
              <strong>Calidad:</strong> calidad@pescatlantica.com.ar<br />
              <strong>Admin:</strong> admin@pescatlantica.com.ar
            </div>

            <div className="info-item">
              <strong>🕒 Horario</strong>
              Lunes a Viernes: 8:00 - 18:00 hs<br />
              Sábados, Domingos y feriados: Cerrado
            </div>
          </div>

          <div className="form-container">
            <h3 style={{ marginBottom: '24px', color: 'var(--primary-color)' }}>Formulario de Consulta</h3>

            {submitted && (
              <div className="success-message">
                ✓ Su consulta ha sido enviada. Nos pondremos en contacto a la brevedad.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre y Apellido *</label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  placeholder="Ej: Juan Pérez"
                  value={formData.nombre}
                  onChange={handleChange}
                />
                {errors.nombre && (
                  <div className="error-message">{errors.nombre}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="empresa">Empresa / Organización</label>
                <input
                  id="empresa"
                  type="text"
                  name="empresa"
                  placeholder="Ej: Distribuidora del Mar S.A."
                  value={formData.empresa}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="contacto@empresa.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  id="telefono"
                  type="tel"
                  name="telefono"
                  placeholder="+54 11 XXXX-XXXX"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">Asunto *</label>
                <input
                  id="asunto"
                  type="text"
                  name="asunto"
                  placeholder="Ej: Consulta por cotización de merluza"
                  value={formData.asunto}
                  onChange={handleChange}
                />
                {errors.asunto && (
                  <div className="error-message">{errors.asunto}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Describa su consulta (productos, volúmenes, frecuencia, etc.)"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="6"
                ></textarea>
                {errors.mensaje && (
                  <div className="error-message">{errors.mensaje}</div>
                )}
              </div>

              <button className="btn" type="submit">
                Enviar Consulta
              </button>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginTop: '16px' }}>
                * Campos obligatorios
              </p>
            </form>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="content-section">
          <h2 className="section-title">Preguntas Frecuentes</h2>

          <div className="cards-container">
            <div className="card">
              <h3>¿Cuál es el pedido mínimo?</h3>
              <p>
                Los volúmenes mínimos varían según producto y presentación. 
                Nuestro equipo comercial le informará las condiciones.
              </p>
            </div>

            <div className="card">
              <h3>¿Hacen exportaciones?</h3>
              <p>
                Sí, contamos con habilitaciones para exportar a múltiples países. 
                Consulte con comercio exterior.
              </p>
            </div>

            <div className="card">
              <h3>¿Tienen certificaciones?</h3>
              <p>
                Sí: HACCP, ISO 9001:2015, habilitación SENASA para exportación 
                y cumplimiento de estándares sanitarios.
              </p>
            </div>

            <div className="card">
              <h3>¿Ofrecen productos personalizados?</h3>
              <p>
                Sí, trabajamos con clientes industriales en desarrollo de 
                productos a medida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
