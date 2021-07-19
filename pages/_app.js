
import '../styles/global.scss';
import getConfig from "next/config";
import fetch from 'isomorphic-unfetch';
import Header from '../components/header/Header';
import MainLayout from '../components/MainLayout';

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async () => {
    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
    const navigation = await res.json();

    return { navigation }
}

export default function MyApp({ Component, pageProps, navigation }) {
  return (
    <MainLayout>
      <Header navigation={navigation}/>

      <Component {...pageProps} />
    </MainLayout>
  )
}
