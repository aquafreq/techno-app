import Link from 'next/link'
import type { ReactElement } from 'react'

export default function EventsPage(): ReactElement {
  return (
    <main style={{ padding: '2rem', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
        🔍 Search Events
      </h1>
      <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
        TODO: Implement events search functionality
      </p>
      <Link 
        href="/" 
        style={{
          padding: '0.5rem 1rem',
          background: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '8px',
          display: 'inline-block',
          textDecoration: 'none',
          color: '#ffffff'
        }}
      >
        ← Back to Home
      </Link>
    </main>
  )
}
