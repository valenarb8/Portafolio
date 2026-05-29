import mapa1 from '../assets/images/Mapa_1.png';
import mapa2 from '../assets/images/mapa_2.png';
import conmigo1 from '../assets/images/ConmigoSiempre.png';
import conmigo2 from '../assets/images/ConmigoSiempre2.png';
import conmigo3 from '../assets/images/ConmigoSiempre3.png';
import retro1 from '../assets/images/PortadaRetroMotion.png';
import retroContra from '../assets/images/Conrtraportadaa.png';
import retro2 from '../assets/images/OrquestaDeEnsueñoMockup.png';
import habitados1 from '../assets/images/EcosLatinos1.png';
import habitados2 from '../assets/images/EcosLatinos2.png';
import habitados3 from '../assets/images/EcosLatinos3.png';
import flores1 from '../assets/images/Furoshiki.png';
import flores2 from '../assets/images/FuroshikiEnUso.png';
import flores3 from '../assets/images/postalRetiroMockup.png';
import flores4 from '../assets/images/tiroMockupPostal.png';
import hogar1 from '../assets/images/Casa1Mockup.png';
import hogar2 from '../assets/images/Casa2Mockup.png';
import alma1 from '../assets/images/AgendaTigres2024.png';
import alma2 from '../assets/images/AlmaCotidianaPajaros.png';
import alma3 from '../assets/images/AlmaCotidianaSeparador.png';
import ritual1 from '../assets/images/RitualYMesaPoster.png';
import ritual2 from '../assets/images/MenuRitualYMesa1.png';
import ritual2_2 from '../assets/images/MenuRitualYMesa2.png';
import ritual3 from '../assets/images/R&MCaja.png';
import artesano1 from '../assets/images/SoyArtesanoPoster.png';
import artesano2 from '../assets/images/Artesanocartas.png';
import artesano3 from '../assets/images/ArtesanoRetiroNuevo.png';
import artesano4 from '../assets/images/FosforosArtesano.png';
import knela1 from '../assets/images/Cajaknela.png';
import knela2 from '../assets/images/CupholderKnela.png';
import knela3 from '../assets/images/KnelaVaso.png';

export interface ProjectInfo {
  label: string;
  value: string;
}

export interface ProjectImage {
  url: string;
  caption: string;
  halfWidth?: boolean;
  thirdWidth?: boolean;
  autoHeight?: boolean;
}

