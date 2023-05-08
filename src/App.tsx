import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Movies } from './components';
import { useMovies } from './hooks';

// const URL = 'https://www.omdbapi.com/?apikey=73204d82&s=ave';

const useSearch = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }
    if (search === '') return setError('you can not search for nothing');
    if (search.match(/^d+$/)) return setError('you can not search for numbers');
    if (search.length < 3)
      return setError('you can not search for less than 3 characters');
    setError('');
  }, [search]);
  return { search, setSearch, error };
};

function App() {
  const { search, setSearch, error } = useSearch();
  const [sort, setSort] = useState(false);
  const { movies, getMovies, isLoading } = useMovies({ search, sort });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMovies({ search });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const actualQuery = e.target.value;
    if (actualQuery.startsWith(' ')) return;
    setSearch(e.target.value);
    getMovies({ search: actualQuery });
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
