import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I've had the pleasure of working with Athena for almost the entirety of her time at CAST. From her arrival as an intern where she displayed motivation to grow, learn about the products and code bases. Exiting her internship to go on as a junior developer and shortly thereafter also taking on the role of scrum master for the Cloud team. Athena proved that her positive energy, motivation and organization skills would efficiently facilitate the team's rapid progress. As her mentor, I was glad that I could watch her grow not only as a scrum master but also as a developer over time. She has immense potential, and talent for software design that will only grow with time and dedication that she has already proved to have more than enough of. She is an excellent professional I have no trouble recommending.",
    author: "Matteo Stura",
    title: "Technical Lead",
    company: "CAST Software",
    relationship: "Senior to Athena",
    initials: "MS",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote: "I've had the pleasure of working with Athena for the past two years on the CAST Imaging on Cloud product, where she joined as a Junior Software Engineer while I was Product Manager. Athena is a dedicated and proactive team member—always willing to go the extra mile. She brings a positive mindset, shows a strong willingness to learn, and consistently seeks ways to improve. Over time, she naturally took the lead in organizing and distributing the team's work, demonstrating strong ownership and leadership potential. Her ability to listen, adapt, and contribute with fresh, innovative ideas makes her a young professional with great potential. A real asset to any team.",
    author: "Damien Charlemagne",
    title: "Director of Product Management",
    company: "CAST Software",
    relationship: "Senior to Athena",
    initials: "DC",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    quote: "Athena is a driving force, doing her utmost to keep projects moving forward. She's a self-starter, researching new technologies to find solutions to problems. She's also a good team player and doesn't hesitate to help her colleagues in difficulty. You can count on her.",
    author: "Aurore Eteve",
    title: "Ingénieur en développement logiciel",
    company: "CAST Software",
    relationship: "Senior to Athena",
    initials: "AE",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    quote: "Over the years, working in the same team has given me the privilege to know Athena as an exceptionally adaptable individual who can seamlessly take on multiple roles. Beyond her contributions as a skilled software engineer, she has demonstrated her prowess as a scrum master, successfully managing multiple projects while ensuring they meet product expectations. Throughout, she has made the journey smooth for the entire team. Athena's exceptional communication skills and keen eye for detail allow her to act as a vital bridge between managers and the technical team. She ensures clear and effective communication of product requirements and expectations, leveraging her ample technical acumen to shape any piece of code into a fully realized product.",
    author: "Suhan Bangera",
    title: "Software Engineer & Teammate",
    company: "CAST Software",
    relationship: "Worked with Athena on the same team",
    initials: "SB",
    gradient: "from-orange-500 to-red-500"
  }
];

const RecommendationsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 3000); // Change every 3 seconds
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 text-white">
            Professional Recommendations
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What colleagues and mentors say about working with me
          </p>
        </div>

        {/* Main testimonial card */}
        <div
          className="relative mb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl relative overflow-hidden min-h-[400px] md:h-[450px]">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-3xl" />

            {/* Quote icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="w-12 h-12 text-purple-400" />
            </div>

            {/* Mobile: Flexible layout */}
            <div className="md:hidden relative z-10 flex flex-col h-full">
              {/* Quote content */}
              <div className="flex-1 mb-6 relative">
                <div
                  key={currentTestimonial}
                  className="animate-in fade-in slide-in-from-right-4 duration-700"
                >
                  <p className="text-gray-200 leading-relaxed text-base italic font-light pt-4">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </div>
              </div>

              {/* Author info */}
              <div className="flex flex-col gap-4 mt-auto">
                <div
                  key={`author-${currentTestimonial}`}
                  className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-700"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonials[currentTestimonial].gradient} rounded-full flex items-center justify-center shadow-lg transition-all duration-500 flex-shrink-0`}>
                    <span className="text-white font-bold text-sm">
                      {testimonials[currentTestimonial].initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-base mb-1">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-purple-400 font-medium text-sm mb-1 leading-tight">
                      {testimonials[currentTestimonial].title}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>

                {/* Navigation buttons */}
                <div className="flex items-center gap-2 justify-center">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <ChevronLeft className="w-4 h-4 text-white group-hover:text-purple-300 transition-colors" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <ChevronRight className="w-4 h-4 text-white group-hover:text-purple-300 transition-colors" />
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop: Fixed layout */}
            <div className="hidden md:block">
              {/* Content - Quote section */}
              <div className="relative z-10 pt-4 pb-32">
                <div
                  key={currentTestimonial}
                  className="animate-in fade-in slide-in-from-right-4 duration-700"
                >
                  <p className="text-gray-200 leading-relaxed text-lg lg:text-xl italic font-light">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </div>
              </div>

              {/* Author info - Fixed position at bottom */}
              <div className="absolute bottom-8 lg:bottom-12 left-8 lg:left-12 right-8 lg:right-12 z-20">
                <div className="flex flex-row items-end justify-between gap-4">
                  <div
                    key={`author-${currentTestimonial}`}
                    className="flex items-center gap-4 animate-in fade-in slide-in-from-left-4 duration-700"
                  >
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${testimonials[currentTestimonial].gradient} rounded-full flex items-center justify-center shadow-lg transition-all duration-500 flex-shrink-0`}>
                      <span className="text-white font-bold text-lg lg:text-xl">
                        {testimonials[currentTestimonial].initials}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-lg lg:text-xl mb-1">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-purple-400 font-medium text-base mb-1 leading-tight">
                        {testimonials[currentTestimonial].title}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>

                  {/* Navigation buttons - Fixed position */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                      onClick={prevTestimonial}
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                      <ChevronLeft className="w-5 h-5 text-white group-hover:text-purple-300 transition-colors" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                      <ChevronRight className="w-5 h-5 text-white group-hover:text-purple-300 transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentTestimonial 
                  ? 'w-8 h-3 bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50 hover:scale-125'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;