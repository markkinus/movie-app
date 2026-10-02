import React from 'react'

function movieItem({movie}) {
  return (
    <>
        <h2>{movie.title}</h2>
        <p>{movie.year}</p>
    </>
  )
}

export default movieItem