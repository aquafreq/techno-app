import type { JSX } from 'react'
import styles from './about.module.css'

export default function AboutPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>За нас</h1>
        <p className={styles.subtitle}>
          Научете повече за Kitchen App и нашата мисия
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Нашата мисия</h2>
          <p className={styles.text}>
            Kitchen App е посветен на вдъхновяването на собственици на жилища и дизайнери с впечатляващи
            дизайни на кухни от цял свят. Вярваме, че кухнята е сърцето на дома и сме тук, за да ви помогнем
            да създадете пространство, което съчетава функционалност с красив дизайн.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Какво правим</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>🏠 Дизайнерско вдъхновение</h3>
              <p className={styles.featureText}>
                Разгледайте нашата обширна колекция от дизайни на кухни от модерен минимализъм до
                класически традиционен стил. Намерете вдъхновение за следващата си реконструкция на кухня или ново строителство.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>🎨 Галерия със стилове</h3>
              <p className={styles.featureText}>
                Разгледайте различни стилове на кухни, включително скандинавски, индустриален, италиански
                и други. Всеки дизайн показва уникални характеристики и идеи за оформление.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>💡 Дизайнерски идеи</h3>
              <p className={styles.featureText}>
                Получете цялостна информация за материали, цветови схеми и опции за оформление.
                Никога няма да останете без идеи с нашите детайлни ръководства и съвети за дизайн.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Нашата история</h2>
          <p className={styles.text}>
            Основан от страстни интериорни дизайнери и ентусиасти на кухни, Kitchen App се роди
            от проста идея: да улесним собствениците на жилища да откриват красиви дизайни на кухни
            и да намират вдъхновение за собствените си проекти. Разбираме предизвикателството при планирането на
            реконструкция на кухня и намирането на перфектния дизайн, който отговаря на вашия стил и нужди.
          </p>
          <p className={styles.text}>
            Днес сме горди да обслужваме хиляди собственици на жилища и дизайнери по целия свят, помагайки
            им да създават красиви и функционални кухни, които стават сърцето на домовете им.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Присъединете се към нашата общност</h2>
          <p className={styles.text}>
            Независимо дали планирате пълна реконструкция на кухня или просто търсите дизайнерско
            вдъхновение, добре дошли в нашата общност. Следвайте ни в социалните мрежи, споделяйте вашите
            проекти за кухни и ни помогнете да вдъхновяваме други да създават мечтаните си кухни.
          </p>
        </section>

        {/* Techno-related content commented out - keeping for future reference
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Techno Music Features</h2>
          <p className={styles.text}>
            [Previous techno-related content removed]
          </p>
        </section>
        */}
      </div>
    </div>
  )
}