export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: 'EDITORIAL' | 'ILUSTRACIÓN' | 'BRANDING';
  info: ProjectInfo[];
  images: ProjectImage[];
  noFeatured?: boolean;
  singleFeatured?: boolean;
}
export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'Jardin del Tiempo',
    subtitle: 'MAPA DE LAURELES',
    category: 'EDITORIAL',
    description: 'Se construye desde la idea de dualidad: un lugar donde\nconviven memoria y proyección, siendo un jardín donde hay\nun puente entre el pasado y el futuro. A través de recorridos\ny puntos clave, se ve el encuentro entre lo que permanece\ny lo que ha cambiado con el tiempo.',
    info: [
      { label: 'PROYECTO ACADÉMICO', value: '2025' },
      { label: 'CRÉDITOS', value: 'DG. Sofía Alzate, DG. Sofía Restrepo, DG. Ana Sofía Patiño, DG. Valentina Arbeláez' }
    ],
    images: [
      { url: mapa1, caption: 'Tiro' },
      { url: mapa2, caption: 'Retiro' },
      { url: mapa1, caption: 'Detalle Tiro' },
      { url: mapa2, caption: 'Detalle Retiro' }
    ]
  },
  {
    id: 2,
    title: 'Conmigo, siempre',
    subtitle: 'CUENTO ILUSTRADO',
    category: 'EDITORIAL',
    description: 'A través de este proyecto, se busca tratar temas de familia e identidad con una visión nostálgica por medio de metáforas visuales, recorriendo un camino de aprendizaje, introspección y pasos de crecimiento personal.',
    info: [
      { label: 'PROYECTO ACADÉMICO', value: '2025' },
      { label: 'CRÉDITOS', value: 'Valentina Arbeláez' }
    ],
    singleFeatured: true,
    images: [
      { url: conmigo1, caption: 'Portada' },
      { url: conmigo2, caption: 'Detalle de composición' },
      { url: conmigo3, caption: 'Páginas interiores' }
    ]
  },
  {
    id: 3,
    title: 'Retro Motion',
    subtitle: 'REVISTA DE CINE',
    category: 'EDITORIAL',
    description: 'Proyecto editorial que busca revivir la magia del cine en su era dorada, potenciando los estilos que se usaban antes en tipografía e ilustración, mezclándolos con temas, tendencias y filmes de la actualidad.',
    info: [
      { label: 'PROYECTO ACADÉMICO', value: '2025' },
      { label: 'CRÉDITOS', value: 'DG. Sofía Medina, DG. Sofía Álvarez, DG. Sofía Restrepo, DG. Valentina Arbeláez' }
    ],
    images: [
      { url: retro1, caption: 'Portada' },
      { url: retroContra, caption: 'Contraportada' },
      { url: retro2, caption: 'Orquesta de ensueño - Interior' }
    ]
  },
  {
    id: 4,
    title: 'Habitados',
    subtitle: 'ECOS LATINOS',
    category: 'ILUSTRACIÓN',
    description: 'Serie de pósters inspirados en la nostalgia de las vivencias y tradiciones latinas. Utiliza colores cálidos y un estilo acogedor para evocar recuerdos de infancia y espacios habitados.',
    info: [
      { label: 'PROYECTO ACADÉMICO', value: '2025' },
      { label: 'CRÉDITOS', value: 'Valentina Arbeláez' }
    ],
    noFeatured: true,
    images: [
      { url: habitados1, caption: 'Serie de pósters', thirdWidth: true },
      { url: habitados2, caption: 'Tradiciones y vivencias', thirdWidth: true },
      { url: habitados3, caption: 'Espacios habitados', thirdWidth: true }
    ]
  },
  {
    id: 5,
    title: 'En las flores',
    subtitle: 'FUROSHIKI',
    category: 'ILUSTRACIÓN',
    description: 'Representa un jardín donde flores y feminidad crean curvas orgánicas. Los tonos rojos y azules crean una atmósfera profunda y envolvente con una inspiración japonesa.',
    info: [
      { label: 'PROYECTO ACADÉMICO', value: '2024' },
      { label: 'CRÉDITOS', value: 'Valentina Arbeláez' }
    ],
    noFeatured: true,
    images: [
      { url: flores1, caption: 'Diseño textil Furoshiki', halfWidth: true, autoHeight: true },
      { url: flores2, caption: '', halfWidth: true, autoHeight: true },
      { url: flores3, caption: 'Postal', halfWidth: true, autoHeight: true },
      { url: flores4, caption: 'Postal tiro', halfWidth: true, autoHeight: true }
    ]
  },
  {
    id: 6,
    title: 'Hogar',
    subtitle: 'ILUSTRACIONES',
    category: 'ILUSTRACIÓN',
    description: 'Explora la nostalgia del hogar pasado mediante ilustraciones que reconstruyen escenas y objetos desde la memoria, evocando refugio, pertenencia e intimidad.',
    info: [
      { label: 'PROYECTO PERSONAL', value: '2025' },
      { label: 'CRÉDITOS', value: 'Valentina Arbeláez' }
    ],
    noFeatured: true,
    images: [
      { url: hogar1, caption: 'Reconstrucción de memoria 1', halfWidth: true, autoHeight: true },
      { url: hogar2, caption: 'Reconstrucción de memoria 2', halfWidth: true, autoHeight: true }
    ]
  },
  {
    id: 7,
    title: 'Alma cotidiana',
    subtitle: 'AGENDA',
    category: 'ILUSTRACIÓN',
    description: 'Agenda ilustrada diseñada como acompañamiento emocional. Utiliza símbolos naturales, flores y elementos celestes para crear un ambiente íntimo que invita a la consciencia diaria.',
    info: [
      { label: 'PROYECTO PERSONAL', value: '2024' },
      { label: 'CRÉDITOS', value: 'Valentina Arbeláez' }
    ],
    noFeatured: true,
    images: [
      { url: alma1, caption: 'Diseño de portada e interior', halfWidth: true, autoHeight: true },
      { url: alma2, caption: 'Diseño de pájaros', halfWidth: true, autoHeight: true },
      { url: alma3, caption: 'Separador de agenda' }
    ]
  },
  {
    id: 8,
    title: 'Ritual & Mesa',
    subtitle: 'RESTAURANTE JUVENIL',
    category: 'BRANDING',
    description: 'Marca de comida juvenil que propone la cocina como espacio de encuentro, combinando sabores cercanos con una estética fresca y experiencial.',
    info: [
      { label: 'PROYECTO ACADÉMICO', value: '2024' },
      { label: 'CRÉDITOS', value: 'DG. Sofía Mendoza, DG. Sofía Restrepo, DG. Ana Sofía Patiño, DG. Valentina Arbeláez' }
    ],
    images: [
      { url: ritual1, caption: 'Póster de marca' },
      { url: ritual2, caption: 'Menú y diseño editorial (1)', halfWidth: true },
      { url: ritual2_2, caption: 'Menú y diseño editorial (2)', halfWidth: true },
      { url: ritual3, caption: 'Empaque y ritual' }
    ]
  },
  {
    id: 9,
    title: 'Artesano',
    subtitle: 'EL ARTE CON LAS MANOS',
    category: 'BRANDING',
    description: 'Marca que transforma el acto de crear en un ritual cotidiano\na través de gráficas y texturas inspiradas en la experiencia\nde jugar con el arte y la creatividad.',
    info: [
      { label: 'PROYECTO ACADÉMICO', value: '2024' },
      { label: 'CRÉDITOS', value: 'Valentina Arbeláez' }
    ],
    images: [
      { url: artesano1, caption: 'Póster Artesano' },
      { url: artesano2, caption: 'Cartas y texturas' },
      { url: artesano3, caption: 'Retiro', halfWidth: true },
      { url: artesano4, caption: 'Fósforos', halfWidth: true }
    ]
  },
  {
    id: 10,
    title: 'Knela Artesanal',
    subtitle: 'COCINA Y REPOSTERÍA',
    category: 'BRANDING',
    description: 'Marca de repostería inspirada en la estética vintage y sentimientos familiares, rescatando lo tradicional a través\nde sabores reconfortantes y una presentación cuidada.',
    info: [
      { label: 'PROYECTO ACADÉMICO', value: '2024' },
      { label: 'CRÉDITOS', value: 'DG. Sofía Mendoza, DG. Sofía Restrepo, DG. Ana Sofía Patiño, DG. Valentina Arbeláez' }
    ],
    images: [
      { url: knela1, caption: 'Empaque caja' },
      { url: knela3, caption: 'Vaso corporativo', halfWidth: true },
      { url: knela2, caption: 'Mockup de Cupholder', halfWidth: true }
    ]
  }
];
