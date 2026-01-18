import Link from 'next/link'
import type { ReactElement } from 'react'
import styles from './home.module.css'

export default function Home(): ReactElement {
  return (
    <main style={{ padding: '2rem', minHeight: '100vh' }}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          🏠 Kitchen App
        </h1>
        <p className={styles.subtitle}>
          Открийте впечатляващи дизайни на кухни и вдъхновение
        </p>
        
        <div className={styles.links}>
          {/* Techno-related links commented out - keeping for future reference
          <Link href="/events" className={styles.link}>
            Search Events
          </Link>
          <Link href="/artists" className={styles.link}>
            Search Artists
          </Link>
          */}
          <Link href="/kitchens" className={styles.link}>
            Вижте кухни
          </Link>
          <Link href="/kitchens-animated" className={styles.link}>
            Анимирана галерия
          </Link>
          <Link href="/about" className={styles.link}>
            За нас
          </Link>
          <Link href="/contact" className={styles.link}>
            Контакти
          </Link>
        </div>
      </div>
    </main>
  )
}
