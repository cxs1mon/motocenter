import Link from "next/link"
import styles from "/style/index.module.css"

export default function IndexPage() {
    return (
        <div className={styles.index}>
            <img src="https://placehold.jp/150x80.png" alt="Logo" />
            <div className={styles.navicon}>
                
                <Link href='/contact'><img src="/map-pin.png" alt="Map pin"/></Link>
                <Link href='login'><img src="/user.png" alt="User" /></Link>
                <Link href='/favourites'><img src="/heart.png" alt="Favourites" /></Link>
                
            </div>

        </div>
    )
}
