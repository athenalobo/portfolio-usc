import React from 'react';
import { Award, FileText, ArrowUpRight } from 'lucide-react';

const publications = [
  {
    title: "Meta Heuristic Technique with Reinforcement Learning for Node Deployment in Wireless Sensor Networks",
    journal: "Springer Nature - Journal of Cloud Computing",
    year: "2024",
    authors: "S. M. Kusuma, K. N. Veena, B. P. Vijaya Kumar, E. Naresh & Lobo Athena Marianne ",
    link: "https://link.springer.com/article/10.1007/s42979-024-02906-1",
    abstract: "Wireless Sensor Networks (WSNs) are vital in applications like environmental monitoring, smart homes, and battlefield surveillance. Comprising small devices with limited resources, WSNs require efficient node deployment for power optimization and prolonged network lifetime, ensuring sufficient coverage and connectivity. This study introduces an Intelligent Satin Bower Bird Optimizer augmented with reinforcement learning (ISBO-RL), enhancing coverage and connectivity. ISBO-RL focuses on optimal sensor placement for improved coverage and connectivity, using an Optimum Position Finding (OPF) method to identify key sensor node locations. Reinforcement learning is integrated into the ISBO algorithm, allowing nodes to adapt based on performance and changing conditions. Experimental results on diverse platforms highlight ISBO-RL's efficacy and its superior coverage and connectivity performance as compared to other algorithms. ISBO-RL represents a significant advancement in the field of Wireless Sensor Networks, offering a promising solution to address the challenges of efficient node deployment and network optimization in various critical applications."
  }
];

const PublicationsSection = () => {
  return (
    <section className="py-32 px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-thin mb-16 text-center">Research Publication</h2>
        <div className="space-y-8">
          {publications.map((paper, index) => (
            <div key={index} className="group">
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 ">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-light mb-2  transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-gray-400 mb-2">
                      <span className="text-purple-400">{paper.journal}</span> • {paper.year}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">Authors: {paper.authors}</p>
                    <p className="text-gray-400 leading-relaxed">{paper.abstract}</p>
                  </div>
                  <Award className="w-6 h-6 text-purple-400 ml-4 flex-shrink-0" />
                </div>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/link"
                >
                  <FileText className="w-4 h-4" />
                  View Publication
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;