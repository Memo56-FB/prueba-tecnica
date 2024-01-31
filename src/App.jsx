import { useState } from 'react';
import './App.css';
import { getCharacters } from './api/charactersApi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PacmanLoadr from './assets/pacmanLoader.svg'

function App() {
  const [characters,setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const fetchCharacters = async () => {
    setIsLoading(true)
    try {
      const data = await getCharacters()
      setCharacters(data.data.results)
      setIsLoading(false)

    } catch(e) {
      console.error(e)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <>
      {
        isLoading &&
        <img src={PacmanLoadr} alt="cargando" />
      }
      {
        !isLoading &&
        <div className='caracter-wrapper'>
          {characters.map(character => (
            <div key={character.id} className='caracter' onClick={() => navigate(`character/${character.id}`)}>
              <img
                src={character.thumbnail.path.concat(`.${character.thumbnail.extension}`)}  
                alt=""
                className='caracter-image'
              />
              <div className='caracter-info'>
                <p>
                  {character.name}
                </p>
                <p className='character-comics'>
                  Present in {character.comics.available} commics
                </p>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  )
}

export default App
