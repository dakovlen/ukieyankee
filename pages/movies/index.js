import fetch from "isomorphic-unfetch";
import { useRouter } from 'next/router';

export async function getServerSideProps({ query: {page = 1} }) {
    const { API_URL } = process.env;
    const start = +page === 1 ? 0 : (+page - 1) * 3;
    const numberOfMoviesResponse = await fetch(`${API_URL}/movies/count`);
    const numberOfMovies = await numberOfMoviesResponse.json();


    const res = await fetch(`${API_URL}/movies?_limit=5&_start=${start}`);
    const data = await res.json()

    return {
        props: {
            movies:data,
            page: +page,
            numberOfMovies
        }
    }
}

export default function MoviesPage({  movies, page, numberOfMovies }) {
    const router = useRouter();
    const lastPage = Math.ceil(numberOfMovies / 3);


    return (
        <div className="container">
            <ul className="movies-list">
                {movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{ movie.title }</h3>
                    </li>
                ))}
            </ul>

            <div className="btn-box">
                <button
                    onClick={() => router.push(`/movies?page=${page - 1}`)}
                    disabled={page <=1}
                >
                    Prev
                </button>

                <button
                    onClick={() => router.push(`/movies?page=${page + 1}`)}
                    disabled={ page >= lastPage}
                >
                    Next
                </button>
            </div>
        </div>
    )
}