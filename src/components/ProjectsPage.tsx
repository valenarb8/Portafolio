import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import './ProjectsPage.css';

// Import assets
import profilePic from '../assets/images/Fotovalen.png';
import mapa1 from '../assets/images/Mapa_1.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProjectSlideProps {
  project: Project;
  color: string;
  onProjectClick: (id: number) => void;
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project, color, onProjectClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position motion values (normalized 0 to 1)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth the mouse values
  const springConfig = { stiffness: 150, damping: 30 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Map mouse positions to rotations
  // Back card rotates more significantly
  const rotateBack = useTransform(smoothX, [0, 1], [15, -15]);
  const rotateYBack = useTransform(smoothX, [0, 1], [-10, 10]);
  const rotateXBack = useTransform(smoothY, [0, 1], [10, -10]);
  
  // Front card rotates subtly
  const rotateFront = useTransform(smoothX, [0, 1], [5, -5]);
  const rotateYFront = useTransform(smoothX, [0, 1], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div 
      ref={containerRef}
      className="project-fullscreen-slide"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onProjectClick(project.id)}
    >
      <div className="project-slide-content">
        <div className="project-column-left">
          <h2 className="project-display-title">{project.title}</h2>
        </div>
        
        <div className="project-column-center">
          <div className="project-visual-wrapper">
            <motion.div 
              className="project-card-back" 
              style={{ 
                backgroundColor: color,
                rotateZ: rotateBack,
                rotateY: rotateYBack,
                rotateX: rotateXBack,
                transformPerspective: 1000
              }}
            ></motion.div>
            <motion.div 
              className="project-card-front"
              style={{
                rotateZ: rotateFront,
                rotateY: rotateYFront,
                transformPerspective: 1000
              }}
            >
              <img src={project.image} alt={project.title} className="project-thumbnail" />
            </motion.div>
          </div>
        </div>
        
        <div className="project-column-right">
          <p className="project-display-description">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

interface ProjectsPageProps {
  category: string;
  onProjectClick: (id: number) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ category, onProjectClick }) => {
  // Category specific configuration
  const categoryConfigs: Record<string, { color: string; projects: Project[] }> = {
    'EDITORIAL': {
      color: '#FFD0DF',
      projects: [
        { id: 1, title: 'Jardín del tiempo', description: 'Real Estate', image: mapa1 },
        { id: 2, title: 'Editorial Project 2', description: 'Descripción', image: profilePic },
        { id: 3, title: 'Editorial Project 3', description: 'Descripción', image: profilePic },
      ]
    },
    'ILUSTRACIÓN': {
      color: '#DFDBFF',
      projects: [
        { id: 4, title: 'Ilustración Project 1', description: 'Descripción', image: profilePic },
        { id: 5, title: 'Ilustración Project 2', description: 'Descripción', image: profilePic },
        { id: 6, title: 'Ilustración Project 3', description: 'Descripción', image: profilePic },
        { id: 7, title: 'Ilustración Project 4', description: 'Descripción', image: profilePic },
      ]
    },
    'BRANDING': {
      color: '#F1F5BA',
      projects: [
        { id: 8, title: 'Branding Project 1', description: 'Descripción', image: profilePic },
        { id: 9, title: 'Branding Project 2', description: 'Descripción', image: profilePic },
        { id: 10, title: 'Branding Project 3', description: 'Descripción', image: profilePic },
      ]
    }
  };

  const config = categoryConfigs[category.toUpperCase()] || { color: '#FFD0DF', projects: [] };

  return (
    <div className="projects-page">
      <div className="projects-scroll-container">
        {config.projects.map((project) => (
          <ProjectSlide 
            key={project.id} 
            project={project} 
            color={config.color} 
            onProjectClick={onProjectClick} 
          />
        ))}
      </div>
      
      {/* Decorative stars */}
      <div className="projects-decor decor-1">*</div>
      <div className="projects-decor decor-2">*</div>
    </div>
  );
};

export default ProjectsPage;
