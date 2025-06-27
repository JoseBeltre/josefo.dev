export interface Project {
  name: string
  projectType: string
  description: string
  goal: string
  images: string[]
}

export const projects: Project[] = [
  {
    name: 'Colmado César',
    projectType: 'App web',
    description: 'Aplicación web diseñada para la gestión de ventas y registro de entradas y salidas de dinero en un colmado dominicano. Incluye una interfaz simple, funcional y adaptada al cliente.',
    goal: 'Facilitar el control financiero diario del colmado, permitiendo registrar ingresos, egresos y generar reportes mensuales.',
    images: [
      'colmado-cesar/1.jpg',
      'colmado-cesar/2.jpg',
      'colmado-cesar/3.jpg'
    ]
  },
  // {
  //   name: 'JosefoDev Portfolio',
  //   projectType: 'Sitio web personal',
  //   description: 'Landing page profesional donde presento mis servicios como desarrollador web. Diseño atractivo con scroll, animaciones, y sección de contacto.',
  //   goal: 'Consolidar mi marca personal y captar clientes potenciales a través de una presentación clara de mis servicios y trabajos.',
  //   images: [
  //     'portfolio/1.jpg',
  //     'portfolio/2.jpg',
  //     'portfolio/3.jpg'
  //   ]
  // },
  {
    name: 'Concesionaria de Autos',
    projectType: 'Landing + Inventario + Dashboard',
    description: 'Landing page diseñada para una concesionaria de autos con un buscador de inventario público e intuitivo. La página incluye filtros, sección de contacto y presentación de los vehículos. También posee un panel administrativo para gestionar autos, categorías y datos del sitio.',
    goal: 'Ofrecer una plataforma moderna para que los clientes puedan explorar el inventario disponible y que el concesionario pueda administrarlo fácilmente desde un panel seguro.',
    images: [
      'colmado-cesar/1.jpg',
      'colmado-cesar/2.jpg',
      'colmado-cesar/3.jpg',
      'colmado-cesar/4.jpg'
    ]
  }
]
