import nodemailer from 'nodemailer';

const contactRecipient = process.env.CONTACT_TO_EMAIL || 'candelariagonzalez03@gmail.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, telefono, asunto, mensaje } = body;

    if (!nombre || !email || !asunto || !mensaje) {
      return Response.json(
        { error: 'Faltan campos obligatorios.' },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return Response.json(
        { error: 'El envío de emails todavía no está configurado en el servidor.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
      to: contactRecipient,
      replyTo: email,
      subject: `Consulta web Pescatlántica: ${asunto}`,
      text: [
        `Nombre: ${nombre}`,
        `Empresa: ${empresa || '-'}`,
        `Email: ${email}`,
        `Teléfono: ${telefono || '-'}`,
        `Asunto: ${asunto}`,
        '',
        'Mensaje:',
        mensaje,
      ].join('\n'),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Error enviando consulta:', error);
    return Response.json(
      { error: 'No se pudo enviar la consulta.' },
      { status: 500 }
    );
  }
}
