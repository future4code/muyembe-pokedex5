import React, { useContext } from 'react'
import { ContainerEstatisticas } from './EstatisticasEstilo'
import { ContextoPokemon } from '../../contexto/ContextoPokemon'

const Estatisticas = () => {
    const dadosPokemons = useContext(ContextoPokemon)
    return (
        <ContainerEstatisticas>
            <h3>Estatisticas</h3>
            <p>HP: {dadosPokemons.hp}</p>
            <p>Ataque: {dadosPokemons.ataque}</p>
            <p>Defesa: {dadosPokemons.defesa}</p>
            <p>Ataque-Especial: {dadosPokemons.ataqueEspecial}</p>
            <p>Defesa-Especial: {dadosPokemons.defesaEspecial}</p>
            <p>Velocidade: {dadosPokemons.velocidade}</p>
        </ContainerEstatisticas>
    )
}

export default Estatisticas
