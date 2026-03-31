'use client'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/services/api'
import { motion } from 'framer-motion'
import styles from './Pricing.module.scss'
import { CarType } from '@/types/types';


interface Props {
    activeId: number;
    onSelect: (id: number) => void;
}

export default function CarTypeTabs({ activeId, onSelect }: Props) {
    const { data: carTypes, isLoading } = useQuery({
        queryKey: ['carTypes'],
        queryFn: api.getCarTypes,
    })

    if (isLoading)
}