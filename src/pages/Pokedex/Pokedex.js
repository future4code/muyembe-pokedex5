import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../../rotas/Coordenadas'
import { Container, Header } from './PokedexEstilizacao'
import { ContextoPokemon } from '../../contexto/ContextoPokemon'
import fundo from '../../img/layoutFundo.jpg'
import {
    ContainerCard,
    DesignCard,
    ImgFundoCard,
    ImgPokemon,
    Buttons,
    BotaoAdd,
    BotaoDetalhes
} from '../../componentes/Card/CardEstilo'

const Pokedex = () => {
    const dadosPokemons = useContext(ContextoPokemon)
    const history = useHistory()

    const removePokemon = (removePokedex) => {
        const comparativo = () => {
            return removePokedex === dadosPokemons.imagemFrontal
        }
        const novaPokedex = dadosPokemons.meusPokemons.filter(comparativo)
        dadosPokemons.setMeusPokemons(novaPokedex)
    }

    const listaPokemon =
        dadosPokemons.meusPokemons.lenght === 0 ?
            "Adicione novos pokemons a sua pokedex" :
            dadosPokemons.meusPokemons.map((imagemPokemon) => {
                return (
                    <DesignCard>
                        <ImgFundoCard src={fundo} />
                        <ImgPokemon src={imagemPokemon} />
                        <Buttons>
                            <BotaoAdd onClick={() => removePokemon(imagemPokemon)}>Remover</BotaoAdd>
                            <BotaoDetalhes >Ver Detalhes</BotaoDetalhes>
                        </Buttons>
                    </DesignCard>
                )
            })


    return (
        <Container>
            <Header>
                <h3>Pokedex</h3>
                <button onClick={() => goToHome(history)}>Voltar para lista de Pokemons</button>
            </Header>
            <ContainerCard>
                {listaPokemon}
            </ContainerCard>

        </Container>
    )
}

export default Pokedex