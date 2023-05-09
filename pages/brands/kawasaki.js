import styles from "/style/kawasaki.module.css"

export default function () {
    return (<>
        <h1 className={styles.brand}>Kawasaki </h1>
        <h2 className={styles.model}>Supersport & Sport</h2>
        <div className={styles.motos}>
            <div className={styles.knzx10r}>
                <img src="/knzx10r.png" alt="Ninja ZX-10R" width={700} />
                <h3 className={styles.name}>Ninja ZX-10R</h3>
            </div>
            <div className={styles.kn125}>
                <img src="/kn125.png" alt="Ninja 125" width={700} />
                <h3 className={styles.name}>Ninja 125</h3>
            </div>
        </div>
        <h2 className={styles.model}>Adventure Tourer</h2>
        <div className={styles.motos}>
            <div className={styles.kv1000se}>
                <img src="/kv1000se.png" alt="Versys 1000SE" width={700} />
                <h3 className={styles.name}>Versys 1000SE</h3>
            </div>
            <div className={styles.kv650}>
                <img src="/kv650.png" alt="Versys 650" width={700} />
                <h3 className={styles.name}>Versys 650</h3>
            </div>
        </div>
    </>
    )
}