import Link from "next/link";
import { useRouter } from "next/router";

function Page({ content }) {
    const router = useRouter();

    return (
        <div className="container">
            <h2>{content.title}</h2>
            <div className="body">{content.body}</div>

            <br />
            <br />

            <Link
                href={router.asPath}
                locale={router.locale === "en" ? "ru" : "en"}
            >
                <a>
                    {router.locale === "en"
                        ? "Prikaži hrvatski prijevod"
                        : "Show english translation"}
                </a>
            </Link>
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

export default Page;