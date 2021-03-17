import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { goToDetalhes } from '../rotas/Coordenadas'

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

const Buttons = styled.button`
    display: flex;
    flex-direction: row;
`

const Card = () => {
    const history = useHistory()
    return(
        <DesignCard>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
            <Buttons>
            <button>Adicionar</button>
            <button onClick={() => goToDetalhes(history)}>Ver Detalhes</button>
            </Buttons>
        </DesignCard>
    )
}

export default Card