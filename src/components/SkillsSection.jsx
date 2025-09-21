import React, { useState } from 'react';
import { Code, Globe, Server, Brain, Database, Users } from 'lucide-react';

const skillCategories = {
  programming: {
    name: "Programming & Algorithms",
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 90 },
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "C++", level: 83 },
      { name: "Data Structures & Algorithms", level: 88 },
      { name: "System Design", level: 82 }
    ]
  },
  frontend: {
    name: "Frontend & Mobile",
    icon: <Globe className="w-5 h-5" />,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "React Native", level: 82 },
      { name: "HTML5/CSS3", level: 92 },
      { name: "Mobile Development", level: 80 },
      { name: "UI/UX Design", level: 85 }
    ]
  },
  backend: {
    name: "Backend & Infrastructure",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Node.js/Express", level: 85 },
      { name: "Spring Boot", level: 88 },
      { name: "REST/GraphQL APIs", level: 88 },
      { name: "Microservices", level: 82 },
      { name: "AWS/Cloud Services", level: 85 },
      { name: "Docker/Kubernetes", level: 82 }
    ]
  },
  aiml: {
    name: "Machine Learning & AI",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      { name: "TensorFlow/PyTorch", level: 85 },
      { name: "Pandas/NumPy/Scikit-learn", level: 90 },
      { name: "Deep Learning", level: 82 },
      { name: "Computer Vision/NLP", level: 80 },
      { name: "Statistical Analysis", level: 87 },
      { name: "MLOps/Model Deployment", level: 78 }
    ]
  },
  data: {
    name: "Data & Analytics",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "SQL/PostgreSQL", level: 88 },
      { name: "Big Data (Spark/Hadoop)", level: 80 },
      { name: "Data Pipelines/ETL", level: 82 },
      { name: "MongoDB/NoSQL", level: 83 },
      { name: "Data Visualization", level: 85 },
      { name: "A/B Testing", level: 80 }
    ]
  },
  tools: {
    name: "Development & Collaboration",
    icon: <Users className="w-5 h-5" />,
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "Agile/Scrum", level: 90 },
      { name: "CI/CD Pipelines", level: 82 },
      { name: "Testing (Unit/Integration)", level: 88 },
      { name: "Code Review", level: 88 },
      { name: "Jira/Project Management", level: 85 }
    ]
  }
};

const SkillsSection = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState('programming');

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-8 md:mb-12 text-center">Technical Skills</h2>

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
  );
};

export default SkillsSection;