// Home.js
import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=5c9cf5475897da5d6dd7e5fe63f112c6`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message); // Set the error state if there's an issue
      }
    };

    fetchMovies();
  }, []);

  // Safely transform the movie data into a format that MovieList expects
  const transformedMovies = movies.map((movie) => ({
    title: movie.title,
    description: movie.overview,
    thumbnail: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`, // TMDb image URL pattern
  }));

  return (
    <div className="home-container">
      {/* Remove this h1 header if FILM-FLIX is globally displayed */}
      <h2 className="home-subtitle">Popular Movies</h2>
      {error ? ( // Conditionally render error message if there is an error
        <p className="error-message">Error: {error}</p>
      ) : (
        <MovieList movies={transformedMovies} />
      )}
    </div>
  );
};

export default Home;
