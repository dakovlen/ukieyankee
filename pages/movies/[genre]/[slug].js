import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import {NextSeo} from "next-seo";

function Movie({ movie }) {
    const SEO = {
        title: `Ukieyankee.org | ${movie.title}`,
        description: movie.description
    }

    return (
        <div className="container">
            <NextSeo {...SEO} />

            <h3>{ movie.title }</h3>
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
