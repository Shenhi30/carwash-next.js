import { MapPin, Phone, Clock } from "lucide-react";
import styles from "./Navbar.module.scss"


export function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footerGrid}>
                <div className={styles.footerCol}>
                    <h4>Car.wash Detailing</h4>
                </div>

                <div className={styles.footerCol}>
                    <h4>Контакти</h4>
                    <a href="tel:+380685865116" className={styles.contactLink}>
                        <Phone size={18} className={styles.footerIcon} />
                        +38 (068) 586-51-16
                    </a>

                    <p><MapPin size={18} className={styles.footerIcon} />
                        м. Київ, вул. Протасів Яр, 3
                    </p>
                    <p><Clock size={18} className={styles.footerIcon} />
                        Пн-Нд: 08:00 - 22:00
                    </p>
                </div>

                <div className={styles.footerCol}>
                    <h4>Як нас знайти</h4>
                    <div className={styles.mapContainer}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10167.326423959888!2d30.503381799999996!3d50.425608999999994!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x40d4cee0856b4b11%3A0x5bfd616f13c8bf9!2z0JDQstGC0L7QvNC40LnQutCw!5e0!3m2!1suk!2sua!4v1775129943443!5m2!1suk!2sua"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {currentYear} Car.wash. Всі права захищені.
            </div>
        </footer>
    )
}