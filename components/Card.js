import Link from "next/link";

export default function Card({movie}) {
  return (
   <div className="movies-box">
     <img src={movie.poster.name} alt=""/>
     <h3>{movie.title}</h3>

     <Link href="/">
     <a>More about movie</a>
     </Link>
   </div>
  )
}
