import Link from 'next/link'
import styles from '/style/nav.module.css'

export default function nav() {
    return (
        <>
        <nav>
            <ul className={styles.list}>
                <li><Link className={styles.link} href="/brands/husqvarna">Husqvarna</Link></li>
                <li><Link className={styles.link} href="/brands/bmw">BMW</Link></li>
                <li><Link className={styles.link} href="/brands/ktm">KTM</Link></li>
                <li><Link className={styles.link} href="/brands/kawasaki">Kawasaki</Link></li>
                <li><Link className={styles.link} href="/brands/yamaha">Yamaha</Link></li>
            </ul>
        </nav>
        </>
    )
}