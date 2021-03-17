import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../../componentes/Card'
import { goToHome } from '../../rotas/Coordenadas'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   background-color:#E6E6E6;
`

const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 900px;
`
const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Pokedex = () => {
    const history = useHistory()
    return (
        <Container>
            <Header>
                <h3>Pokedex</h3>
                <button onClick={() => goToHome(history)}>Voltar para lista de Pokemons</button>
            </Header>
            <ContainerCard>
                <Card />
                <Card />
                <Card />
            </ContainerCard>
        </Container>
    )
}

export default Pokedex