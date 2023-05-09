import Link from "next/link"
import Nav from "../Components/nav.js"
import styles from "../Components/header.module.css"
export default function () {

    return (
        <>
            <div className={styles.header}>
                <Link href='/'><img src="/client-logo.png" alt="Logo" className={styles.logo} /></Link>
            
                <div className={styles.navicon}>

                    <Link href='/contact'><img src="/map-pin.png" alt="Map pin" /></Link>
                    <Link href='login'><img src="/user.png" alt="User" /></Link>
                    <Link href='/favourites'><img src="/heart.png" alt="Favourites" /></Link>


                </div>

            </div>
            <Nav/>
        </>
    )
}