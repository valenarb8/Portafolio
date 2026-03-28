import React from 'react';
import './ProjectDetailPage.css';
import { projectsData } from '../data/projects';
import llaveRosada from '../assets/images/Llaverosada.png';

interface ProjectDetailPageProps {
  id: number;
  onProjectClick: (id: number) => void;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ id, onProjectClick }) => {
  const project = projectsData.find(p => p.id === id);
  
  // Navigation logic
  const categoryProjects = projectsData.filter(p => p.category === project?.category);
  const currentIndex = categoryProjects.findIndex(p => p.id === id);
  
  const prevProject = categoryProjects[(currentIndex - 1 + categoryProjects.length) % categoryProjects.length];
  const nextProject = categoryProjects[(currentIndex + 1) % categoryProjects.length];

  if (!project) {
    return <div className="project-detail-page">Proyecto no encontrado</div>;
  }

  // Helper to render title with potential breaks
  const renderTitle = (title: string) => {
    return title.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < title.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="project-detail-page">
      <div className="detail-container horizontal-layout">
        {/* Horizontal Header */}
        <div className="detail-header-horizontal">
          <div className="header-columns">
            <div className="header-left-col">
              <div className="title-section">
                <div className="title-highlight">
                  <h1 className="project-title-large">{renderTitle(project.title)}</h1>
                  <img src={llaveRosada} alt="Llave decorativa" className="title-key-icon" />
                </div>
              </div>
            </div>
            
            <div className="header-right-col">
              <div className="desc-section">
                <h2 className="project-subtitle-large">{project.subtitle}</h2>
                <div className="project-meta-list">
                  {project.info.filter(item => item.label !== 'CRÉDITOS').map((item, idx) => (
                    <div key={idx} className="project-meta">
                      <span className="meta-star">*</span>
                      <span className="meta-text">{item.label} — {item.value}</span>
                    </div>
                  ))}
                </div>
                <p className="project-description-large">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="detail-main">
          <div className="project-images-stack">
            {/* Featured Images (Dual for Editorial, Single for others) */}
            <div className={`images-featured-group ${project.category !== 'EDITORIAL' ? 'single-featured' : ''}`}>
              {project.images.slice(0, project.category === 'EDITORIAL' ? 2 : 1).map((img, idx) => (
                <div key={`featured-${idx}`} className="image-featured">
                  <img src={img.url} alt={img.caption} />
                  <span className="map-caption">{img.caption}</span>
                </div>
              ))}
            </div>

            {/* Secondary Spreads/Internal Pages */}
            {project.images.length > (project.category === 'EDITORIAL' ? 2 : 1) && (
              <div className="images-grid">
                {project.images.slice(project.category === 'EDITORIAL' ? 2 : 1).map((img, idx) => (
                  <div key={`spread-${idx}`} className="image-spread">
                    <img src={img.url} alt={img.caption} />
                    <span className="map-caption">{img.caption}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Navigation Arrows at the bottom */}
        <div className="project-navigation-bottom">
          <button 
            className="nav-arrow prev" 
            onClick={() => onProjectClick(prevProject.id)}
            title={`Anterior: ${prevProject.title}`}
          >
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            className="nav-arrow next" 
            onClick={() => onProjectClick(nextProject.id)}
            title={`Siguiente: ${nextProject.title}`}
          >
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
