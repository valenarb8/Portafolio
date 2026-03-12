import './App.css';

// Import images
import profilePic from './assets/images/Fotovalen.png';
import valenLogo from './assets/images/ValenRojo.png';
import valenLogoWhite from './assets/images/ValenBlanco.png';
import keyRed from './assets/images/LlaveRoja.png';
import keyGreen from './assets/images/LlaveVerde.png';
import keyPink from './assets/images/Llaverosada.png';
import keychain from './assets/images/Llavero.png';
import stampStar from './assets/images/SelloEstrella.png';
import stampApple from './assets/images/SelloManzana.png';
import stampDog from './assets/images/SelloPerrito.png';
import stampMug from './assets/images/SelloTaza.png';
import lockBlue from './assets/images/Candadoazul.png';
import lockPink from './assets/images/Candadorosa.png';

function App() {
  return (
    <div className="portfolio-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-logo-container">
          <img src={valenLogoWhite} alt="Valen Blanco" className="nav-logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">INICIO</a></li>
          <li><a href="#">SOBRE MÍ</a></li>
          <li><a href="#">PROYECTOS</a></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="header-section">
        <div className="header-left">
          <div className="profile-wrapper">
            <img src={profilePic} alt="Valentina Arbeláez" className="profile-pic" />
          </div>
        </div>
        <div className="header-right">
          <div className="title-area">
            <img src={valenLogo} alt="Valen" className="logo-valen" />
            <div className="subtitle">
              <h2>Valentina Arbeláez</h2>
              <h3>Diseñadora gráfica</h3>
            </div>
          </div>
          
          <div className="emphasis-area">
            <h3 className="section-title">Énfasis</h3>
            <div className="stamps-container">
              <div className="stamp-item">
                <div className="stamp-box">
                  <img src={keyPink} alt="Llave rosa" className="stamp-icon" />
                </div>
                <span>*Editorial</span>
              </div>
              <div className="stamp-item">
                <div className="stamp-box">
                  <img src={keyRed} alt="Llave roja" className="stamp-icon" />
                </div>
                <span>*Ilustración</span>
              </div>
              <div className="stamp-item">
                <div className="stamp-box y-bg">
                  <img src={keyGreen} alt="Llave verde" className="stamp-icon" />
                </div>
                <span>*Marca</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="main-section">
        <div className="col-left">
          <div className="bio-container">
            <div className="bio-blob"></div>
            <p className="bio-intro">
              <strong>Soy Valentina Arbeláez, diseñadora gráfica en formación, me interesa principalmente la ilustración y el diseño editorial.</strong>
            </p>
            <p className="bio-text">
              Disfruto de las técnicas análogas, soy adaptable, atenta al detalle y estratégica al momento de organizar y ejecutar ideas. Valoro el trabajo colaborativo, la creatividad y la búsqueda constante de soluciones innovadoras que potencien cada propuesta.
            </p>
          </div>
        </div>
        
        <div className="col-center">
          <div className="education-section">
            <h2 className="section-title">Formación<br/>académica</h2>
            <p className="edu-text">
              Pregrado Diseño Gráfico<br/>
              Universidad Pontificia<br/>
              Bolivariana | 2023 - Actual<br/>
              Medellín, Colombia
            </p>
            <div className="honor-badge">
              <span className="asterisk">*</span>
              <p>Distinción académica<br/>Núcleo Profesional I<br/>| 2025 -01<br/>Ecos Latinos</p>
            </div>
            <img src={keychain} alt="Llavero" className="education-img" />
          </div>
          
          <div className="tools-section">
            <h2 className="section-title">Herramientas</h2>
            <ul className="tools-list">
              <li><span className="tool-name">Ai</span> <div className="tool-line"><img src={stampStar} alt="*" className="tool-star" style={{left: '80%'}}/></div></li>
              <li><span className="tool-name">Ps</span> <div className="tool-line"><img src={stampStar} alt="*" className="tool-star" style={{left: '85%'}}/></div></li>
              <li><span className="tool-name">Id</span> <div className="tool-line"><img src={stampStar} alt="*" className="tool-star" style={{left: '68%'}}/></div></li>
              <li><span className="tool-name">Ae</span> <div className="tool-line"><img src={stampStar} alt="*" className="tool-star" style={{left: '68%'}}/></div></li>
              <li><span className="tool-name">Pr</span> <div className="tool-line"><img src={stampStar} alt="*" className="tool-star" style={{left: '68%'}}/></div></li>
            </ul>
          </div>
        </div>
        
        <div className="col-right">
          <div className="interests-section">
            <h2 className="section-title">Intereses</h2>
            <div className="interests-grid">
              <div className="interest-item">
                <div className="stamp-box-interest">
                  <img src={stampDog} alt="Animales" />
                </div>
                <span>Animales</span>
              </div>
              <div className="interest-item">
                <div className="stamp-box-interest">
                  <img src={stampMug} alt="Cerámica" />
                </div>
                <span>Cerámica</span>
              </div>
              <div className="interest-item">
                <div className="stamp-box-interest star-bg">
                  <img src={stampStar} alt="La astrología" className="star-interest" />
                </div>
                <span>La astrología</span>
              </div>
              <div className="interest-item">
                <div className="stamp-box-interest apple-bg">
                  <img src={stampApple} alt="La cocina" />
                </div>
                <span>La cocina</span>
              </div>
            </div>
          </div>
          
          <div className="languages-section">
            <h2 className="section-title">Idiomas</h2>
            <div className="language-item">
              <img src={lockBlue} alt="Candado azul" />
              <div className="lang-text">
                <strong>Español</strong>
                <span>C2 — Nativo</span>
              </div>
            </div>
            <div className="language-item">
              <img src={lockPink} alt="Candado rosa" />
              <div className="lang-text">
                <strong>Inglés</strong>
                <span>B2 — Avanzado</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer-section">
        <span>valenarbelaezd.wixsite.com</span>
        <span className="footer-star">*</span>
        <span>+57 311 360 6718</span>
        <span className="footer-star">*</span>
        <span>valearbelaez.06@gmail.com</span>
        <span className="footer-star">*</span>
        <span>Medellín , Colombia <strong>2024</strong></span>
        <span className="footer-star">*</span>
        <span>Derechos Reservados</span>
      </footer>
    </div>
  );
}

export default App;
