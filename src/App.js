import { useEffect } from 'react';

import MovieCard from './MovieCard';

import './App.css';

import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=18bb89c2';

const movie1 = {
    "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
    "Year": "2007",
    "imdbID": "tt1132238",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
} 

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

  return (
    <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input
                placeholder="Search for Movies"
                value="Superman"
                onChange={() => {}}
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => {}}
            />
        </div>

        <div className="container">
            <MovieCard movie={movie1} />
        </div>
    </div>
    
  );
};

export default App;