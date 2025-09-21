import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-thin mb-8">Let's Connect</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm always interested in discussing new opportunities, innovative projects, and connecting with fellow engineers.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:amlobo@usc.edu"
            className="group flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-500"
          >
            <Mail className="w-4 h-4" />
            <span>amlobo@usc.edu</span>
          </a>
          <a
            href="tel:+12135619225"
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-500"
          >
            <Phone className="w-4 h-4" />
            <span>Phone</span>
          </a>
          <a
            href="https://linkedin.com/in/athena-lobo"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-500"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;