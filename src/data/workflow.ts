export interface Projectid {
  id: number
  title: string
  description: string
}

export const workflow: Projectid[] = [
  {
    id: 1,
    title: 'Primera reunión',
    description:
      'Conozco tu idea, metas y lo que necesitas. Hablamos de lo esencial para entender tu proyecto.',
  },
  {
    id: 2,
    title: 'Propuesta preliminar',
    description:
      'Te presento un diseño básico o maqueta que refleje tu visión. Aquí afinamos detalles.',
  },
  {
    id: 3,
    title: 'Presupuesto y acuerdo',
    description:
      'Establezco un presupuesto claro y formalizamos todo con un contrato digital.',
  },
  {
    id: 4,
    title: 'Desarrollo del proyecto',
    description:
      'Empieza la construcción. Te mantengo informado del avance y puedes dar feedback.',
  },
  {
    id: 5,
    title: 'Entrega y revisión final',
    description:
      'Presento el trabajo completo y hacemos los ajustes necesarios para dejarlo perfecto.',
  },
  {
    id: 6,
    title: 'Soporte y asesoría',
    description:
      'Te doy seguimiento durante un tiempo (dependiendo del proyecto) por si necesitas ayuda o ajustes menores.',
  },
]
