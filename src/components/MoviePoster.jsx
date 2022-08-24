import React from 'react'
import { Link } from 'react-router-dom'
import "./MoviePoster.css"

const MoviePoster = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.name}`}>
      <figure className="movie-poster">
        <img src={movie.poster} alt={movie.name} />
        <h3>{movie.name}</h3>
      </figure>
    
    </Link>
  )
}

export default MoviePoster