'use client'
import Link from "next/link";
import { Droplets } from "lucide-react";
import styles from './Navbar.module.scss'

export function Navbar() {
    const handleContactClick = () => {
  // Перевіряємо, чи це мобільний пристрій (спрощений варіант)
  const isMobile = /iPhone|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Якщо телефон — відкриваємо набір номера
    window.location.href = 'tel:+380991234567';
  } else {
    // Якщо комп'ютер — плавно скролимо до футера
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  }
};

    return (
        <header className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    <Droplets className={styles.logoIcon} size={28} />
                    <span>Car.wash</span>
                </Link>

                <button className={
                    styles.contactBtn}
                    onClick={handleContactClick}>
                    Записатись
                </button>
            </div>
        </header>
    )
}