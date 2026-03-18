import React from 'react';
import './ProjectsPage.css';

interface ProjectsPageProps {
  category: string;
  onProjectClick: (id: number) => void;
}

// Import a placeholder image (using profilePic or similar as used in HomePage)
import profilePic from '../assets/images/Fotovalen.png';

const ProjectsPage: React.FC<ProjectsPageProps> = ({ category, onProjectClick }) => {
  // Determine how many projects to show based on category
  const projectCounts: Record<string, number> = {
    'EDITORIAL': 3,
    'ILUSTRACIÓN': 4,
    'BRANDING': 3,
    'MARCA': 3 // Supporting both naming conventions just in case
  };

  const count = projectCounts[category.toUpperCase()] || 6;

  // Generate the requested number of projects
  const projects = Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Proyecto ${i + 1}`,
    description: `Descripción breve ${i + 1}`,
    image: profilePic
  }));

  return (
    <div className="projects-page">
      <div className="projects-container">
        <header className="projects-header">
          <h1 className="category-title">{category}</h1>
          <div className="title-underline"></div>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
            key={project.id} 
            className="gallery-card"
            onClick={() => onProjectClick(project.id)}
          >
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <div className="overlay-content">
                  <h3 className="overlay-title">{project.title}</h3>
                  <p className="overlay-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative stars as used in other sections */}
      <div className="projects-decor decor-1">*</div>
      <div className="projects-decor decor-2">*</div>
    </div>
  );
};

export default ProjectsPage;
