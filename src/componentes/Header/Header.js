import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { ContextoPokemon } from '../../contexto/ContextoPokemon'
import styled from 'styled-components'

const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Header = () => {
    const dadosPokemons = useContext(ContextoPokemon)
    const nomePokemon = (dadosPokemons.nome).toLocaleUpperCase()
    const history = useHistory()

    const goToBack = () => {
        localStorage.removeItem("idPokemon")
        history.goBack()
    }
    return (
        <ContainerHeader>
            <button onClick={() => goToBack(history)}>voltar</button>
            <h3>{nomePokemon}</h3>
            <button>Adicionar/Remover da Pokedex</button>
        </ContainerHeader>
    )
}

export default Header