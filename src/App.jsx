import { useState} from 'react'
import MovieList from './components/movieList'

function App() {
  const [movies, setmovies] = useState([
    {
      id: 1,
      title: "The Originals",
      year: 1994
    },
    {
      id: 2,
      title: "The Godfather",
      year: 1972
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008
    },
    {
      id: 4,
      title: "Pulp Fiction",
      year: 1994
    },
    {
      id: 5,
      title: "The Lord of the Rings: The Return of the King",
      year: 2003
    }
  ])
  return (
    <>
      <h1>Movie List</h1>
      <movieList movies={movies} />
      </>
  )
}

export default App