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
    const listaPokemon = ""


    const removePokemon = (removePokedex) => {
        console.log(removePokedex)
        // const indiceDoArrayPokedex = meusPokemons.indexOf(removePokedex)
        // function comparativo(pokemon) {
        //     return pokemon !== indiceDoArrayPokedex;
        // }
        // const novaPokedex = meusPokemons.filter(comparativo)
        // setMeusPokemons(novaPokedex)
    }

    if(dadosPokemons.meusPokemons){
        listaPokemon =
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
    }
    


    return (
        <Container>
            <Header>
                <h3>Pokedex</h3>
                <button onClick={() => goToHome(history)}>Voltar para lista de Pokemons</button>
            </Header>
            <ContainerCard>
                {listaPokemon && <p>sem Pokemons</p>}
            </ContainerCard>

        </Container>
    )
}

export default Pokedex