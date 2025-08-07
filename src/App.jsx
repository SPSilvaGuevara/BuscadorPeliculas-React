import './App.css'
import { Movies } from './components/movies'
import responseMovies from './mocks/with-result.json'

function App() {
  const movies = responseMovies.Search;

  return (
    <div className='page'>
      
      <header>
        <h2>Buscador de Peliculas</h2>
        <form className='form'>
          <input type="text" placeholder='Buscar Peliculas' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
