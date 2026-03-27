import React, { useRef, useEffect } from 'react';
import './HomePage.css';
import profilePic from '../assets/images/Fotovalen.png';
import valen1 from '../assets/images/Valenilustrada1.png';
import valen2 from '../assets/images/Valenilustrada2.png';

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
      id: 'EDITORIAL', 
      title: 'Editorial', 
      number: '(01)', 
      desc: 'Diseño de piezas gráficas y exploración visual estructurada para crear publicaciones con una identidad muy auténtica.',
      image: profilePic,
      bgColor: '#FFB8D1', // Pastel Pink
      textColor: '#8B002B' // Dark Red
    },
    { 
      id: 'ILUSTRACIÓN', 
      title: 'Ilustración', 
      number: '(02)', 
      desc: 'Creación de imágenes envolventes, piezas artísticas y personajes únicos mediante diversas técnicas visuales muy ricas.',
      image: valen1,
      bgColor: '#AECBD6', // Pastel Blue
      textColor: '#1A3A3A' // Dark Teal
    },
    { 
      id: 'MARCA', 
      title: 'Marca', 
      number: '(03)', 
      desc: 'Desarrollo de estilo visual integral, estrategia sólida y posicionamiento de imagen para construir marcas que sean especiales.',
      image: valen2,
      bgColor: '#AEC782', // Pastel Green
      textColor: '#2E4D2B' // Dark Green
    }
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-logo-center">
          <div className="hero-center-logo" style={{ position: 'relative', width: '600px', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg viewBox="-50 -50 650 400" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <defs>
                <filter id="valen-sparkle-glow-home">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <g stroke="none" fill="var(--color-primary)">
                <path d="M28.05,139.08c-16.97-21.57,9.71-57,29.85-66.04,18.44-9.01,48.57-3.08,46.74,21.88-1.34,10.91-9.74,30.77-15.03,43.74-7.65,18.99-19.72,49.56-27.22,70.25-2.84,9.63-6.81,23.07,1.56,29.9,4.35,3,10.98,2.92,15.6.69,46.23-23.65,78.53-119.72,68.26-169.67-4.19-11.19-17.8-15.02-25.79-23.24-5.21-5.14-5.55-13.69-.58-19.01,11.08-11.07,30.42-10.13,41.17.85,7.44,8.98,9.89,20.81,11.37,32.41,3.2,35.76-10.64,75.29-22.02,106.06-17.73,35.04-36.29,72.47-68.74,96.15-8.88,5.79-19.16,11.69-30.04,10.79-10.98-1.1-21.68-8.82-22.69-20.38-1.48-15.57,5.79-30.25,12.18-44.11,13.69-32.17,34.43-60.91,38.59-96.49,1.48-7.69-3.93-14.76-11.13-17.04-8.77-3.2-17.69.98-18.69,10.55-1.62,8.28,1.81,16.02.13,24.22-1.6,11.42-15.3,16.42-23.33,8.69l-.19-.19Z" />
                <path d="M224.25,228.15l-3.27-5.11c-22.59,33.65-72.87,42.11-68.22-11.99,3.61-35.5,22.72-66.95,42.96-95.46,8.17-12.07,28.99-35.75,41.78-17.35,5.91,7.47,8.99,15.43,9.23,25.59,3.32-7.25,9.03-30.66,16.26-33.2,26.33-5.64,17.76,12.55,9.21,26.89-7.93,7.76-13.46-5.3-17.42,13.27-3.45,16.2-8.47,35.37-10.58,51.7-3.68,46.64,13.83,7.47,16.83,22.35-.51,7.25-2.72,14.34-6.98,20.32-7.08,8.52-22.61,14.79-29.82,2.98ZM224.87,189.88c5.04-8.08,7.22-16.88,8.29-26.23,1.59-13.07,4.5-30.13-1.04-42.49-6.26-12.69-21.55-5.28-28.59,2.93-17.83,16.38-25.61,38.61-29.66,62.17-4.6,46.88,35.69,33.49,51,3.62Z" />
                <path d="M313.78,190.8c.17.12.33.26.47.42,1.13,1.28.87,3.24.45,4.89-4.11,16.16-16.85,29.85-32.68,35.1-2.62.87-5.45,1.52-8.14.89-4.6-1.09-7.62-5.8-8.24-10.5-.62-4.69.65-9.4,1.91-13.97,13.59-49.49,26.04-99.29,38.49-149.08,1.56-6.24,3.13-12.54,3.47-18.96.08-1.44-.04-3.15-1.27-3.92-1.03-.65-2.36-.31-3.58-.3-5.16.05-8.38-6.33-7.15-11.33,1.4-5.7,6.66-10.01,10.47-14.14,4.12-4.48,9.9-8.81,16.04-9.74,2.42-.36,5-.17,7.12,1.05,5.66,3.25,5.35,11.41,4.1,17.81-3.95,20.22-9.89,39.99-15.81,59.73-7.74,25.79-15.48,51.59-23.23,77.38-2.81,9.36-5.64,18.83-6.09,28.59-.15,3.24.21,6.99,2.87,8.84,5.45,3.79,12.25-4.46,18.82-3.49.7.1,1.41.33,1.98.74Z" />
                <path d="M373.59,218.98c-22.74,9.12-44.79-5.5-48.21-27.19-7.92-29.09,7.08-56.83,17.19-75.54,7.57-16.27,30.89-39.65,47.27-43.12,26.49-4.46,13.89,39.43,5.82,51.46-9.59,17.86-25.33,37.1-38.99,52.19-7.99,11.15,5.3,17.06,14.72,17.62,12.58.47,22.67-9.17,30.07-18.47,1.87-2.64,5.11-4.72,6.65-.65,1.06,2.84.31,6.25-.59,9.36-5.81,15.98-18.29,28.06-33.93,34.33ZM357.58,162.35c14.98-13.1,26.59-33,29.46-52.79.35-6.51-.7-12.96-7.08-13.88-16.15.85-26.4,28.67-29.6,43-1.63,6.45-5.72,30.04,7.21,23.68Z" />
                <path d="M439.96,134.03c-5.27,19.2-8.62,42.69,8.88,54.88,7.97,3.91,18.89-6.69,19.62,8.96-5.45,30.92-52.05,30.45-49.63-15.39-.64-17.79,2.53-34.93,7.29-51.87,3.52-12.23,19.49-45.96,4.54-53.54-16.59,2.36-15.91-24.97-1.44-25.2,8.34-.69,11.29,8.04,13.86,14.51,2.47,5.74,1.62,12.3,3.89,18.01.21.52,2.63-1.86,2.74-2.05,7.84-12.17,22.48-30.01,37.09-33.46,41.34-2.62,14.76,39.54,9.17,60.28,0,0-7.19,24.18-7.19,24.18-2.31,7.7-5.56,31.16,5.87,28.38,3.32-.93,6.72-3.48,8.24-6.56,2.94-6.25-1.29-13.84,2.46-19.94,6.22-9.35,17.12-4.39,19.52,5.23,1.26,6.66-1.71,12.14-4.14,18.04-5.49,13.32-17.62,25.49-32.88,24.36-9.99-.29-22.34-6.75-19.88-18.87,4.65-19.56,15.75-52.89,21.23-72.74,1.58-5.34,3.52-15.95-2.73-18.85-23.56-8.45-41.27,43.91-46.52,61.65Z" />
              </g>
              <g transform="translate(540, 110)">
                <path fill="var(--color-primary)" d="M9.58,192.84c-1.85-1.16,2.24-6.62.54-13.81-2.11-8.92-11.18-12.28-10.02-14.92,1.16-2.63,9.67,1.92,18.77-1.66,9.5-3.73,13.25-13.8,15.1-12.84,1.75.91-3.66,8.89-.72,16.68,3.04,8.04,12.75,9.98,12.02,12.56-.7,2.47-9.29-.63-19.19,3.23-9.97,3.88-14.34,12.12-16.5,10.76Z" transform="translate(-10, -175) scale(1.0)" />
              </g>
            </svg>
          </div>
        </div>

        <div className="hero-bottom-corner-text">
          <span>Valentina Arbeláez</span>
          <span>Diseñadora Gráfica</span>
        </div>
      </div>

      <div className="stacked-categories-container">
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
                  <span className="card-number">{cat.number}</span>
                </div>
                <div className="card-bottom">
                  <p className="card-desc">{cat.desc}</p>
                  <div className="card-image-wrapper">
                    <img src={cat.image} alt={cat.title} />
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
