import React, { useRef, useEffect } from 'react';
import './ProjectsPage.css';
import { projectsData } from '../data/projects';

interface ProjectsPageProps {
  category: string;
  onProjectClick: (id: number) => void;
  onHideNav?: (hide: boolean) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ category, onProjectClick, onHideNav }) => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Category specific colors matching the previous design
  const categoryColors: Record<string, string> = {
    'EDITORIAL': '#FFD0DF',
    'ILUSTRACIÓN': '#DFDBFF',
    'BRANDING': '#F1F5BA'
  };

  const activeCategory = category.toUpperCase();
  const color = categoryColors[activeCategory] || '#FFB8D1';
  const projects = projectsData.filter(p => p.category === activeCategory);
  const N = projects.length;

  useEffect(() => {
    const handleScroll = () => {
      if (!sentinelRef.current) return;
      const rect = sentinelRef.current.getBoundingClientRect();
      
      const lastCardTop = 100 + (N - 1) * 110;
      
      // Proactive fade like in HomePage
      if (rect.top <= lastCardTop + 50) {
        if (onHideNav) onHideNav(true);
      } else {
        if (onHideNav) onHideNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initially
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (onHideNav) {
        onHideNav(false);
      }
    };
  }, [onHideNav, N]);

  return (
    <div className="home-page" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <div className="stacked-categories-container">
        {projects.map((project, index) => {
          const wrapperHeight = (N - 1 - index) * 110 + 420;

          return (
            <React.Fragment key={project.id}>
              {index === N - 1 && <div ref={sentinelRef} style={{ width: '100%', height: '1px' }} />}
              <div 
                className="stacked-category-wrapper"
                style={{ 
                  position: 'sticky',
                  top: `${130 + (index * 110)}px`,
                  zIndex: 1010 + index,
                  height: `${wrapperHeight}px`
                }}
              >
                {index === 0 && (
                  <h1 className="projects-page-title">
                    {category}
                  </h1>
                )}
                <div 
                   className="stacked-category-card"
                   style={{ 
                     backgroundColor: color,
                     color: '#1A3A3A',
                     height: '420px'
                   }}
                   onClick={() => onProjectClick(project.id)}
                 >
                   <div className="card-top">
                     <h2 className="card-title" style={{ color: '#1A3A3A' }}>{project.title}</h2>
                     <span className="card-number" style={{ color: '#1A3A3A' }}>({index < 9 ? '0' : ''}{index + 1})</span>
                   </div>
                 </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      
      {/* Decorative stars inherited from previous design */}
      <div className="projects-decor decor-1" style={{ color: color }}>*</div>
      <div className="projects-decor decor-2" style={{ color: color }}>*</div>
    </div>
  );
};

export default ProjectsPage;
