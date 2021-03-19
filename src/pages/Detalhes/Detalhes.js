import React from 'react'
import { useHistory } from 'react-router-dom'
import Estatisticas from '../../componentes/Estatisticas/Estatisticas'
import TipoEMovimento from '../../componentes/TipoEMovimento/TipoEMovimento'
import { Container, ContainerCard, Header, ConstainerImagemPokemon, ImgPokemon} from './DetalhesEstilizacao'

const Detalhes = () => {
    const history = useHistory()
    const id = localStorage.getItem("idPokemon")
    
    const goToBack = () => {
        localStorage.removeItem("idPokemon")
        history.goBack()
    }

    const imagemFrente = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    const imagemTras = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
    return (
        <Container>
            <Header>
                <button onClick={() => goToBack(history)}>voltar</button>
                <h3>Bulbasaur</h3>
                <button>Adicionar/Remover da Pokedex</button>
            </Header>
            <ContainerCard>
                <ConstainerImagemPokemon>
                    <ImgPokemon src={imagemFrente} />
                    <ImgPokemon src={imagemTras} />
                </ConstainerImagemPokemon>
                <Estatisticas />
                <TipoEMovimento />
            </ContainerCard>
        </Container>
    )
}

export default Detalhes