import Navigation from "./Navigation";
import Link from "next/link"
import {useRouter} from "next/router";

export default function Header({ navigation }) {
    const router = useRouter();

    return(
      <header className="header">
        <div className="container header-content ">
          <Link href="/">
              <a className="logo-link">LOGO</a>
            {/*<a><img src="https://res.cloudinary.com/detgwqdyd/image/upload/v1626712796/logo_bjoc78.png" alt="logo"/></a>*/}
          </Link>
          <Navigation navigation={navigation}/>

            <Link
                href={router.asPath}
                locale={router.locale === "en" ? "ru" : "en"}
            >
                <a className="lang-link">
                    {router.locale === "en"
                        ? "Ru"
                        : "En"}
                </a>
            </Link>
        </div>
      </header>
  )
}
