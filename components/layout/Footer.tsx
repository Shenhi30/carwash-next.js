import { MapPin, Phone, Clock } from "lucide-react";
import styles from "./Navbar.module.scss"
import { style } from "framer-motion/client";

export function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footerGrid}>
                <div className={styles.footerCol}>
                    <h4>Car.wash Detailing</h4>
                </div>
            </div>
        </footer>
    )
}