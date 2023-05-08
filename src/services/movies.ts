import { MovieApiResponse } from '../models';

const API_KEY = '73204d82';

export const searchMovies = async ({ search }: { search: string }) => {
  if (search === '') return null;
  try {
    const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;
    const response = await fetch(URL);
    const json = await response.json();
    const movies: MovieApiResponse[] = json?.Search;
    return movies?.map((movie) => ({
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
      id: movie.imdbID,
    }));
  } catch (error) {
    throw new Error('Error fetching movies');
  }
};
