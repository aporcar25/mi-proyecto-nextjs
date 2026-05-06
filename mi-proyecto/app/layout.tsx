import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antonio José - Portfolio",
  description: "Portfolio profesional y prácticas de desarrollo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased bg-[#050505]`}
    >
      <body className="min-h-screen flex flex-col text-gray-200 font-sans selection:bg-lime-500/30 selection:text-lime-200">
        <Navbar />
        <main className="flex-grow pt-20 flex flex-col">
          {children}
        </main>
        <footer className="pt-8 pb-16 px-10 md:px-16 border-t border-gray-800/50 bg-[#050505] text-gray-400 text-sm mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-center md:text-left">© {new Date().getFullYear()} Antonio José. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-lime-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-lime-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-lime-400 transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
