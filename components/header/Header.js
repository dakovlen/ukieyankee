import Navigation from "./Navigation";
import Link from "next/link"

export default function Header({ navigation }) {
    return(
      <header className="header">
        <div className="container header-content">
          <Link href="/">
              <a className="logo-link">LOGO</a>
            {/*<a><img src="https://res.cloudinary.com/detgwqdyd/image/upload/v1626712796/logo_bjoc78.png" alt="logo"/></a>*/}
          </Link>
          <Navigation navigation={navigation}/>
        </div>
      </header>
  )
}
