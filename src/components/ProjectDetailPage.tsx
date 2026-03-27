import React from 'react';
import './ProjectDetailPage.css';
import { projectsData } from '../data/projects';
import llaveRosada from '../assets/images/Llaverosada.png';

interface ProjectDetailPageProps {
  id: number;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ id }) => {
  const project = projectsData.find(p => p.id === id);

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
                <h2 className="project-subtitle-large">{project.subtitle}</h2>
                <div className="project-meta-list">
                  {project.info.filter(item => item.label !== 'CRÉDITOS').map((item, idx) => (
                    <div key={idx} className="project-meta">
                      <span className="meta-star">*</span>
                      <span className="meta-text">{item.label} — {item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="header-right-col">
              <div className="desc-section">
                <p className="project-description-large">
                  {project.description}
                </p>
                {project.info.find(item => item.label === 'CRÉDITOS') && (
                  <div className="project-credits">
                    <h3>CRÉDITOS</h3>
                    <ul>
                      {project.info.find(item => item.label === 'CRÉDITOS')?.value.split(',').map((name, i) => (
                        <li key={i}>{name.trim()}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="detail-main">
          <div className={`maps-container ${project.images.length > 1 ? 'horizontal-maps' : 'single-image'}`}>
            {project.images.map((img, idx) => (
              <div key={idx} className="map-item">
                <img src={img.url} alt={img.caption} />
                <span className="map-caption">{img.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
