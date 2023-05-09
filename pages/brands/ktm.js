import styles from "/style/ktm.module.css"

export default function () {
    return (<>
        <h1 className={styles.brand}>KTM </h1>
        <h2 className={styles.model}>MX & Enduro</h2>
        <div className={styles.motos}>
            <div className={styles.ktm450sxf}>
                <img src="/ktm450sxf.png" alt="450 SX-F" width={700} />
                <h3 className={styles.name}>450 SX-F</h3>
            </div>
            <div className={styles.ktmexcf550}>
                <img src="/ktmexc500F.jpg" alt="500 EXC-F" width={700} />
                <h3 className={styles.name}>500 EXC-F</h3>
            </div>
        </div>
        <h2 className={styles.model}>Naked Bike</h2>
        <div className={styles.motos}>
            <div className={styles.ktm390d}>
                <img src="/ktm390d.png" alt="390 Duke" width={700} />
                <h3 className={styles.name}>390 Duke</h3>
            </div>
            <div className={styles.ktm1290sdrr}>
                <img src="/ktm1290sdrr.png" alt="1290 Super Duke RR" width={700} />
                <h3 className={styles.name}>1290 Super Duke RR</h3>
            </div>
        </div>
    </>
    )
}