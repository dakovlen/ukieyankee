import Navigation from "./Navigation";
import Link from "next/link"

export default function Header({ navigation }) {
    return(
      <header>
        <div className="container header-content">
          <Link href="/">
            <a>logo</a>
          </Link>
          <Navigation navigation={navigation}/>
        </div>
      </header>
  )
}
