import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import stampStar from '../assets/images/SelloEstrella.png';
import profilePic from '../assets/images/Fotovalen.png';

interface HomePageProps {
  onNavigateToAbout: () => void;
  onNavigateToProjects: (category: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToAbout, onNavigateToProjects }) => {
  const [activeId, setActiveId] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const featuredProjects = [
    { id: 1, title: 'Botanical Lab', category: 'Editorial', image: profilePic },
    { id: 2, title: 'Rise & Glow', category: 'Marca', image: profilePic },
    { id: 3, title: 'Ilustración Vol. 1', category: 'Ilustración', image: profilePic },
    { id: 4, title: 'Editorial Vol. 2', category: 'Editorial', image: profilePic },
    { id: 5, title: 'Personal Brand', category: 'Marca', image: profilePic },
    { id: 6, title: 'Nature Series', category: 'Ilustración', image: profilePic },
  ];

  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      threshold: 0.7, // Card must be 70% visible to be active
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-id'));
          setActiveId(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observer each gallery card
    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="polaroid-container">
            <div className="polaroid-frame">
              <img src={profilePic} alt="Valen" className="polaroid-img" />
            </div>
            {/* Added multiple polaroids for the "collage" effect from reference */}
            <div className="polaroid-frame stack-1">
              <img src={profilePic} alt="Valen" className="polaroid-img gray" />
            </div>
            <div className="polaroid-frame stack-2">
              <img src={profilePic} alt="Valen" className="polaroid-img" />
            </div>
          </div>

          <div className="hero-text-area">
            <div className="hero-names">
              <h1 className="name-top">Valentina</h1>
              <h1 className="name-bottom">Arbeláez</h1>
            </div>
            <div className="hero-subtitle">
              <p>DISEÑADORA GRÁFICA</p>
              <img src={stampStar} alt="*" className="hero-star" />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="decor-star star-1">
          <img src={stampStar} alt="*" />
        </div>
        <div className="decor-star star-2">
          <img src={stampStar} alt="*" />
        </div>
        <div className="grid-overlay"></div>
      </div>

      <div className="project-gallery-section">
        <div className="gallery-container" ref={containerRef}>
          {featuredProjects.map((project) => (
            <div 
              key={project.id} 
              data-id={project.id}
              className={`gallery-card ${activeId === project.id ? 'active' : ''}`}
              onClick={() => onNavigateToProjects(project.category.toUpperCase())}
            >
              <img src={project.image} alt={project.title} className="gallery-img" />
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <h3 className="overlay-title">{project.title}</h3>
                  <p className="overlay-category">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <button className="cta-button" onClick={onNavigateToAbout}>
          CONOCER MÁS SOBRE MÍ
        </button>
      </div>
    </div>
  );
};

export default HomePage;
