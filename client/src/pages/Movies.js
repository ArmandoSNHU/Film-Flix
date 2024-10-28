// Movies.js
import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import './Movies.css'; // Add your custom styles

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=5c9cf5475897da5d6dd7e5fe63f112c6&language=en-US&page=1`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const formattedMovies = data.results.map((movie) => ({
          title: movie.title,
          description: movie.overview,
          thumbnail: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        }));
        setMovies(formattedMovies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-container">
      <h2 className="movies-title">Popular Movies</h2>
      {error ? (
        <p className="error-message">Error: {error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Movies;
