import React from 'react';
import './ProjectsPage.css';

interface ProjectsPageProps {
  category: 'EDITORIAL' | 'ILUSTRACIÓN' | 'MARCA' | string;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ category }) => {
  // Placeholder data for projects
  const projects = [
    { id: 1, title: 'Proyecto 1', description: 'Descripción breve del proyecto 1' },
    { id: 2, title: 'Proyecto 2', description: 'Descripción breve del proyecto 2' },
    { id: 3, title: 'Proyecto 3', description: 'Descripción breve del proyecto 3' },
    { id: 4, title: 'Proyecto 4', description: 'Descripción breve del proyecto 4' },
    { id: 5, title: 'Proyecto 5', description: 'Descripción breve del proyecto 5' },
    { id: 6, title: 'Proyecto 6', description: 'Descripción breve del proyecto 6' },
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <header className="projects-header">
          <h1 className="category-title">{category}</h1>
          <div className="title-underline"></div>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-placeholder">
                <span className="placeholder-text">IMAGEN DEL PROYECTO</span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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
