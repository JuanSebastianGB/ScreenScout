import { Movie } from '../models';

function ListOfMovies({ movies }: { movies: Movie[] }) {
  return (
    <ul className="movies">
      {movies.map(({ id, image, title, year }) => (
        <li className="movie" key={id}>
          <h3>{title}</h3>
          <p>{year}</p>
          <img src={image} alt={title} />
        </li>
      ))}
    </ul>
  );
}

function NotMoviesResults() {
  return <p>Movies not found</p>;
}

export function Movies({ movies }: { movies: Movie[] | null }) {
  if (movies === null) return null;
  const hasMovies = movies.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NotMoviesResults />;
}
