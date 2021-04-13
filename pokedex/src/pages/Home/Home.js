import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../../componentes/Card/Card'
import { goToPokedex } from '../../rotas/Coordenadas'
import { Container, Header, TamanhoImgPokebola } from './HomeEstilo'

const Home = () => {
    const history = useHistory()
    const estadoPokedex = () => {
        goToPokedex(history)
    }

    return (
        <Container>
            <Header>
                <div></div>
                <button onClick={estadoPokedex}>Ver minha Pokedex</button>
                <header>Lista de Pokemons</header>
                <span>
                <TamanhoImgPokebola class="emojidex-emoji" src="https://cdn.emojidex.com/emoji/seal/pokeball.png" emoji-code="pokeball" alt="pokeball" />
                </span>
            </Header>
            <Card />
        </Container>
    )
}

export default Home