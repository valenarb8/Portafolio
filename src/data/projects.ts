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
import hogar1 from '../assets/images/Casa1Mockup.png';
import hogar2 from '../assets/images/Casa2Mockup.png';
import alma1 from '../assets/images/AgendaTigres2024.png';
import ritual1 from '../assets/images/RitualYMesaPoster.png';
import ritual2 from '../assets/images/MenuRitualYMesa1.png';
import ritual3 from '../assets/images/R&MCaja.png';
import artesano1 from '../assets/images/SoyArtesanoPoster.png';
import artesano2 from '../assets/images/Artesanocartas.png';
import knela1 from '../assets/images/Cajaknela.png';
import knela2 from '../assets/images/KnelaDelantal.png';
import knela3 from '../assets/images/KnelaVaso.png';

export interface ProjectInfo {
  label: string;
  value: string;
}

export interface ProjectImage {
  url: string;
  caption: string;
}

export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: 'EDITORIAL' | 'ILUSTRACIÓN' | 'BRANDING';
  info: ProjectInfo[];
  images: ProjectImage[];
}
export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'Jardin del Tiempo',
    subtitle: 'MAPA DE LAURELES',
    category: 'EDITORIAL',
    description: 'Se construye desde la idea de dualidad: un lugar donde conviven memoria y proyección, siendo un jardín donde hay un puente entre el pasado y el futuro. A través de recorridos y puntos clave, se ve el encuentro entre lo que permanece y lo que cambia.',
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
    images: [
      { url: conmigo1, caption: 'Portada' },
      { url: conmigo1, caption: 'Contraportada' },
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
    images: [
      { url: habitados1, caption: 'Serie de pósters' },
      { url: habitados2, caption: 'Tradiciones y vivencias' },
      { url: habitados3, caption: 'Espacios habitados' }
    ]
  },
  {
    id: 5,
    title: 'En las flores',
    subtitle: 'FUROSHIKI',
    category: 'ILUSTRACIÓN',
    description: 'Representa un jardín donde flores y feminidad se expanden en curvas orgánicas. Los tonos rojos y azules crean una atmósfera profunda y envolvente con una inspiración japonesa sutil.',
    info: [
      { label: 'PROYECTO ACADÉMICO', value: '2024' },
      { label: 'CRÉDITOS', value: 'Valentina Arbeláez' }
    ],
    images: [
      { url: flores1, caption: 'Diseño textil Furoshiki' },
      { url: flores2, caption: 'Detalle de uso y texturas' }
    ]
  },
  {
    id: 6,
    title: 'Hogar',
    subtitle: 'ILUSTRACIONES',
    category: 'ILUSTRACIÓN',
    description: 'Explora la nostalgia del hogar pasado mediante ilustraciones que reconstruyen escenas y objetos desde la memory, evocando refugio, pertenencia e intimidad.',
    info: [
      { label: 'PROYECTO PERSONAL', value: '2025' },
      { label: 'CRÉDITOS', value: 'Valentina Arbeláez' }
    ],
    images: [
      { url: hogar1, caption: 'Reconstrucción de memoria 1' },
      { url: hogar2, caption: 'Reconstrucción de memoria 2' }
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
    images: [
      { url: alma1, caption: 'Diseño de portada e interior' }
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
      { url: ritual2, caption: 'Menú y diseño editorial' },
      { url: ritual3, caption: 'Empaque y ritual' }
    ]
  },
  {
    id: 9,
    title: 'Artesano',
    subtitle: 'EL ARTE CON LAS MANOS',
    category: 'BRANDING',
    description: 'Marca que transforma el acto de crear en un ritual cotidiano a través de gráficas y texturas inspiradas en la experiencia de jugar con el arte y la creatividad.',
    info: [
      { label: 'PROYECTO ACADÉMICO', value: '2024' },
      { label: 'CRÉDITOS', value: 'Valentina Arbeláez' }
    ],
    images: [
      { url: artesano1, caption: 'Póster Artesano' },
      { url: artesano2, caption: 'Cartas y texturas' }
    ]
  },
  {
    id: 10,
    title: 'Knela Artesanal',
    subtitle: 'COCINA Y REPOSTERÍA',
    category: 'BRANDING',
    description: 'Marca de repostería inspirada en la estética vintage y sentimientos familiares, rescatando lo tradicional a través de sabores reconfortantes y una presentación cuidada.',
    info: [
      { label: 'PROYECTO ACADÉMICO', value: '2024' },
      { label: 'CRÉDITOS', value: 'DG. Sofía Mendoza, DG. Sofía Restrepo, DG. Ana Sofía Patiño, DG. Valentina Arbeláez' }
    ],
    images: [
      { url: knela1, caption: 'Caja Knela' },
      { url: knela2, caption: 'Detalle de marca en delantal' },
      { url: knela3, caption: 'Packaging de vasos' }
    ]
  }
];
