import {NextSeo} from "next-seo";

export default function About() {
    const SEO = {
        title: "About Page",
        description: "Description About Page"
    }

  return(
    <div>
        <NextSeo {...SEO} />
      About
    </div>
  )
}
