import Link from 'next/link';
import { ReactIcon } from '../../components/Icons';

export default function ReactPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      <Link href="/tech" className="inline-flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors mb-12 group">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Volver a Tecnologías
      </Link>
      
      <div className="bg-[#111] border border-gray-800 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#61dafb]/10 blur-[100px] -z-10 rounded-full"></div>
        
        <div className="flex items-center gap-6 mb-10">
          <div className="w-20 h-20 bg-[#61dafb]/10 border border-[#61dafb]/30 rounded-2xl flex items-center justify-center text-[#61dafb] shadow-[0_0_30px_rgba(97,218,251,0.2)]">
            <ReactIcon className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">React</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            React ha transformado la forma en que construimos interfaces de usuario. Su arquitectura basada en componentes y su flujo de datos unidireccional permiten crear aplicaciones web complejas, interactivas y altamente mantenibles.
          </p>

          <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Características Clave</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Virtual DOM</strong>
              <span className="text-gray-400 text-sm">Un algoritmo eficiente de reconciliación que minimiza las manipulaciones costosas del DOM real, maximizando el rendimiento.</span>
            </li>
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Hooks</strong>
              <span className="text-gray-400 text-sm">Funciones que permiten acceder al estado y otros ciclos de vida de React desde componentes funcionales sin necesidad de clases.</span>
            </li>
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Componentes Reutilizables</strong>
              <span className="text-gray-400 text-sm">Arquitectura modular que permite construir piezas de UI independientes, probables y reusables en toda la aplicación.</span>
            </li>
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Ecosistema Gigante</strong>
              <span className="text-gray-400 text-sm">Soportado por una inmensa comunidad con miles de librerías para manejo de estado, enrutamiento, animaciones y más.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
