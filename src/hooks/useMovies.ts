import { useCallback, useMemo, useRef, useState } from 'react';
import { Movie } from '../models';
import { searchMovies } from '../services';

export function useMovies({ search, sort }: { search: string; sort: boolean }) {
  const [movies, setMovies] = useState<Movie[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const prevSearch = useRef(search);

  const getMovies = useCallback(async ({ search }: { search: string }) => {
    try {
      if (prevSearch.current === search) return;
      setIsLoading(true);
      setError(null);
      prevSearch.current = search;
      const newMovies = await searchMovies({ search });
      return setMovies(newMovies);
    } catch (error: Error | unknown) {
      setError((error as Error)?.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort && movies
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, isLoading, error };
}
