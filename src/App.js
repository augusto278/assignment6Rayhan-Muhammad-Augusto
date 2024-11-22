import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Spider-Man");

  const fetchMovies = async (searchQuery) => {
    const API_KEY = "a65860e9";
    const URL = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  return (
    <div>
      <Header title="tontonBagus.com" />
      <div className="search-bar">
        <Search setQuery={setQuery} />
      </div>
      <h2 style={{ textAlign: "center" }}>Show your favorite movies</h2>
      <div className="movies-container">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
