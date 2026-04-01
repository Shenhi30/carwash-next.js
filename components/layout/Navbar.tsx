import Link from "next/link";
import { Droplets } from "lucide-react";
import styles from './Navbar.module.scss'

export function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    <Droplets className={styles.logoIcon} size={28} />
                    <span>Car.wash</span>
                </Link>

                <button className={styles.contactBtn}>
                    Записатись
                </button>
            </div>
        </header>
    )
}