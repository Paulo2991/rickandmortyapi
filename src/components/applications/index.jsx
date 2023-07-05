import axios from 'axios';
import { useEffect, useState } from "react";

import { CardCharacter } from "../CardCharacter";

import { Container, Header } from "./styles";

export function Application() {

  const [characters, setCharacters] = useState([])

  const [page, setPage] = useState(1)

  const [countPages, setCountPages] = useState('')

  const [qtdCharacters, setQtdCharacters] = useState('')


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(response => {
      const array = [...characters, ...response.data.results]
      setCharacters(array)
      setCountPages(response.data.info.pages)
      setQtdCharacters(response.data.info.count)
    })
  }, [page])
  
  return (
    <>
      <Container>
        <Header>
          <h1>Ricky and Morty</h1>
          <span>Nº de Personagens: {qtdCharacters}</span>
        </Header>
      </Container>
      <Container>
        {
          characters && characters.map(({image, name, species, genre}) => {
            return (
              <CardCharacter
                    image = { image }
                    name = { name }
                    genre = { species }
                    specie = { genre }
              />
            )
         }) 
        }

      </Container>
      <div>
      {
        (!(page === countPages)) && <button onClick={() => setPage(page + 1)}>Carregar mais</button>
      }
      </div>
    </>

  )
}