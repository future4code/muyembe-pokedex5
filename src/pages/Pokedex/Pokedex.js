import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../../componentes/Card/Card'
import { goToHome } from '../../rotas/Coordenadas'
import { Container, Header} from './PokedexEstilizacao'

const Pokedex = () => {
    const history = useHistory()
    return (
        <Container>
            <Header>
                <h3>Pokedex</h3>
                <button onClick={() => goToHome(history)}>Voltar para lista de Pokemons</button>
            </Header>
            <Card />
        </Container>
    )
}

export default Pokedex