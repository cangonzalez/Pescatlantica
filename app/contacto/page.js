'use client';

import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
    website: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitting, setSubmitting] = useState(false);

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

    if (submitError) {
      setSubmitError('');
    }

    if (submitted) {
      setSubmitted(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'No se pudo enviar la consulta.');
      }

      setSubmitted(true);
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
        website: ''
      });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <section className="hero">
        <h1>Contacto</h1>
        <p>
          Completá el formulario para consultas comerciales, disponibilidad de merluza
          y solicitudes de cotización.
        </p>
      </section>

      <section>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Información de Contacto</h3>

            <div className="info-item">
              <strong>Atención comercial</strong>
              Recibimos consultas por productos, volúmenes, presentaciones y 
              condiciones comerciales a través del formulario.
            </div>

            <div className="info-item">
              <strong>Planta productiva</strong>
              Caleta Olivia, Santa Cruz, Patagonia Argentina.
            </div>

            <div className="info-item">
              <strong>Producto actual</strong>
              Merluza fresca y congelada según disponibilidad y requerimiento comercial.
            </div>
          </div>

          <div className="form-container">
            <h3 style={{ marginBottom: '24px', color: 'var(--primary-color)' }}>Formulario de Consulta</h3>

            {submitted && (
              <div className="success-message">
                ✓ Su consulta ha sido enviada. Nos pondremos en contacto a la brevedad.
              </div>
            )}

            {submitError && (
              <div className="error-box">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-honeypot" aria-hidden="true">
                <label htmlFor="website">Sitio web</label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

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
                  placeholder="+54 9 ..."
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

              <button className="btn" type="submit" disabled={submitting}>
                {submitting ? 'Enviando...' : 'Enviar Consulta'}
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
                Evaluamos cada operación según destino, volumen, documentación y 
                condiciones comerciales requeridas.
              </p>
            </div>

            <div className="card">
              <h3>¿Cómo trabajan la calidad?</h3>
              <p>
                Trabajamos con criterios de inocuidad, trazabilidad y control del 
                producto durante el proceso.
              </p>
            </div>

            <div className="card">
              <h3>¿Qué producto comercializan?</h3>
              <p>
                Actualmente comercializamos merluza en presentaciones frescas y 
                congeladas, según disponibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
