import styles from "/style/husqvarna.module.css"

export default function () {
    return (<>
        <h1 className={styles.brand}>Husqvarna </h1>
        <h2 className={styles.model}>Supermotos</h2>
        <div className={styles.motos}>
            <div className={styles.h701}>
                <img src="/husky701.png" alt="701 Supermoto" width={700} />
                <h3>701 Supermoto</h3>
            </div>
            <div className={styles.h450}>
                <img src="/huskyfs450.jpg" alt="FS 450" width={700} />
                <h3>FS 450</h3>
            </div>
        </div>
        <h2 className={styles.model}>Travel</h2>
        <div className={styles.motos}>
            <div className={styles.h701e}>
                <img src="/husky701enduro.png" alt="701 Enduro" width={700} />
                <h3>701 Enduro</h3>
            </div>
            <div className={styles.hn901}>
                <img src="/huskynorden901.png" alt="Norden 901 Expedition" width={700} />
                <h3>Norden 901 Expedition</h3>
            </div>
        </div>
    </>
    )
}