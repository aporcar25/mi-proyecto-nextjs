import Link from 'next/link';
import { NextJsIcon } from '../../components/Icons';

export default function NextJsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      <Link href="/tech" className="inline-flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors mb-12 group">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Volver a Tecnologías
      </Link>
      
      <div className="bg-[#111] border border-gray-800 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] -z-10 rounded-full"></div>
        
        <div className="flex items-center gap-6 mb-10">
          <div className="w-20 h-20 flex items-center justify-center">
            <NextJsIcon className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Next.js</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Next.js es un framework de React que proporciona la estructura necesaria para construir aplicaciones web a nivel de producción. Su enfoque en el rendimiento y la experiencia de desarrollo lo convierte en mi herramienta principal para proyectos web escalables.
          </p>

          <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Características Clave</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Server-Side Rendering (SSR)</strong>
              <span className="text-gray-400 text-sm">Renderizado en el servidor para mejorar radicalmente el SEO y los tiempos de carga iniciales.</span>
            </li>
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">App Router</strong>
              <span className="text-gray-400 text-sm">El nuevo paradigma de enrutamiento basado en Server Components para un envío mínimo de JavaScript al cliente.</span>
            </li>
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Static Site Generation (SSG)</strong>
              <span className="text-gray-400 text-sm">Generación de páginas en tiempo de compilación para ofrecer el máximo rendimiento a través de CDNs.</span>
            </li>
            <li className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-colors">
              <strong className="block text-lime-400 mb-2">Optimización Integrada</strong>
              <span className="text-gray-400 text-sm">Componentes especiales para imágenes, fuentes y scripts que aseguran un Core Web Vitals perfecto.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
