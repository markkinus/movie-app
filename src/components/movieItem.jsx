import React from 'react'

function MovieItem({ movie, deleteMovie }) {
  return (
    <>
        <h2>{movie.title}</h2>
        <p>{movie.year}</p>
        <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </>
  )
}

export default MovieItem