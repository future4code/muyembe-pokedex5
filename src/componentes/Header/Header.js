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
    const { id, nome } = useContext(ContextoPokemon)
    const history = useHistory()

    const goToBack = () => {
        localStorage.removeItem("idPokemon")
        history.goBack()
    }

    const addRemovePokemon = () => {
        alert(id)
    }

    return (
        <ContainerHeader>
            <button onClick={() => goToBack(history)}>voltar</button>
            <h3>{nome.toLocaleUpperCase()}</h3>
            <button onClick={addRemovePokemon}>Adicionar/Remover da Pokedex</button>
        </ContainerHeader>
    )
}

export default Header