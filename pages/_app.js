import Header from '/Components/header'
import Footer from '/Components/footer'
import "/style/_app.css"

export default function App({ Component, pageProps }) {
    return (
        <div>
           
           <Header/>

            <main>
                <Component {...pageProps} />
            </main>

            <Footer/>
        </div>
    )
}
