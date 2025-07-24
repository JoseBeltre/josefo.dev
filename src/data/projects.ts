export interface Project {
  name: string
  projectType: string
  description: string
  goal: string
  images: string[]
}

export const projects: Project[] = [
  {
    name: 'Colmado Cesar',
    projectType: 'App web',
    description: 'Aplicación web diseñada para la gestión de ventas y registro de entradas y salidas de dinero en un colmado dominicano. Incluye una interfaz simple, funcional y adaptada al cliente.',
    goal: 'Facilitar el control financiero diario del colmado, permitiendo registrar ingresos, egresos y generar reportes mensuales.',
    images: [
      'colmado-cesar/1.webp',
      'colmado-cesar/2.webp',
      'colmado-cesar/3.webp',
      'colmado-cesar/4.webp'
    ]
  }
]
