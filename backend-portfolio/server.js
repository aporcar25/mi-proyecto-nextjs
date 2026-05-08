require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Resend } = require('resend');
const Contact = require('./models/Contact');

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Middlewares
app.use(cors({
  origin: '*'
}));
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Error MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Endpoint principal del formulario de contacto
app.post('/api/contact', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  // Validación
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  try {
    // Guardar en MongoDB
    const contacto = new Contact({ nombre, email, mensaje });
    await contacto.save();

    // Enviar email con Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.EMAIL_DESTINO,
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `
        <h2>Nuevo mensaje desde tu portfolio</h2>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b> ${mensaje}</p>
      `
    });

    res.status(200).json({ success: true, message: 'Mensaje enviado correctamente' });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${process.env.PORT}`);
});