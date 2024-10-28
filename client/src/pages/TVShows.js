// TVShows.js
import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import './TVShows.css'; // Add your custom styles

const TVShows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=5c9cf5475897da5d6dd7e5fe63f112c6&language=en-US&page=1`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const formattedShows = data.results.map((show) => ({
          title: show.name,
          description: show.overview,
          thumbnail: `https://image.tmdb.org/t/p/w500/${show.poster_path}`
        }));
        setShows(formattedShows);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching shows:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="tvshows-container">
      <h2 className="tvshows-title">Popular TV Shows</h2>
      {error ? (
        <p className="error-message">Error: {error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <MovieList movies={shows} />
      )}
    </div>
  );
};

export default TVShows;
