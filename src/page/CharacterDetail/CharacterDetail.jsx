import { useNavigate, useParams } from "react-router-dom"
import { getCharacterDetail } from "../../api/charactersApi"
import { useEffect, useState } from "react"

import './CharacterDetail.css'

export const CharacterDetail = () => {
  const [characterDetail, setCharacterDetail] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const params = useParams()
  const navigate = useNavigate()

  const fetchCharacterDetail = async () => {
    setIsLoading(true)
    try {
      const data = await getCharacterDetail(params.id)
      setCharacterDetail(data.results)
      setIsLoading(false)
    } catch(e) {
      console.error(e)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacterDetail()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {
        isLoading &&
        <p>Cargando info...</p>
      }
      {
        !isLoading &&
        <>
          <button className="button-back" onClick={() => navigate(-1)}>
            Back
          </button>
          <h1 className="character-name">
            {characterDetail[0]?.name}
          </h1>
          <img
            src={characterDetail[0]?.thumbnail.path.concat(`.${characterDetail[0].thumbnail.extension}`)}
            alt=""
            className="character-image"
          />
          <h3>Comics</h3>
          <ul>
            {
              characterDetail[0]?.comics.items.map((comic, index) => (
                <li key={index}>
                  {comic.name}
                </li>

              ))
            }
          </ul>
        </>
      }
    </div>
  )
}
