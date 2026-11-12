'use client'
import { useEffect } from 'react'

const LABELS = ['Beranda', 'Industri', 'Kanal', 'Platform', 'Kebutuhan', 'Ekosistem', 'Mulai']

export default function Behavior() {
  useEffect(() => {
    const $ = (id) => document.getElementById(id)
    const m = $('menu'), n = $('nav'), ic = m.firstElementChild.firstElementChild
    const scrollTo_ = (el) => el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const off = []

    m.onclick = () => {
      const o = n.classList.toggle('open')
      m.setAttribute('aria-expanded', o)
      ic.setAttribute('href', o ? '#x' : '#menu')
    }
    n.querySelectorAll('a').forEach((a) => (a.onclick = () => n.classList.remove('open')))
    document.querySelectorAll('.pt').forEach((p) => (p.onclick = () => scrollTo_($(p.dataset.target))))

    const secs = [...document.querySelectorAll('section')]
    const dots = document.createElement('div')
    dots.className = 'dots'
    dots.setAttribute('aria-label', 'Navigasi section')
    secs.forEach((s, i) => {
      const a = document.createElement('a')
      a.href = '#' + s.id
      a.title = LABELS[i]
      a.setAttribute('aria-label', LABELS[i])
      dots.append(a)
    })
    document.body.append(dots)

    const margin = { rootMargin: '-45% 0px -45% 0px' }
    const links = [...n.querySelectorAll('a')]
    const spy = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return
      dots.querySelectorAll('a').forEach((a) => a.classList.toggle('on', a.hash === '#' + e.target.id))
      links.forEach((l) => l.toggleAttribute('aria-current', l.hash === '#' + e.target.id))
    }), margin)
    secs.forEach((s) => spy.observe(s))

    const rv = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return
      const t = e.target
      t.style.transitionDelay = t.dataset.d + 'ms'
      t.classList.add('in')
      setTimeout(() => (t.style.transitionDelay = ''), 1000)
      rv.unobserve(t)
    }), { threshold: 0.15 })
    secs.forEach((s) => s.querySelectorAll('.hd,.card,.cap,.fd,.route,.claim,.flow,.cta,.hero>*').forEach((el, i) => {
      el.classList.add('rv')
      el.dataset.d = Math.min(i, 8) * 70
      rv.observe(el)
    }))

    const onNav = (e) => {
      const a = e.target.closest('a')
      if (!a) return
      e.preventDefault()
      scrollTo_(document.querySelector(a.getAttribute('href')))
    }
    n.addEventListener('click', onNav)

    $('theme').onclick = () => {
      const t = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
      document.documentElement.dataset.theme = t
      try { localStorage.setItem('theme', t) } catch (e) {}
    }

    const bt = $('backTop')
    const onScroll = () => bt.classList.toggle('visible', scrollY > 520)
    addEventListener('scroll', onScroll, { passive: true })
    bt.onclick = () => scrollTo({ top: 0, behavior: 'smooth' })

    return () => {
      spy.disconnect(); rv.disconnect(); dots.remove()
      n.removeEventListener('click', onNav)
      removeEventListener('scroll', onScroll)
    }
  }, [])
  return null
}
