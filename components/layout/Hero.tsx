'use client'

import { motion } from "framer-motion"
import styles from './Hero.module.scss'

export function Hero() {
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
                        <button className={styles.primaryBtn}>Записатись онлайн</button>
                    </div>    
                </motion.div>
            </div>

        </section>
    )
}