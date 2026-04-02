'use client'
import { motion } from 'framer-motion';
import { ServicePrice } from "@/types/types";
import styles from './Pricing.module.scss'

interface Props{
    service: ServicePrice;
}

export default function ServiceCard({ service }: Props) {
    const isStarting = service.is_starting_price === 1;
    const priceDisplay = parseFloat(service.price).toString();

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.card}
        >

            <div className={styles.cardBody}>
                <h3 className={styles.serviceName}>{service.service_name}</h3>
                {service.description && (
                    <p className={styles.serviceDesc}>{service.description}</p>
                )}
            </div>

            <div className={styles.cardFooter}>
                <span className={styles.priceLabel}>Ціна</span>
                <span className={styles.priceValue}>
                    {isStarting ? 'від ' : ''}{priceDisplay} ₴
                </span>
            </div>
        </motion.div>
    )
}