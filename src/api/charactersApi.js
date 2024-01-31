import axios from "axios"
import { HASH, PUBLIC_KEY, TS } from "../const/api"

export const getCharacters = async () => {
  try {
    const response =  await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
    )
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export const getCharacterDetail = async (caracterId) => {
  try {
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters/${caracterId}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
    )
    return response.data.data
  } catch(e) {
    console.error(e)
  }
}