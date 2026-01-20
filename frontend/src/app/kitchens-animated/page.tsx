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
  const textScrollWordsRef = useRef<HTMLDivElement>(null)
  const textScrollWordsInitializedRef = useRef<boolean>(false)
  const scrollWordsArrayRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    // Ensure we're in browser environment
    if (typeof window === 'undefined') return

    // Wait for page to be fully loaded
    const initAnimations = () => {
      // Prevent double initialization
      if (textZoomInitializedRef.current && textFallingInitializedRef.current) {
        console.log('⚠️ Animations already initialized, skipping...')
        return
      }
      
      console.log('🔵 initAnimations called')
      console.log('🔵 textZoomRef.current:', textZoomRef.current)
      console.log('🔵 textFallingRef.current:', textFallingRef.current)
      
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
          start: 'top 85%',
          once: false,
          onEnter: () => {
            if (imageLeftRef.current && imageRightRef.current) {
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
            }
          },
          onLeaveBack: () => {
            if (imageLeftRef.current && imageRightRef.current) {
              gsap.set(imageLeftRef.current, { x: -300, opacity: 0 })
              gsap.set(imageRightRef.current, { x: 300, opacity: 0 })
            }
          },
        })
      }

      // Text with falling letters animation (before footer)
      if (textFallingRef.current && !textFallingInitializedRef.current) {
        console.log('🟡 Setting up falling letters animation')
        const text = textFallingRef.current
        const textContent = text.textContent || ''
        text.textContent = ''

        // Split text into words and wrap each word in a span
        const words: HTMLSpanElement[] = []
        const wordsArray = textContent.split(/\s+/).filter(word => word.length > 0)
        
        wordsArray.forEach((word, wordIndex) => {
          const wordSpan = document.createElement('span')
          wordSpan.style.display = 'inline-block'
          wordSpan.style.opacity = '0'
          wordSpan.style.transform = 'translateY(-100px)'
          wordSpan.style.whiteSpace = 'nowrap' // Prevent word breaking
          wordSpan.textContent = word
          
          // Add space after word (except last word)
          if (wordIndex < wordsArray.length - 1) {
            wordSpan.textContent += '\u00A0' // Non-breaking space
          }
          
          text.appendChild(wordSpan)
          words.push(wordSpan)
        })

        textFallingInitializedRef.current = true

        const fallingTrigger = ScrollTrigger.create({
          trigger: textFallingRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          once: false,
          onEnter: () => {
            console.log('🟡 Falling words onEnter triggered!')
            gsap.to(words, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1, // Stagger between words (slightly longer than letters)
              ease: 'power2.out',
            })
          },
          onEnterBack: () => {
            gsap.to(words, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power2.out',
            })
          },
          onLeave: () => {
            words.forEach((word) => {
              gsap.set(word, { opacity: 0, y: -100 })
            })
          },
          onLeaveBack: () => {
            words.forEach((word) => {
              gsap.set(word, { opacity: 0, y: -100 })
            })
          },
        })

        textFallingInitializedRef.current = true
        console.log('🟡 Falling words trigger created:', {
          start: fallingTrigger.start,
          end: fallingTrigger.end,
          wordsCount: words.length
        })
      } else {
        console.log('🔴 Falling text element not found or already initialized')
      }

      // Text zoom in animation
      if (textZoomRef.current && !textZoomInitializedRef.current) {
        const zoomElement = textZoomRef.current
        console.log('🟢 Setting up zoom text animation')
        
        // Ensure initial state is hidden
        gsap.set(zoomElement, { scale: 0, opacity: 0 })
        console.log('🟢 Initial state set - opacity:', window.getComputedStyle(zoomElement).opacity)

        const trigger = ScrollTrigger.create({
          trigger: zoomElement,
          start: 'top 80%', // Trigger when element is 80% from top of viewport
          end: 'bottom 20%',
          once: false,
          onEnter: () => {
            console.log('🟢 Zoom text onEnter triggered!')
            console.log('🟢 Before animation - opacity:', window.getComputedStyle(zoomElement).opacity, 'transform:', window.getComputedStyle(zoomElement).transform)
            gsap.to(zoomElement, {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: 'back.out(1.7)',
              onComplete: () => {
                console.log('🟢 Animation complete - opacity:', window.getComputedStyle(zoomElement).opacity, 'transform:', window.getComputedStyle(zoomElement).transform)
              }
            })
          },
          onUpdate: (self) => {
            // Debug: log scroll progress
            if (self.progress > 0 && self.progress < 0.1) {
              console.log('🟢 Zoom text scroll progress:', self.progress)
            }
          },
          onEnterBack: () => {
            gsap.to(zoomElement, {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: 'back.out(1.7)',
            })
          },
          onLeave: () => {
            gsap.set(zoomElement, { scale: 0, opacity: 0 })
          },
          onLeaveBack: () => {
            gsap.set(zoomElement, { scale: 0, opacity: 0 })
          },
        })

        textZoomInitializedRef.current = true
        console.log('🟢 Zoom text trigger created:', {
          start: trigger.start,
          end: trigger.end,
          element: zoomElement
        })
      } else {
        console.log('🔴 Zoom text element not found or already initialized')
      }

      // Scroll-triggered letter-by-letter animation (fast animation when section enters viewport)
      if (textScrollWordsRef.current && !textScrollWordsInitializedRef.current) {
        console.log('🔵 Setting up scroll-triggered letters animation')
        const textElement = textScrollWordsRef.current
        const textContent = textElement.textContent || ''
        textElement.textContent = ''

        // Split text into characters (letters) and wrap each in a span
        const chars: HTMLSpanElement[] = []
        textContent.split('').forEach((char) => {
          const span = document.createElement('span')
          span.textContent = char === ' ' ? '\u00A0' : char
          span.style.display = 'inline-block'
          span.style.opacity = '0'
          span.style.transform = 'translateY(-30px)'
          textElement.appendChild(span)
          chars.push(span)
        })

        scrollWordsArrayRef.current = chars
        textScrollWordsInitializedRef.current = true

        ScrollTrigger.create({
          trigger: textElement,
          start: 'top 50%', // Trigger when element is at 50% of viewport
          once: false, // Allow animation to trigger again if scrolled back
          onEnter: () => {
            console.log('🔵 Letters animation triggered!')
            // Animate all letters quickly with stagger
            gsap.to(chars, {
              opacity: 1,
              y: 0,
              duration: 0.3, // Fast animation
              stagger: 0.02, // Small delay between each letter (20ms)
              ease: 'power2.out',
            })
          },
          onEnterBack: () => {
            // When scrolling back up, animate again
            gsap.to(chars, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              stagger: 0.02,
              ease: 'power2.out',
            })
          },
          onLeave: () => {
            // Hide letters when scrolling past
            chars.forEach((char) => {
              gsap.set(char, { opacity: 0, y: -30 })
            })
          },
          onLeaveBack: () => {
            // Hide letters when scrolling back up past the section
            chars.forEach((char) => {
              gsap.set(char, { opacity: 0, y: -30 })
            })
          },
        })

        console.log('🔵 Scroll-triggered letters animation created:', {
          charsCount: chars.length,
        })
      } else {
        console.log('🔴 Scroll words element not found or already initialized')
      }

      // Refresh ScrollTrigger after all animations are set up
      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
        console.log('✅ ScrollTrigger refreshed')
      })
    }

    // Initialize animations - wait for page load or run immediately if already loaded
    // Use a small delay to ensure React has finished rendering
    const initializeWithDelay = () => {
      setTimeout(() => {
        if (document.readyState === 'complete') {
          console.log('📄 Document ready, initializing...')
          initAnimations()
        } else {
          console.log('⏳ Waiting for load event...')
          window.addEventListener('load', () => {
            console.log('📄 Load event fired, initializing...')
            initAnimations()
          }, { once: true })
        }
      }, 100)
    }

    initializeWithDelay()

    // Also refresh on resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('load', initAnimations)
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === textRef.current || 
            trigger.vars.trigger === imageTopRef.current ||
            trigger.vars.trigger === imageLeftRef.current ||
            trigger.vars.trigger === textFallingRef.current ||
            trigger.vars.trigger === textZoomRef.current ||
            trigger.vars.trigger === textScrollWordsRef.current) {
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

      {/* Scroll-Driven Words Animation (scrub animation) */}
      <div className={styles.textScrollWordsSection}>
        <div ref={textScrollWordsRef} className={styles.scrollWordsText}>
          Всяка кухня разказва уникална история за стил и функционалност
        </div>
      </div>
    </div>
  )
}