import React from 'react';
import './ProjectDetailPage.css';

// Import images
import valenLogoWhite from '../assets/images/ValenBlanco.png';
import keyRed from '../assets/images/LlaveRoja.png';
import mapa1 from '../assets/images/Mapa_1.png';
import mapa2 from '../assets/images/mapa_2.png';

interface ProjectDetailPageProps {
  id: number;
  onBack: () => void;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ id, onBack }) => {
  return (
    <div className="project-detail-page">
      <div className="detail-container">
        {/* Left Sidebar */}
        <div className="detail-sidebar">
          <div className="sidebar-logo">
            <img src={valenLogoWhite} alt="Valen" className="logo-white" />
          </div>
          
          <div className="sidebar-content">
            <h1 className="project-title-large">Jardín del tiempo</h1>
            <h2 className="project-subtitle-large">MAPA DE LAURELES</h2>
            
            <div className="project-meta">
              <span className="meta-star">*</span>
              <span className="meta-text">Proyecto académico — 2025</span>
            </div>
            
            <p className="project-description-large">
              Se construye desde la idea de dualidad: un lugar donde conviven memoria y proyección, 
              siendo un jardín donde hay un puente entre el pasado y el futuro. A través de recorridos 
              y puntos clave, se ve el encuentro entre lo que permanece y lo que cambia.
            </p>
            
            <div className="project-credits">
              <h3>CRÉDITOS</h3>
              <ul>
                <li>DG. Sofía Alzate</li>
                <li>DG. Sofía Restrepo</li>
                <li>DG. Ana Sofía Patiño</li>
                <li>DG. Valentina Arbeláez</li>
              </ul>
            </div>
            
            <div className="sidebar-icon">
              <img src={keyRed} alt="Key" className="key-icon-detail" />
            </div>
          </div>

          <div className="sidebar-footer">
            <div className="stamp-box-pink">
              <span>04.</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="detail-main">
          <div className="maps-container">
            <div className="map-item top-map">
              <img src={mapa1} alt="Mapa de Laureles" />
              <span className="map-caption">Mapa de Laureles, Comuna 11</span>
            </div>
            <div className="map-item bottom-map">
              <img src={mapa2} alt="Retiro con recomendaciones" />
              <span className="map-caption align-right">Retiro con recomendaciones locales</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <footer className="detail-footer">
        <span>+57 311 360 6718</span>
        <span className="footer-star">*</span>
        <span>valenarbelaezd.wixsite.com</span>
        <span className="footer-star">*</span>
        <span>valearbelaez.06@gmail.com</span>
        <span className="footer-star">*</span>
        <span>Medellín * Colombia 2026</span>
        <span className="footer-star">*</span>
        <span>Derechos Reservados</span>
      </footer>
      
      {/* Back Button (Floating or Integrated) */}
      <button className="back-button" onClick={onBack}>
        VOLVER
      </button>
    </div>
  );
};

export default ProjectDetailPage;
