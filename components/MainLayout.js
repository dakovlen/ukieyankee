import Head from 'next/head';
import Footer from "../components/footer/Footer";

export default function MainLayout({ children, title="Base Title" }) {
    return (
        <>
            <Head>
                <title>{title} | Page</title>
                <link rel="icon" href="/images/favicon.png"/>
            </Head>

            <main>
                { children }
            </main>

            <Footer/>
        </>
    )
}
