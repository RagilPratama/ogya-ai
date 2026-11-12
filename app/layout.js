import './globals.css'

export const metadata = {
  title: 'Beranda | Ogya Intelligent Automation Platform',
  description: 'Satu platform otomasi bisnis lintas industri, omnichannel, kapabilitas AI dan workflow, serta integrasi dengan sistem existing.',
}

// Sets the saved theme before paint to avoid a flash.
const themeInit = `try{document.documentElement.dataset.theme=localStorage.getItem('theme')||'dark'}catch(e){document.documentElement.dataset.theme='dark'}`

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head>
      <body>{children}</body>
    </html>
  )
}
