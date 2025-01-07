import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/');
  };
  
  const projects = [
    {
      id: 1,
      title: "Patient Health Hub",
      technologies: ["React.js", "Python", "PostgreSQL"],
      live: "https://github.com/zmegahed/Health-Patient-App"
    },
    {
      id: 2,
      title: "Madina Islamic Center Rework",
      technologies: ["WordPress", "CSS", "Elementor", "JavaScript"],
      live: "https://zmegahed.github.io/MicRework/micrework.html"
    },
    {
      id: 3,
      title: "Stansberry One Page",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://zmegahed.github.io/HTML_CSS_SPECIALIST/index.html"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050517] pt-24">
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-[#4E6E5D] hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-[#4E6E5D]"/>
              <p className="text-[#4E6E5D] uppercase text-sm tracking-wider font-medium">Featured Work</p>
            </div>
            <h2 className="text-4xl font-bold text-white">Projects</h2>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4E6E5D] rounded-lg transition-all duration-500 ease-out"
              >
                <div className="relative z-10 p-6 flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <div className="relative">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <div className="absolute inset-0 border-2 border-[#4E6E5D] rounded-full opacity-25 group-hover:scale-75 transition-transform duration-500" />
                        <div className="absolute inset-0 border-2 border-[#4E6E5D] rounded-full opacity-50 group-hover:scale-100 transition-transform duration-700" />
                        <span className="text-xl font-bold text-white relative z-10">
                          {String(project.id).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                      <h3 className="text-xl font-bold text-white min-w-40">
                        {project.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 text-sm bg-[#4E6E5D]/20 text-[#4E6E5D] rounded-full transition-colors duration-300 group-hover:bg-[#4E6E5D] group-hover:text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-2 text-[#4E6E5D] group-hover:text-white transition-colors duration-300"
                  >
                    <span className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      View Project
                    </span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#4E6E5D]/0 via-[#4E6E5D]/5 to-[#4E6E5D]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;