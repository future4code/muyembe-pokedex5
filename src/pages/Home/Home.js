import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../../componentes/Card'
import { goToPokedex } from '../../rotas/Coordenadas'
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

const Home = () => {
    const history = useHistory()
    return(
        <Container>
            <Header>
                <button onClick={() => goToPokedex(history)}>Ver minha Pokedex</button>
                <header>Lista de Pokemons</header>                
                <div></div>
            </Header>
            <ContainerCard>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ContainerCard>
        </Container>
    )
}

export default Home