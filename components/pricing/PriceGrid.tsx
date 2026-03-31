'use client'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/services/api'
import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion'
import styles from './Pricing.module.scss'

interface Props {
    selectedCarId: number;
}

export default function PriceGrid({ selectedCarId }: Props) {
    const { data: services, isLoading, error } = useQuery({
        queryKey: ['prices', selectedCarId],
        queryFn: () => api.getPricesByCar(selectedCarId),
        enabled: !!selectedCarId,
    })
    if (isLoading)
        return
    <div className='{styles.loader}'>
        Завантаження цін...
    </div>
    if (error) return
    <div className='{styles.error}'>
        Помилка завантаження даних.
    </div>

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.grid}
        >
            {services?.map((service) => (
                <ServiceCard key={service.service_id} service={service} />
            ))}
        </motion.div>
        )
}