import type { AstroComponentFactory } from 'astro/runtime/server/index.js'
import LandingPageIcon from '../components/icons/LandingPageIcon.astro'
import WebsiteIcon from '../components/icons/WebsiteIcon.astro'
import DashboardIcon from '../components/icons/DashboardIcon.astro'

export interface Service {
  id: string,
  title: string,
  description: string,
  price: number,
  features: string[],
  icon: AstroComponentFactory
}

export const services: Service[] = [
  {
    id: 'landing',
    title: 'Landing page profesional',
    description:
      'Una página de inicio tipo scroll que refleja tu marca y comunica con claridad tu propuesta. Incluye animaciones, diseño visual atractivo y funcionalidades esenciales.',
    price: 150,
    features: [
      '1 página tipo scroll (Inicio)',
      'Diseño visual personalizado basado en tu marca',
      'Hasta 5 secciones (Hero, Servicios, Sobre mí, Testimonios, Contacto)',
      'Animaciones básicas (scroll reveal, hover, etc.)',
      'Formulario de contacto funcional con notificación a tu email',
      'Sitio 100% responsive (móvil, tablet y escritorio)',
      'Optimización de rendimiento y carga',
      'Entrega en código o publicación en hosting (opcional)',
    ],
    icon: LandingPageIcon
  },
  {
    id: 'multi-page',
    title: 'Sitio web multipágina',
    description:
      'Un sitio completo de 3 a 5 páginas con navegación fluida, diseño consistente y presencia profesional en línea. Ideal para negocios, portafolios y servicios.',
    price: 300,
    features: [
      '3 a 5 páginas: Inicio, Servicios, Portafolio, Sobre mí, Contacto',
      'Menú de navegación animado',
      'Formulario de contacto conectado a tu correo',
      'Secciones personalizadas y diseño coherente con la identidad visual',
      'Responsive design completo',
      'Hosting y dominio: asesoría en la compra e implementación',
    ],
    icon: WebsiteIcon
  },
  {
    id: 'dashboard',
    title: 'Dashboard o panel administrativo',
    description:
      'Un panel funcional para administrar datos de forma eficiente. Incluye autenticación, CRUD, y un diseño moderno para facilitar la gestión interna.',
    price: 400,
    features: [
      'Sistema de autenticación (login/logout)',
      'Página de inicio con métricas básicas',
      'Listado de datos con filtros, búsqueda y paginación',
      'Creación, edición y eliminación de datos (CRUD)',
      'Conexión a base de datos (simulada o real según el alcance)',
      'Diseño visual moderno y limpio',
    ],
    icon: DashboardIcon
  },
]
