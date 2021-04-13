import React, { useContext } from 'react'
import { ContextoPokemon } from '../../contexto/ContextoPokemon'
import { ContainerImagemPokemon, ImgPokemon } from './ImagensPokemonsEstilo'

const ImagensPokemons = () => {
    const dadosPokemons = useContext(ContextoPokemon)
    const imgFrontal = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dadosPokemons.id}.png`
    const imgTrazeira = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${dadosPokemons.id}.png`
    return (
        <ContainerImagemPokemon>
            <ImgPokemon src={imgFrontal} />
            <ImgPokemon src={imgTrazeira} />
        </ContainerImagemPokemon>
    )
}

export default ImagensPokemons