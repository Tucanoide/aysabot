"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Overlay / Water Pattern Placeholder */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.aysa.com.ar/assets/img/home/fondo-agua.png')] bg-cover bg-center"></div>
      
      <div className="relative z-10 max-w-4xl px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-heading">
          El agua es vida
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-sans max-w-2xl mx-auto">
          Gestioná tus servicios de forma ágil y segura con nuestra nueva asistente virtual.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-white text-aysa-blue font-bold rounded-full hover:bg-aysa-surface transition-all duration-300 shadow-lg font-sans">
            Más información
          </button>
          <button className="px-8 py-4 bg-aysa-orange text-white font-bold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg font-sans">
            Oficina Virtual
          </button>
        </div>
      </div>

      {/* Wave shape (SVG) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C51.15,103.35,108,103.11,158.33,88.75,217.42,71.86,263.39,67.23,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
