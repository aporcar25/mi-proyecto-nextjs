# Antonio José — Portfolio Full-Stack

Portfolio personal desarrollado con Next.js. Incluye un formulario de contacto completamente funcional conectado a una API backend real, base de datos MongoDB y notificaciones por email mediante Resend.

🌐 **Web:** [proyecto-nextjs-antonio.netlify.app](https://proyecto-nextjs-antonio.netlify.app/)

---

## 🛠 Tecnologías utilizadas

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=mail.ru&logoColor=white)

### Despliegue
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 📁 Estructura del proyecto

```
frontend/          → Aplicación Next.js (desplegada en Netlify)
├── app/
│   ├── page.js        → Página principal / Hero
│   ├── portfolio/     → Sección de proyectos
│   ├── tech/          → Sección de tecnologías
│   └── contact/       → Formulario de contacto
└── components/        → Componentes reutilizables

backend/           → API Node.js + Express (desplegada en Render)
├── server.js          → Punto de entrada del servidor
├── routes/            → Rutas de la API
├── models/            → Esquemas de Mongoose
└── .env               → Variables de entorno (no se sube)
```

---

## ⚙️ Funcionalidades

- Diseño responsive — funciona en móvil y escritorio
- Sección portfolio con proyectos reales
- Showcase de tecnologías
- Formulario de contacto con validación en tiempo real
- Notificaciones por email mediante Resend al recibir un mensaje
- Mensajes guardados en MongoDB Atlas
- Manejo de errores amigable para el usuario

---

## 🚀 Instalación — Frontend

```bash
git clone https://github.com/aporcar25/mi-proyecto-nextjs.git
cd mi-proyecto-nextjs
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🚀 Instalación — Backend

```bash
cd backend
npm install
```

Crea un archivo `.env` con las siguientes variables:

```env
MONGODB_URI=tu_cadena_de_conexion_mongodb_atlas
RESEND_API_KEY=tu_clave_api_resend
PORT=5000
```

```bash
npm start
```

---

## 🌍 Despliegue

| Capa | Plataforma | URL |
|------|------------|-----|
| Frontend | Netlify | [proyecto-nextjs-antonio.netlify.app](https://proyecto-nextjs-antonio.netlify.app/) |
| Backend API | Render | [backend-portfolio-elem.onrender.com](https://backend-portfolio-elem.onrender.com) |
| Base de datos | MongoDB Atlas | Cloud |

---

## 📬 Contacto

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:aporcar2505@g.educaand.es)

---

## 📌 Estado

✅ Completado — Desplegado y completamente funcional.
