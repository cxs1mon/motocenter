import styles from "/style/ktm.module.css"

export default function () {
    return (<>
        <h1 className={styles.brand}>BMW</h1>
        <h2 className={styles.model}>Adventure</h2>
        <div className={styles.motos}>
            <div className={styles.bwmf850gsa}>
                <img src="/bmwf850gsa.jpg" alt="F 850 GS Adventure" width={800} />
                <h3 className={styles.name}>F 850 GS Adventure</h3>
            </div>
            <div className={styles.bmws1000xr}>
                <img src="/bmws1000xr.jpg" alt="S 1000 XR" width={700} />
                <h3 className={styles.name}>S 1000 XR</h3>
            </div>
        </div>
        <h2 className={styles.model}>Supersoprt</h2>
        <div className={styles.motos}>
            <div className={styles.bmwr1250rs}>
                <img src="/bmwr1250rs.jpg" alt="R 1250 RS" width={800} />
                <h3 className={styles.name}>R 1250 RS</h3>
            </div>
            <div className={styles.bmws1000rr}>
                <img src="/bmws1000rr.jpg" alt="S 1000 RR" width={800} />
                <h3 className={styles.name}>S 1000 RR</h3>
            </div>
        </div>
    </>
    )
}