import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Techno App - Find Events & Artists',
  description: 'Search for techno events and artists',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
