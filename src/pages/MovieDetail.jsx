import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "./MovieDetail.css";

const MovieDetail = () => {
  const { name } = useParams();
  const [movie, setMovie] = useState(undefined)
  
  const getMovie = async () => {
    const rawData = await axios.get(
      `https://starwars-server.vercel.app/movies/${name}`
    );
    setMovie(rawData.data.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);
  
  return (
    <figure className="movie-figure">
        {movie != undefined ? (
          <>
            <h2>{movie.number} - {movie.name}</h2>
            <img src={movie.poster} alt={movie.name} referrerpolicy="no-referrer" />
            <h3>{movie.year}</h3>
            <p><strong>Argument:</strong> {movie.crawl}</p>
          </>
        ) : (
            <p>Loading...</p>
        )}        
    </figure>
  );
};

export default MovieDetail