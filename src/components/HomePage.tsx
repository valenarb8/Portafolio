import React, { useRef, useEffect } from 'react';
import './HomePage.css';
import casaEditorial from '../assets/images/CasaEditorial.png';
import casaIlustracion from '../assets/images/CasaIlustracion.png';
import casaMarca from '../assets/images/CasaMarca.png';
import puertaRosada from '../assets/images/PuertaRosada.png';
import puertaAzul from '../assets/images/PuertaAzul.png';
import puertaVerde from '../assets/images/PuertaVerde.png';
import valenLandingImg from '../assets/images/ValenParaLanding.png';


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
      desc: 'Diseño y diagramación de piezas gráficas. Creación de publicaciones estructuradas con un enfoque visual limpio y detallado.',
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
      desc: 'Creación de ilustraciones y personajes. Exploración gráfica a través de diferentes técnicas para dar vida a ideas y conceptos.',
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
      desc: 'Desarrollo de identidades visuales. Estrategia y diseño para construir marcas con un estilo propio y coherente.',
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
      <div className="hero-section">
        <div className="noise-overlay"></div>
        <div className="hero-logo-center">
          <div className="hero-center-logo">

            <img 
              src={valenLandingImg} 
              alt="Valen Landing Logo" 
              style={{ width: '100%', height: 'auto', objectFit: 'contain', zIndex: 10, position: 'relative' }} 
            />
          </div>
        </div>
      </div>

      <div id="proyectos-inicio" className="stacked-categories-container">
        {stackedCategories.map((cat, index) => {
          const wrapperHeight = 640 - (index * 110);

          return (
            <React.Fragment key={cat.id}>
              {index === 2 && <div ref={sentinelRef} style={{ width: '100%', height: '1px' }} />}
              <div 
                className="stacked-category-wrapper"
                style={{ 
                  position: 'sticky',
                  top: `${130 + (index * 110)}px`,
                  zIndex: 1010 + index,
                  height: `${wrapperHeight}px`
                }}
              >
              <div 
                className="stacked-category-card"
                style={{ 
                  backgroundColor: cat.bgColor,
                  color: cat.textColor
                }}
                onClick={() => onNavigateToProjects(cat.id)}
              >
                <div className="card-top">
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
                      fontSize: '1.4em', /* Scale up asterisk to match letter bounding box */
                      display: 'inline-block',
                      transform: 'translateY(15px)' /* Nudge it down since asterisks naturally float high */
                    }}>*</span>
                  </h2>
                </div>
                <div className="card-bottom" style={{ '--accent-shadow': cat.shadowColor } as React.CSSProperties}>
                  <p className="card-desc" style={{ color: cat.textColor }}>{cat.desc}</p>
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
            </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
