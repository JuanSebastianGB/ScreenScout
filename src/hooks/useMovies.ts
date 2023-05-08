import { useState } from 'react';
import { Movie } from '../models';
import { searchMovies } from '../services';

export function useMovies({ search }: { search: string }) {
  const [movies, setMovies] = useState<Movie[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getMovies = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const newMovies = await searchMovies({ search });
      return setMovies(newMovies);
    } catch (error: Error | unknown) {
      setError((error as Error)?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { movies, getMovies, isLoading, error };
}
