"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path ? "text-lime-400" : "text-gray-400 hover:text-lime-400";

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
          ANTONIO<span className="text-lime-400">.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className={`transition-colors ${isActive('/')}`}>Inicio</Link>
          <Link href="/portfolio" className={`transition-colors ${isActive('/portfolio')}`}>Portfolio</Link>
          <Link href="/tech" className={`transition-colors ${isActive('/tech')}`}>Tecnologías</Link>
          <Link href="/contact" className={`transition-colors ${isActive('/contact')}`}>Contacto</Link>
        </div>
        <Link href="/contact" className="px-5 py-2.5 bg-lime-400 hover:bg-lime-500 text-black font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] text-sm">
          Hablemos
        </Link>
      </div>
    </nav>
  );
}
