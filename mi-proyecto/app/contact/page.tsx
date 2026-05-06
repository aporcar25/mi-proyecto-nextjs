export default function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
        {/* Glow behind contact */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 blur-[100px] -z-10 rounded-full"></div>
        
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Hablemos</h1>
        <p className="text-xl text-gray-400 mb-10 font-light">
          ¿Tienes un proyecto en mente? Rellena el formulario y me pondré en contacto contigo lo antes posible.
        </p>

        <form className="flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="name" className="text-sm font-medium text-gray-400">Nombre</label>
              <input type="text" id="name" placeholder="Tu nombre" className="bg-[#1a1a1a] border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-400 transition-colors mb-4" />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
              <input type="email" id="email" placeholder="tu@email.com" className="bg-[#1a1a1a] border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-400 transition-colors mb-4" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-400">Mensaje</label>
            <textarea id="message" rows={5} placeholder="Cuéntame sobre tu proyecto..." className="bg-[#1a1a1a] border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-400 transition-colors resize-none"></textarea>
          </div>
          <button type="button" className="mt-14 px-10 py-5 rounded-full bg-lime-400 text-black font-bold text-lg hover:bg-lime-500 transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] self-start">
            Enviar Mensaje
          </button>
        </form>

        <div className="mt-16 pt-10 border-t border-gray-800 flex flex-col md:flex-row gap-6 justify-between items-center">
          <p className="text-gray-400">O encuéntrame en mis redes:</p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-gray-800 flex items-center justify-center hover:border-lime-400 hover:text-lime-400 transition-colors text-white">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-gray-800 flex items-center justify-center hover:border-lime-400 hover:text-lime-400 transition-colors text-white">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-gray-800 flex items-center justify-center hover:border-lime-400 hover:text-lime-400 transition-colors text-white">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
