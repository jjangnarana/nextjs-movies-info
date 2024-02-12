import Link from "next/link";
import { resolve } from "path";
import Moive from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("im fetching");
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
};
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Moive
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        ></Moive>
      ))}
    </div>
  );
}
