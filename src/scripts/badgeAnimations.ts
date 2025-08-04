import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const sections: string[] = [ 'servicios', 'proceso', 'portfolio', 'sobre-mi', 'contacto']

document.addEventListener('DOMContentLoaded', () => {
  sections.forEach(sectionName => {
  const section = document.querySelector(`#${sectionName}`)
  if (!section) {
    console.warn('Sección: ' + section + '. No encontrada.')
    return
  }
  const badge = section.querySelector('.badge')
  if (!badge) {
    console.warn('Badge de la sección: ' + section + '. No encontrado.')
    return
  }


  gsap.from(badge, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    },
    rotate: 15,
    yPercent: 200,
    duration: 2,
    opacity: 0,
    ease: 'elastic.out',
  })
})
})