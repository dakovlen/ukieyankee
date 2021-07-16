import MainLayout from "../components/MainLayout";
import fetch from "isomorphic-unfetch";
import Card from "../components/Card";

export default function Home({ movies }) {
  return (
    <div title={'Home Page'}>
      <div className="container movies-container">
        {movies.map(movie => (
          <Card key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  )
}


export async function getServerSideProps() {

  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  return {
    props: {
      movies: data
    }
  }
}
