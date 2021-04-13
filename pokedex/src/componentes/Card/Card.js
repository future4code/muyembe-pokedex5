import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToDetalhes } from '../../rotas/Coordenadas'
import fundo from '../../img/layoutFundo.jpg'
import { 
    ContainerCard, 
    DesignCard, 
    ImgFundoCard, 
    ImgPokemon, 
    Buttons, 
    BotaoAdd, 
    BotaoDetalhes 
} from './CardEstilo'
import { ContextoPokemon } from '../../contexto/ContextoPokemon'

function Card() {
  const dadosPokemons = useContext(ContextoPokemon)
  const [imgFrontal, setImgFrontal] = useState([])
  const history = useHistory()

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        res.data.results.map((pokemon) => {
          axios
            .get(pokemon.url)
            .then((res) => {
              const dadosPokemon = {
                id: res.data.id,
                imagem: res.data.sprites.front_default
              }
              setImgFrontal(imgFrontal => [...imgFrontal, dadosPokemon])
            })
            .catch((err) => {
              console.log(err.response)
            })
        })
      })
      .catch((err) => {
        console.log(err.response)
      })
    const semRepeticao = [...new Set(imgFrontal)];
    setImgFrontal(semRepeticao)
  }, [])

  const pegaId = (numeroId) => {
    dadosPokemons.setId(numeroId)
    goToDetalhes(history)
  }

  const addPokemon = (numeroId) => {
    alert(numeroId)
    dadosPokemons.setMeusPokemons([...dadosPokemons.meusPokemons, numeroId])
  }

  return (
    <ContainerCard>
      {imgFrontal.map((imagemPokemon) => {

        return (
          <DesignCard>
            <ImgFundoCard src={fundo} />
            <ImgPokemon src={imagemPokemon.imagem} />
            <Buttons>
              <BotaoAdd onClick={() => addPokemon(imagemPokemon.id)}>Adicionar</BotaoAdd>
              <BotaoDetalhes onClick={() => pegaId(imagemPokemon.id)}>Ver Detalhes</BotaoDetalhes>
            </Buttons>
          </DesignCard>
        )
      })
      }
    </ContainerCard>
  )
}

export default Card
