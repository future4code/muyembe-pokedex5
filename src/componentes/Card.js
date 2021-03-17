import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { goToDetalhes } from '../rotas/Coordenadas'
import fundo from '../img/layoutFundo.jpg'

const DesignCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border: 2px solid black;
    border-radius: 5px;

    width: 200px;
    margin: 10px;
`

const ImgFundoCard = styled.img`
    position: relative;
    width: 200px;
`

const ImgPokemon = styled.img`
    z-index: 1;
    width: 200px;
    margin-top: -150px;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -50px;
`

const BotaoAdd = styled.button`
    z-index: 1;
    width: 100px;
    height: 30px;
`

const BotaoDetalhes = styled.button`
    z-index: 1;
    width: 100px;
    height: 30px;
`

const Card = () => {
    const history = useHistory()
    return (
        <DesignCard>
            <ImgFundoCard src={fundo} />
            <ImgPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
            <Buttons>
                <BotaoAdd>Adicionar</BotaoAdd>
                <BotaoDetalhes onClick={() => goToDetalhes(history)}>Ver Detalhes</BotaoDetalhes>
            </Buttons>
        </DesignCard>
    )
}

export default Card