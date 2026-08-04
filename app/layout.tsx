import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Norte Arquitectos | Arquitectura y diseño contemporáneo',
  description: 'Estudio de arquitectura especializado en proyectos residenciales, culturales y comerciales. Creamos espacios que transforman la forma en que vivimos.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  robots: {
    index: false,
    follow: false,
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
