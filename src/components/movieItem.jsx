import React from 'react'

function MovieItem({ movie, deleteMovie }) {
  return (
    <>
        <h2 className ="text-2xl font-bold">{movie.title}</h2>
        <p className="text-gray-600">{movie.year}</p>
        <button onClick={() => deleteMovie(movie.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
    </>
  )
}

export default MovieItem