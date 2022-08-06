import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "b9a221486250d0601edc387fbf688741";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      // console.log(data);
      // console.log(results);
      setMovies(results);
    })();
  }, []);

  return (
    <>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.title}</h4>
        </div>
      ))}
    </>
  );
}
