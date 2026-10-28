const GLYPHS = {

  channels: <path d="M3 5h18l-7 8.5V20l-4-2.5v-4z" />,

  governance: (
    <>
      <path d="M12 3l8 3v6c0 4.2-3.3 7.4-8 9-4.7-1.6-8-4.8-8-9V6z" />
      <path d="M9 11.5h6" />
    </>
  ),

  orchestration: (
    <>
      <path d="M6 3v18" />
      <path d="M6 8h8a4.5 4.5 0 0 1 0 9H6" />
    </>
  ),

  knowledge: (
    <>
      <path d="M12 7.5C10 5.8 7 5 4 5v12c3 0 6 .8 8 2.5" />
      <path d="M12 7.5C14 5.8 17 5 20 5v12c-3 0-6 .8-8 2.5" />
    </>
  ),

  gateway: (
    <>
      <path d="M4 4v16l7-8z" />
      <path d="M20 4v16l-7-8z" />
      <circle cx="12" cy="12" r="1.6" />
    </>
  ),

  observability: (
    <>
      <path d="M3 3v18" />
      <path d="M3 7h15" />
      <path d="M7 13h12" />
      <path d="M11 19h6" />
    </>
  ),

  umbrella: (
    <>
      <path d="M3 12a9 9 0 0 1 18 0z" />
      <path d="M12 12v6.5a2.5 2.5 0 0 0 5 0" />
    </>
  ),

  propertyAuto: (
    <>
      <path d="M3 8l9-6 9 6" />
      <path d="M6 18v-3.5l1.6-3.5h8.8l1.6 3.5V18H6" />
      <circle cx="9" cy="19.5" r="1.6" />
      <circle cx="15" cy="19.5" r="1.6" />
    </>
  ),

  grid: (
    <>
      <path d="M12 3v18" />
      <path d="M6 9h12" />
      <path d="M4 14h16" />
      <path d="M7 21l5-12 5 12" />
    </>
  ),

  shipment: (
    <>
      <path d="M3 8l9-4 9 4v8l-9 4-9-4z" />
      <path d="M3 8l9 4 9-4" />
      <path d="M12 12v8" />
    </>
  ),

  health: <path d="M9.5 3h5v6.5H21v5h-6.5V21h-5v-6.5H3v-5h6.5z" />,

  institution: (
    <>
      <path d="M3 10l9-5 9 5" />
      <path d="M6 10v9" />
      <path d="M12 10v9" />
      <path d="M18 10v9" />
      <path d="M3 19h18" />
    </>
  ),

  message: <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.6-3.2A7.5 7.5 0 1 1 20 11.5Z M8 10h8M8 13h5" />,

  document: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6M8 13h8M8 17h8" />
    </>
  ),

  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 17v-5M12 17V8M17 17V5" />
    </>
  ),

  network: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="4" cy="5" r="2" />
      <circle cx="20" cy="5" r="2" />
      <circle cx="4" cy="19" r="2" />
      <circle cx="20" cy="19" r="2" />
      <path d="m6 6.5 4 4M18 6.5l-4 4m-8 7 4-4m8 4-4-4" />
    </>
  ),

  route: (
    <>
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M9 18h3a3 3 0 0 0 3-3V9" />
    </>
  ),

  workflow: (
    <>
      <rect x="2.5" y="3" width="7" height="6" rx="1.5" />
      <rect x="14.5" y="15" width="7" height="6" rx="1.5" />
      <rect x="14.5" y="3" width="7" height="6" rx="1.5" />
      <path d="M9.5 6h5M18 9v3a3 3 0 0 1-3 3h-.5M6 9v3a3 3 0 0 0 3 3h5.5" />
    </>
  ),

  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),

  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),

  check: <path d="m5 12 4 4L19 6" />,

  brain: (
    <>
      <path d="M12 4a3 3 0 0 0-5.5 1.5A3.5 3.5 0 0 0 4 11a3.5 3.5 0 0 0 2.5 6A3.5 3.5 0 0 0 12 19V4Z" />
      <path d="M12 4a3 3 0 0 1 5.5 1.5A3.5 3.5 0 0 1 20 11a3.5 3.5 0 0 1-2.5 6A3.5 3.5 0 0 1 12 19" />
    </>
  ),
}

export default function Icon({ name, size = 24, className }) {
  const glyph = GLYPHS[name]
  if (!glyph) return null
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  )
}
