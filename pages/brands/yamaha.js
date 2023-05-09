import styles from "/style/yamaha.module.css"

export default function () {
    return (<>
        <h1 className={styles.brand}>Yamaha </h1>
        <h2 className={styles.model}>Supersport</h2>
        <div className={styles.motos}>
            <div className={styles.yr1}>
                <img src="/yr1.jpg" alt="r1" width={550} />
                <h3 className={styles.name}>R1</h3>
            </div>
            <div className={styles.yr6gytr}>
                <img src="/yr6gytr.jpg" alt="R6 GYTR" width={550} />
                <h3 className={styles.name}>R6 GYTR</h3>
            </div>
        </div>

        <h2 className={styles.model}>Off Road Competition</h2>
        <div className={styles.motos}>
            <div className={styles.yyz450f}>
                <img src="/yyz450f.jpg" alt="YZ450F" width={550} />
                <h3 className={styles.name}>YZ450F</h3>
            </div>
            <div className={styles.yyz125}>
                <img src="/yyz125.jpg" alt="YZ125" width={550} />
                <h3 className={styles.name}>YZ125</h3>
            </div>
        </div>
    </>
    )
}