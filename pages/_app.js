
import "../style/_app.css"

export default function App({ Component, pageProps }) {
    return (
        <div>
           
           <header>header</header>

            <main>
                <Component {...pageProps} />
            </main>

            <footer>footer</ footer >
        </div>
    )
}
