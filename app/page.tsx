'use client';

import { useState } from 'react';
import CarTypeTabs from '@/components/pricing/CarTypeTabs';
import PriceGrid from '@/components/pricing/PriceGrid';
import styles from '@/components/pricing/Pricing.module.scss';

export default function Home() {
  const [selectedCarId, setSelectedCarId] = useState(1); // Default to 'Седан'

  return (
    <main className={styles.pricingSection}>
      <header className={styles.sectionHeader}>
        <h2>Від простої мийки до повного детейлінгу</h2>
        <p>Оберіть свій тип автомобіля, щоб переглянути актуальні ціни</p>
      </header>

      <CarTypeTabs 
        activeId={selectedCarId} 
        onSelect={setSelectedCarId} 
      />

      <PriceGrid selectedCarId={selectedCarId} />
    </main>
  );
}