import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kitchen App - Дизайнерско вдъхновение и идеи',
  description: 'Открийте впечатляващи дизайни на кухни и получете вдъхновение за следващата си реконструкция',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
