import getConfig from "next/config";
import fetch from 'isomorphic-unfetch';
import { DefaultSeo } from "next-seo";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import '../styles/global.scss';

import SEO from "../next-seo.config";

const {publicRuntimeConfig} = getConfig();

MyApp.getInitialProps = async () => {
    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
    const navigation = await res.json();

    return {navigation}
}

export default function MyApp({Component, pageProps, navigation}) {
    return (
        <>
            <DefaultSeo { ...SEO } />

            <Header navigation={navigation}/>

            <main>
                <Component {...pageProps} />
            </main>

            <Footer/>
        </>
    )
}
