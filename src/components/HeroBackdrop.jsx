import { useEffect, useRef } from 'react'

const PHI = (1 + Math.sqrt(5)) / 2

const VERTICES = [
  [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
  [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
  [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1],
].map(([x, y, z]) => {
  const length = Math.hypot(x, y, z)
  return [x / length, y / length, z / length]
})

const EDGES = []
for (let i = 0; i < VERTICES.length; i += 1) {
  for (let j = i + 1; j < VERTICES.length; j += 1) {
    const [ax, ay, az] = VERTICES[i]
    const [bx, by, bz] = VERTICES[j]
    if (Math.hypot(ax - bx, ay - by, az - bz) < 1.15) EDGES.push([i, j])
  }
}

function drawFrame(context, width, height, seconds) {
  context.clearRect(0, 0, width, height)

  const compact = width <= 1080
  const centerX = width * (compact ? 0.5 : 0.30)
  const centerY = height * (compact ? 0.5 : 0.48)
  const radius = compact
    ? Math.min(width * 0.42, height * 0.3, 260)
    : Math.min(width * 0.17, height * 0.4, 250)
  const focal = 3.4
  const spin = seconds * 0.14
  const tilt = 0.42 + Math.sin(seconds * 0.08) * 0.07

  const cosSpin = Math.cos(spin)
  const sinSpin = Math.sin(spin)
  const cosTilt = Math.cos(tilt)
  const sinTilt = Math.sin(tilt)

  const projected = VERTICES.map(([x, y, z]) => {
    const spunX = x * cosSpin + z * sinSpin
    const spunZ = -x * sinSpin + z * cosSpin
    const tiltedY = y * cosTilt - spunZ * sinTilt
    const tiltedZ = y * sinTilt + spunZ * cosTilt
    const depth = focal / (focal + tiltedZ)
    return [
      centerX + spunX * radius * depth,
      centerY + tiltedY * radius * depth,
      tiltedZ,
    ]
  })

  const alphaFor = (depth) => 0.34 - ((depth + 1) / 2) * 0.26

  context.lineWidth = 1
  for (const [start, end] of EDGES) {
    const a = projected[start]
    const b = projected[end]
    const alpha = alphaFor((a[2] + b[2]) / 2)
    context.strokeStyle = `rgba(200, 214, 238, ${alpha.toFixed(3)})`
    context.beginPath()
    context.moveTo(a[0], a[1])
    context.lineTo(b[0], b[1])
    context.stroke()
  }

  for (const [x, y, depth] of projected) {
    const alpha = Math.min(0.7, alphaFor(depth) + 0.16)
    context.fillStyle = `rgba(200, 214, 238, ${alpha.toFixed(3)})`
    context.beginPath()
    context.arc(x, y, 1.8, 0, Math.PI * 2)
    context.fill()
  }
}

export default function HeroBackdrop() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return undefined

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let width = 0
    let height = 0
    let seconds = 0
    let lastTime = 0
    let frame = 0
    let running = false
    let inView = true

    const render = () => {
      if (width > 0 && height > 0) drawFrame(context, width, height, seconds)
    }

    const resize = () => {
      const { width: cssWidth, height: cssHeight } = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = cssWidth
      height = cssHeight
      canvas.width = Math.round(cssWidth * dpr)
      canvas.height = Math.round(cssHeight * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      render()
    }

    const tick = (now) => {
      if (lastTime) seconds += (now - lastTime) / 1000
      lastTime = now
      render()
      if (running) frame = requestAnimationFrame(tick)
    }

    const canRun = () => !motionQuery.matches && inView && !document.hidden && width > 0

    const stop = () => {
      running = false
      lastTime = 0
      cancelAnimationFrame(frame)
    }

    const play = () => {
      if (running || !canRun()) return
      running = true
      lastTime = 0
      frame = requestAnimationFrame(tick)
    }

    const sync = () => {
      if (canRun()) {
        play()
        return
      }
      stop()
      render()
    }

    const onMotionChange = () => {
      stop()
      sync()
    }

    resize()
    sync()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    const intersectionObserver = new IntersectionObserver((entries) => {
      inView = entries[0]?.isIntersecting ?? true
      sync()
    })
    intersectionObserver.observe(canvas)

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', sync)
    motionQuery.addEventListener('change', onMotionChange)

    return () => {
      stop()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', sync)
      motionQuery.removeEventListener('change', onMotionChange)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}
