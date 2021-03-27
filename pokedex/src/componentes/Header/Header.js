import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { ContextoPokemon } from '../../contexto/ContextoPokemon'
import styled from 'styled-components'

const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 900px;
`
const Header = () => {
    const dadosPokemons = useContext(ContextoPokemon)
    const history = useHistory()

    const goToBack = () => {
        localStorage.removeItem("idPokemon")
        history.goBack()
    }

    const addRemovePokemon = () => {
        alert(dadosPokemons.id)
    }

    return (
        <ContainerHeader>
            <button onClick={() => goToBack(history)}>voltar</button>
            <h3>{dadosPokemons.nome}</h3>
            <button onClick={addRemovePokemon}>Adicionar/Remover da Pokedex</button>
        </ContainerHeader>
    )
}

export default Header