'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { Kitchen } from '@/types'
import styles from './kitchens.module.css'

// Dummy kitchen images - using placeholder URLs
const kitchenImages: Kitchen[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&h=600&fit=crop',
    title: 'Modern Minimalist Kitchen',
    description: 'Clean lines and contemporary design'
  },
  {
    id: 2,
    url: 'https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Luxury Italian Kitchen',
    description: 'Elegant marble and premium finishes'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Scandinavian Style Kitchen',
    description: 'Light wood and natural materials'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Industrial Kitchen Design',
    description: 'Raw materials and exposed elements'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&h=600&fit=crop',
    title: 'Classic Traditional Kitchen',
    description: 'Timeless elegance and craftsmanship'
  },
]

const swiperConfig: SwiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: true,
  pagination: { clickable: true },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
}

export default function KitchensPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Галерия кухни</h1>
        <p className={styles.subtitle}>
          Разгледайте нашата колекция от впечатляващи дизайни на кухни
        </p>
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          {...swiperConfig}
          className={styles.slider}
        >
          {kitchenImages.map((kitchen: Kitchen) => (
            <SwiperSlide key={kitchen.id} className={styles.slide}>
              <div className={styles.slideContent}>
                <img
                  src={kitchen.url}
                  alt={kitchen.title}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <h2 className={styles.slideTitle}>{kitchen.title}</h2>
                  <p className={styles.slideDescription}>{kitchen.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>Препоръчани кухни</h2>
        <div className={styles.grid}>
          {kitchenImages.slice(0, 6).map((kitchen: Kitchen) => (
            <div key={kitchen.id} className={styles.card}>
              <img
                src={kitchen.url}
                alt={kitchen.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{kitchen.title}</h3>
                <p className={styles.cardDescription}>{kitchen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
