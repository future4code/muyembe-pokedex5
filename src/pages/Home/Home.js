import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../../componentes/Card/Card'
import { goToPokedex } from '../../rotas/Coordenadas'
import { Container, Header } from './HomeEstilo'

const Home = () => {
    const history = useHistory()

    const estadoPokedex = () => {
        localStorage.setItem("estouNaPokedex", true)
        goToPokedex(history)
    }

    return (
        <Container>
            <Header>
                <div></div>
                <button onClick={estadoPokedex}>Ver minha Pokedex</button>
                <header>Lista de Pokemons</header>
                <div></div>
            </Header>
            <Card />
        </Container>
    )
}

export default Home