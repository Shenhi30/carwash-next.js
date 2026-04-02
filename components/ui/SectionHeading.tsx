import { motion } from 'framer-motion'
import styles from './UI.module.scss'

interface Props{
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
}

export function SectionHeader({title, subtitle,align = 'left'}: Props) {
    return (
        <div className={`${styles.headingContainer} ${styles[align]}`}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className={styles.title}>{title}</h2>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                <div className={styles.accentLine} />
            </motion.div>
        </div>
    )
}