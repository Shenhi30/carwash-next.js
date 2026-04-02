'use client';

import { useState } from 'react';
import CarTypeTabs from '@/components/pricing/CarTypeTabs';
import PriceGrid from '@/components/pricing/PriceGrid';
import styles from '@/components/pricing/Pricing.module.scss';
import { SectionHeader } from '@/components/ui/SectionHeading';
import { Hero } from '@/components/layout/hero';

export default function Home() {
  const [selectedCarId, setSelectedCarId] = useState(1); // Default to 'Седан'

  return (
    <>
      <Hero />
      
      <main className={styles.pricingSection} id='pricing'>
      <SectionHeader 
          title="Наші Послуги та Ціни" 
          subtitle="Оберіть категорію вашого авто, щоб побачити точну вартість робіт"
          align="center" 
        />

      <CarTypeTabs 
        activeId={selectedCarId} 
        onSelect={setSelectedCarId} 
      />

      <PriceGrid selectedCarId={selectedCarId} />
      </main>
      
    </>
  );
}