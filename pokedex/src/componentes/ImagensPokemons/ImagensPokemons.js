import React, { useContext } from 'react'
import { ContextoPokemon } from '../../contexto/ContextoPokemon'
import { ContainerImagemPokemon, ImgPokemon } from './ImagensPokemonsEstilo'

const ImagensPokemons = () => {
    const dadosPokemons = useContext(ContextoPokemon)
    return (
        <ContainerImagemPokemon>
            <ImgPokemon src={dadosPokemons.imagemFrontal} />
            <ImgPokemon src={dadosPokemons.imagemTrazeira} />
        </ContainerImagemPokemon>
    )
}

export default ImagensPokemons