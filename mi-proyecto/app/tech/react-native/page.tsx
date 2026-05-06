import Link from 'next/link';

export default function ReactNativePage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      <Link href="/tech" className="inline-flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors mb-12 group">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Volver a Tecnologías
      </Link>
      
      <div className="bg-[#111] border border-gray-800 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] -z-10 rounded-full"></div>
        
        <div className="flex items-center gap-6 mb-10">
          <div className="w-20 h-20 bg-purple-500/10 border border-purple-500/30 rounded-2xl flex items-center justify-center text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">React Native</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            React Native es un marco de trabajo que permite crear aplicaciones móviles nativas para iOS y Android utilizando React y JavaScript. Combina las mejores partes del desarrollo nativo con el ecosistema de React.
          </p>

          <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Características Clave</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Multiplataforma</strong>
              <span className="text-gray-400 text-sm">Una única base de código que se compila para iOS y Android, reduciendo drásticamente el tiempo y coste de desarrollo.</span>
            </li>
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Rendimiento Nativo</strong>
              <span className="text-gray-400 text-sm">No utiliza WebViews. Renderiza interfaces utilizando componentes nativos de la plataforma, logrando fluidez a 60fps.</span>
            </li>
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Fast Refresh</strong>
              <span className="text-gray-400 text-sm">Visualiza los cambios en el código instantáneamente en el simulador o dispositivo físico sin perder el estado de la app.</span>
            </li>
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Acceso a Hardware</strong>
              <span className="text-gray-400 text-sm">Integración completa con las APIs nativas para acceder a cámara, GPS, notificaciones push, Bluetooth y más.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
