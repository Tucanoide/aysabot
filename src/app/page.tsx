import React from "react";
import Hero from "@/components/Hero";
import FloatingBotIcon from "@/components/FloatingBotIcon";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-aysa-surface relative">
      {/* Header */}
      <header className="bg-white border-b border-black/5 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          {/* Logo AySA Placeholder */}
          <div className="w-10 h-10 bg-aysa-blue rounded-lg flex items-center justify-center text-white font-bold text-xs p-1 leading-tight text-center">
            aysa
          </div>
          <span className="font-heading font-bold text-aysa-blue tracking-tight hidden sm:inline-block">
            Agua y Saneamientos Argentinos
          </span>
        </div>
        
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-aysa-blue hover:text-aysa-lightBlue transition-colors hidden md:block">
            Institucional
          </a>
          <a href="#" className="text-sm font-medium text-aysa-blue hover:text-aysa-lightBlue transition-colors hidden md:block">
            Servicios
          </a>
          <button className="px-5 py-2 bg-aysa-orange text-white text-sm font-bold rounded-full hover:opacity-90 transition-all shadow-md">
            Oficina Virtual
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Content Section (Simple Demo) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Pagá tu factura", icon: "💳" },
            { title: "Cortes de agua", icon: "💧" },
            { title: "Trámites online", icon: "📄" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 group cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
              <h3 className="text-xl font-bold text-aysa-blue mb-2 font-heading">{item.title}</h3>
              <p className="text-gray-500 text-sm font-sans">
                Accedé rápidamente a tus gestiones sin moverte de tu casa.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer (Minimal) */}
      <footer className="bg-aysa-blue py-12 px-6 text-center text-white/60 text-sm">
        <p>© 2026 AySA - Agua y Saneamientos Argentinos S.A.</p>
        <p className="mt-2">Demo Bot Interactiva</p>
      </footer>

      {/* Floating Bot Icon */}
      <FloatingBotIcon />
    </main>
  );
}
