import React from 'react';
import profileImage from '../assets/profile.jpg';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-8 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative group">
              <img
                src={profileImage}
                alt="Athena Lobo"
                className="w-64 md:w-80 h-80 md:h-96 rounded-2xl shadow-2xl object-cover hover:scale-105 transition-all duration-700 border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 md:mb-6 text-center md:text-left">About Me</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              USC MSCS student and Product-focused Software Engineer with 2+ years of experience building enterprise SaaS platforms.
              At CAST Software, I served dual roles as Software Development Engineer II and Scrum Master, scaling platforms for 1K+ enterprise clients.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              My unique blend of technical expertise and product strategy has driven significant impact - from 35% performance improvements
              to resolving critical product deadlocks with GenAI prototypes.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6">
              <div className="text-center p-3 md:p-4 bg-white/5 rounded-xl">
                <div className="text-xl md:text-2xl font-bold text-purple-400">2+</div>
                <div className="text-xs md:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white/5 rounded-xl">
                <div className="text-xl md:text-2xl font-bold text-pink-400">1K+</div>
                <div className="text-xs md:text-sm text-gray-400">Enterprise Clients</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white/5 rounded-xl">
                <div className="text-xl md:text-2xl font-bold text-cyan-400">35%</div>
                <div className="text-xs md:text-sm text-gray-400">Performance Boost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;