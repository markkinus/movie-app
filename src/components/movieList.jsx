import movieItem from './movieItem'

function movieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <movieItem key={movie.id} movie={movie} />
      ))}
    </>
  )
}

export default movieList