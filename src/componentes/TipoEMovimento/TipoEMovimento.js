import React, { useState } from 'react'
import styled from 'styled-components'


const ContainerTipoEMovimento = styled.div`
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

const TipoEMovimento = () => {

    return (
        <ContainerTipoEMovimento>
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
        </ContainerTipoEMovimento>
    )
}

export default TipoEMovimento
