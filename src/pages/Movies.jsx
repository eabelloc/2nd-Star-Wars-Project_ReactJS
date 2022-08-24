import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MoviePoster from '../components/MoviePoster';
import "./Movies.css"

const Movies = () => {
  const [moviesList, setMoviesList] = useState([])

  const getMovies = async () => {
    const rawData = await axios.get(
      "https://starwars-server.vercel.app/movies"
      );
      setMoviesList(rawData.data.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);
  
  return (
    <section className="movies">
      <h2>Movies</h2>
      <div className="gallery">
        {moviesList.length > 0 ? (
          moviesList.map((movie) => (
            <MoviePoster movie={movie} key={movie._id} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  )
}

export default Movies