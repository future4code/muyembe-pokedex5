import React, { useContext } from 'react'
import { ContainerTipoEMovimento, Tipo, Movimentos } from './TipoEMovimentoEstilo'
import { ContextoPokemon } from '../../contexto/ContextoPokemon'

const TipoEMovimento = () => {

    const dadosPokemons = useContext(ContextoPokemon)

    return (
        <ContainerTipoEMovimento>
            <Tipo>
                <p>Tipo 1: {dadosPokemons.tipo1}  </p>
                <p>Tipo 2: {dadosPokemons.tipo2}</p>
            </Tipo>
            <Movimentos>
                <h3>Movimentos</h3>
                <p>{dadosPokemons.movimento1}</p>
                <p>{dadosPokemons.movimento2}</p>
                <p>{dadosPokemons.movimento3}</p>
            </Movimentos>
        </ContainerTipoEMovimento>
    )
}

export default TipoEMovimento
