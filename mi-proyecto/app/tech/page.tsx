import { NextJsIcon, ReactIcon, NodeJsIcon } from '../components/Icons';

export default function Tech() {
  return (
    <div className="w-full flex flex-col items-center py-20 px-6">
      
      {/* Header */}
      <header className="text-center mb-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 tracking-tight">
          Prácticas de Desarrollo
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          Explorando y dominando el ecosistema moderno de JavaScript. Desde interfaces ultra-rápidas hasta aplicaciones móviles nativas y APIs escalables.
        </p>
      </header>

      {/* Cards Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
        
        {/* Next.js Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-r from-white/60 to-gray-400/60 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
          <div className="relative h-full rounded-[1.4rem] bg-[#0a0a0a] border border-gray-800 p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300">
              <NextJsIcon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Next.js</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creación de Landing Pages, E-commerce y Web Apps ultra rápidas con renderizado en el servidor (SSR) y generación estática (SSG). Perfecto para un SEO excelente.
            </p>
          </div>
        </div>

        {/* React Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-r from-[#61dafb]/60 to-[#61dafb]/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
          <div className="relative h-full rounded-[1.4rem] bg-[#0a0a0a] border border-gray-800 p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#61dafb]/10 border border-[#61dafb]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ReactIcon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">React</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Construcción de interfaces de usuario interactivas, dinámicas y modulares. Desarrollo de SPAs con un flujo de datos eficiente.
            </p>
          </div>
        </div>

        {/* React Native Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-r from-lime-500/60 to-emerald-500/60 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
          <div className="relative h-full rounded-[1.4rem] bg-[#0a0a0a] border border-gray-800 p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-lime-500/10 border border-lime-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">React Native</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android compartiendo base de código. Experiencias fluidas que tus usuarios amarán.
            </p>
          </div>
        </div>

        {/* Node.js Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-r from-[#43853d]/60 to-[#43853d]/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
          <div className="relative h-full rounded-[1.4rem] bg-[#0a0a0a] border border-gray-800 p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#43853d]/10 border border-[#43853d]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <NodeJsIcon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Node.js</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Arquitecturas robustas, escalables y seguras en el servidor. Desarrollo de APIs y bases de datos optimizadas para manejar grandes volúmenes de tráfico.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
