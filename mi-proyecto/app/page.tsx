import React from 'react';

const CodeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const SmartphoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
);

const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-lime-500/30 selection:text-lime-200 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-white">
            DEV<span className="text-lime-400">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#home" className="hover:text-lime-400 transition-colors">Inicio</a>
            <a href="#services" className="hover:text-lime-400 transition-colors">Servicios</a>
            <a href="#portfolio" className="hover:text-lime-400 transition-colors">Portafolio</a>
            <a href="#contact" className="hover:text-lime-400 transition-colors">Contacto</a>
          </div>
          <a href="#contact" className="px-5 py-2.5 bg-lime-400 hover:bg-lime-500 text-black font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] text-sm">
            Hablemos
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[100px] -z-10 animate-pulse duration-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
              Disponible para proyectos
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight">
              Hola, soy <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">Antonio José</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-xl font-light leading-relaxed">
              Especialista en <strong className="text-white font-medium">Vibe Coding</strong>. Transformo ideas complejas en experiencias digitales fluidas, estéticas y de alto rendimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
              <a href="#portfolio" className="px-8 py-4 bg-white text-black text-center font-bold rounded-full hover:bg-lime-400 transition-all hover:scale-105 duration-300 shadow-lg">
                Ver mi trabajo
              </a>
              <a href="#contact" className="px-8 py-4 border border-gray-700 hover:border-lime-400 text-center text-white font-bold rounded-full hover:bg-lime-400/10 transition-all duration-300">
                Contactar
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative w-full max-w-lg ml-auto">
            <div className="aspect-square relative w-full border border-gray-800/50 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 hover:shadow-[0_0_50px_rgba(163,230,53,0.15)] flex items-center justify-center">
                {/* Simulated Terminal for "Vibe Coding" aesthetic */}
                <div className="w-full h-full p-8 flex flex-col font-mono text-sm">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-lime-400 mb-2">{">"} Iniciando entorno Vibe Coding...</div>
                  <div className="text-gray-400 mb-2">Cargando creatividad: <span className="text-lime-300">100%</span></div>
                  <div className="text-gray-400 mb-2">Optimizando estética: <span className="text-lime-300">100%</span></div>
                  <div className="text-gray-400 mb-6">Compilando experiencias maravillosas...</div>
                  <div className="mt-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-white">=</span> {'{'}
                    <br/>&nbsp;&nbsp;passion: <span className="text-lime-300">"Frontend"</span>,
                    <br/>&nbsp;&nbsp;style: <span className="text-lime-300">"Vibe Coding"</span>,
                    <br/>&nbsp;&nbsp;status: <span className="text-lime-300">"Ready"</span>
                    <br/>{'}'};
                  </div>
                  <div className="text-white mt-auto flex items-center gap-2">
                    <span>~/project</span> <span className="w-2 h-4 bg-lime-400 animate-pulse"></span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-[#0c0c0c] border-y border-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6">Lo que hago</h2>
            <p className="text-xl text-gray-400 max-w-2xl">Soluciones integrales para llevar tu producto al siguiente nivel, con código limpio y una estética inigualable.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-10 rounded-[2rem] bg-[#111] border border-gray-800/80 hover:border-lime-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(163,230,53,0.07)]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500/20 to-lime-500/5 flex items-center justify-center text-lime-400 mb-8 group-hover:scale-110 transition-transform duration-300 border border-lime-500/20">
                <CodeIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Desarrollo Web</h3>
              <p className="text-gray-400 leading-relaxed">
                Creación de Landing Pages, E-commerce y Web Apps usando las últimas tecnologías como Next.js, React y Tailwind CSS. Rápidas, accesibles y hermosas.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group p-10 rounded-[2rem] bg-[#111] border border-gray-800/80 hover:border-lime-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(163,230,53,0.07)]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500/20 to-lime-500/5 flex items-center justify-center text-lime-400 mb-8 group-hover:scale-110 transition-transform duration-300 border border-lime-500/20">
                <SmartphoneIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">App Móvil</h3>
              <p className="text-gray-400 leading-relaxed">
                Desarrollo de aplicaciones nativas y multiplataforma con React Native. Experiencias fluidas que tus usuarios amarán llevar en su bolsillo en iOS y Android.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group p-10 rounded-[2rem] bg-[#111] border border-gray-800/80 hover:border-lime-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(163,230,53,0.07)]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500/20 to-lime-500/5 flex items-center justify-center text-lime-400 mb-8 group-hover:scale-110 transition-transform duration-300 border border-lime-500/20">
                <DatabaseIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Backend & APIs</h3>
              <p className="text-gray-400 leading-relaxed">
                Arquitecturas robustas, escalables y seguras. Bases de datos optimizadas para manejar cualquier volumen de tráfico y lógica de negocio compleja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 relative">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6">Proyectos Destacados</h2>
              <p className="text-xl text-gray-400">Una selección de mi trabajo reciente donde el diseño se encuentra con la máxima funcionalidad.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 font-bold transition-colors group">
              Ver todos los proyectos <ExternalLinkIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative rounded-[2.5rem] overflow-hidden bg-[#111] border border-gray-800/80 cursor-pointer h-[500px]">
              <div className="absolute inset-0 bg-gray-800 relative h-full w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-700"></div>
                {/* Abstract shape representing project image */}
                <div className="absolute inset-6 rounded-3xl border border-gray-700/50 bg-black/40 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-gradient-to-tr from-lime-500/20 to-transparent"></div>
                   <div className="absolute w-3/4 h-3/4 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-lime-400/20 text-lime-300 border border-lime-400/30">Next.js</span>
                  <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-white/10 text-white border border-white/10">Tailwind</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">Plataforma SaaS FinTech</h3>
                <p className="text-gray-300 text-base line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  Dashboard interactivo para gestión financiera con visualización de datos en tiempo real y modo oscuro optimizado.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative rounded-[2.5rem] overflow-hidden bg-[#111] border border-gray-800/80 cursor-pointer h-[500px]">
              <div className="absolute inset-0 bg-gray-800 relative h-full w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-gray-900 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-6 rounded-3xl border border-gray-700/50 bg-black/40 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-gradient-to-bl from-indigo-500/20 to-transparent"></div>
                   <div className="absolute w-[40%] h-[80%] bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-md"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-lime-400/20 text-lime-300 border border-lime-400/30">React Native</span>
                  <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-white/10 text-white border border-white/10">Node.js</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">App de Fitness Social</h3>
                <p className="text-gray-300 text-base line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  Red social para atletas con seguimiento de rutinas, gamificación y sincronización con wearables.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight">¿Listo para crear<br/>algo increíble?</h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
              Estoy disponible para proyectos freelance y oportunidades a tiempo completo. Hablemos sobre cómo puedo aportar valor a tu equipo.
            </p>
            <a href="mailto:hello@example.com" className="inline-flex items-center justify-center px-12 py-6 bg-lime-400 hover:bg-lime-500 text-black text-xl font-bold rounded-full transition-all hover:scale-105 duration-300 shadow-[0_0_30px_rgba(163,230,53,0.3)]">
              Contactar por Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800/50 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black tracking-tighter text-white">
            DEV<span className="text-lime-400">.</span>
          </div>
          <p className="text-gray-500">© {new Date().getFullYear()} Antonio José. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-gray-400 font-medium">
            <a href="#" className="hover:text-lime-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-lime-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-lime-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
