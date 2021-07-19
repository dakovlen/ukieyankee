import Link from "next/link";
import {useRouter} from "next/router";

export default function Card({movie}) {
  return (
   <div className="movies-box">
     <img src={movie.poster.name} alt=""/>
     <h3>{movie.title}</h3>

     <Link href="/movies/[genre]/[slug]" as={`/movies/${movie.genre.slug}/${movie.slug}`}>
        <a>More about movie</a>
     </Link>
   </div>
  )
}
