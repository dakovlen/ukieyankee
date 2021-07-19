import Link from "next/link";

export default function Card({movie}) {

    if (!movie.genre) {
        movie.genre = {}
        movie.genre.slug = 'uncategorised'
    }

    return (
        <div className="movies-box">
            {movie.poster && (
                <img src={movie.poster.name} alt=""/>
            )}

            <h3>{movie.title}</h3>

            <Link href="/movies/[genre]/[slug]" as={`/movies/${movie.genre.slug}/${movie.slug}`}>
                <a>More about movie</a>
            </Link>
        </div>
    )
}
