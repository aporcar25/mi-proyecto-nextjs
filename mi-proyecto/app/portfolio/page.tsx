import { ExternalLinkIcon } from '../components/Icons';

export default function Portfolio() {
  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-6 relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Proyectos Destacados</h1>
          <p className="text-xl text-gray-400">Una selección de mi trabajo reciente donde el diseño se encuentra con la máxima funcionalidad.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="group relative rounded-[2.5rem] overflow-hidden bg-[#111] border border-gray-800/80 cursor-pointer h-[500px]">
          <div className="absolute inset-0 bg-gray-800 relative h-full w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-700"></div>
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
  );
}
