import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';

const HeroSection = ({ isLoaded }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6">
      <div className="absolute inset-0">
        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-40 md:w-72 h-40 md:h-72 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`text-center z-10 transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-thin mb-4 md:mb-6 tracking-wide">
          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            ATHENA LOBO
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 md:mb-8 font-light max-w-2xl mx-auto px-4">
          CS Student • Full-stack Developer • Published ML Researcher
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <a
            href="https://github.com/athenalobo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 transition-all duration-500 hover:scale-105 w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                View Work <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </a>

          <a
            href="/AthenaLoboResume.pdf"
            download="Athena_Lobo_Resume.pdf"
            className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Resume
            </span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 uppercase tracking-widest animate-pulse">Scroll</span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-white to-transparent rounded-full mt-2 animate-bounce"></div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-0.5 h-4 bg-gradient-to-b from-white/60 to-transparent animate-pulse delay-300"></div>
            <div className="w-0.5 h-3 bg-gradient-to-b from-white/40 to-transparent animate-pulse delay-700"></div>
            <div className="w-0.5 h-2 bg-gradient-to-b from-white/20 to-transparent animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;