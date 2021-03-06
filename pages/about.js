import Link from "next/link";
import { useRouter } from "next/router";

export default function About({ content }) {
    return (
        <div className="container">
            <h2>{content.title}</h2>
            <div className="body">{content.body}</div>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const { locale } = context;
    const { API_URL } = process.env;
    let translation = undefined;

    const initialRes = await fetch(`${API_URL}/pages?_locale=en`);
    const initial = await initialRes.json();

    if (locale === "ru") {
        const translationRes = await fetch(
            `${API_URL}/pages?_locale=ru`
        );
        translation = await translationRes.json();
    }

    return {
        props: {
            content: translation ? translation[0] : initial[0],
        },
    };
};
