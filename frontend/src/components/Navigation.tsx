'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavItem } from '@/types'
import styles from './Navigation.module.css'

export default function Navigation(): JSX.Element {
  const pathname: string = usePathname()

  const navItems: NavItem[] = [
    { href: '/', label: 'Начало' },
    { href: '/kitchens', label: 'Кухни' },
    { href: '/kitchens-animated', label: 'Анимирана галерия' },
    { href: '/about', label: 'За нас' },
    { href: '/contact', label: 'Контакти' },
  ]

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          🏠 Veni&#39;s Kitchens
        </Link>
        <ul className={styles.menu}>
          {navItems.map((item: NavItem) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.link} ${pathname === item.href ? styles.active : ''}`}
                scroll={true}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
