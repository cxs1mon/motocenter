import Header from '/Components/header'
import "/style/_app.css"

export default function App({ Component, pageProps }) {
    return (
        <div>
           
           <Header/>

            <main>
                <Component {...pageProps} />
            </main>

            <footer>footer</ footer >
        </div>
    )
}
