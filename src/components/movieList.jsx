import React from 'react'
import MovieItem from './movieItem'

function MovieList({ movies, deleteMovie }) {
  return (
    <>
      {movies.map((movie) => (
        <MovieItem
         key={movie.id} 
         movie={movie} 
         deleteMovie={deleteMovie} 
         />
      ))}
    </>
  )
}

export default MovieList