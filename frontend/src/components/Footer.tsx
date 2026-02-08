import Link from 'next/link'
import type { JSX } from 'react'
import styles from './Footer.module.css'

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>🏠 Veni&#39;s Kitchen</h3>
            <p className={styles.description}>
              Вашата крайна дестинация за вдъхновение от дизайн на кухни.
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Бързи връзки</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/" className={styles.link}>
                  Начало
                </Link>
              </li>
              <li>
                <Link href="/kitchens" className={styles.link}>
                  Кухни
                </Link>
              </li>
              <li>
                <Link href="/kitchens-animated" className={styles.link}>
                  Анимирана галерия
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Информация</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/about" className={styles.link}>
                  За нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Свържете се</h4>
            <div className={styles.social}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear}  🏠 Veni&#39;s Kitchen. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  )
}
