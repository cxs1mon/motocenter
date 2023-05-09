// pages/about.js
import styles from "../style/about.module.css"
import Head from "next/head"

const message = "I am a string!"

const someFunction = () => {
    return "I am also a string!"
}


export default function AboutPage() {
    console.log(styles)
    return (
        <>
        <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        
        </Head>


        <div className={styles.about}>
            <h1>About page!</h1>

            <div className={styles.container}>
                <h2>JSX</h2>

                <div className={styles.content}>
                    <p>
                        It is called JSX, and it is a syntax extension to JavaScript.
                        We recommend using it with React to describe what them UI should look like.
                        JSX may remind you of a template language,
                        but it comes with the full power of JavaScript.
                    </p>
                </div>
            </div>
            <div>{5 + 5}</div>
            <div>{message}</div>
            <div>{someFunction()}</div>

        </div></>
    )
}
