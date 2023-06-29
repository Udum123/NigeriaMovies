import { useState, useEffect, } from "react";

import MovieCard  from "./MovieCard";

import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = 'https://omdbapi.com?apikey=79984ab1';

const App = () => {
        
    const [movies, setMovies] = useState([]);

    const [searchTerm, setsearchTerm] = useState('');

    const searchMovies = async(title) => {
   
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    setMovies(data.Search);
    }
    useEffect(() => {
      searchMovies('Spiderman');  
    },[]);
    return(
        <div className="app">
            <h1> Movies Land</h1>
            <div className="search">
                <input 
                    placeholder="search for our movies"
                    value={searchTerm}
                    onChange={(e) =>setsearchTerm(e.target.value)}
                />
                 <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) :(
                    <div className="empty">
                        <h2> No found movies found </h2>
                    </div>
                )
            }
            
        </div>
    ); 
}
export default App;