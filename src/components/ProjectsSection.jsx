import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import tinyllmImg from "../assets/tinyllm.jpg";
import scrumImg from "../assets/scrum.jpg";
import dashboardImg from "../assets/dashboard.jpg";
import bloodImg from "../assets/blood.jpg";
import floodImg from "../assets/flood.jpg";
import educationImg from "../assets/code.jpg";

const projects = [
  {
    title: "TinyLLM: Decoder LM from Scratch",
    description: "50M parameter decoder-only language model with custom BPE tokenizer. Benchmarked multiple attention mechanisms achieving 23.6 perplexity on Shakespeare dataset.",
    tech: ["PyTorch", "Transformers", "NVIDIA A40", "Attention Mechanisms"],
    link: "https://github.com/athenalobo/TinyLLM",
    deployedLink: null,
    imageUrl: tinyllmImg,
    fallbackGradient: "bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"
  },
  {
    title: "Scrum Master Voice Assistant",
    description: "Voice-enabled assistant integrated with Jira for agile project management. Streamlines scrum processes through natural language interactions.",
    tech: ["Python", "NLP", "Jira API", "Voice Recognition"],
    link: "https://github.com/athenalobo/Scrum-Master-voice-assistant-project",
    downloadLink: "https://github.com/athenalobo/Scrum-Master-voice-assistant-project/actions/runs/13287344326",
    imageUrl: scrumImg,
    fallbackGradient: "bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500"
  },
  {
    title: "Code Analysis Dashboard",
    description: "UI prototype for comprehensive code analysis and visualization. Modern React-based dashboard for development insights and metrics.",
    tech: ["React.js", "Product Design", "UI/UX"],
    link: "https://github.com/athenalobo/IC-landing-page",
    deployedLink: "https://my-react-app-omega-lemon.vercel.app",
    imageUrl: dashboardImg,
    fallbackGradient: "bg-gradient-to-br from-green-400 via-emerald-500 to-blue-500"
  },
  {
    title: "Blood Donation Mobile App",
    description: "Real-time emergency blood donation platform developed with M.S. Ramaiah Hospital. Notifies nearby donors instantly during emergencies.",
    tech: ["React.js", "Firebase", "Real-time Notifications"],
    link: null,
    deployedLink: null,
    imageUrl: bloodImg,
    fallbackGradient: "bg-gradient-to-br from-red-400 via-rose-500 to-pink-500"
  },
  {
    title: "Flood Risk Prediction System",
    description: "Runner-up at Smart India Hackathon 2022. ML-powered predictive analytics solution for flood risk assessment and mitigation.",
    tech: ["Python", "TensorFlow", "Flask", "Machine Learning"],
    link: null,
    deployedLink: null,
    imageUrl: floodImg,
    fallbackGradient: "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500"
  },
  {
    title: "Accessible Coding Education App",
    description: "Educational platform for differently-abled students with text-to-speech, multi-language captions, and gamified learning experiences.",
    tech: ["Game Development", "Accessibility", "Educational Tech"],
    link: null,
    deployedLink: null,
    imageUrl: educationImg,
    fallbackGradient: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-8 md:mb-12 text-center">Fun Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 h-full flex flex-col">
                <div className="h-40 md:h-48 rounded-lg md:rounded-xl mb-4 md:mb-6 relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div
                    className={`w-full h-full ${project.fallbackGradient} absolute inset-0`}
                    style={{ display: 'none' }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                <div className="space-y-3 md:space-y-4 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-light">{project.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2 mt-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base"
                      >
                        View Code <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    )}
                    {project.deployedLink && (
                      <a
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm md:text-base"
                      >
                        Live Demo <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    )}
                    {project.downloadLink && (
                      <a
                        href={project.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm md:text-base"
                      >
                        Download Now <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    )}
                    {!project.link && !project.deployedLink && (
                      <span className="text-gray-500 text-sm md:text-base">
                        Private Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;