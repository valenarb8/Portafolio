import React, { useRef, useEffect } from 'react';
import './HomePage.css';
import casaEditorial from '../assets/images/CasaEditorial.png';
import casaIlustracion from '../assets/images/CasaIlustracion.png';
import casaMarca from '../assets/images/CasaMarca.png';
import puertaRosada from '../assets/images/PuertaRosada.png';
import puertaAzul from '../assets/images/PuertaAzul.png';
import puertaVerde from '../assets/images/PuertaVerde.png';
import valenLandingImg from '../assets/images/LandingInicio.png';
import valenLandingCelularImg from '../assets/images/LandingCelular.png';
import { projectsData } from '../data/projects';

interface HomePageProps {
  onNavigateToProjects: (category: string) => void;
  onHideNav: (hide: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToProjects, onHideNav }) => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sentinelRef.current) return;
      const rect = sentinelRef.current.getBoundingClientRect();
      
      // Card 3 sticks at 350px. When sentinel reaches 350px, the stack is fully assembled.
      // We trigger the fade slightly early at 400px so it dissolves proactively.
      if (rect.top <= 400) {
        if (onHideNav) onHideNav(true);
      } else {
        if (onHideNav) onHideNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (onHideNav) {
        onHideNav(false);
      }
    };
  }, [onHideNav]);

  const stackedCategories = [
    { 
      id: 'editorial', 
      title: 'Editorial', 
      number: '(01)', 
      desc: <>Revistas, mapas, libros y piezas variadas.</>,
      image: casaEditorial,
      doorImage: puertaRosada,
      bgColor: '#FFC4D9', // Rosa
      doorBgColor: '#FFF4F8', // Rosa extremadamente clarito (casi blanco)
      textColor: '#8C182B', // Rojo oscuro
      shadowColor: '#B3E5FC' // Azul pastel muy claro y suave
    },
    { 
      id: 'ilustracion', 
      title: 'Ilustración', 
      number: '(02)', 
      desc: <>Personajes, composiciones, portadas<br/>y universos visuales.</>,
      image: casaIlustracion,
      doorImage: puertaAzul,
      bgColor: '#C4E1FF', // Azul
      doorBgColor: '#F0F7FF', // Azul extremadamente clarito (casi blanco)
      textColor: '#1A365D', // Azul marino muy oscuro
      shadowColor: '#C8E6C9' // Verde pastel muy claro y suave
    },
    { 
      id: 'branding', 
      title: 'Branding', 
      number: '(03)', 
      desc: <>Identidades visuales, tono de marca,<br/>empaques y dirección creativa.</>,
      image: casaMarca,
      doorImage: puertaVerde,
      bgColor: '#E5F487', // Verde/Amarillo
      doorBgColor: '#FDFEEB', // Verde/Amarillo extremadamente clarito (casi blanco)
      textColor: '#2E4D2B', // Verde oscuro
      shadowColor: '#F8BBD0' // Rosa pastel muy claro y suave
    }
  ];

  return (
    <div className="home-page">
      {/* Filtro SVG para la sombra de pincel de grano tipo Procreate */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <filter id="grainy-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: 1, marginTop: '-115px' }}>
        <div className="hero-section">
          <div className="noise-overlay"></div>
        </div>
        <div className="hero-logo-center">
          <div className="hero-center-logo">
            <picture style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <source media="(max-width: 768px)" srcSet={valenLandingCelularImg} />
              <img 
                src={valenLandingImg} 
                alt="Valen Landing Logo" 
                style={{ width: '100%', height: 'auto', objectFit: 'contain', zIndex: 10, position: 'relative' }} 
              />
            </picture>
          </div>
        </div>
      </div>

      <div id="proyectos-inicio" className="categories-list-container">
        {stackedCategories.map((cat, index) => {
          const categoryIdMap: Record<string, string> = { 'editorial': 'EDITORIAL', 'ilustracion': 'ILUSTRACIÓN', 'branding': 'BRANDING' };
          const mappedId = categoryIdMap[cat.id] || cat.id;
          return (
            <React.Fragment key={cat.id}>
              {index === 2 && <div ref={sentinelRef} style={{ width: '100%', height: '1px' }} />}
              <div className={`category-list-item ${index % 2 !== 0 ? 'reverse' : ''}`}>
                <div 
                  className="category-text-box"
                  style={{ 
                    backgroundColor: cat.bgColor,
                    color: cat.textColor
                  }}
                  onClick={() => onNavigateToProjects(mappedId)}
                >
                  <h2 className="card-title" style={{ 
                    color: cat.textColor,
                    fontFamily: "'Ambit', sans-serif",
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}>
                    {cat.title}
                    <span style={{ 
                      fontFamily: "'MV Boli', cursive", 
                      fontWeight: 'normal', 
                      paddingLeft: '10px',
                      fontSize: '1.4em',
                      display: 'inline-block',
                      transform: 'translateY(15px)'
                    }}>*</span>
                  </h2>
                  <p className="card-desc" style={{ color: cat.textColor }}>{cat.desc}</p>
                  <div className="category-projects-pills">
                    {projectsData.filter(p => {
                      return p.category === mappedId;
                    }).map(project => (
                      <span 
                        key={project.id} 
                        className="project-pill"
                        style={{ 
                          backgroundColor: cat.doorBgColor,
                          color: cat.textColor,
                          border: `1px solid ${cat.textColor}40`
                        }}
                      >
                        {project.title}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div 
                  className="category-image-box" 
                  style={{ '--accent-shadow': cat.shadowColor } as React.CSSProperties}
                  onClick={() => onNavigateToProjects(mappedId)}
                >
                  <div className="card-image-wrapper house-stamp">
                    <div className="stamp-base"></div>
                    <img src={cat.image} alt={cat.title} />
                  </div>
                  <div className="card-image-wrapper door-stamp">
                    <div className="door-base" style={{ backgroundColor: cat.doorBgColor }}></div>
                    <img src={cat.doorImage} alt={`${cat.title} Puerta`} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
