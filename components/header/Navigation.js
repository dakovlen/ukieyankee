import Link from "next/link";
import {useRouter} from "next/router";

export default function Navigation({ navigation }) {
  const router = useRouter();

  return (
    <ul className="menu">
      {
        navigation.map(item =>(
          <li key={item.id}>
            <Link href={item.slug}>
              <a className={router.pathname === item.slug ? 'active' : ''}>{item.title}</a>
            </Link>
          </li>
        ))}
    </ul>
  )
}
