import Link from 'next/link';
import { NodeJsIcon } from '../../components/Icons';

export default function NodeJsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      <Link href="/tech" className="inline-flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors mb-12 group">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Volver a Tecnologías
      </Link>
      
      <div className="bg-[#111] border border-gray-800 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#43853d]/10 blur-[100px] -z-10 rounded-full"></div>
        
        <div className="flex items-center gap-6 mb-10">
          <div className="w-20 h-20 bg-[#43853d]/10 border border-[#43853d]/30 rounded-2xl flex items-center justify-center text-[#43853d] shadow-[0_0_30px_rgba(67,133,61,0.2)]">
            <NodeJsIcon className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Node.js</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Node.js es un entorno de ejecución para JavaScript construido con el motor V8 de Chrome. Está diseñado para crear aplicaciones de red escalables y es el pilar de mis arquitecturas Backend, APIs RESTful y microservicios.
          </p>

          <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Características Clave</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Asíncrono y Dirigido por Eventos</strong>
              <span className="text-gray-400 text-sm">Todas las APIs de Node.js son asíncronas (no bloqueantes). El servidor nunca espera a que una API devuelva datos.</span>
            </li>
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Muy Rápido</strong>
              <span className="text-gray-400 text-sm">Al estar construido sobre el motor V8 de Google, la ejecución de código JavaScript en Node es extremadamente veloz.</span>
            </li>
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Full-Stack JavaScript</strong>
              <span className="text-gray-400 text-sm">Permite a los desarrolladores escribir tanto el frontend como el backend en un solo lenguaje, unificando el ecosistema.</span>
            </li>
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">NPM (Node Package Manager)</strong>
              <span className="text-gray-400 text-sm">Acceso al registro de software más grande del mundo, con cientos de miles de paquetes listos para integrar.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
