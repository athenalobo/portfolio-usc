
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Download, Code, Palette, Zap, FileText, Award, ChevronLeft, ChevronRight, Database, Globe, Server, Smartphone, Brain, Users, Trophy, Star, Target, TrendingUp, GraduationCap } from 'lucide-react';
import profileImage from './profile.jpg';
import tinyllmImg from "./tinyllm.jpg";
import scrumImg from "./scrum.jpg";
import dashboardImg from "./dashboard.jpg";
import bloodImg from "./blood.jpg";
import floodImg from "./flood.jpg";
import educationImg from "./code.jpg";

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const achievements = {
    leadership: [
      {
        title: "E-board member - Technology team",
        organization: "Association of Indian Students USC",
        year: "Sep 2025 - Present",
        description: "Selected as one of two Technology Representatives from a competitive pool of 200+ applicants. Managing AIS website and digital platforms.",
        icon: <Globe className="w-4 h-4" />
      },
      {
        title: "Microsoft Learn Student Ambassador",
        organization: "Microsoft",
        year: "2021-2022",
        description: "Beta & Alpha levels",
        icon: <Users className="w-4 h-4" />
      },
      {
        title: "Google Developers Group Core Member",
        organization: "Google",
        year: "2022-2023",
        description: "500+ students impacted",
        icon: <Brain className="w-4 h-4" />
      },
      {
        title: "Founder - Intel IoT and RPA Technical Club",
        organization: "Intel Corporation",
        year: "Jul 2021 - Jun 2022",
        description: "Selected a well-rounded team and founded the Intel IoT & RPA club on campus, organising various events and building an active student community.",
        icon: <Code className="w-4 h-4" />
      },
      {
        title: "Teaching Volunteer",
        organization: "Aloysia",
        year: "Jun 2013 - Mar 2018",
        description: "Dedicated after-school hours to teaching Mathematics and English to orphaned children. Focused on creating an engaging and supportive learning environment.",
        icon: <GraduationCap className="w-4 h-4" />
      },
    ],
    competitions: [
      {
        title: "Smart India Hackathon",
        rank: "Winner",
        year: "2023",
        icon: <Trophy className="w-4 h-4" />
      },
      {
        title: "IEEE Hackathon",
        rank: "2nd Place",
        year: "2022",
        icon: <Trophy className="w-4 h-4" />
      },
    ],
    certifications: [
      {
        title: "AWS Solutions Architect",
        organization: "Amazon Web Services",
        year: "2024",
        icon: <Award className="w-4 h-4" />
      },
      {
        title: "Google Cloud Professional",
        organization: "Google Cloud",
        year: "2023",
        icon: <Award className="w-4 h-4" />
      },
      {
        title: "Microsoft Azure Fundamentals",
        organization: "Microsoft",
        year: "2023",
        icon: <Award className="w-4 h-4" />
      }
    ],
    academic: [
      {
        title: "Graduated First Class with Distinction",
        organization: "Ramaiah Institute of Technology",
        year: "2023",
        description: "Recognized for academic excellence",
        icon: <Star className="w-4 h-4" />
      },
      {
        title: "Perfect scores in Mathematics Class 10 & 12",
        organization: "I.C.S.E. Board",
        year: "20217-2019",
        description: "Awarded for outstanding academic performance",
        icon: <Star className="w-4 h-4" />
      }
    ]
  };

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

  const skillCategories = {
    frontend: {
      name: "Frontend & UI",
      icon: <Globe className="w-5 h-5" />,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript ES6+", level: 95 },
        { name: "HTML5/CSS3", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "React Native", level: 82 }
      ]
    },

    backend: {
      name: "Backend & Systems",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Python/Django", level: 87 },
        { name: "Java", level: 90 },
        { name: "C++", level: 83 },
        { name: "GraphQL/REST APIs", level: 88 }
      ]
    },
    database: {
      name: "Database & Cloud",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 83 },
        { name: "Redis", level: 80 },
        { name: "AWS", level: 85 },
        { name: "Docker/Kubernetes", level: 82 },
        { name: "Azure", level: 78 }
      ]
    },
    aiml: {
      name: "AI/ML & Data",
      icon: <Brain className="w-5 h-5" />,
      skills: [
        { name: "TensorFlow/PyTorch", level: 85 },
        { name: "Scikit-learn", level: 88 },
        { name: "Pandas/NumPy", level: 90 },
        { name: "OpenAI APIs", level: 82 },
        { name: "Data Analysis", level: 87 },
        { name: "Computer Vision", level: 80 }
      ]
    },
    tools: {
      name: "Tools & Process",
      icon: <Users className="w-5 h-5" />,
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Jira/Scrum", level: 88 },
        { name: "Jenkins/CI-CD", level: 82 },
        { name: "Figma/Design", level: 85 },
        { name: "Agile/Kanban", level: 90 },
        { name: "Code Review", level: 88 }
      ]
    }
  };

  const testimonials = [
    {
      quote: "I’ve had the pleasure of working with Athena for almost the entirety of her time at CAST. From her arrival as an intern where she displayed motivation to grow, learn about the products and code bases. Exiting her internship to go on as a junior developer and shortly thereafter also taking on the role of scrum master for the Cloud team. Athena proved that her positive energy, motivation and organization skills would efficiently facilitate the team’s rapid progress. As her mentor, I was glad that I could watch her grow not only as a scrum master but also as a developer over time. She has immense potential, and talent for software design that will only grow with time and dedication that she has already proved to have more than enough of. She is an excellent professional I have no trouble recommending.",
      author: "Matteo Stura",
      title: "Frontend Tech Lead",
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const publications = [
    {
      title: "Advanced Machine Learning Techniques in Distributed Systems",
      journal: "Springer Nature - Journal of Cloud Computing",
      year: "2024",
      authors: "Smith, J., Chen, A., Johnson, M.",
      link: "https://link.springer.com/article/your-paper-link",
      abstract: "This paper presents novel approaches to implementing ML algorithms in distributed computing environments..."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Hero Section */}
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
      </section>

      {/* About Section - Compact */}
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

      {/* Skills Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-8 md:mb-12 text-center">Technical Expertise</h2>

          {/* Skill Categories - Mobile Optimized */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveSkillCategory(key)}
                className={`flex items-center justify-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm transition-all duration-300 ${activeSkillCategory === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <span className="flex-shrink-0">{category.icon}</span>
                <span className="hidden sm:inline md:inline">{category.name}</span>
                <span className="sm:hidden md:hidden text-xs">{category.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Skills - Mobile Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skillCategories[activeSkillCategory].skills.map((skill, index) => (
              <div key={skill.name} className="group p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium text-sm md:text-base">{skill.name}</span>
                  <span className="text-purple-400 text-xs md:text-sm font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 md:h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Recognition Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-8 md:mb-12 text-center text-white">
            Achievements & Recognition
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* First Column: Tech Leadership (spans 1 column, takes full height) */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Tech Leadership</h3>
                </div>
                <div className="space-y-4">
                  {achievements.leadership.map((item, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="text-blue-400 mt-1">{item.icon}</div>
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium leading-tight">{item.title}</p>
                          <p className="text-blue-400 text-xs mt-1">{item.organization}</p>
                          <p className="text-blue-300 text-xs">{item.year}</p>
                        </div>
                      </div>
                      {item.description && (
                        <p className="text-gray-400 text-xs ml-7 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Column: 3 boxes */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              {/* Competitions & Hackathons */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Competitions</h3>
                </div>
                <div className="space-y-3">
                  {achievements.competitions.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="text-pink-400">{item.icon}</div>
                        <div>
                          <p className="text-white text-sm font-medium">{item.title}</p>
                          <p className="text-pink-400 text-xs">{item.rank} • {item.year}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {achievements.certifications.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="text-green-400">{item.icon}</div>
                        <div>
                          <p className="text-white text-sm font-medium">{item.title}</p>
                          <p className="text-green-400 text-xs">{item.organization} • {item.year}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Excellence */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Academic Excellence</h3>
                </div>
                <div className="space-y-3">
                  {achievements.academic.map((item, index) => (
                    <div key={index} className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="text-purple-400">{item.icon}</div>
                        <p className="text-white text-sm font-medium">{item.title}</p>
                      </div>
                      <p className="text-purple-400 text-xs ml-7">{item.organization} • {item.year}</p>
                      {item.description && (
                        <p className="text-gray-400 text-xs ml-7 mt-1">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Horizontal Layout */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white/2">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-8 md:mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div key={index} >
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

      {/* Testimonials Section - Compact */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-thin mb-12 text-center">Professional Recommendations</h2>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 min-h-[280px] flex flex-col justify-between">
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed text-lg italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonials[currentTestimonial].gradient} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-semibold">{testimonials[currentTestimonial].initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonials[currentTestimonial].author}</p>
                    <p className="text-purple-400 text-sm font-medium">{testimonials[currentTestimonial].title}</p>
                    <p className="text-gray-400 text-xs">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button onClick={prevTestimonial} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={nextTestimonial} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-purple-500 w-6' : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              href="tel:+1234567890"
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

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">© 2025 Athena Lobo. Crafted with precision and passion.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;