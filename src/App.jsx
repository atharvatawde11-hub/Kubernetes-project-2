import { useState } from 'react';
import './App.css';

const movies = [
  { title: 'Stranger Things', category: 'SCI-FI SERIES', color: '#572b67', emoji: '👾' },
  { title: 'The Dark Knight', category: 'ACTION', color: '#263444', emoji: '🦇' },
  { title: 'Money Heist', category: 'CRIME SERIES', color: '#852d31', emoji: '🎭' },
  { title: 'Interstellar', category: 'SCI-FI MOVIE', color: '#29445c', emoji: '🚀' },
  { title: 'Wednesday', category: 'MYSTERY SERIES', color: '#393044', emoji: '🖤' },
  { title: 'The Witcher', category: 'FANTASY SERIES', color: '#6d492b', emoji: '⚔️' },
  { title: 'Extraction', category: 'ACTION MOVIE', color: '#874c31', emoji: '🔥' },
  { title: 'Our Planet', category: 'DOCUMENTARY', color: '#24604d', emoji: '🌍' },
];

function App() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#">CINE<span>STREAM</span></a>
        <nav>
          <a href="#home">Home</a>
          <a href="#shows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#mylist">My List</a>
        </nav>
        <input
          className="search"
          placeholder="Search titles..."
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">C I N E S T R E A M &nbsp; O R I G I N A L S S </p>
            <h1>YOUR NEXT<br />BINGE STARTS HERE.</h1>
            <p className="description">
              Discover unforgettable stories, legendary characters,
              and your next favourite adventure.
            </p>
            <div className="buttons">
              <button className="play" onClick={() => setSelected(movies[0])}>
                ▶ &nbsp; Explore Now
              </button>
              <a className="more" href="#movies">Browse Collection ↓</a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="planet">◉</div>
            <div className="hero-symbol">C</div>
          </div>
          <div className="hero-footer">YOUR WORLD OF ENTERTAINMENT</div>
        </section>

        <section className="catalog" id="movies">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HANDPICKED FOR YOU</p>
              <h2>{search ? 'Search Results' : 'Trending Now'} <span>↗</span></h2>
            </div>
            <span className="count">{filteredMovies.length} TITLES</span>
          </div>

          {filteredMovies.length ? (
            <div className="movie-grid">
              {filteredMovies.map((movie, index) => (
                <button
                  className="movie-card"
                  key={movie.title}
                  onClick={() => setSelected(movie)}
                >
                  <div className="poster" style={{ '--poster': movie.color }}>
                    <span className="poster-number">0{index + 1}</span>
                    <span className="poster-emoji">{movie.emoji}</span>
                    <span className="poster-title">{movie.title}</span>
                    <span className="poster-category">{movie.category}</span>
                    <span className="poster-play">▶</span>
                  </div>
                  <div className="card-caption">
                    <span>{movie.title}</span>
                    <span>↗</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="empty">No titles found. Try another search.</p>
          )}
        </section>

        <footer>
          <a className="logo" href="#">CINE<span>STREAM</span></a>
          <p>A student-built streaming UI concept.</p>
          <p>© 2026 CineStream · Built with React</p>
        </footer>
      </main>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={event => event.stopPropagation()}>
            <button className="close" onClick={() => setSelected(null)}>×</button>
            <span className="modal-emoji">{selected.emoji}</span>
            <p className="eyebrow">{selected.category}</p>
            <h2>{selected.title}</h2>
            <p>This is a frontend demonstration. Video playback is not connected yet.</p>
            <button className="play" onClick={() => setSelected(null)}>Got it</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
