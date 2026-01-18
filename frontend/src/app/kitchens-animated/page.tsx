'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Kitchen } from '@/types'
import styles from './kitchens-animated.module.css'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

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
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&h=600&fit=crop',
    title: 'Contemporary Open Kitchen',
    description: 'Spacious and modern living space'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
}

export default function KitchensAnimatedPage(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % kitchenImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Анимирана галерия кухни</h1>
        <p className={styles.subtitle}>
          Разгледайте нашата колекция с плавни анимации
        </p>
      </motion.div>

      {/* Featured Kitchen Display */}
      <div className={styles.featuredSection}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={styles.featuredKitchen}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={kitchenImages[currentIndex].url}
              alt={kitchenImages[currentIndex].title}
              className={styles.featuredImage}
              variants={imageVariants}
              whileHover="hover"
            />
            <motion.div
              className={styles.featuredOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className={styles.featuredTitle}>
                {kitchenImages[currentIndex].title}
              </h2>
              <p className={styles.featuredDescription}>
                {kitchenImages[currentIndex].description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className={styles.dots}>
          {kitchenImages.map((_, index: number) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* GSAP Animations Section */}
      <GSAPAnimationsSection />

      {/* Kitchen Grid */}
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
          Препоръчани кухни
        </motion.h2>
        <div className={styles.grid}>
          {kitchenImages.map((kitchen: Kitchen, index: number) => (
            <motion.div
              key={kitchen.id}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={kitchen.url}
                alt={kitchen.title}
                className={styles.cardImage}
                variants={imageVariants}
                whileHover="hover"
              />
              <motion.div
                className={styles.cardContent}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={styles.cardTitle}>{kitchen.title}</h3>
                <p className={styles.cardDescription}>{kitchen.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// GSAP Animations Component
function GSAPAnimationsSection(): JSX.Element {
  const textRef = useRef<HTMLDivElement>(null)
  const imageTopRef = useRef<HTMLDivElement>(null)
  const imageLeftRef = useRef<HTMLDivElement>(null)
  const imageRightRef = useRef<HTMLDivElement>(null)
  const textFallingRef = useRef<HTMLDivElement>(null)
  const textZoomRef = useRef<HTMLDivElement>(null)
  const textInitializedRef = useRef<boolean>(false)
  const textFallingInitializedRef = useRef<boolean>(false)
  const textZoomInitializedRef = useRef<boolean>(false)

  useEffect(() => {
    // Character-by-character text animation
    if (textRef.current && !textInitializedRef.current) {
      const text = textRef.current
      const textContent = text.textContent || ''
      text.textContent = ''

      // Split text into characters and wrap each in a span
      const chars: HTMLSpanElement[] = []
      textContent.split('').forEach((char) => {
        const span = document.createElement('span')
        span.textContent = char === ' ' ? '\u00A0' : char
        span.style.opacity = '0'
        span.style.display = 'inline-block'
        text.appendChild(span)
        chars.push(span)
      })

      textInitializedRef.current = true

      ScrollTrigger.create({
        trigger: textRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(chars, {
            opacity: 1,
            duration: 0.05,
            stagger: 0.03,
            ease: 'none',
          })
        },
      })
    }

    // Image from top animation
    if (imageTopRef.current) {
      gsap.set(imageTopRef.current, { y: -150, opacity: 0 })

      ScrollTrigger.create({
        trigger: imageTopRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(imageTopRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
          })
        },
      })
    }

    // Images from left and right (one below another)
    if (imageLeftRef.current && imageRightRef.current) {
      gsap.set(imageLeftRef.current, { x: -300, opacity: 0 })
      gsap.set(imageRightRef.current, { x: 300, opacity: 0 })

      ScrollTrigger.create({
        trigger: imageLeftRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(imageLeftRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
          })
          gsap.to(imageRightRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3,
          })
        },
      })
    }

    // Text with falling letters animation (before footer)
    if (textFallingRef.current && !textFallingInitializedRef.current) {
      const text = textFallingRef.current
      const textContent = text.textContent || ''
      text.textContent = ''

      // Split text into characters and wrap each in a span
      const chars: HTMLSpanElement[] = []
      textContent.split('').forEach((char) => {
        const span = document.createElement('span')
        span.textContent = char === ' ' ? '\u00A0' : char
        span.style.display = 'inline-block'
        span.style.opacity = '0'
        span.style.transform = 'translateY(-100px)'
        text.appendChild(span)
        chars.push(span)
      })

      textFallingInitializedRef.current = true

      ScrollTrigger.create({
        trigger: textFallingRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(chars, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power2.out',
          })
        },
      })
    }

    // Text zoom in animation
    if (textZoomRef.current && !textZoomInitializedRef.current) {
      gsap.set(textZoomRef.current, { scale: 0, opacity: 0 })

      ScrollTrigger.create({
        trigger: textZoomRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(textZoomRef.current, {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'back.out(1.7)',
          })
        },
      })

      textZoomInitializedRef.current = true
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === textRef.current || 
            trigger.vars.trigger === imageTopRef.current ||
            trigger.vars.trigger === imageLeftRef.current ||
            trigger.vars.trigger === textFallingRef.current ||
            trigger.vars.trigger === textZoomRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <div className={styles.gsapSection}>
      {/* Text Animation Section */}
      <div className={styles.textAnimationSection}>
        <div ref={textRef} className={styles.animatedText}>
          Открийте вдъхновението за вашата мечтана кухня с нашите уникални дизайни
        </div>
      </div>

      {/* Image from Top */}
      <div className={styles.imageTopSection}>
        <div ref={imageTopRef} className={styles.imageTop}>
          <img
            src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&h=600&fit=crop"
            alt="Kitchen from top"
            className={styles.gsapImage}
          />
        </div>
      </div>

      {/* Images from Left and Right */}
      <div className={styles.imageSideSection}>
        <div ref={imageLeftRef} className={styles.imageLeft}>
          <img
            src="https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?q=80&w=1032&auto=format&fit=crop"
            alt="Kitchen from left"
            className={styles.gsapImage}
          />
        </div>
        <div ref={imageRightRef} className={styles.imageRight}>
          <img
            src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=735&auto=format&fit=crop"
            alt="Kitchen from right"
            className={styles.gsapImage}
          />
        </div>
      </div>

      {/* Text Zoom In Animation */}
      <div className={styles.textZoomSection}>
        <div ref={textZoomRef} className={styles.zoomText}>
          Създайте пространство, което отразява вашия стил
        </div>
      </div>

      {/* Big Text with Falling Letters (before footer) */}
      <div className={styles.textFallingSection}>
        <div ref={textFallingRef} className={styles.fallingText}>
          Вашата мечтана кухня очаква вас
        </div>
      </div>
    </div>
  )
}
