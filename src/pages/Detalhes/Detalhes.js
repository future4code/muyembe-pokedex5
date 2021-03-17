import React from 'react'
import { useHistory } from 'react-router-dom'

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
`
const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ConstainerImagemPokemon = styled.div`
    display: flex;
    flex-direction: column;
`
const ImgPokemon = styled.img`
    border: 1px solid black;
    margin: 10px;
    padding: 20px;
    width: 150px;
`

const Estatisticas = styled.div`
    border: 1px solid black;
    margin: 5px;
    padding: 10px;
    height: 380px;
`

const TipoEMovimento = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px 10px;
`
const Tipo = styled.div`
    display: flex;
    border: 1px solid black;
    margin: 10px 0;
    padding:20px;
    height: 55px;
`

const Movimentos = styled.div`
    border: 1px solid black;
    padding:50px;
    margin-top: 10px;
    width: 143px;
    height: 180px;
`


const Detalhes = () => {
    const history = useHistory()
    const goToBack = () => {
        history.goBack()
    }
    return (
        <Container>
            <Header>
                <button onClick={() => goToBack(history)}>voltar</button>
                <h3>Bulbasaur</h3>
                <button>Adicionar/Remover da Pokedex</button>
            </Header>
            <ContainerCard>
                <ConstainerImagemPokemon>
                    <ImgPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
                    <ImgPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" />
                </ConstainerImagemPokemon>
                <Estatisticas>
                    <h3>Estatísticas</h3>
                    <p>HP: 46</p>
                    <p>Ataque: 39</p>
                    <p>Defesa: 52</p>
                    <p>Ataque-Especial: 43</p>
                    <p>Defesa-Especial: 54</p>
                    <p>Velocidade: 54</p>
                </Estatisticas>
                <TipoEMovimento>
                    <Tipo>
                        <p>Tipo 1: Grama  </p>
                        <p>|  Tipo 2: Poção</p>
                    </Tipo>
                    <Movimentos>
                        <h3>Movimentos</h3>
                        <p>Agarrar</p>
                        <p>Cipo</p>
                        <p>Poeira Solar</p>
                    </Movimentos>
                </TipoEMovimento>
            </ContainerCard>
        </Container>
    )
}

export default Detalhes