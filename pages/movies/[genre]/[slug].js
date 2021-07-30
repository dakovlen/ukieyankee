import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import {NextSeo} from "next-seo";

export default function Movie({ movie }) {
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

    const { locale } = context;
    const { API_URL } = process.env;
    let translation = undefined;

    const initialRes = await fetch(`${API_URL}/movies?_locale=en`);
    const initial = await initialRes.json();

    if (locale === "ru") {
        const translationRes = await fetch(`${API_URL}/movies?_locale=ru`);
        translation = await translationRes.json();
    }

    return {
        props: {
            movie: translation ? translation[0] : initial[0],
        },
    }
}

