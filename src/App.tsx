import debounce from 'just-debounce-it';
import { useCallback, useState } from 'react';
import './App.css';
import { Movies } from './components';
import { useMovies, useSearch } from './hooks';

function App() {
  const { search, setSearch, error } = useSearch();
  const [sort, setSort] = useState(false);
  const { movies, getMovies, isLoading } = useMovies({ search, sort });
  const debouncedGetMovies = useCallback(
    debounce((search: string) => getMovies({ search }), 500),
    [getMovies]
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMovies({ search });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const actualQuery = e.target.value;
    if (actualQuery.startsWith(' ')) return;
    setSearch(e.target.value);
    debouncedGetMovies(actualQuery);
  };
  const handleSort = () => setSort((prev) => !prev);

  return (
    <div className="page">
      <header>
        <h1>Screen Scout</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            placeholder="Avatar, Star Wars, Avengers ..."
            onChange={handleChange}
            value={search}
          />
          {!!error && <p className="error">{error}</p>}
          <input type="checkbox" checked={sort} onChange={handleSort} />
          <button>Search</button>
        </form>
      </header>
      <main>{isLoading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
