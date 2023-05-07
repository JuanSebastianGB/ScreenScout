import './App.css';

const URL = 'https://www.omdbapi.com/?apikey=73204d82&s=ave';
function App() {
  return (
    <div className="page">
      <header>
        <h1>Screen Scout</h1>
        <form className="form">
          <input type="text" placeholder="Avatar, Star Wars, Avengers ..." />
          <button>Search</button>
        </form>
      </header>
      <main>Results</main>
    </div>
  );
}

export default App;
