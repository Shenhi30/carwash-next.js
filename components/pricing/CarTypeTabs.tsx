'use client'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/services/api'
import { motion } from 'framer-motion'
import styles from './Pricing.module.scss'



interface Props {
    activeId: number;
    onSelect: (id: number) => void;
}

export default function CarTypeTabs({ activeId, onSelect }: Props) {
    const { data: carTypes, isLoading } = useQuery({
        queryKey: ['carTypes'],
        queryFn: api.getCarTypes,
    })

    if (isLoading) return
    <div className={styles.loader}>
        Завантаження...
    </div>

    return (
        <nav className={styles.tabsContainer}>
            {carTypes?.map((car) => (
                <button
                    key={car.id}
                    className={`${styles.tabButton} ${activeId === car.id ? styles.active : ''}`}
                    onClick={() => onSelect(car.id)}
                >
                    <span style={{position: 'relative', zIndex: 2}}>
                        {car.name}
                    </span>

                    {activeId === car.id && (
                        <motion.div
                            layoutId='activePill'
                            className={styles.activeIndicator}
                            transition={{type:'spring', bounce: 0.2, duration: 0.6}}
                        />
                    )}
                </button>
            ))}
        </nav>
    )
}