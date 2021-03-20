import React from 'react'
import { ContainerImagemPokemon, ImgPokemon } from './ImagensPokemonsEstilo'

const ImagensPokemons = () => {
    const id = localStorage.getItem("idPokemon")
    const imgFrontal = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    const imgTrazeira = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
    return (
        <ContainerImagemPokemon>
            <ImgPokemon src={imgFrontal} />
            <ImgPokemon src={imgTrazeira} />
        </ContainerImagemPokemon>
    )
}

export default ImagensPokemons