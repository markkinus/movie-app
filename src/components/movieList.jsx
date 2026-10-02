import React from 'react'

function movieList({ movies, deleteMovie }) {
  return (
    <>
      {movies.map((movie) => (
        <movieItem key={movie.id} movie={movie} onDelete={deleteMovie} />
      ))}
    </>
  )
}

export default movieList