'use client'

import { motion } from "framer-motion"
import styles from './Hero.module.scss'

export function Hero() {
    const handleContactClick = () => {
  // Перевіряємо, чи це мобільний пристрій (спрощений варіант)
  const isMobile = /iPhone|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Якщо телефон — відкриваємо набір номера
    window.location.href = 'tel:+380685865116';
  } else {
    // Якщо комп'ютер — плавно скролимо до футера
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  }
};

    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <span className={styles.badge}>Преміальний догляд</span>
                    <h1 className={styles.title}>
                        Повернемо вашому авто <br />
                        <span className={styles.highlight}>ідеальний блиск</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Професійна мийка, хімчистка та полірування
                    </p>
                    <div className={styles.buttonGroup}>
                        <button
                            className={styles.primaryBtn}
                            onClick={handleContactClick}
                        >
                            Записатись онлайн
                        </button>
                    </div>    
                </motion.div>
            </div>

        </section>
    )
}