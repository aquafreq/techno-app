export default function Home() {
  return (
    <main style={{ padding: '2rem', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
        🎵 Techno App
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.8 }}>
        Search for techno events and artists
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a 
          href="/events" 
          style={{
            padding: '1rem 2rem',
            background: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: '8px',
            display: 'inline-block',
            transition: 'all 0.2s'
          }}
        >
          Search Events
        </a>
        <a 
          href="/artists" 
          style={{
            padding: '1rem 2rem',
            background: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: '8px',
            display: 'inline-block',
            transition: 'all 0.2s'
          }}
        >
          Search Artists
        </a>
      </div>
    </main>
  )
}
