"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0B0F19]/80 backdrop-blur-md border-b border-gray-800 py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="text-2xl font-bold tracking-tight text-white"
        >
          CKS<span className="text-[#10B981]">Sistemas</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#inicio"
            className="text-sm font-medium text-gray-300 hover:text-[#10B981] transition-colors"
          >
            Início
          </a>
          <a
            href="#sobre"
            className="text-sm font-medium text-gray-300 hover:text-[#10B981] transition-colors"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="text-sm font-medium text-gray-300 hover:text-[#10B981] transition-colors"
          >
            Serviços
          </a>
          <a
            href="#diferenciais"
            className="text-sm font-medium text-gray-300 hover:text-[#10B981] transition-colors"
          >
            Diferenciais
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#10B981] hover:bg-[#0D9488] rounded-lg transition-all duration-200 shadow-lg shadow-[#10B981]/10 transform hover:-translate-y-0.5"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0B0F19] border-b border-gray-800 px-4 pt-2 pb-4 space-y-3">
          <a
            href="#inicio"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#10B981]"
          >
            Início
          </a>
          <a
            href="#sobre"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#10B981]"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#10B981]"
          >
            Serviços
          </a>
          <a
            href="#diferenciais"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#10B981]"
          >
            Diferenciais
          </a>
          <a
            href="#contato"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center px-4 py-2.5 text-base font-semibold text-white bg-[#10B981] rounded-lg"
          >
            Falar com Especialista
          </a>
        </div>
      )}
    </header>
  );
}
