import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

function Movie({ movie }) {

    return (
        <div>
            <div>{ movie.title }</div>
            <div>
                <p>{ movie.description }</p>
            </div>
        </div>
    )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {
    const { slug } = context.query
    const res = await fetch(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`)
    const data = await res.json()
    return {
        props: {
            movie: data[0]
        },
    }
}

export default Movie
