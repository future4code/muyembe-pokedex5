import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../../componentes/Card/Card'
import { goToPokedex } from '../../rotas/Coordenadas'
import { Container, Header } from './HomeEstilizacao'
import axios from 'axios'

const Home = () => {
    const history = useHistory()

    return (
        <Container>
            <Header>
                <button onClick={() => goToPokedex(history)}>Ver minha Pokedex</button>
                <header>Lista de Pokemons</header>
                <div></div>
            </Header>
            <Card />
        </Container>
    )
}

export default Home