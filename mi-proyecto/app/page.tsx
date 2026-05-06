import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[100px] -z-10 animate-pulse duration-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10 py-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
          Desarrollador Full Stack
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight mb-6">
          Hola, soy <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">Antonio José</span>.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed mb-10">
          Transformo ideas complejas en experiencias digitales fluidas, estéticas y de alto rendimiento. Especializado en el ecosistema moderno de JavaScript.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/portfolio" className="px-8 py-4 bg-white text-black text-center font-bold rounded-full hover:bg-lime-400 transition-all hover:scale-105 duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)]">
            Ver Portfolio
          </Link>
          <Link href="/tech" className="px-8 py-4 border border-gray-700 hover:border-lime-400 text-center text-white font-bold rounded-full hover:bg-lime-400/10 transition-all duration-300">
            Mis Tecnologías
          </Link>
        </div>
      </div>
    </div>
  );
}
