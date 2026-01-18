'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { JSX } from 'react'
import styles from './contact.module.css'

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, 'Името трябва да бъде поне 2 символа'),
  email: z.string().email('Моля, въведете валиден имейл адрес'),
  subject: z.string().min(3, 'Темата трябва да бъде поне 3 символа'),
  message: z.string().min(10, 'Съобщението трябва да бъде поне 10 символа'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactPage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    setSubmitStatus('idle')

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form on success
      reset()
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Свържете се с нас</h1>
        <p className={styles.subtitle}>
          Имате въпрос относно дизайна на кухни? Ще се радваме да чуем от вас!
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Име <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                placeholder="Вашето име"
              />
              {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Имейл <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                placeholder="ваш.имейл@example.com"
              />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Тема <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="subject"
                {...register('subject')}
                className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                placeholder="За какво става въпрос?"
              />
              {errors.subject && <span className={styles.error}>{errors.subject.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Съобщение <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={6}
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                placeholder="Споделете какво ви интересува..."
              />
              {errors.message && <span className={styles.error}>{errors.message.message}</span>}
            </div>

            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                ✅ Благодарим! Вашето съобщение е изпратено успешно.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                ❌ Нещо се обърка. Моля, опитайте отново по-късно.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? 'Изпращане...' : 'Изпрати съобщение'}
            </button>
          </form>
        </div>

        <div className={styles.info}>
          <h2 className={styles.infoTitle}>Други начини да се свържете с нас</h2>
          <div className={styles.infoItem}>
            <h3 className={styles.infoItemTitle}>📧 Имейл</h3>
            <p className={styles.infoItemText}>contact@kitchenapp.com</p>
          </div>
          <div className={styles.infoItem}>
            <h3 className={styles.infoItemTitle}>📱 Телефон</h3>
            <p className={styles.infoItemText}>+359 888 123 456</p>
          </div>
          <div className={styles.infoItem}>
            <h3 className={styles.infoItemTitle}>📍 Адрес</h3>
            <p className={styles.infoItemText}>
              ул. Дизайн 123<br />
              София 1000<br />
              България
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
