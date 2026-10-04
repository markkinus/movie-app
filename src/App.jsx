import { useState} from 'react'
import MovieList from './components/MovieList'

function App() {
  const [movies, setmovies] = useState([
    {
      id: 1,
      title: "The Originals",
      year: 2000
    },
    {
      id: 2,
      title: "Vampire Diaries",
      year: 2020
    },
    {
      id: 3,
      title: "MOJO",
      year: 2008
    },
    {
      id: 4,
      title: "Intellestare",
      year: 1987
    },
    {
      id: 5,
      title: "The Lord of the Rings",
      year: 2003
    }
  ])

  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")

  function addMovie() {
    const newMovie = {
      id: movies.length + 1,
      title: title,
      year: year
    }
    setmovies([...movies, newMovie])

    setTitle("")
    setYear("")
  }

  function deleteMovie(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id)

    setmovies(updatedMovies)
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">Movie List</h1>

      <input
      type="text"
      placeholder="Movie Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className ="border border-gray-300 rounded-md p-2 mb-4"
      />
      <input
      type="number"
      placeholder="Release Year"
      value={year}
      onChange={(e) => setYear(e.target.value)}
      className ="border border-gray-300 rounded-md p-2 mb-4"
      />
      <button onClick={addMovie}className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Movie</button>
      <MovieList movies={movies} deleteMovie={deleteMovie} />
    </>
  )
}

export default App