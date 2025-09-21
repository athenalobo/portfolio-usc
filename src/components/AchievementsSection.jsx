import React, { useState } from 'react';
import { Users, Award, Star, Code } from 'lucide-react';

const achievements = {
  technical: [
    {
      title: "AWS Solutions Architect Associate",
      organization: "Amazon Web Services",
      year: "2024"
    },
    {
      title: "Google Cloud Professional",
      organization: "Google Cloud",
      year: "2023"
    },
    {
      title: "Smart India Hackathon Winner",
      organization: "Government of India",
      year: "2023"
    }
  ],
  leadership: [
    {
      title: "Deputy Director- Technology E-board ",
      organization: "Association of Indian Students USC",
      year: "2025",
      detail: "Selected from 200+ applicants"
    },
    {
      title: "Microsoft Learn Student Ambassador",
      organization: "Microsoft",
      year: "2021-2022",
      detail: "Alpha & Beta levels"
    },
    {
      title: "Google Developers Group Core Member",
      organization: "Google",
      year: "2022-2023",
      detail: "Impacted 500+ students"
    }
  ],
  academic: [
    {
      title: "First Class with Distinction",
      organization: "Ramaiah Institute of Technology",
      year: "2023",
      detail: "Computer Science & Engineering"
    }
  ]
};

const AchievementsSection = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const categories = {
    technical: { 
      name: 'Technical', 
      icon: <Code className="w-4 h-4" />
    },
    leadership: { 
      name: 'Leadership', 
      icon: <Users className="w-4 h-4" />
    },
    academic: { 
      name: 'Academic', 
      icon: <Star className="w-4 h-4" />
    }
  };

  return (
    <section className="relative py-16 md:py-20 px-4 md:px-6">
      {/* Background gradients matching hero */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-thin mb-4 tracking-wide">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              ACHIEVEMENTS
            </span>
          </h2>
          <p className="text-gray-400 font-light">Recognition & Certifications</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-500 font-light ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.icon}
              <span className="text-sm md:text-base">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {achievements[activeCategory].map((item, index) => (
            <div 
              key={`${activeCategory}-${index}`}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500"
            >
              <div className="text-center">
                <h3 className="text-white font-light text-lg mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 font-light">
                  {item.organization}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-light">
                    {item.year}
                  </span>
                  {item.detail && (
                    <span className="text-xs text-purple-400 font-light">
                      {item.detail}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats
        <div className="grid grid-cols-4 gap-4 md:gap-8 mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-thin text-white mb-1">3+</div>
            <div className="text-xs text-gray-400 font-light">Leadership</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-thin text-white mb-1">3</div>
            <div className="text-xs text-gray-400 font-light">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-thin text-white mb-1">1st</div>
            <div className="text-xs text-gray-400 font-light">Hackathon</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-thin text-white mb-1">500+</div>
            <div className="text-xs text-gray-400 font-light">Impact</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AchievementsSection;