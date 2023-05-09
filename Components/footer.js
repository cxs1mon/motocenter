import styles from '../Components/footer.module.css'
import Link from "next/link";

export default function () {
    return (
        <>
            <nav>
                <ul className={styles.list}>
                    <li><Link className={styles.link} href="/contact">Kontakt</Link></li>
                    <li><Link className={styles.link} href="/team">Team</Link></li>
                    <li><Link className={styles.link} href="/impressum">Impressum</Link></li>
                </ul>
            </nav>
        </>
    )
}