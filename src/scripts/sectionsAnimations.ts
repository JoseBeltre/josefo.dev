import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

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

  const title = section.querySelector('.section-title')
  if (!title) {
    console.warn('Titulo de la sección: ' + section + '. No encontrado.')
    return
  }
  const splitTitle = SplitText.create(title, { type: 'words' })

  gsap.timeline({
      scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    }
  })
  .from(badge, {
    rotate: 15,
    yPercent: 200,
    duration: 2,
    opacity: 0,
    ease: 'elastic.out',
  })
  .from(splitTitle.words, {
    yPercent: 100,
    opacity: 0,
    stagger: 0.1,
    ease: 'power2.out'
  }, "<")
})
})